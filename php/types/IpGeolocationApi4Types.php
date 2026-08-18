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
    public bool $has_mx_records;
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
    public string $apiKey;
    public string $apiType;
    public string $authType;
    public mixed $avgRequestDurationNanos = null;
    public int $batchOperations;
    public int $batchTokensConsumed;
    public mixed $createdAt = null;
    public string $hourBucket;
    public mixed $id = null;
    public mixed $minRemainingQuota = null;
    public mixed $peakRemainingQuota = null;
    public string $planId;
    public int $quotaConsumed;
    public int $rateLimitedRequests;
    public int $successfulRequests;
    public int $totalRequests;
    public mixed $updatedAt = null;
}

/** Request payload for ApiUsageStatsModel#load. */
class ApiUsageStatsModelLoadMatch
{
    public ?string $apiKey = null;
    public ?string $apiType = null;
    public ?string $authType = null;
    public mixed $avgRequestDurationNanos = null;
    public ?int $batchOperations = null;
    public ?int $batchTokensConsumed = null;
    public mixed $createdAt = null;
    public ?string $hourBucket = null;
    public mixed $id;
    public mixed $minRemainingQuota = null;
    public mixed $peakRemainingQuota = null;
    public ?string $planId = null;
    public ?int $quotaConsumed = null;
    public ?int $rateLimitedRequests = null;
    public ?int $successfulRequests = null;
    public ?int $totalRequests = null;
    public mixed $updatedAt = null;
}

/** ApiUsageSummary entity data model. */
class ApiUsageSummary
{
    public string $apiKey;
    public string $apiType;
    public mixed $avgRequestDurationMs = null;
    public int $batchOperations;
    public string $periodEnd;
    public string $periodStart;
    public int $quotaConsumed;
    public int $rateLimitedRequests;
    public int $successfulRequests;
    public int $totalRequests;
}

/** Request payload for ApiUsageSummary#load. */
class ApiUsageSummaryLoadMatch
{
    public ?string $apiKey = null;
    public ?string $apiType = null;
    public mixed $avgRequestDurationMs = null;
    public ?int $batchOperations = null;
    public ?string $periodEnd = null;
    public ?string $periodStart = null;
    public ?int $quotaConsumed = null;
    public ?int $rateLimitedRequests = null;
    public ?int $successfulRequests = null;
    public ?int $totalRequests = null;
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
    public array $emails;
    public array $ips;
}

/** Request payload for Batch#create. */
class BatchCreateData
{
    public array $emails;
    public array $ips;
}

/** BatchEmailValidationResponseDto entity data model. */
class BatchEmailValidationResponseDto
{
    public ?int $failed_validations = null;
    public ?array $results = null;
    public ?int $successful_validations = null;
    public ?int $total_processed = null;
}

/** Request payload for BatchEmailValidationResponseDto#create. */
class BatchEmailValidationResponseDtoCreateData
{
    public ?int $failed_validations = null;
    public ?array $results = null;
    public ?int $successful_validations = null;
    public ?int $total_processed = null;
}

/** CacheManagement entity data model. */
class CacheManagement
{
}

/** Request payload for CacheManagement#load. */
class CacheManagementLoadMatch
{
    public string $domain;
}

/** Request payload for CacheManagement#remove. */
class CacheManagementRemoveMatch
{
}

/** DomainAnalysi entity data model. */
class DomainAnalysi
{
    public array $domains;
}

/** Request payload for DomainAnalysi#load. */
class DomainAnalysiLoadMatch
{
    public string $domain;
}

/** Request payload for DomainAnalysi#create. */
class DomainAnalysiCreateData
{
    public array $domains;
}

/** DomainReputationV1Dto entity data model. */
class DomainReputationV1Dto
{
    public string $domain;
    public bool $is_disposable_email_domain;
    public bool $is_valid;
    public array $resolved_ips;
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
    public mixed $email_factors;
    public bool $has_mx_records;
    public mixed $ip_factors;
    public bool $is_disposable;
    public array $mx_records;
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
    public array $addresses;
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
    public string $ip;
}

/** IpReputation entity data model. */
class IpReputation
{
    public mixed $email_factors;
    public mixed $ip_factors;
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
    public array $suspicious_factors;
}

/** Request payload for Ipn#load. */
class IpnLoadMatch
{
    public string $ip;
}

/** Mxn entity data model. */
class Mxn
{
    public string $domain;
    public array $mx_records;
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
    public int $interval_seconds;
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
    public ?int $interval_seconds = null;
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
    public mixed $email_factors;
    public mixed $ip_factors;
}

/** Request payload for RiskScore#load. */
class RiskScoreLoadMatch
{
    public string $id;
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
    public array $name_servers;
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

