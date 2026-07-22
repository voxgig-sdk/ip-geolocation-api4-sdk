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

func TestPaddleControllerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PaddleController(nil)
		if ent == nil {
			t.Fatal("expected non-nil PaddleControllerEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := paddle_controllerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "paddle_controller." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_PADDLE_CONTROLLER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		paddleControllerRef01Ent := client.PaddleController(nil)
		paddleControllerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "paddle_controller"}, setup.data), "paddle_controller_ref01"))

		paddleControllerRef01DataResult, err := paddleControllerRef01Ent.Create(paddleControllerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		paddleControllerRef01Data = core.ToMapAny(paddleControllerRef01DataResult)
		if paddleControllerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		paddleControllerRef01MatchDt0 := map[string]any{}
		paddleControllerRef01DataDt0Loaded, err := paddleControllerRef01Ent.Load(paddleControllerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if paddleControllerRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func paddle_controllerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "paddle_controller", "PaddleControllerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read paddle_controller test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse paddle_controller test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"paddle_controller01", "paddle_controller02", "paddle_controller03"},
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
	entidEnvRaw := os.Getenv("IPGEOLOCATIONAPI__TEST_PADDLE_CONTROLLER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"IPGEOLOCATIONAPI__TEST_PADDLE_CONTROLLER_ENTID": idmap,
		"IPGEOLOCATIONAPI__TEST_LIVE":      "FALSE",
		"IPGEOLOCATIONAPI__TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["IPGEOLOCATIONAPI__TEST_PADDLE_CONTROLLER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewIpGeolocationApi4SDK(core.ToMapAny(mergedOpts))
	}

	live := env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["IPGEOLOCATIONAPI__TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
