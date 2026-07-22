<?php
declare(strict_types=1);

// Typed models for the IpGeolocationApi4 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Advanced entity data model. */
class Advanced
{
    public bool $disposable;
    public string $email;
    public bool $free;
    public mixed $gravatar = null;
    public bool $has_mx_record;
    public string $reachable;
    public bool $role_account;
    public mixed $smtp = null;
    public string $suggestion;
    public array $syntax;
}

/** Request payload for Advanced#load. */
class AdvancedLoadMatch
{
    public string $id;
}

/** ApiUsageStatsModel entity data model. */
class ApiUsageStatsModel
{
    public string $api_key;
    public string $api_type;
    public string $auth_type;
    public mixed $avg_request_duration_nano = null;
    public int $batch_operation;
    public int $batch_tokens_consumed;
    public mixed $created_at = null;
    public string $hour_bucket;
    public mixed $id = null;
    public mixed $min_remaining_quota = null;
    public mixed $peak_remaining_quota = null;
    public string $plan_id;
    public int $quota_consumed;
    public int $rate_limited_request;
    public int $successful_request;
    public int $total_request;
    public mixed $updated_at = null;
}

/** Request payload for ApiUsageStatsModel#load. */
class ApiUsageStatsModelLoadMatch
{
    public ?string $api_key = null;
    public ?string $api_type = null;
    public ?string $auth_type = null;
    public mixed $avg_request_duration_nano = null;
    public ?int $batch_operation = null;
    public ?int $batch_tokens_consumed = null;
    public mixed $created_at = null;
    public ?string $hour_bucket = null;
    public mixed $id;
    public mixed $min_remaining_quota = null;
    public mixed $peak_remaining_quota = null;
    public ?string $plan_id = null;
    public ?int $quota_consumed = null;
    public ?int $rate_limited_request = null;
    public ?int $successful_request = null;
    public ?int $total_request = null;
    public mixed $updated_at = null;
}

/** ApiUsageSummary entity data model. */
class ApiUsageSummary
{
    public string $api_key;
    public string $api_type;
    public mixed $avg_request_duration_m = null;
    public int $batch_operation;
    public string $period_end;
    public string $period_start;
    public int $quota_consumed;
    public int $rate_limited_request;
    public int $successful_request;
    public int $total_request;
}

/** Request payload for ApiUsageSummary#load. */
class ApiUsageSummaryLoadMatch
{
    public ?string $api_key = null;
    public ?string $api_type = null;
    public mixed $avg_request_duration_m = null;
    public ?int $batch_operation = null;
    public ?string $period_end = null;
    public ?string $period_start = null;
    public ?int $quota_consumed = null;
    public ?int $rate_limited_request = null;
    public ?int $successful_request = null;
    public ?int $total_request = null;
}

/** Asn entity data model. */
class Asn
{
    public mixed $asn = null;
    public mixed $country = null;
    public ?string $country_code = null;
    public string $ip;
    public bool $is_datacenter;
    public mixed $network = null;
    public mixed $organization = null;
}

/** Request payload for Asn#load. */
class AsnLoadMatch
{
    public string $id;
}

/** Batch entity data model. */
class Batch
{
    public array $email;
    public int $failed_lookup;
    public int $failed_validation;
    public array $ips;
    public array $result;
    public int $successful_lookup;
    public int $successful_validation;
    public int $total_processed;
}

/** Request payload for Batch#create. */
class BatchCreateData
{
    public array $email;
    public int $failed_lookup;
    public int $failed_validation;
    public array $ips;
    public array $result;
    public int $successful_lookup;
    public int $successful_validation;
    public int $total_processed;
}

/** BatchEmailValidationResponseDto entity data model. */
class BatchEmailValidationResponseDto
{
    public int $failed_validation;
    public array $result;
    public int $successful_validation;
    public int $total_processed;
}

/** Request payload for BatchEmailValidationResponseDto#create. */
class BatchEmailValidationResponseDtoCreateData
{
    public int $failed_validation;
    public array $result;
    public int $successful_validation;
    public int $total_processed;
}

/** CacheManagement entity data model. */
class CacheManagement
{
}

/** Request payload for CacheManagement#load. */
class CacheManagementLoadMatch
{
    public ?string $domain = null;
}

/** Request payload for CacheManagement#remove. */
class CacheManagementRemoveMatch
{
}

/** DomainAnalysi entity data model. */
class DomainAnalysi
{
    public array $domain;
}

/** Request payload for DomainAnalysi#load. */
class DomainAnalysiLoadMatch
{
    public string $domain;
}

/** Request payload for DomainAnalysi#create. */
class DomainAnalysiCreateData
{
    public array $domain;
}

/** DomainReputationV1Dto entity data model. */
class DomainReputationV1Dto
{
    public string $domain;
    public bool $is_disposable_email_domain;
    public bool $is_valid;
    public array $resolved_ip;
    public array $threat;
}

/** Request payload for DomainReputationV1Dto#load. */
class DomainReputationV1DtoLoadMatch
{
    public string $domain;
}

/** Email entity data model. */
class Email
{
    public string $email;
    public array $factor;
    public bool $has_mx_record;
    public mixed $ip = null;
    public bool $is_disposable;
    public array $mx_record;
    public string $risk_level;
    public float $score;
    public array $syntax;
}

/** Request payload for Email#load. */
class EmailLoadMatch
{
    public string $id;
}

/** Forward entity data model. */
class Forward
{
    public array $address;
    public string $hostname;
}

/** Request payload for Forward#load. */
class ForwardLoadMatch
{
    public string $id;
}

/** IpInfoV0 entity data model. */
class IpInfoV0
{
}

/** Request payload for IpInfoV0#load. */
class IpInfoV0LoadMatch
{
    public ?string $ip = null;
}

/** IpReputation entity data model. */
class IpReputation
{
    public mixed $email = null;
    public array $factor;
    public mixed $ip = null;
    public string $risk_level;
    public float $score;
}

/** Request payload for IpReputation#load. */
class IpReputationLoadMatch
{
    public string $id;
}

/** Ipn entity data model. */
class Ipn
{
    public mixed $asn = null;
    public string $ip;
    public mixed $isp = null;
    public array $location;
    public array $suspicious_factor;
}

/** Request payload for Ipn#load. */
class IpnLoadMatch
{
    public mixed $asn = null;
    public ?string $ip = null;
    public mixed $isp = null;
    public ?array $location = null;
    public ?array $suspicious_factor = null;
}

/** Ipn2 entity data model. */
class Ipn2
{
    public mixed $asn = null;
    public string $ip;
    public mixed $isp = null;
    public array $location;
    public array $suspicious_factor;
}

/** Request payload for Ipn2#load. */
class Ipn2LoadMatch
{
    public string $ip;
}

/** Mxn entity data model. */
class Mxn
{
    public string $domain;
    public array $mx_record;
}

/** Request payload for Mxn#load. */
class MxnLoadMatch
{
    public string $domain;
}

/** PaddleController entity data model. */
class PaddleController
{
}

/** Request payload for PaddleController#load. */
class PaddleControllerLoadMatch
{
}

/** Request payload for PaddleController#create. */
class PaddleControllerCreateData
{
}

/** RateLimitInfoDto entity data model. */
class RateLimitInfoDto
{
    public array $email_api;
    public int $interval_second;
    public array $ip_api;
    public ?string $next_renewal_date = null;
    public string $plan_id;
    public ?string $plan_name = null;
    public mixed $status = null;
}

/** Request payload for RateLimitInfoDto#load. */
class RateLimitInfoDtoLoadMatch
{
    public ?array $email_api = null;
    public ?int $interval_second = null;
    public ?array $ip_api = null;
    public ?string $next_renewal_date = null;
    public ?string $plan_id = null;
    public ?string $plan_name = null;
    public mixed $status = null;
}

/** Reverse entity data model. */
class Reverse
{
    public mixed $hostname = null;
    public string $ip;
    public ?string $ptr_record = null;
    public mixed $ttl = null;
}

/** Request payload for Reverse#load. */
class ReverseLoadMatch
{
    public string $id;
}

/** RiskScore entity data model. */
class RiskScore
{
    public mixed $email = null;
    public array $factor;
    public mixed $ip = null;
    public string $risk_level;
    public float $score;
}

/** Request payload for RiskScore#load. */
class RiskScoreLoadMatch
{
    public ?string $id = null;
}

/** Status entity data model. */
class Status
{
}

/** Request payload for Status#load. */
class StatusLoadMatch
{
}

/** Tor entity data model. */
class Tor
{
    public string $ip;
    public bool $is_tor;
    public int $tor_node_count;
}

/** Request payload for Tor#load. */
class TorLoadMatch
{
    public string $id;
}

/** UsageStatistic entity data model. */
class UsageStatistic
{
}

/** Request payload for UsageStatistic#load. */
class UsageStatisticLoadMatch
{
}

/** Whoi entity data model. */
class Whoi
{
    public string $domain;
    public mixed $error = null;
    public ?string $expires_on = null;
    public array $name_server;
    public string $raw;
    public ?string $registered_on = null;
    public mixed $registrar = null;
    public array $status;
    public ?string $updated_on = null;
}

/** Request payload for Whoi#load. */
class WhoiLoadMatch
{
    public string $id;
}

