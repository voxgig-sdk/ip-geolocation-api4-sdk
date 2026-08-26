package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/ip-geolocation-api4-sdk/go"
	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/core"

	vs "github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/utility/struct"
)

func TestIpReputationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IpReputation(nil)
		if ent == nil {
			t.Fatal("expected non-nil IpReputationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := ip_reputationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ip_reputation." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set IP_GEOLOCATION_API4_TEST_IP_REPUTATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		ipReputationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.ip_reputation", setup.data)))
		var ipReputationRef01Data map[string]any
		if len(ipReputationRef01DataRaw) > 0 {
			ipReputationRef01Data = core.ToMapAny(ipReputationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = ipReputationRef01Data

		// LOAD
		ipReputationRef01Ent := client.IpReputation(nil)
		ipReputationRef01MatchDt0 := map[string]any{
			"id": ipReputationRef01Data["id"],
		}
		ipReputationRef01DataDt0Loaded, err := ipReputationRef01Ent.Load(ipReputationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		ipReputationRef01DataDt0LoadResult := core.ToMapAny(entityData(ipReputationRef01DataDt0Loaded))
		if ipReputationRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if ipReputationRef01DataDt0LoadResult["id"] != ipReputationRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func ip_reputationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ip_reputation", "IpReputationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ip_reputation test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ip_reputation test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"ip_reputation01", "ip_reputation02", "ip_reputation03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("IP_GEOLOCATION_API4_TEST_IP_REPUTATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"IP_GEOLOCATION_API4_TEST_IP_REPUTATION_ENTID": idmap,
		"IP_GEOLOCATION_API4_TEST_LIVE":      "FALSE",
		"IP_GEOLOCATION_API4_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["IP_GEOLOCATION_API4_TEST_IP_REPUTATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["IP_GEOLOCATION_API4_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewIpGeolocationApi4SDK(core.ToMapAny(mergedOpts))
	}

	live := env["IP_GEOLOCATION_API4_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["IP_GEOLOCATION_API4_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
