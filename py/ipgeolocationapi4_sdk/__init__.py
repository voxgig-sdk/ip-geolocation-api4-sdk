# IpGeolocationApi4 SDK

from ipgeolocationapi4_sdk.utility.voxgig_struct import voxgig_struct as vs
from ipgeolocationapi4_sdk.core.utility_type import IpGeolocationApi4Utility
from ipgeolocationapi4_sdk.core.spec import IpGeolocationApi4Spec
from ipgeolocationapi4_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from ipgeolocationapi4_sdk.utility import register

# Load features
from ipgeolocationapi4_sdk.feature.base_feature import IpGeolocationApi4BaseFeature
from ipgeolocationapi4_sdk.features import _has_feature, _make_feature


class IpGeolocationApi4SDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = IpGeolocationApi4Utility()
        self._utility = utility

        from ipgeolocationapi4_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return IpGeolocationApi4Utility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = IpGeolocationApi4Spec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "IpGeolocationApi4SDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("IpGeolocationApi4SDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Advanced(self, data=None) -> "AdvancedEntity":
        """Entity factory: client.Advanced().list() / client.Advanced().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.advanced_entity import AdvancedEntity
        return AdvancedEntity(self, data)


    def ApiUsageStatsModel(self, data=None) -> "ApiUsageStatsModelEntity":
        """Entity factory: client.ApiUsageStatsModel().list() / client.ApiUsageStatsModel().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.api_usage_stats_model_entity import ApiUsageStatsModelEntity
        return ApiUsageStatsModelEntity(self, data)


    def ApiUsageSummary(self, data=None) -> "ApiUsageSummaryEntity":
        """Entity factory: client.ApiUsageSummary().list() / client.ApiUsageSummary().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.api_usage_summary_entity import ApiUsageSummaryEntity
        return ApiUsageSummaryEntity(self, data)


    def Asn(self, data=None) -> "AsnEntity":
        """Entity factory: client.Asn().list() / client.Asn().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.asn_entity import AsnEntity
        return AsnEntity(self, data)


    def Batch(self, data=None) -> "BatchEntity":
        """Entity factory: client.Batch().list() / client.Batch().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.batch_entity import BatchEntity
        return BatchEntity(self, data)


    def BatchEmailValidationResponseDto(self, data=None) -> "BatchEmailValidationResponseDtoEntity":
        """Entity factory: client.BatchEmailValidationResponseDto().list() / client.BatchEmailValidationResponseDto().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.batch_email_validation_response_dto_entity import BatchEmailValidationResponseDtoEntity
        return BatchEmailValidationResponseDtoEntity(self, data)


    def CacheManagement(self, data=None) -> "CacheManagementEntity":
        """Entity factory: client.CacheManagement().list() / client.CacheManagement().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.cache_management_entity import CacheManagementEntity
        return CacheManagementEntity(self, data)


    def DomainAnalysi(self, data=None) -> "DomainAnalysiEntity":
        """Entity factory: client.DomainAnalysi().list() / client.DomainAnalysi().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.domain_analysi_entity import DomainAnalysiEntity
        return DomainAnalysiEntity(self, data)


    def DomainReputationV1Dto(self, data=None) -> "DomainReputationV1DtoEntity":
        """Entity factory: client.DomainReputationV1Dto().list() / client.DomainReputationV1Dto().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.domain_reputation_v1_dto_entity import DomainReputationV1DtoEntity
        return DomainReputationV1DtoEntity(self, data)


    def Email(self, data=None) -> "EmailEntity":
        """Entity factory: client.Email().list() / client.Email().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.email_entity import EmailEntity
        return EmailEntity(self, data)


    def Forward(self, data=None) -> "ForwardEntity":
        """Entity factory: client.Forward().list() / client.Forward().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.forward_entity import ForwardEntity
        return ForwardEntity(self, data)


    def IpInfoV0(self, data=None) -> "IpInfoV0Entity":
        """Entity factory: client.IpInfoV0().list() / client.IpInfoV0().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.ip_info_v0_entity import IpInfoV0Entity
        return IpInfoV0Entity(self, data)


    def IpReputation(self, data=None) -> "IpReputationEntity":
        """Entity factory: client.IpReputation().list() / client.IpReputation().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.ip_reputation_entity import IpReputationEntity
        return IpReputationEntity(self, data)


    def Ipn(self, data=None) -> "IpnEntity":
        """Entity factory: client.Ipn().list() / client.Ipn().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.ipn_entity import IpnEntity
        return IpnEntity(self, data)


    def Mxn(self, data=None) -> "MxnEntity":
        """Entity factory: client.Mxn().list() / client.Mxn().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.mxn_entity import MxnEntity
        return MxnEntity(self, data)


    def PaddleController(self, data=None) -> "PaddleControllerEntity":
        """Entity factory: client.PaddleController().list() / client.PaddleController().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.paddle_controller_entity import PaddleControllerEntity
        return PaddleControllerEntity(self, data)


    def RateLimitInfoDto(self, data=None) -> "RateLimitInfoDtoEntity":
        """Entity factory: client.RateLimitInfoDto().list() / client.RateLimitInfoDto().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.rate_limit_info_dto_entity import RateLimitInfoDtoEntity
        return RateLimitInfoDtoEntity(self, data)


    def Reverse(self, data=None) -> "ReverseEntity":
        """Entity factory: client.Reverse().list() / client.Reverse().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.reverse_entity import ReverseEntity
        return ReverseEntity(self, data)


    def RiskScore(self, data=None) -> "RiskScoreEntity":
        """Entity factory: client.RiskScore().list() / client.RiskScore().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.risk_score_entity import RiskScoreEntity
        return RiskScoreEntity(self, data)


    def Status(self, data=None) -> "StatusEntity":
        """Entity factory: client.Status().list() / client.Status().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.status_entity import StatusEntity
        return StatusEntity(self, data)


    def Tor(self, data=None) -> "TorEntity":
        """Entity factory: client.Tor().list() / client.Tor().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.tor_entity import TorEntity
        return TorEntity(self, data)


    def UsageStatistic(self, data=None) -> "UsageStatisticEntity":
        """Entity factory: client.UsageStatistic().list() / client.UsageStatistic().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.usage_statistic_entity import UsageStatisticEntity
        return UsageStatisticEntity(self, data)


    def Whoi(self, data=None) -> "WhoiEntity":
        """Entity factory: client.Whoi().list() / client.Whoi().load({"id": ...})."""
        from ipgeolocationapi4_sdk.entity.whoi_entity import WhoiEntity
        return WhoiEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "IpGeolocationApi4SDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from ipgeolocationapi4_sdk.entity.advanced_entity import AdvancedEntity
    from ipgeolocationapi4_sdk.entity.api_usage_stats_model_entity import ApiUsageStatsModelEntity
    from ipgeolocationapi4_sdk.entity.api_usage_summary_entity import ApiUsageSummaryEntity
    from ipgeolocationapi4_sdk.entity.asn_entity import AsnEntity
    from ipgeolocationapi4_sdk.entity.batch_entity import BatchEntity
    from ipgeolocationapi4_sdk.entity.batch_email_validation_response_dto_entity import BatchEmailValidationResponseDtoEntity
    from ipgeolocationapi4_sdk.entity.cache_management_entity import CacheManagementEntity
    from ipgeolocationapi4_sdk.entity.domain_analysi_entity import DomainAnalysiEntity
    from ipgeolocationapi4_sdk.entity.domain_reputation_v1_dto_entity import DomainReputationV1DtoEntity
    from ipgeolocationapi4_sdk.entity.email_entity import EmailEntity
    from ipgeolocationapi4_sdk.entity.forward_entity import ForwardEntity
    from ipgeolocationapi4_sdk.entity.ip_info_v0_entity import IpInfoV0Entity
    from ipgeolocationapi4_sdk.entity.ip_reputation_entity import IpReputationEntity
    from ipgeolocationapi4_sdk.entity.ipn_entity import IpnEntity
    from ipgeolocationapi4_sdk.entity.mxn_entity import MxnEntity
    from ipgeolocationapi4_sdk.entity.paddle_controller_entity import PaddleControllerEntity
    from ipgeolocationapi4_sdk.entity.rate_limit_info_dto_entity import RateLimitInfoDtoEntity
    from ipgeolocationapi4_sdk.entity.reverse_entity import ReverseEntity
    from ipgeolocationapi4_sdk.entity.risk_score_entity import RiskScoreEntity
    from ipgeolocationapi4_sdk.entity.status_entity import StatusEntity
    from ipgeolocationapi4_sdk.entity.tor_entity import TorEntity
    from ipgeolocationapi4_sdk.entity.usage_statistic_entity import UsageStatisticEntity
    from ipgeolocationapi4_sdk.entity.whoi_entity import WhoiEntity
