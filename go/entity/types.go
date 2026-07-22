// Typed models for the IpGeolocationApi4 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Advanced is the typed data model for the advanced entity.
type Advanced struct {
	Disposable bool `json:"disposable"`
	Email string `json:"email"`
	Free bool `json:"free"`
	Gravatar *any `json:"gravatar,omitempty"`
	HasMxRecord bool `json:"has_mx_record"`
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
	ApiKey string `json:"api_key"`
	ApiType string `json:"api_type"`
	AuthType string `json:"auth_type"`
	AvgRequestDurationNano *any `json:"avg_request_duration_nano,omitempty"`
	BatchOperation int `json:"batch_operation"`
	BatchTokensConsumed int `json:"batch_tokens_consumed"`
	CreatedAt *any `json:"created_at,omitempty"`
	HourBucket string `json:"hour_bucket"`
	Id *any `json:"id,omitempty"`
	MinRemainingQuota *any `json:"min_remaining_quota,omitempty"`
	PeakRemainingQuota *any `json:"peak_remaining_quota,omitempty"`
	PlanId string `json:"plan_id"`
	QuotaConsumed int `json:"quota_consumed"`
	RateLimitedRequest int `json:"rate_limited_request"`
	SuccessfulRequest int `json:"successful_request"`
	TotalRequest int `json:"total_request"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// ApiUsageStatsModelLoadMatch is the typed request payload for ApiUsageStatsModel.LoadTyped.
type ApiUsageStatsModelLoadMatch struct {
	ApiKey *string `json:"api_key,omitempty"`
	ApiType *string `json:"api_type,omitempty"`
	AuthType *string `json:"auth_type,omitempty"`
	AvgRequestDurationNano *any `json:"avg_request_duration_nano,omitempty"`
	BatchOperation *int `json:"batch_operation,omitempty"`
	BatchTokensConsumed *int `json:"batch_tokens_consumed,omitempty"`
	CreatedAt *any `json:"created_at,omitempty"`
	HourBucket *string `json:"hour_bucket,omitempty"`
	Id any `json:"id"`
	MinRemainingQuota *any `json:"min_remaining_quota,omitempty"`
	PeakRemainingQuota *any `json:"peak_remaining_quota,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	QuotaConsumed *int `json:"quota_consumed,omitempty"`
	RateLimitedRequest *int `json:"rate_limited_request,omitempty"`
	SuccessfulRequest *int `json:"successful_request,omitempty"`
	TotalRequest *int `json:"total_request,omitempty"`
	UpdatedAt *any `json:"updated_at,omitempty"`
}

// ApiUsageSummary is the typed data model for the api_usage_summary entity.
type ApiUsageSummary struct {
	ApiKey string `json:"api_key"`
	ApiType string `json:"api_type"`
	AvgRequestDurationM *any `json:"avg_request_duration_m,omitempty"`
	BatchOperation int `json:"batch_operation"`
	PeriodEnd string `json:"period_end"`
	PeriodStart string `json:"period_start"`
	QuotaConsumed int `json:"quota_consumed"`
	RateLimitedRequest int `json:"rate_limited_request"`
	SuccessfulRequest int `json:"successful_request"`
	TotalRequest int `json:"total_request"`
}

// ApiUsageSummaryLoadMatch is the typed request payload for ApiUsageSummary.LoadTyped.
type ApiUsageSummaryLoadMatch struct {
	ApiKey *string `json:"api_key,omitempty"`
	ApiType *string `json:"api_type,omitempty"`
	AvgRequestDurationM *any `json:"avg_request_duration_m,omitempty"`
	BatchOperation *int `json:"batch_operation,omitempty"`
	PeriodEnd *string `json:"period_end,omitempty"`
	PeriodStart *string `json:"period_start,omitempty"`
	QuotaConsumed *int `json:"quota_consumed,omitempty"`
	RateLimitedRequest *int `json:"rate_limited_request,omitempty"`
	SuccessfulRequest *int `json:"successful_request,omitempty"`
	TotalRequest *int `json:"total_request,omitempty"`
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
	Email []any `json:"email"`
	FailedLookup int `json:"failed_lookup"`
	FailedValidation int `json:"failed_validation"`
	Ips []any `json:"ips"`
	Result map[string]any `json:"result"`
	SuccessfulLookup int `json:"successful_lookup"`
	SuccessfulValidation int `json:"successful_validation"`
	TotalProcessed int `json:"total_processed"`
}

// BatchCreateData is the typed request payload for Batch.CreateTyped.
type BatchCreateData struct {
	Email []any `json:"email"`
	FailedLookup int `json:"failed_lookup"`
	FailedValidation int `json:"failed_validation"`
	Ips []any `json:"ips"`
	Result map[string]any `json:"result"`
	SuccessfulLookup int `json:"successful_lookup"`
	SuccessfulValidation int `json:"successful_validation"`
	TotalProcessed int `json:"total_processed"`
}

// BatchEmailValidationResponseDto is the typed data model for the batch_email_validation_response_dto entity.
type BatchEmailValidationResponseDto struct {
	FailedValidation int `json:"failed_validation"`
	Result map[string]any `json:"result"`
	SuccessfulValidation int `json:"successful_validation"`
	TotalProcessed int `json:"total_processed"`
}

// BatchEmailValidationResponseDtoCreateData is the typed request payload for BatchEmailValidationResponseDto.CreateTyped.
type BatchEmailValidationResponseDtoCreateData struct {
	FailedValidation int `json:"failed_validation"`
	Result map[string]any `json:"result"`
	SuccessfulValidation int `json:"successful_validation"`
	TotalProcessed int `json:"total_processed"`
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
	Domain []any `json:"domain"`
}

// DomainAnalysiLoadMatch is the typed request payload for DomainAnalysi.LoadTyped.
type DomainAnalysiLoadMatch struct {
	Domain string `json:"domain"`
}

// DomainAnalysiCreateData is the typed request payload for DomainAnalysi.CreateTyped.
type DomainAnalysiCreateData struct {
	Domain []any `json:"domain"`
}

// DomainReputationV1Dto is the typed data model for the domain_reputation_v1_dto entity.
type DomainReputationV1Dto struct {
	Domain string `json:"domain"`
	IsDisposableEmailDomain bool `json:"is_disposable_email_domain"`
	IsValid bool `json:"is_valid"`
	ResolvedIp []any `json:"resolved_ip"`
	Threat map[string]any `json:"threat"`
}

// DomainReputationV1DtoLoadMatch is the typed request payload for DomainReputationV1Dto.LoadTyped.
type DomainReputationV1DtoLoadMatch struct {
	Domain string `json:"domain"`
}

// Email is the typed data model for the email entity.
type Email struct {
	Email string `json:"email"`
	Factor map[string]any `json:"factor"`
	HasMxRecord bool `json:"has_mx_record"`
	Ip *any `json:"ip,omitempty"`
	IsDisposable bool `json:"is_disposable"`
	MxRecord []any `json:"mx_record"`
	RiskLevel string `json:"risk_level"`
	Score float64 `json:"score"`
	Syntax map[string]any `json:"syntax"`
}

// EmailLoadMatch is the typed request payload for Email.LoadTyped.
type EmailLoadMatch struct {
	Id string `json:"id"`
}

// Forward is the typed data model for the forward entity.
type Forward struct {
	Address []any `json:"address"`
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
	Email *any `json:"email,omitempty"`
	Factor map[string]any `json:"factor"`
	Ip *any `json:"ip,omitempty"`
	RiskLevel string `json:"risk_level"`
	Score float64 `json:"score"`
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
	SuspiciousFactor map[string]any `json:"suspicious_factor"`
}

// IpnLoadMatch is the typed request payload for Ipn.LoadTyped.
type IpnLoadMatch struct {
	Asn *any `json:"asn,omitempty"`
	Ip *string `json:"ip,omitempty"`
	Isp *any `json:"isp,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	SuspiciousFactor *map[string]any `json:"suspicious_factor,omitempty"`
}

// Ipn2 is the typed data model for the ipn2 entity.
type Ipn2 struct {
	Asn *any `json:"asn,omitempty"`
	Ip string `json:"ip"`
	Isp *any `json:"isp,omitempty"`
	Location map[string]any `json:"location"`
	SuspiciousFactor map[string]any `json:"suspicious_factor"`
}

// Ipn2LoadMatch is the typed request payload for Ipn2.LoadTyped.
type Ipn2LoadMatch struct {
	Ip string `json:"ip"`
}

// Mxn is the typed data model for the mxn entity.
type Mxn struct {
	Domain string `json:"domain"`
	MxRecord []any `json:"mx_record"`
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
	IntervalSecond int `json:"interval_second"`
	IpApi map[string]any `json:"ip_api"`
	NextRenewalDate *string `json:"next_renewal_date,omitempty"`
	PlanId string `json:"plan_id"`
	PlanName *string `json:"plan_name,omitempty"`
	Status *any `json:"status,omitempty"`
}

// RateLimitInfoDtoLoadMatch is the typed request payload for RateLimitInfoDto.LoadTyped.
type RateLimitInfoDtoLoadMatch struct {
	EmailApi *map[string]any `json:"email_api,omitempty"`
	IntervalSecond *int `json:"interval_second,omitempty"`
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
	Email *any `json:"email,omitempty"`
	Factor map[string]any `json:"factor"`
	Ip *any `json:"ip,omitempty"`
	RiskLevel string `json:"risk_level"`
	Score float64 `json:"score"`
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
	NameServer []any `json:"name_server"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
