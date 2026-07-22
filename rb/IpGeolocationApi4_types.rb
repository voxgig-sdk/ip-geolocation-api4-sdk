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
# @!attribute [rw] has_mx_record
#   @return [Boolean]
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
  :has_mx_record,
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
# @!attribute [rw] api_key
#   @return [String]
#
# @!attribute [rw] api_type
#   @return [String]
#
# @!attribute [rw] auth_type
#   @return [String]
#
# @!attribute [rw] avg_request_duration_nano
#   @return [Object, nil]
#
# @!attribute [rw] batch_operation
#   @return [Integer]
#
# @!attribute [rw] batch_tokens_consumed
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [Object, nil]
#
# @!attribute [rw] hour_bucket
#   @return [String]
#
# @!attribute [rw] id
#   @return [Object, nil]
#
# @!attribute [rw] min_remaining_quota
#   @return [Object, nil]
#
# @!attribute [rw] peak_remaining_quota
#   @return [Object, nil]
#
# @!attribute [rw] plan_id
#   @return [String]
#
# @!attribute [rw] quota_consumed
#   @return [Integer]
#
# @!attribute [rw] rate_limited_request
#   @return [Integer]
#
# @!attribute [rw] successful_request
#   @return [Integer]
#
# @!attribute [rw] total_request
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
ApiUsageStatsModel = Struct.new(
  :api_key,
  :api_type,
  :auth_type,
  :avg_request_duration_nano,
  :batch_operation,
  :batch_tokens_consumed,
  :created_at,
  :hour_bucket,
  :id,
  :min_remaining_quota,
  :peak_remaining_quota,
  :plan_id,
  :quota_consumed,
  :rate_limited_request,
  :successful_request,
  :total_request,
  :updated_at,
  keyword_init: true
)

# Request payload for ApiUsageStatsModel#load.
#
# @!attribute [rw] api_key
#   @return [String, nil]
#
# @!attribute [rw] api_type
#   @return [String, nil]
#
# @!attribute [rw] auth_type
#   @return [String, nil]
#
# @!attribute [rw] avg_request_duration_nano
#   @return [Object, nil]
#
# @!attribute [rw] batch_operation
#   @return [Integer, nil]
#
# @!attribute [rw] batch_tokens_consumed
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [Object, nil]
#
# @!attribute [rw] hour_bucket
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Object]
#
# @!attribute [rw] min_remaining_quota
#   @return [Object, nil]
#
# @!attribute [rw] peak_remaining_quota
#   @return [Object, nil]
#
# @!attribute [rw] plan_id
#   @return [String, nil]
#
# @!attribute [rw] quota_consumed
#   @return [Integer, nil]
#
# @!attribute [rw] rate_limited_request
#   @return [Integer, nil]
#
# @!attribute [rw] successful_request
#   @return [Integer, nil]
#
# @!attribute [rw] total_request
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [Object, nil]
ApiUsageStatsModelLoadMatch = Struct.new(
  :api_key,
  :api_type,
  :auth_type,
  :avg_request_duration_nano,
  :batch_operation,
  :batch_tokens_consumed,
  :created_at,
  :hour_bucket,
  :id,
  :min_remaining_quota,
  :peak_remaining_quota,
  :plan_id,
  :quota_consumed,
  :rate_limited_request,
  :successful_request,
  :total_request,
  :updated_at,
  keyword_init: true
)

# ApiUsageSummary entity data model.
#
# @!attribute [rw] api_key
#   @return [String]
#
# @!attribute [rw] api_type
#   @return [String]
#
# @!attribute [rw] avg_request_duration_m
#   @return [Object, nil]
#
# @!attribute [rw] batch_operation
#   @return [Integer]
#
# @!attribute [rw] period_end
#   @return [String]
#
# @!attribute [rw] period_start
#   @return [String]
#
# @!attribute [rw] quota_consumed
#   @return [Integer]
#
# @!attribute [rw] rate_limited_request
#   @return [Integer]
#
# @!attribute [rw] successful_request
#   @return [Integer]
#
# @!attribute [rw] total_request
#   @return [Integer]
ApiUsageSummary = Struct.new(
  :api_key,
  :api_type,
  :avg_request_duration_m,
  :batch_operation,
  :period_end,
  :period_start,
  :quota_consumed,
  :rate_limited_request,
  :successful_request,
  :total_request,
  keyword_init: true
)

# Request payload for ApiUsageSummary#load.
#
# @!attribute [rw] api_key
#   @return [String, nil]
#
# @!attribute [rw] api_type
#   @return [String, nil]
#
# @!attribute [rw] avg_request_duration_m
#   @return [Object, nil]
#
# @!attribute [rw] batch_operation
#   @return [Integer, nil]
#
# @!attribute [rw] period_end
#   @return [String, nil]
#
# @!attribute [rw] period_start
#   @return [String, nil]
#
# @!attribute [rw] quota_consumed
#   @return [Integer, nil]
#
# @!attribute [rw] rate_limited_request
#   @return [Integer, nil]
#
# @!attribute [rw] successful_request
#   @return [Integer, nil]
#
# @!attribute [rw] total_request
#   @return [Integer, nil]
ApiUsageSummaryLoadMatch = Struct.new(
  :api_key,
  :api_type,
  :avg_request_duration_m,
  :batch_operation,
  :period_end,
  :period_start,
  :quota_consumed,
  :rate_limited_request,
  :successful_request,
  :total_request,
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
# @!attribute [rw] email
#   @return [Array]
#
# @!attribute [rw] failed_lookup
#   @return [Integer]
#
# @!attribute [rw] failed_validation
#   @return [Integer]
#
# @!attribute [rw] ips
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] successful_lookup
#   @return [Integer]
#
# @!attribute [rw] successful_validation
#   @return [Integer]
#
# @!attribute [rw] total_processed
#   @return [Integer]
Batch = Struct.new(
  :email,
  :failed_lookup,
  :failed_validation,
  :ips,
  :result,
  :successful_lookup,
  :successful_validation,
  :total_processed,
  keyword_init: true
)

# Request payload for Batch#create.
#
# @!attribute [rw] email
#   @return [Array]
#
# @!attribute [rw] failed_lookup
#   @return [Integer]
#
# @!attribute [rw] failed_validation
#   @return [Integer]
#
# @!attribute [rw] ips
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] successful_lookup
#   @return [Integer]
#
# @!attribute [rw] successful_validation
#   @return [Integer]
#
# @!attribute [rw] total_processed
#   @return [Integer]
BatchCreateData = Struct.new(
  :email,
  :failed_lookup,
  :failed_validation,
  :ips,
  :result,
  :successful_lookup,
  :successful_validation,
  :total_processed,
  keyword_init: true
)

# BatchEmailValidationResponseDto entity data model.
#
# @!attribute [rw] failed_validation
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] successful_validation
#   @return [Integer]
#
# @!attribute [rw] total_processed
#   @return [Integer]
BatchEmailValidationResponseDto = Struct.new(
  :failed_validation,
  :result,
  :successful_validation,
  :total_processed,
  keyword_init: true
)

# Request payload for BatchEmailValidationResponseDto#create.
#
# @!attribute [rw] failed_validation
#   @return [Integer]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] successful_validation
#   @return [Integer]
#
# @!attribute [rw] total_processed
#   @return [Integer]
BatchEmailValidationResponseDtoCreateData = Struct.new(
  :failed_validation,
  :result,
  :successful_validation,
  :total_processed,
  keyword_init: true
)

# CacheManagement entity data model.
class CacheManagement
end

# Request payload for CacheManagement#load.
#
# @!attribute [rw] domain
#   @return [String, nil]
CacheManagementLoadMatch = Struct.new(
  :domain,
  keyword_init: true
)

# Request payload for CacheManagement#remove.
class CacheManagementRemoveMatch
end

# DomainAnalysi entity data model.
#
# @!attribute [rw] domain
#   @return [Array]
DomainAnalysi = Struct.new(
  :domain,
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
# @!attribute [rw] domain
#   @return [Array]
DomainAnalysiCreateData = Struct.new(
  :domain,
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
# @!attribute [rw] resolved_ip
#   @return [Array]
#
# @!attribute [rw] threat
#   @return [Hash]
DomainReputationV1Dto = Struct.new(
  :domain,
  :is_disposable_email_domain,
  :is_valid,
  :resolved_ip,
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
# @!attribute [rw] factor
#   @return [Hash]
#
# @!attribute [rw] has_mx_record
#   @return [Boolean]
#
# @!attribute [rw] ip
#   @return [Object, nil]
#
# @!attribute [rw] is_disposable
#   @return [Boolean]
#
# @!attribute [rw] mx_record
#   @return [Array]
#
# @!attribute [rw] risk_level
#   @return [String]
#
# @!attribute [rw] score
#   @return [Float]
#
# @!attribute [rw] syntax
#   @return [Hash]
Email = Struct.new(
  :email,
  :factor,
  :has_mx_record,
  :ip,
  :is_disposable,
  :mx_record,
  :risk_level,
  :score,
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
# @!attribute [rw] address
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String]
Forward = Struct.new(
  :address,
  :hostname,
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
#   @return [String, nil]
IpInfoV0LoadMatch = Struct.new(
  :ip,
  keyword_init: true
)

# IpReputation entity data model.
#
# @!attribute [rw] email
#   @return [Object, nil]
#
# @!attribute [rw] factor
#   @return [Hash]
#
# @!attribute [rw] ip
#   @return [Object, nil]
#
# @!attribute [rw] risk_level
#   @return [String]
#
# @!attribute [rw] score
#   @return [Float]
IpReputation = Struct.new(
  :email,
  :factor,
  :ip,
  :risk_level,
  :score,
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
# @!attribute [rw] suspicious_factor
#   @return [Hash]
Ipn = Struct.new(
  :asn,
  :ip,
  :isp,
  :location,
  :suspicious_factor,
  keyword_init: true
)

# Request payload for Ipn#load.
#
# @!attribute [rw] asn
#   @return [Object, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] isp
#   @return [Object, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] suspicious_factor
#   @return [Hash, nil]
IpnLoadMatch = Struct.new(
  :asn,
  :ip,
  :isp,
  :location,
  :suspicious_factor,
  keyword_init: true
)

# Ipn2 entity data model.
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
# @!attribute [rw] suspicious_factor
#   @return [Hash]
Ipn2 = Struct.new(
  :asn,
  :ip,
  :isp,
  :location,
  :suspicious_factor,
  keyword_init: true
)

# Request payload for Ipn2#load.
#
# @!attribute [rw] ip
#   @return [String]
Ipn2LoadMatch = Struct.new(
  :ip,
  keyword_init: true
)

# Mxn entity data model.
#
# @!attribute [rw] domain
#   @return [String]
#
# @!attribute [rw] mx_record
#   @return [Array]
Mxn = Struct.new(
  :domain,
  :mx_record,
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
# @!attribute [rw] interval_second
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
  :interval_second,
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
# @!attribute [rw] interval_second
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
  :interval_second,
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
# @!attribute [rw] email
#   @return [Object, nil]
#
# @!attribute [rw] factor
#   @return [Hash]
#
# @!attribute [rw] ip
#   @return [Object, nil]
#
# @!attribute [rw] risk_level
#   @return [String]
#
# @!attribute [rw] score
#   @return [Float]
RiskScore = Struct.new(
  :email,
  :factor,
  :ip,
  :risk_level,
  :score,
  keyword_init: true
)

# Request payload for RiskScore#load.
#
# @!attribute [rw] id
#   @return [String, nil]
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
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] is_tor
#   @return [Boolean]
#
# @!attribute [rw] tor_node_count
#   @return [Integer]
Tor = Struct.new(
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
# @!attribute [rw] name_server
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
  :name_server,
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

