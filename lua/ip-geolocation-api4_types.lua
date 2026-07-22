-- Typed models for the IpGeolocationApi4 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Advanced
---@field disposable boolean
---@field email string
---@field free boolean
---@field gravatar? any
---@field has_mx_record boolean
---@field reachable string
---@field role_account boolean
---@field smtp? any
---@field suggestion string
---@field syntax table

---@class AdvancedLoadMatch
---@field id string

---@class ApiUsageStatsModel
---@field api_key string
---@field api_type string
---@field auth_type string
---@field avg_request_duration_nano? any
---@field batch_operation number
---@field batch_tokens_consumed number
---@field created_at? any
---@field hour_bucket string
---@field id? any
---@field min_remaining_quota? any
---@field peak_remaining_quota? any
---@field plan_id string
---@field quota_consumed number
---@field rate_limited_request number
---@field successful_request number
---@field total_request number
---@field updated_at? any

---@class ApiUsageStatsModelLoadMatch
---@field api_key? string
---@field api_type? string
---@field auth_type? string
---@field avg_request_duration_nano? any
---@field batch_operation? number
---@field batch_tokens_consumed? number
---@field created_at? any
---@field hour_bucket? string
---@field id any
---@field min_remaining_quota? any
---@field peak_remaining_quota? any
---@field plan_id? string
---@field quota_consumed? number
---@field rate_limited_request? number
---@field successful_request? number
---@field total_request? number
---@field updated_at? any

---@class ApiUsageSummary
---@field api_key string
---@field api_type string
---@field avg_request_duration_m? any
---@field batch_operation number
---@field period_end string
---@field period_start string
---@field quota_consumed number
---@field rate_limited_request number
---@field successful_request number
---@field total_request number

---@class ApiUsageSummaryLoadMatch
---@field api_key? string
---@field api_type? string
---@field avg_request_duration_m? any
---@field batch_operation? number
---@field period_end? string
---@field period_start? string
---@field quota_consumed? number
---@field rate_limited_request? number
---@field successful_request? number
---@field total_request? number

---@class Asn
---@field asn? any
---@field country? any
---@field country_code? string
---@field ip string
---@field is_datacenter boolean
---@field network? any
---@field organization? any

---@class AsnLoadMatch
---@field id string

---@class Batch
---@field email table
---@field failed_lookup number
---@field failed_validation number
---@field ips table
---@field result table
---@field successful_lookup number
---@field successful_validation number
---@field total_processed number

---@class BatchCreateData
---@field email table
---@field failed_lookup number
---@field failed_validation number
---@field ips table
---@field result table
---@field successful_lookup number
---@field successful_validation number
---@field total_processed number

---@class BatchEmailValidationResponseDto
---@field failed_validation number
---@field result table
---@field successful_validation number
---@field total_processed number

---@class BatchEmailValidationResponseDtoCreateData
---@field failed_validation number
---@field result table
---@field successful_validation number
---@field total_processed number

---@class CacheManagement

---@class CacheManagementLoadMatch
---@field domain? string

---@class CacheManagementRemoveMatch

---@class DomainAnalysi
---@field domain table

---@class DomainAnalysiLoadMatch
---@field domain string

---@class DomainAnalysiCreateData
---@field domain table

---@class DomainReputationV1Dto
---@field domain string
---@field is_disposable_email_domain boolean
---@field is_valid boolean
---@field resolved_ip table
---@field threat table

---@class DomainReputationV1DtoLoadMatch
---@field domain string

---@class Email
---@field email string
---@field factor table
---@field has_mx_record boolean
---@field ip? any
---@field is_disposable boolean
---@field mx_record table
---@field risk_level string
---@field score number
---@field syntax table

---@class EmailLoadMatch
---@field id string

---@class Forward
---@field address table
---@field hostname string

---@class ForwardLoadMatch
---@field id string

---@class IpInfoV0

---@class IpInfoV0LoadMatch
---@field ip? string

---@class IpReputation
---@field email? any
---@field factor table
---@field ip? any
---@field risk_level string
---@field score number

---@class IpReputationLoadMatch
---@field id string

---@class Ipn
---@field asn? any
---@field ip string
---@field isp? any
---@field location table
---@field suspicious_factor table

---@class IpnLoadMatch
---@field asn? any
---@field ip? string
---@field isp? any
---@field location? table
---@field suspicious_factor? table

---@class Ipn2
---@field asn? any
---@field ip string
---@field isp? any
---@field location table
---@field suspicious_factor table

---@class Ipn2LoadMatch
---@field ip string

---@class Mxn
---@field domain string
---@field mx_record table

---@class MxnLoadMatch
---@field domain string

---@class PaddleController

---@class PaddleControllerLoadMatch

---@class PaddleControllerCreateData

---@class RateLimitInfoDto
---@field email_api table
---@field interval_second number
---@field ip_api table
---@field next_renewal_date? string
---@field plan_id string
---@field plan_name? string
---@field status? any

---@class RateLimitInfoDtoLoadMatch
---@field email_api? table
---@field interval_second? number
---@field ip_api? table
---@field next_renewal_date? string
---@field plan_id? string
---@field plan_name? string
---@field status? any

---@class Reverse
---@field hostname? any
---@field ip string
---@field ptr_record? string
---@field ttl? any

---@class ReverseLoadMatch
---@field id string

---@class RiskScore
---@field email? any
---@field factor table
---@field ip? any
---@field risk_level string
---@field score number

---@class RiskScoreLoadMatch
---@field id? string

---@class Status

---@class StatusLoadMatch

---@class Tor
---@field ip string
---@field is_tor boolean
---@field tor_node_count number

---@class TorLoadMatch
---@field id string

---@class UsageStatistic

---@class UsageStatisticLoadMatch

---@class Whoi
---@field domain string
---@field error? any
---@field expires_on? string
---@field name_server table
---@field raw string
---@field registered_on? string
---@field registrar? any
---@field status table
---@field updated_on? string

---@class WhoiLoadMatch
---@field id string

local M = {}

return M
