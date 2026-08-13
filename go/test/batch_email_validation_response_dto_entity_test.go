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

func TestBatchEmailValidationResponseDtoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BatchEmailValidationResponseDto(nil)
		if ent == nil {
			t.Fatal("expected non-nil BatchEmailValidationResponseDtoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := batch_email_validation_response_dtoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "batch_email_validation_response_dto." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set IP_GEOLOCATION_API4_TEST_BATCH_EMAIL_VALIDATION_RESPONSE_DTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		batchEmailValidationResponseDtoRef01Ent := client.BatchEmailValidationResponseDto(nil)
		batchEmailValidationResponseDtoRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "batch_email_validation_response_dto"}, setup.data), "batch_email_validation_response_dto_ref01"))

		batchEmailValidationResponseDtoRef01DataResult, err := batchEmailValidationResponseDtoRef01Ent.Create(batchEmailValidationResponseDtoRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		batchEmailValidationResponseDtoRef01Data = core.ToMapAny(entityData(batchEmailValidationResponseDtoRef01DataResult))
		if batchEmailValidationResponseDtoRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func batch_email_validation_response_dtoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "batch_email_validation_response_dto", "BatchEmailValidationResponseDtoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read batch_email_validation_response_dto test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse batch_email_validation_response_dto test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"batch_email_validation_response_dto01", "batch_email_validation_response_dto02", "batch_email_validation_response_dto03"},
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
	entidEnvRaw := os.Getenv("IP_GEOLOCATION_API4_TEST_BATCH_EMAIL_VALIDATION_RESPONSE_DTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"IP_GEOLOCATION_API4_TEST_BATCH_EMAIL_VALIDATION_RESPONSE_DTO_ENTID": idmap,
		"IP_GEOLOCATION_API4_TEST_LIVE":      "FALSE",
		"IP_GEOLOCATION_API4_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["IP_GEOLOCATION_API4_TEST_BATCH_EMAIL_VALIDATION_RESPONSE_DTO_ENTID"])
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
