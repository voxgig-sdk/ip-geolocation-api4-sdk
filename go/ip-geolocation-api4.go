package voxgigipgeolocationapi4sdk

import (
	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/core"
	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/entity"
	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/utility"
)

// Type aliases preserve external API.
type IpGeolocationApi4SDK = core.IpGeolocationApi4SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpGeolocationApi4Entity = core.IpGeolocationApi4Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpGeolocationApi4Error = core.IpGeolocationApi4Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAdvancedEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewAdvancedEntity(client, entopts)
	}
	core.NewApiUsageStatsModelEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewApiUsageStatsModelEntity(client, entopts)
	}
	core.NewApiUsageSummaryEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewApiUsageSummaryEntity(client, entopts)
	}
	core.NewAsnEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewAsnEntity(client, entopts)
	}
	core.NewBatchEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewBatchEntity(client, entopts)
	}
	core.NewBatchEmailValidationResponseDtoEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewBatchEmailValidationResponseDtoEntity(client, entopts)
	}
	core.NewCacheManagementEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewCacheManagementEntity(client, entopts)
	}
	core.NewDomainAnalysiEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewDomainAnalysiEntity(client, entopts)
	}
	core.NewDomainReputationV1DtoEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewDomainReputationV1DtoEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewForwardEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewForwardEntity(client, entopts)
	}
	core.NewIpInfoV0EntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewIpInfoV0Entity(client, entopts)
	}
	core.NewIpReputationEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewIpReputationEntity(client, entopts)
	}
	core.NewIpnEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewIpnEntity(client, entopts)
	}
	core.NewMxnEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewMxnEntity(client, entopts)
	}
	core.NewPaddleControllerEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewPaddleControllerEntity(client, entopts)
	}
	core.NewRateLimitInfoDtoEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewRateLimitInfoDtoEntity(client, entopts)
	}
	core.NewReverseEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewReverseEntity(client, entopts)
	}
	core.NewRiskScoreEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewRiskScoreEntity(client, entopts)
	}
	core.NewStatusEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewStatusEntity(client, entopts)
	}
	core.NewTorEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewTorEntity(client, entopts)
	}
	core.NewUsageStatisticEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewUsageStatisticEntity(client, entopts)
	}
	core.NewWhoiEntityFunc = func(client *core.IpGeolocationApi4SDK, entopts map[string]any) core.IpGeolocationApi4Entity {
		return entity.NewWhoiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpGeolocationApi4SDK = core.NewIpGeolocationApi4SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIpGeolocationApi4SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IpGeolocationApi4SDK  { return NewIpGeolocationApi4SDK(nil) }
func Test() *IpGeolocationApi4SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
