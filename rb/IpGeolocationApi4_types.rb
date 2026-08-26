# frozen_string_literal: true

# Typed models for the IpGeolocationApi4 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Advanced entity data model.
#
# @!attribute [rw] disposable
#   @return [Boolean]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] free
#   @return [Boolean]
#
# @!attribute [rw] gravatar
#   @return [Object, nil]
#
# @!attribute [rw] has_mx_records
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] reachable
#   @return [String]
#
# @!attribute [rw] role_account
#   @return [Boolean]
#
# @!attribute [rw] smtp
#   @return [Object, nil]
#
# @!attribute [rw] suggestion
#   @return [String]
#
# @!attribute [rw] syntax
#   @return [Hash]
Advanced = Struct.new(
  :disposable,
  :email,
  :free,
  :gravatar,
  :has_mx_records,
  :id,
  :reachable,
  :role_account,
  :smtp,
  :suggestion,
  :syntax,
  keyword_init: true
)

# Request payload for Advanced#load.
#
# @!attribute [rw] id
#   @return [String]
AdvancedLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# ApiUsageStatsModel entity data model.
#
# @!attribute [rw] apiKey
#   @return [String]
#
# @!attribute [rw] apiType
#   @return [String]
#
# @!attribute [rw] authType
#   @return [String]
#
# @!attribute [rw] avgRequestDurationNanos
#   @return [Object, nil]
#
# @!attribute [rw] batchOperations
#   @return [Integer]
#
# @!attribute [rw] batchTokensConsumed
#   @return [Integer]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] hourBucket
#   @return [String]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] minRemainingQuota
#   @return [Object, nil]
#
# @!attribute [rw] peakRemainingQuota
#   @return [Object, nil]
#
# @!attribute [rw] planId
#   @return [String]
#
# @!attribute [rw] quotaConsumed
#   @return [Integer]
#
# @!attribute [rw] rateLimitedRequests
#   @return [Integer]
#
# @!attribute [rw] successfulRequests
#   @return [Integer]
#
# @!attribute [rw] totalRequests
#   @return [Integer]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ApiUsageStatsModel = Struct.new(
  :apiKey,
  :apiType,
  :authType,
  :avgRequestDurationNanos,
  :batchOperations,
  :batchTokensConsumed,
  :createdAt,
  :hourBucket,
  :id,
  :minRemainingQuota,
  :peakRemainingQuota,
  :planId,
  :quotaConsumed,
  :rateLimitedRequests,
  :successfulRequests,
  :totalRequests,
  :updatedAt,
  keyword_init: true
)

# Request payload for ApiUsageStatsModel#load.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] apiType
#   @return [String, nil]
#
# @!attribute [rw] authType
#   @return [String, nil]
#
# @!attribute [rw] avgRequestDurationNanos
#   @return [Object, nil]
#
# @!attribute [rw] batchOperations
#   @return [Integer, nil]
#
# @!attribute [rw] batchTokensConsumed
#   @return [Integer, nil]
#
# @!attribute [rw] createdAt
#   @return [Object, nil]
#
# @!attribute [rw] hourBucket
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Object]
#
# @!attribute [rw] minRemainingQuota
#   @return [Object, nil]
#
# @!attribute [rw] peakRemainingQuota
#   @return [Object, nil]
#
# @!attribute [rw] planId
#   @return [String, nil]
#
# @!attribute [rw] quotaConsumed
#   @return [Integer, nil]
#
# @!attribute [rw] rateLimitedRequests
#   @return [Integer, nil]
#
# @!attribute [rw] successfulRequests
#   @return [Integer, nil]
#
# @!attribute [rw] totalRequests
#   @return [Integer, nil]
#
# @!attribute [rw] updatedAt
#   @return [Object, nil]
ApiUsageStatsModelLoadMatch = Struct.new(
  :apiKey,
  :apiType,
  :authType,
  :avgRequestDurationNanos,
  :batchOperations,
  :batchTokensConsumed,
  :createdAt,
  :hourBucket,
  :id,
  :minRemainingQuota,
  :peakRemainingQuota,
  :planId,
  :quotaConsumed,
  :rateLimitedRequests,
  :successfulRequests,
  :totalRequests,
  :updatedAt,
  keyword_init: true
)

# ApiUsageSummary entity data model.
#
# @!attribute [rw] apiKey
#   @return [String]
#
# @!attribute [rw] apiType
#   @return [String]
#
# @!attribute [rw] avgRequestDurationMs
#   @return [Object, nil]
#
# @!attribute [rw] batchOperations
#   @return [Integer]
#
# @!attribute [rw] periodEnd
#   @return [String]
#
# @!attribute [rw] periodStart
#   @return [String]
#
# @!attribute [rw] quotaConsumed
#   @return [Integer]
#
# @!attribute [rw] rateLimitedRequests
#   @return [Integer]
#
# @!attribute [rw] successfulRequests
#   @return [Integer]
#
# @!attribute [rw] totalRequests
#   @return [Integer]
ApiUsageSummary = Struct.new(
  :apiKey,
  :apiType,
  :avgRequestDurationMs,
  :batchOperations,
  :periodEnd,
  :periodStart,
  :quotaConsumed,
  :rateLimitedRequests,
  :successfulRequests,
  :totalRequests,
  keyword_init: true
)

# Request payload for ApiUsageSummary#load.
#
# @!attribute [rw] apiKey
#   @return [String, nil]
#
# @!attribute [rw] apiType
#   @return [String, nil]
#
# @!attribute [rw] avgRequestDurationMs
#   @return [Object, nil]
#
# @!attribute [rw] batchOperations
#   @return [Integer, nil]
#
# @!attribute [rw] periodEnd
#   @return [String, nil]
#
# @!attribute [rw] periodStart
#   @return [String, nil]
#
# @!attribute [rw] quotaConsumed
#   @return [Integer, nil]
#
# @!attribute [rw] rateLimitedRequests
#   @return [Integer, nil]
#
# @!attribute [rw] successfulRequests
#   @return [Integer, nil]
#
# @!attribute [rw] totalRequests
#   @return [Integer, nil]
ApiUsageSummaryLoadMatch = Struct.new(
  :apiKey,
  :apiType,
  :avgRequestDurationMs,
  :batchOperations,
  :periodEnd,
  :periodStart,
  :quotaConsumed,
  :rateLimitedRequests,
  :successfulRequests,
  :totalRequests,
  keyword_init: true
)

# Asn entity data model.
#
# @!attribute [rw] asn
#   @return [Object, nil]
#
# @!attribute [rw] country
#   @return [Object, nil]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] is_datacenter
#   @return [Boolean]
#
# @!attribute [rw] network
#   @return [Object, nil]
#
# @!attribute [rw] organization
#   @return [Object, nil]
Asn = Struct.new(
  :asn,
  :country,
  :country_code,
  :id,
  :ip,
  :is_datacenter,
  :network,
  :organization,
  keyword_init: true
)

# Request payload for Asn#load.
#
# @!attribute [rw] id
#   @return [String]
AsnLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Batch entity data model.
#
# @!attribute [rw] emails
#   @return [Array]
#
# @!attribute [rw] ips
#   @return [Array]
Batch = Struct.new(
  :emails,
  :ips,
  keyword_init: true
)

# Request payload for Batch#create.
#
# @!attribute [rw] emails
#   @return [Array]
#
# @!attribute [rw] ips
#   @return [Array]
BatchCreateData = Struct.new(
  :emails,
  :ips,
  keyword_init: true
)

# BatchEmailValidationResponseDto entity data model.
#
# @!attribute [rw] failed_validations
#   @return [Integer, nil]
#
# @!attribute [rw] results
#   @return [Hash, nil]
#
# @!attribute [rw] successful_validations
#   @return [Integer, nil]
#
# @!attribute [rw] total_processed
#   @return [Integer, nil]
BatchEmailValidationResponseDto = Struct.new(
  :failed_validations,
  :results,
  :successful_validations,
  :total_processed,
  keyword_init: true
)

# Request payload for BatchEmailValidationResponseDto#create.
#
# @!attribute [rw] failed_validations
#   @return [Integer, nil]
#
# @!attribute [rw] results
#   @return [Hash, nil]
#
# @!attribute [rw] successful_validations
#   @return [Integer, nil]
#
# @!attribute [rw] total_processed
#   @return [Integer, nil]
BatchEmailValidationResponseDtoCreateData = Struct.new(
  :failed_validations,
  :results,
  :successful_validations,
  :total_processed,
  keyword_init: true
)

# CacheManagement entity data model.
class CacheManagement
end

# Request payload for CacheManagement#load.
#
# @!attribute [rw] domain
#   @return [String]
CacheManagementLoadMatch = Struct.new(
  :domain,
  keyword_init: true
)

# Request payload for CacheManagement#remove.
class CacheManagementRemoveMatch
end

# DomainAnalysi entity data model.
#
# @!attribute [rw] domains
#   @return [Array]
DomainAnalysi = Struct.new(
  :domains,
  keyword_init: true
)

# Request payload for DomainAnalysi#load.
#
# @!attribute [rw] domain
#   @return [String]
DomainAnalysiLoadMatch = Struct.new(
  :domain,
  keyword_init: true
)

# Request payload for DomainAnalysi#create.
#
# @!attribute [rw] domains
#   @return [Array]
DomainAnalysiCreateData = Struct.new(
  :domains,
  keyword_init: true
)

# DomainReputationV1Dto entity data model.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] is_disposable_email_domain
#   @return [Boolean]
#
# @!attribute [rw] is_valid
#   @return [Boolean]
#
# @!attribute [rw] resolved_ips
#   @return [Array]
#
# @!attribute [rw] threat
#   @return [Hash]
DomainReputationV1Dto = Struct.new(
  :domain,
  :is_disposable_email_domain,
  :is_valid,
  :resolved_ips,
  :threat,
  keyword_init: true
)

# Request payload for DomainReputationV1Dto#load.
#
# @!attribute [rw] domain
#   @return [String]
DomainReputationV1DtoLoadMatch = Struct.new(
  :domain,
  keyword_init: true
)

# Email entity data model.
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] email_factors
#   @return [NilClass]
#
# @!attribute [rw] has_mx_records
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip_factors
#   @return [NilClass]
#
# @!attribute [rw] is_disposable
#   @return [Boolean]
#
# @!attribute [rw] mx_records
#   @return [Array]
#
# @!attribute [rw] syntax
#   @return [Hash]
Email = Struct.new(
  :email,
  :email_factors,
  :has_mx_records,
  :id,
  :ip_factors,
  :is_disposable,
  :mx_records,
  :syntax,
  keyword_init: true
)

# Request payload for Email#load.
#
# @!attribute [rw] id
#   @return [String]
EmailLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Forward entity data model.
#
# @!attribute [rw] addresses
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
Forward = Struct.new(
  :addresses,
  :hostname,
  :id,
  keyword_init: true
)

# Request payload for Forward#load.
#
# @!attribute [rw] id
#   @return [String]
ForwardLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# IpInfoV0 entity data model.
class IpInfoV0
end

# Request payload for IpInfoV0#load.
#
# @!attribute [rw] ip
#   @return [String]
IpInfoV0LoadMatch = Struct.new(
  :ip,
  keyword_init: true
)

# IpReputation entity data model.
#
# @!attribute [rw] email_factors
#   @return [NilClass]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip_factors
#   @return [NilClass]
IpReputation = Struct.new(
  :email_factors,
  :id,
  :ip_factors,
  keyword_init: true
)

# Request payload for IpReputation#load.
#
# @!attribute [rw] id
#   @return [String]
IpReputationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Ipn entity data model.
#
# @!attribute [rw] asn
#   @return [Object, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] isp
#   @return [Object, nil]
#
# @!attribute [rw] location
#   @return [Hash]
#
# @!attribute [rw] suspicious_factors
#   @return [Hash]
Ipn = Struct.new(
  :asn,
  :ip,
  :isp,
  :location,
  :suspicious_factors,
  keyword_init: true
)

# Request payload for Ipn#load.
#
# @!attribute [rw] ip
#   @return [String]
IpnLoadMatch = Struct.new(
  :ip,
  keyword_init: true
)

# Mxn entity data model.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] mx_records
#   @return [Array]
Mxn = Struct.new(
  :domain,
  :mx_records,
  keyword_init: true
)

# Request payload for Mxn#load.
#
# @!attribute [rw] domain
#   @return [String]
MxnLoadMatch = Struct.new(
  :domain,
  keyword_init: true
)

# PaddleController entity data model.
class PaddleController
end

# Request payload for PaddleController#load.
class PaddleControllerLoadMatch
end

# Request payload for PaddleController#create.
class PaddleControllerCreateData
end

# RateLimitInfoDto entity data model.
#
# @!attribute [rw] email_api
#   @return [Hash]
#
# @!attribute [rw] interval_seconds
#   @return [Integer]
#
# @!attribute [rw] ip_api
#   @return [Hash]
#
# @!attribute [rw] next_renewal_date
#   @return [String, nil]
#
# @!attribute [rw] plan_id
#   @return [String]
#
# @!attribute [rw] plan_name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
RateLimitInfoDto = Struct.new(
  :email_api,
  :interval_seconds,
  :ip_api,
  :next_renewal_date,
  :plan_id,
  :plan_name,
  :status,
  keyword_init: true
)

# Request payload for RateLimitInfoDto#load.
#
# @!attribute [rw] email_api
#   @return [Hash, nil]
#
# @!attribute [rw] interval_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] ip_api
#   @return [Hash, nil]
#
# @!attribute [rw] next_renewal_date
#   @return [String, nil]
#
# @!attribute [rw] plan_id
#   @return [String, nil]
#
# @!attribute [rw] plan_name
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
RateLimitInfoDtoLoadMatch = Struct.new(
  :email_api,
  :interval_seconds,
  :ip_api,
  :next_renewal_date,
  :plan_id,
  :plan_name,
  :status,
  keyword_init: true
)

# Reverse entity data model.
#
# @!attribute [rw] hostname
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] ptr_record
#   @return [String, nil]
#
# @!attribute [rw] ttl
#   @return [Object, nil]
Reverse = Struct.new(
  :hostname,
  :id,
  :ip,
  :ptr_record,
  :ttl,
  keyword_init: true
)

# Request payload for Reverse#load.
#
# @!attribute [rw] id
#   @return [String]
ReverseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# RiskScore entity data model.
#
# @!attribute [rw] email_factors
#   @return [NilClass]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip_factors
#   @return [NilClass]
RiskScore = Struct.new(
  :email_factors,
  :id,
  :ip_factors,
  keyword_init: true
)

# Request payload for RiskScore#load.
#
# @!attribute [rw] id
#   @return [String]
RiskScoreLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Status entity data model.
class Status
end

# Request payload for Status#load.
class StatusLoadMatch
end

# Tor entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] is_tor
#   @return [Boolean]
#
# @!attribute [rw] tor_node_count
#   @return [Integer]
Tor = Struct.new(
  :id,
  :ip,
  :is_tor,
  :tor_node_count,
  keyword_init: true
)

# Request payload for Tor#load.
#
# @!attribute [rw] id
#   @return [String]
TorLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# UsageStatistic entity data model.
class UsageStatistic
end

# Request payload for UsageStatistic#load.
class UsageStatisticLoadMatch
end

# Whoi entity data model.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] error
#   @return [Object, nil]
#
# @!attribute [rw] expires_on
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name_servers
#   @return [Array]
#
# @!attribute [rw] raw
#   @return [String]
#
# @!attribute [rw] registered_on
#   @return [String, nil]
#
# @!attribute [rw] registrar
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Array]
#
# @!attribute [rw] updated_on
#   @return [String, nil]
Whoi = Struct.new(
  :domain,
  :error,
  :expires_on,
  :id,
  :name_servers,
  :raw,
  :registered_on,
  :registrar,
  :status,
  :updated_on,
  keyword_init: true
)

# Request payload for Whoi#load.
#
# @!attribute [rw] id
#   @return [String]
WhoiLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

