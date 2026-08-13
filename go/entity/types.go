// Typed models for the IpGeolocationApi4 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/core"
)

// Advanced is the typed data model for the advanced entity.
type Advanced struct {
	Disposable bool `json:"disposable"`
	Email string `json:"email"`
	Free bool `json:"free"`
	Gravatar *any `json:"gravatar,omitempty"`
	HasMxRecords bool `json:"has_mx_records"`
	Reachable string `json:"reachable"`
	RoleAccount bool `json:"role_account"`
	Smtp *any `json:"smtp,omitempty"`
	Suggestion string `json:"suggestion"`
	Syntax map[string]any `json:"syntax"`
}

// AdvancedLoadMatch is the typed request payload for Advanced.LoadTyped.
type AdvancedLoadMatch struct {
	Id string `json:"id"`
}

// ApiUsageStatsModel is the typed data model for the api_usage_stats_model entity.
type ApiUsageStatsModel struct {
	ApiKey string `json:"apiKey"`
	ApiType string `json:"apiType"`
	AuthType string `json:"authType"`
	AvgRequestDurationNanos *any `json:"avgRequestDurationNanos,omitempty"`
	BatchOperations int `json:"batchOperations"`
	BatchTokensConsumed int `json:"batchTokensConsumed"`
	CreatedAt *any `json:"createdAt,omitempty"`
	HourBucket string `json:"hourBucket"`
	Id *any `json:"id,omitempty"`
	MinRemainingQuota *any `json:"minRemainingQuota,omitempty"`
	PeakRemainingQuota *any `json:"peakRemainingQuota,omitempty"`
	PlanId string `json:"planId"`
	QuotaConsumed int `json:"quotaConsumed"`
	RateLimitedRequests int `json:"rateLimitedRequests"`
	SuccessfulRequests int `json:"successfulRequests"`
	TotalRequests int `json:"totalRequests"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// ApiUsageStatsModelLoadMatch is the typed request payload for ApiUsageStatsModel.LoadTyped.
type ApiUsageStatsModelLoadMatch struct {
	ApiKey *string `json:"apiKey,omitempty"`
	ApiType *string `json:"apiType,omitempty"`
	AuthType *string `json:"authType,omitempty"`
	AvgRequestDurationNanos *any `json:"avgRequestDurationNanos,omitempty"`
	BatchOperations *int `json:"batchOperations,omitempty"`
	BatchTokensConsumed *int `json:"batchTokensConsumed,omitempty"`
	CreatedAt *any `json:"createdAt,omitempty"`
	HourBucket *string `json:"hourBucket,omitempty"`
	Id any `json:"id"`
	MinRemainingQuota *any `json:"minRemainingQuota,omitempty"`
	PeakRemainingQuota *any `json:"peakRemainingQuota,omitempty"`
	PlanId *string `json:"planId,omitempty"`
	QuotaConsumed *int `json:"quotaConsumed,omitempty"`
	RateLimitedRequests *int `json:"rateLimitedRequests,omitempty"`
	SuccessfulRequests *int `json:"successfulRequests,omitempty"`
	TotalRequests *int `json:"totalRequests,omitempty"`
	UpdatedAt *any `json:"updatedAt,omitempty"`
}

// ApiUsageSummary is the typed data model for the api_usage_summary entity.
type ApiUsageSummary struct {
	ApiKey string `json:"apiKey"`
	ApiType string `json:"apiType"`
	AvgRequestDurationMs *any `json:"avgRequestDurationMs,omitempty"`
	BatchOperations int `json:"batchOperations"`
	PeriodEnd string `json:"periodEnd"`
	PeriodStart string `json:"periodStart"`
	QuotaConsumed int `json:"quotaConsumed"`
	RateLimitedRequests int `json:"rateLimitedRequests"`
	SuccessfulRequests int `json:"successfulRequests"`
	TotalRequests int `json:"totalRequests"`
}

// ApiUsageSummaryLoadMatch is the typed request payload for ApiUsageSummary.LoadTyped.
type ApiUsageSummaryLoadMatch struct {
	ApiKey *string `json:"apiKey,omitempty"`
	ApiType *string `json:"apiType,omitempty"`
	AvgRequestDurationMs *any `json:"avgRequestDurationMs,omitempty"`
	BatchOperations *int `json:"batchOperations,omitempty"`
	PeriodEnd *string `json:"periodEnd,omitempty"`
	PeriodStart *string `json:"periodStart,omitempty"`
	QuotaConsumed *int `json:"quotaConsumed,omitempty"`
	RateLimitedRequests *int `json:"rateLimitedRequests,omitempty"`
	SuccessfulRequests *int `json:"successfulRequests,omitempty"`
	TotalRequests *int `json:"totalRequests,omitempty"`
}

// Asn is the typed data model for the asn entity.
type Asn struct {
	Asn *any `json:"asn,omitempty"`
	Country *any `json:"country,omitempty"`
	CountryCode *string `json:"country_code,omitempty"`
	Ip string `json:"ip"`
	IsDatacenter bool `json:"is_datacenter"`
	Network *any `json:"network,omitempty"`
	Organization *any `json:"organization,omitempty"`
}

// AsnLoadMatch is the typed request payload for Asn.LoadTyped.
type AsnLoadMatch struct {
	Id string `json:"id"`
}

// Batch is the typed data model for the batch entity.
type Batch struct {
	Emails []any `json:"emails"`
	Ips []any `json:"ips"`
}

// BatchCreateData is the typed request payload for Batch.CreateTyped.
type BatchCreateData struct {
	Emails []any `json:"emails"`
	Ips []any `json:"ips"`
}

// BatchEmailValidationResponseDto is the typed data model for the batch_email_validation_response_dto entity.
type BatchEmailValidationResponseDto struct {
	FailedValidations *int `json:"failed_validations,omitempty"`
	Results *map[string]any `json:"results,omitempty"`
	SuccessfulValidations *int `json:"successful_validations,omitempty"`
	TotalProcessed *int `json:"total_processed,omitempty"`
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
	Domain *string `json:"domain,omitempty"`
}

// CacheManagementRemoveMatch is the typed request payload for CacheManagement.RemoveTyped.
type CacheManagementRemoveMatch struct {
}

// DomainAnalysi is the typed data model for the domain_analysi entity.
type DomainAnalysi struct {
	Domains []any `json:"domains"`
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
	Domain string `json:"domain"`
	IsDisposableEmailDomain bool `json:"is_disposable_email_domain"`
	IsValid bool `json:"is_valid"`
	ResolvedIps []any `json:"resolved_ips"`
	Threat map[string]any `json:"threat"`
}

// DomainReputationV1DtoLoadMatch is the typed request payload for DomainReputationV1Dto.LoadTyped.
type DomainReputationV1DtoLoadMatch struct {
	Domain string `json:"domain"`
}

// Email is the typed data model for the email entity.
type Email struct {
	Email string `json:"email"`
	EmailFactors any `json:"email_factors"`
	HasMxRecords bool `json:"has_mx_records"`
	IpFactors any `json:"ip_factors"`
	IsDisposable bool `json:"is_disposable"`
	MxRecords []any `json:"mx_records"`
	Syntax map[string]any `json:"syntax"`
}

// EmailLoadMatch is the typed request payload for Email.LoadTyped.
type EmailLoadMatch struct {
	Id string `json:"id"`
}

// Forward is the typed data model for the forward entity.
type Forward struct {
	Addresses []any `json:"addresses"`
	Hostname string `json:"hostname"`
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
	Ip *string `json:"ip,omitempty"`
}

// IpReputation is the typed data model for the ip_reputation entity.
type IpReputation struct {
	EmailFactors any `json:"email_factors"`
	IpFactors any `json:"ip_factors"`
}

// IpReputationLoadMatch is the typed request payload for IpReputation.LoadTyped.
type IpReputationLoadMatch struct {
	Id string `json:"id"`
}

// Ipn is the typed data model for the ipn entity.
type Ipn struct {
	Asn *any `json:"asn,omitempty"`
	Ip string `json:"ip"`
	Isp *any `json:"isp,omitempty"`
	Location map[string]any `json:"location"`
	SuspiciousFactors map[string]any `json:"suspicious_factors"`
}

// IpnLoadMatch is the typed request payload for Ipn.LoadTyped.
type IpnLoadMatch struct {
	Ip *string `json:"ip,omitempty"`
}

// Mxn is the typed data model for the mxn entity.
type Mxn struct {
	Domain string `json:"domain"`
	MxRecords []any `json:"mx_records"`
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
}

// RateLimitInfoDto is the typed data model for the rate_limit_info_dto entity.
type RateLimitInfoDto struct {
	EmailApi map[string]any `json:"email_api"`
	IntervalSeconds int `json:"interval_seconds"`
	IpApi map[string]any `json:"ip_api"`
	NextRenewalDate *string `json:"next_renewal_date,omitempty"`
	PlanId string `json:"plan_id"`
	PlanName *string `json:"plan_name,omitempty"`
	Status *any `json:"status,omitempty"`
}

// RateLimitInfoDtoLoadMatch is the typed request payload for RateLimitInfoDto.LoadTyped.
type RateLimitInfoDtoLoadMatch struct {
	EmailApi *map[string]any `json:"email_api,omitempty"`
	IntervalSeconds *int `json:"interval_seconds,omitempty"`
	IpApi *map[string]any `json:"ip_api,omitempty"`
	NextRenewalDate *string `json:"next_renewal_date,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	PlanName *string `json:"plan_name,omitempty"`
	Status *any `json:"status,omitempty"`
}

// Reverse is the typed data model for the reverse entity.
type Reverse struct {
	Hostname *any `json:"hostname,omitempty"`
	Ip string `json:"ip"`
	PtrRecord *string `json:"ptr_record,omitempty"`
	Ttl *any `json:"ttl,omitempty"`
}

// ReverseLoadMatch is the typed request payload for Reverse.LoadTyped.
type ReverseLoadMatch struct {
	Id string `json:"id"`
}

// RiskScore is the typed data model for the risk_score entity.
type RiskScore struct {
	EmailFactors any `json:"email_factors"`
	IpFactors any `json:"ip_factors"`
}

// RiskScoreLoadMatch is the typed request payload for RiskScore.LoadTyped.
type RiskScoreLoadMatch struct {
	Id *string `json:"id,omitempty"`
}

// Status is the typed data model for the status entity.
type Status struct {
}

// StatusLoadMatch is the typed request payload for Status.LoadTyped.
type StatusLoadMatch struct {
}

// Tor is the typed data model for the tor entity.
type Tor struct {
	Ip string `json:"ip"`
	IsTor bool `json:"is_tor"`
	TorNodeCount int `json:"tor_node_count"`
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
}

// Whoi is the typed data model for the whoi entity.
type Whoi struct {
	Domain string `json:"domain"`
	Error *any `json:"error,omitempty"`
	ExpiresOn *string `json:"expires_on,omitempty"`
	NameServers []any `json:"name_servers"`
	Raw string `json:"raw"`
	RegisteredOn *string `json:"registered_on,omitempty"`
	Registrar *any `json:"registrar,omitempty"`
	Status []any `json:"status"`
	UpdatedOn *string `json:"updated_on,omitempty"`
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
