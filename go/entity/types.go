// Typed models for the IpGeolocationApi4 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/core"
)

// Advanced is the typed data model for the advanced entity.
type Advanced struct {
}

// AdvancedLoadMatch is the typed request payload for Advanced.LoadTyped.
type AdvancedLoadMatch struct {
	Id string `json:"id"`
}

// ApiUsageStatsModel is the typed data model for the api_usage_stats_model entity.
type ApiUsageStatsModel struct {
}

// ApiUsageStatsModelLoadMatch is the typed request payload for ApiUsageStatsModel.LoadTyped.
type ApiUsageStatsModelLoadMatch struct {
	ApiKey string `json:"api_key"`
	ApiType *string `json:"api_type,omitempty"`
	EndDate string `json:"end_date"`
	StartDate string `json:"start_date"`
}

// ApiUsageSummary is the typed data model for the api_usage_summary entity.
type ApiUsageSummary struct {
}

// ApiUsageSummaryLoadMatch is the typed request payload for ApiUsageSummary.LoadTyped.
type ApiUsageSummaryLoadMatch struct {
	ApiKey string `json:"api_key"`
	ApiType *string `json:"api_type,omitempty"`
	EndDate string `json:"end_date"`
	StartDate string `json:"start_date"`
}

// Asn is the typed data model for the asn entity.
type Asn struct {
}

// AsnLoadMatch is the typed request payload for Asn.LoadTyped.
type AsnLoadMatch struct {
	Id string `json:"id"`
}

// Batch is the typed data model for the batch entity.
type Batch struct {
}

// BatchCreateData is the typed request payload for Batch.CreateTyped.
type BatchCreateData struct {
	Emails []any `json:"emails"`
	Ips []any `json:"ips"`
}

// BatchEmailValidationResponseDto is the typed data model for the batch_email_validation_response_dto entity.
type BatchEmailValidationResponseDto struct {
}

// BatchEmailValidationResponseDtoCreateData is the typed request payload for BatchEmailValidationResponseDto.CreateTyped.
type BatchEmailValidationResponseDtoCreateData struct {
	FailedValidations *int `json:"failed_validations,omitempty"`
	Results *map[string]any `json:"results,omitempty"`
	SuccessfulValidations *int `json:"successful_validations,omitempty"`
	TotalProcessed *int `json:"total_processed,omitempty"`
}

// CacheManagement is the typed data model for the cache_management entity.
type CacheManagement struct {
}

// CacheManagementLoadMatch is the typed request payload for CacheManagement.LoadTyped.
type CacheManagementLoadMatch struct {
	Domain string `json:"domain"`
}

// CacheManagementRemoveMatch is the typed request payload for CacheManagement.RemoveTyped.
type CacheManagementRemoveMatch struct {
}

// DomainAnalysi is the typed data model for the domain_analysi entity.
type DomainAnalysi struct {
}

// DomainAnalysiLoadMatch is the typed request payload for DomainAnalysi.LoadTyped.
type DomainAnalysiLoadMatch struct {
	Domain string `json:"domain"`
}

// DomainAnalysiCreateData is the typed request payload for DomainAnalysi.CreateTyped.
type DomainAnalysiCreateData struct {
	Domains []any `json:"domains"`
}

// DomainReputationV1Dto is the typed data model for the domain_reputation_v1_dto entity.
type DomainReputationV1Dto struct {
}

// DomainReputationV1DtoLoadMatch is the typed request payload for DomainReputationV1Dto.LoadTyped.
type DomainReputationV1DtoLoadMatch struct {
	Domain string `json:"domain"`
}

// Email is the typed data model for the email entity.
type Email struct {
}

// EmailLoadMatch is the typed request payload for Email.LoadTyped.
type EmailLoadMatch struct {
	Id string `json:"id"`
}

// Forward is the typed data model for the forward entity.
type Forward struct {
}

// ForwardLoadMatch is the typed request payload for Forward.LoadTyped.
type ForwardLoadMatch struct {
	Id string `json:"id"`
}

// IpInfoV0 is the typed data model for the ip_info_v0 entity.
type IpInfoV0 struct {
}

// IpInfoV0LoadMatch is the typed request payload for IpInfoV0.LoadTyped.
type IpInfoV0LoadMatch struct {
	Ip string `json:"ip"`
}

// IpReputation is the typed data model for the ip_reputation entity.
type IpReputation struct {
}

// IpReputationLoadMatch is the typed request payload for IpReputation.LoadTyped.
type IpReputationLoadMatch struct {
	Id string `json:"id"`
}

// Ipn is the typed data model for the ipn entity.
type Ipn struct {
}

// IpnLoadMatch is the typed request payload for Ipn.LoadTyped.
type IpnLoadMatch struct {
	Ip string `json:"ip"`
}

// Mxn is the typed data model for the mxn entity.
type Mxn struct {
}

// MxnLoadMatch is the typed request payload for Mxn.LoadTyped.
type MxnLoadMatch struct {
	Domain string `json:"domain"`
}

// PaddleController is the typed data model for the paddle_controller entity.
type PaddleController struct {
}

// PaddleControllerLoadMatch is the typed request payload for PaddleController.LoadTyped.
type PaddleControllerLoadMatch struct {
}

// PaddleControllerCreateData is the typed request payload for PaddleController.CreateTyped.
type PaddleControllerCreateData struct {
	HttpEntity string `json:"http_entity"`
}

// RateLimitInfoDto is the typed data model for the rate_limit_info_dto entity.
type RateLimitInfoDto struct {
}

// RateLimitInfoDtoLoadMatch is the typed request payload for RateLimitInfoDto.LoadTyped.
type RateLimitInfoDtoLoadMatch struct {
	ApiKey string `json:"api_key"`
}

// Reverse is the typed data model for the reverse entity.
type Reverse struct {
}

// ReverseLoadMatch is the typed request payload for Reverse.LoadTyped.
type ReverseLoadMatch struct {
	Id string `json:"id"`
}

// RiskScore is the typed data model for the risk_score entity.
type RiskScore struct {
}

// RiskScoreLoadMatch is the typed request payload for RiskScore.LoadTyped.
type RiskScoreLoadMatch struct {
	Id string `json:"id"`
	Email *string `json:"email,omitempty"`
}

// Status is the typed data model for the status entity.
type Status struct {
}

// StatusLoadMatch is the typed request payload for Status.LoadTyped.
type StatusLoadMatch struct {
}

// Tor is the typed data model for the tor entity.
type Tor struct {
}

// TorLoadMatch is the typed request payload for Tor.LoadTyped.
type TorLoadMatch struct {
	Id string `json:"id"`
}

// UsageStatistic is the typed data model for the usage_statistic entity.
type UsageStatistic struct {
}

// UsageStatisticLoadMatch is the typed request payload for UsageStatistic.LoadTyped.
type UsageStatisticLoadMatch struct {
	ApiKey string `json:"api_key"`
	ApiType *string `json:"api_type,omitempty"`
}

// Whoi is the typed data model for the whoi entity.
type Whoi struct {
}

// WhoiLoadMatch is the typed request payload for Whoi.LoadTyped.
type WhoiLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
