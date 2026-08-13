package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/utility/struct"
)

type IpGeolocationApi4SDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewIpGeolocationApi4SDK(options map[string]any) *IpGeolocationApi4SDK {
	sdk := &IpGeolocationApi4SDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *IpGeolocationApi4SDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *IpGeolocationApi4SDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *IpGeolocationApi4SDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *IpGeolocationApi4SDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *IpGeolocationApi4SDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *IpGeolocationApi4SDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *IpGeolocationApi4SDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("IpGeolocationApi4SDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *IpGeolocationApi4SDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *IpGeolocationApi4SDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("IpGeolocationApi4SDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Advanced returns a Advanced entity bound to this client.
// Idiomatic usage: client.Advanced(nil).List(nil, nil) or
// client.Advanced(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Advanced(data map[string]any) IpGeolocationApi4Entity {
	return NewAdvancedEntityFunc(sdk, data)
}


// ApiUsageStatsModel returns a ApiUsageStatsModel entity bound to this client.
// Idiomatic usage: client.ApiUsageStatsModel(nil).List(nil, nil) or
// client.ApiUsageStatsModel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) ApiUsageStatsModel(data map[string]any) IpGeolocationApi4Entity {
	return NewApiUsageStatsModelEntityFunc(sdk, data)
}


// ApiUsageSummary returns a ApiUsageSummary entity bound to this client.
// Idiomatic usage: client.ApiUsageSummary(nil).List(nil, nil) or
// client.ApiUsageSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) ApiUsageSummary(data map[string]any) IpGeolocationApi4Entity {
	return NewApiUsageSummaryEntityFunc(sdk, data)
}


// Asn returns a Asn entity bound to this client.
// Idiomatic usage: client.Asn(nil).List(nil, nil) or
// client.Asn(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Asn(data map[string]any) IpGeolocationApi4Entity {
	return NewAsnEntityFunc(sdk, data)
}


// Batch returns a Batch entity bound to this client.
// Idiomatic usage: client.Batch(nil).List(nil, nil) or
// client.Batch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Batch(data map[string]any) IpGeolocationApi4Entity {
	return NewBatchEntityFunc(sdk, data)
}


// BatchEmailValidationResponseDto returns a BatchEmailValidationResponseDto entity bound to this client.
// Idiomatic usage: client.BatchEmailValidationResponseDto(nil).List(nil, nil) or
// client.BatchEmailValidationResponseDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) BatchEmailValidationResponseDto(data map[string]any) IpGeolocationApi4Entity {
	return NewBatchEmailValidationResponseDtoEntityFunc(sdk, data)
}


// CacheManagement returns a CacheManagement entity bound to this client.
// Idiomatic usage: client.CacheManagement(nil).List(nil, nil) or
// client.CacheManagement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) CacheManagement(data map[string]any) IpGeolocationApi4Entity {
	return NewCacheManagementEntityFunc(sdk, data)
}


// DomainAnalysi returns a DomainAnalysi entity bound to this client.
// Idiomatic usage: client.DomainAnalysi(nil).List(nil, nil) or
// client.DomainAnalysi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) DomainAnalysi(data map[string]any) IpGeolocationApi4Entity {
	return NewDomainAnalysiEntityFunc(sdk, data)
}


// DomainReputationV1Dto returns a DomainReputationV1Dto entity bound to this client.
// Idiomatic usage: client.DomainReputationV1Dto(nil).List(nil, nil) or
// client.DomainReputationV1Dto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) DomainReputationV1Dto(data map[string]any) IpGeolocationApi4Entity {
	return NewDomainReputationV1DtoEntityFunc(sdk, data)
}


// Email returns a Email entity bound to this client.
// Idiomatic usage: client.Email(nil).List(nil, nil) or
// client.Email(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Email(data map[string]any) IpGeolocationApi4Entity {
	return NewEmailEntityFunc(sdk, data)
}


// Forward returns a Forward entity bound to this client.
// Idiomatic usage: client.Forward(nil).List(nil, nil) or
// client.Forward(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Forward(data map[string]any) IpGeolocationApi4Entity {
	return NewForwardEntityFunc(sdk, data)
}


// IpInfoV0 returns a IpInfoV0 entity bound to this client.
// Idiomatic usage: client.IpInfoV0(nil).List(nil, nil) or
// client.IpInfoV0(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) IpInfoV0(data map[string]any) IpGeolocationApi4Entity {
	return NewIpInfoV0EntityFunc(sdk, data)
}


// IpReputation returns a IpReputation entity bound to this client.
// Idiomatic usage: client.IpReputation(nil).List(nil, nil) or
// client.IpReputation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) IpReputation(data map[string]any) IpGeolocationApi4Entity {
	return NewIpReputationEntityFunc(sdk, data)
}


// Ipn returns a Ipn entity bound to this client.
// Idiomatic usage: client.Ipn(nil).List(nil, nil) or
// client.Ipn(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Ipn(data map[string]any) IpGeolocationApi4Entity {
	return NewIpnEntityFunc(sdk, data)
}


// Mxn returns a Mxn entity bound to this client.
// Idiomatic usage: client.Mxn(nil).List(nil, nil) or
// client.Mxn(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Mxn(data map[string]any) IpGeolocationApi4Entity {
	return NewMxnEntityFunc(sdk, data)
}


// PaddleController returns a PaddleController entity bound to this client.
// Idiomatic usage: client.PaddleController(nil).List(nil, nil) or
// client.PaddleController(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) PaddleController(data map[string]any) IpGeolocationApi4Entity {
	return NewPaddleControllerEntityFunc(sdk, data)
}


// RateLimitInfoDto returns a RateLimitInfoDto entity bound to this client.
// Idiomatic usage: client.RateLimitInfoDto(nil).List(nil, nil) or
// client.RateLimitInfoDto(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) RateLimitInfoDto(data map[string]any) IpGeolocationApi4Entity {
	return NewRateLimitInfoDtoEntityFunc(sdk, data)
}


// Reverse returns a Reverse entity bound to this client.
// Idiomatic usage: client.Reverse(nil).List(nil, nil) or
// client.Reverse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Reverse(data map[string]any) IpGeolocationApi4Entity {
	return NewReverseEntityFunc(sdk, data)
}


// RiskScore returns a RiskScore entity bound to this client.
// Idiomatic usage: client.RiskScore(nil).List(nil, nil) or
// client.RiskScore(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) RiskScore(data map[string]any) IpGeolocationApi4Entity {
	return NewRiskScoreEntityFunc(sdk, data)
}


// Status returns a Status entity bound to this client.
// Idiomatic usage: client.Status(nil).List(nil, nil) or
// client.Status(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Status(data map[string]any) IpGeolocationApi4Entity {
	return NewStatusEntityFunc(sdk, data)
}


// Tor returns a Tor entity bound to this client.
// Idiomatic usage: client.Tor(nil).List(nil, nil) or
// client.Tor(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Tor(data map[string]any) IpGeolocationApi4Entity {
	return NewTorEntityFunc(sdk, data)
}


// UsageStatistic returns a UsageStatistic entity bound to this client.
// Idiomatic usage: client.UsageStatistic(nil).List(nil, nil) or
// client.UsageStatistic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) UsageStatistic(data map[string]any) IpGeolocationApi4Entity {
	return NewUsageStatisticEntityFunc(sdk, data)
}


// Whoi returns a Whoi entity bound to this client.
// Idiomatic usage: client.Whoi(nil).List(nil, nil) or
// client.Whoi(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IpGeolocationApi4SDK) Whoi(data map[string]any) IpGeolocationApi4Entity {
	return NewWhoiEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *IpGeolocationApi4SDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewIpGeolocationApi4SDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
