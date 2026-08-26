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
---@field has_mx_records boolean
---@field id? string
---@field reachable string
---@field role_account boolean
---@field smtp? any
---@field suggestion string
---@field syntax table

---@class AdvancedLoadMatch
---@field id string

---@class ApiUsageStatsModel
---@field apiKey string
---@field apiType string
---@field authType string
---@field avgRequestDurationNanos? number|nil
---@field batchOperations number
---@field batchTokensConsumed number
---@field createdAt? string|nil
---@field hourBucket string
---@field id? number|nil
---@field minRemainingQuota? number|nil
---@field peakRemainingQuota? number|nil
---@field planId string
---@field quotaConsumed number
---@field rateLimitedRequests number
---@field successfulRequests number
---@field totalRequests number
---@field updatedAt? string|nil

---@class ApiUsageStatsModelLoadMatch
---@field apiKey? string
---@field apiType? string
---@field authType? string
---@field avgRequestDurationNanos? number|nil
---@field batchOperations? number
---@field batchTokensConsumed? number
---@field createdAt? string|nil
---@field hourBucket? string
---@field id number|nil
---@field minRemainingQuota? number|nil
---@field peakRemainingQuota? number|nil
---@field planId? string
---@field quotaConsumed? number
---@field rateLimitedRequests? number
---@field successfulRequests? number
---@field totalRequests? number
---@field updatedAt? string|nil

---@class ApiUsageSummary
---@field apiKey string
---@field apiType string
---@field avgRequestDurationMs? number|nil
---@field batchOperations number
---@field periodEnd string
---@field periodStart string
---@field quotaConsumed number
---@field rateLimitedRequests number
---@field successfulRequests number
---@field totalRequests number

---@class ApiUsageSummaryLoadMatch
---@field apiKey? string
---@field apiType? string
---@field avgRequestDurationMs? number|nil
---@field batchOperations? number
---@field periodEnd? string
---@field periodStart? string
---@field quotaConsumed? number
---@field rateLimitedRequests? number
---@field successfulRequests? number
---@field totalRequests? number

---@class Asn
---@field asn? number|nil
---@field country? string|nil
---@field country_code? string
---@field id? string
---@field ip string
---@field is_datacenter boolean
---@field network? string|nil
---@field organization? string|nil

---@class AsnLoadMatch
---@field id string

---@class Batch
---@field emails table
---@field ips table

---@class BatchCreateData
---@field emails table
---@field ips table

---@class BatchEmailValidationResponseDto
---@field failed_validations? number
---@field results? table
---@field successful_validations? number
---@field total_processed? number

---@class BatchEmailValidationResponseDtoCreateData
---@field failed_validations? number
---@field results? table
---@field successful_validations? number
---@field total_processed? number

---@class CacheManagement

---@class CacheManagementLoadMatch
---@field domain string

---@class CacheManagementRemoveMatch

---@class DomainAnalysi
---@field domains table

---@class DomainAnalysiLoadMatch
---@field domain string

---@class DomainAnalysiCreateData
---@field domains table

---@class DomainReputationV1Dto
---@field domain string
---@field is_disposable_email_domain boolean
---@field is_valid boolean
---@field resolved_ips table
---@field threat table

---@class DomainReputationV1DtoLoadMatch
---@field domain string

---@class Email
---@field email string
---@field email_factors nil
---@field has_mx_records boolean
---@field id? string
---@field ip_factors nil
---@field is_disposable boolean
---@field mx_records table
---@field syntax table

---@class EmailLoadMatch
---@field id string

---@class Forward
---@field addresses table
---@field hostname string
---@field id? string

---@class ForwardLoadMatch
---@field id string

---@class IpInfoV0

---@class IpInfoV0LoadMatch
---@field ip string

---@class IpReputation
---@field email_factors nil
---@field id? string
---@field ip_factors nil

---@class IpReputationLoadMatch
---@field id string

---@class Ipn
---@field asn? string|nil
---@field ip string
---@field isp? string|nil
---@field location table
---@field suspicious_factors table

---@class IpnLoadMatch
---@field ip string

---@class Mxn
---@field domain string
---@field mx_records table

---@class MxnLoadMatch
---@field domain string

---@class PaddleController

---@class PaddleControllerLoadMatch

---@class PaddleControllerCreateData

---@class RateLimitInfoDto
---@field email_api table
---@field interval_seconds number
---@field ip_api table
---@field next_renewal_date? string
---@field plan_id string
---@field plan_name? string
---@field status? string|nil

---@class RateLimitInfoDtoLoadMatch
---@field email_api? table
---@field interval_seconds? number
---@field ip_api? table
---@field next_renewal_date? string
---@field plan_id? string
---@field plan_name? string
---@field status? string|nil

---@class Reverse
---@field hostname? string|nil
---@field id? string
---@field ip string
---@field ptr_record? string
---@field ttl? number|nil

---@class ReverseLoadMatch
---@field id string

---@class RiskScore
---@field email_factors nil
---@field id? string
---@field ip_factors nil

---@class RiskScoreLoadMatch
---@field id string

---@class Status

---@class StatusLoadMatch

---@class Tor
---@field id? string
---@field ip string
---@field is_tor boolean
---@field tor_node_count number

---@class TorLoadMatch
---@field id string

---@class UsageStatistic

---@class UsageStatisticLoadMatch

---@class Whoi
---@field domain string
---@field error? string|nil
---@field expires_on? string
---@field id? string
---@field name_servers table
---@field raw string
---@field registered_on? string
---@field registrar? any
---@field status table
---@field updated_on? string

---@class WhoiLoadMatch
---@field id string

local M = {}

return M
