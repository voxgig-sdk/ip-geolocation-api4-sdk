# Typed models for the IpGeolocationApi4 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AdvancedRequired(TypedDict):
    disposable: bool
    email: str
    free: bool
    has_mx_records: bool
    reachable: str
    role_account: bool
    suggestion: str
    syntax: dict


class Advanced(AdvancedRequired, total=False):
    gravatar: Any
    smtp: Any


class AdvancedLoadMatch(TypedDict):
    id: str


class ApiUsageStatsModelRequired(TypedDict):
    apiKey: str
    apiType: str
    authType: str
    batchOperations: int
    batchTokensConsumed: int
    hourBucket: str
    planId: str
    quotaConsumed: int
    rateLimitedRequests: int
    successfulRequests: int
    totalRequests: int


class ApiUsageStatsModel(ApiUsageStatsModelRequired, total=False):
    avgRequestDurationNanos: int | None
    createdAt: str | None
    id: int | None
    minRemainingQuota: int | None
    peakRemainingQuota: int | None
    updatedAt: str | None


class ApiUsageStatsModelLoadMatchRequired(TypedDict):
    id: int | None


class ApiUsageStatsModelLoadMatch(ApiUsageStatsModelLoadMatchRequired, total=False):
    apiKey: str
    apiType: str
    authType: str
    avgRequestDurationNanos: int | None
    batchOperations: int
    batchTokensConsumed: int
    createdAt: str | None
    hourBucket: str
    minRemainingQuota: int | None
    peakRemainingQuota: int | None
    planId: str
    quotaConsumed: int
    rateLimitedRequests: int
    successfulRequests: int
    totalRequests: int
    updatedAt: str | None


class ApiUsageSummaryRequired(TypedDict):
    apiKey: str
    apiType: str
    batchOperations: int
    periodEnd: str
    periodStart: str
    quotaConsumed: int
    rateLimitedRequests: int
    successfulRequests: int
    totalRequests: int


class ApiUsageSummary(ApiUsageSummaryRequired, total=False):
    avgRequestDurationMs: float | None


class ApiUsageSummaryLoadMatch(TypedDict, total=False):
    apiKey: str
    apiType: str
    avgRequestDurationMs: float | None
    batchOperations: int
    periodEnd: str
    periodStart: str
    quotaConsumed: int
    rateLimitedRequests: int
    successfulRequests: int
    totalRequests: int


class AsnRequired(TypedDict):
    ip: str
    is_datacenter: bool


class Asn(AsnRequired, total=False):
    asn: int | None
    country: str | None
    country_code: str
    network: str | None
    organization: str | None


class AsnLoadMatch(TypedDict):
    id: str


class Batch(TypedDict):
    emails: list
    ips: list


class BatchCreateData(TypedDict):
    emails: list
    ips: list


class BatchEmailValidationResponseDto(TypedDict, total=False):
    failed_validations: int
    results: dict
    successful_validations: int
    total_processed: int


class BatchEmailValidationResponseDtoCreateData(TypedDict, total=False):
    failed_validations: int
    results: dict
    successful_validations: int
    total_processed: int


class CacheManagement(TypedDict):
    pass


class CacheManagementLoadMatch(TypedDict, total=False):
    domain: str


class CacheManagementRemoveMatch(TypedDict):
    pass


class DomainAnalysi(TypedDict):
    domains: list


class DomainAnalysiLoadMatch(TypedDict):
    domain: str


class DomainAnalysiCreateData(TypedDict):
    domains: list


class DomainReputationV1Dto(TypedDict):
    domain: str
    is_disposable_email_domain: bool
    is_valid: bool
    resolved_ips: list
    threat: dict


class DomainReputationV1DtoLoadMatch(TypedDict):
    domain: str


class Email(TypedDict):
    email: str
    email_factors: None
    has_mx_records: bool
    ip_factors: None
    is_disposable: bool
    mx_records: list
    syntax: dict


class EmailLoadMatch(TypedDict):
    id: str


class Forward(TypedDict):
    addresses: list
    hostname: str


class ForwardLoadMatch(TypedDict):
    id: str


class IpInfoV0(TypedDict):
    pass


class IpInfoV0LoadMatch(TypedDict, total=False):
    ip: str


class IpReputation(TypedDict):
    email_factors: None
    ip_factors: None


class IpReputationLoadMatch(TypedDict):
    id: str


class IpnRequired(TypedDict):
    ip: str
    location: dict
    suspicious_factors: dict


class Ipn(IpnRequired, total=False):
    asn: str | None
    isp: str | None


class IpnLoadMatch(TypedDict, total=False):
    ip: str


class Mxn(TypedDict):
    domain: str
    mx_records: list


class MxnLoadMatch(TypedDict):
    domain: str


class PaddleController(TypedDict):
    pass


class PaddleControllerLoadMatch(TypedDict):
    pass


class PaddleControllerCreateData(TypedDict):
    pass


class RateLimitInfoDtoRequired(TypedDict):
    email_api: dict
    interval_seconds: int
    ip_api: dict
    plan_id: str


class RateLimitInfoDto(RateLimitInfoDtoRequired, total=False):
    next_renewal_date: str
    plan_name: str
    status: str | None


class RateLimitInfoDtoLoadMatch(TypedDict, total=False):
    email_api: dict
    interval_seconds: int
    ip_api: dict
    next_renewal_date: str
    plan_id: str
    plan_name: str
    status: str | None


class ReverseRequired(TypedDict):
    ip: str


class Reverse(ReverseRequired, total=False):
    hostname: str | None
    ptr_record: str
    ttl: int | None


class ReverseLoadMatch(TypedDict):
    id: str


class RiskScore(TypedDict):
    email_factors: None
    ip_factors: None


class RiskScoreLoadMatch(TypedDict, total=False):
    id: str


class Status(TypedDict):
    pass


class StatusLoadMatch(TypedDict):
    pass


class Tor(TypedDict):
    ip: str
    is_tor: bool
    tor_node_count: int


class TorLoadMatch(TypedDict):
    id: str


class UsageStatistic(TypedDict):
    pass


class UsageStatisticLoadMatch(TypedDict):
    pass


class WhoiRequired(TypedDict):
    domain: str
    name_servers: list
    raw: str
    status: list


class Whoi(WhoiRequired, total=False):
    error: str | None
    expires_on: str
    registered_on: str
    registrar: Any
    updated_on: str


class WhoiLoadMatch(TypedDict):
    id: str
