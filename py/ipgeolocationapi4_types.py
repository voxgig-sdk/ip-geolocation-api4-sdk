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
    has_mx_record: bool
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
    api_key: str
    api_type: str
    auth_type: str
    batch_operation: int
    batch_tokens_consumed: int
    hour_bucket: str
    plan_id: str
    quota_consumed: int
    rate_limited_request: int
    successful_request: int
    total_request: int


class ApiUsageStatsModel(ApiUsageStatsModelRequired, total=False):
    avg_request_duration_nano: Any
    created_at: Any
    id: Any
    min_remaining_quota: Any
    peak_remaining_quota: Any
    updated_at: Any


class ApiUsageStatsModelLoadMatchRequired(TypedDict):
    id: Any


class ApiUsageStatsModelLoadMatch(ApiUsageStatsModelLoadMatchRequired, total=False):
    api_key: str
    api_type: str
    auth_type: str
    avg_request_duration_nano: Any
    batch_operation: int
    batch_tokens_consumed: int
    created_at: Any
    hour_bucket: str
    min_remaining_quota: Any
    peak_remaining_quota: Any
    plan_id: str
    quota_consumed: int
    rate_limited_request: int
    successful_request: int
    total_request: int
    updated_at: Any


class ApiUsageSummaryRequired(TypedDict):
    api_key: str
    api_type: str
    batch_operation: int
    period_end: str
    period_start: str
    quota_consumed: int
    rate_limited_request: int
    successful_request: int
    total_request: int


class ApiUsageSummary(ApiUsageSummaryRequired, total=False):
    avg_request_duration_m: Any


class ApiUsageSummaryLoadMatch(TypedDict, total=False):
    api_key: str
    api_type: str
    avg_request_duration_m: Any
    batch_operation: int
    period_end: str
    period_start: str
    quota_consumed: int
    rate_limited_request: int
    successful_request: int
    total_request: int


class AsnRequired(TypedDict):
    ip: str
    is_datacenter: bool


class Asn(AsnRequired, total=False):
    asn: Any
    country: Any
    country_code: str
    network: Any
    organization: Any


class AsnLoadMatch(TypedDict):
    id: str


class Batch(TypedDict):
    email: list
    failed_lookup: int
    failed_validation: int
    ips: list
    result: dict
    successful_lookup: int
    successful_validation: int
    total_processed: int


class BatchCreateData(TypedDict):
    email: list
    failed_lookup: int
    failed_validation: int
    ips: list
    result: dict
    successful_lookup: int
    successful_validation: int
    total_processed: int


class BatchEmailValidationResponseDto(TypedDict):
    failed_validation: int
    result: dict
    successful_validation: int
    total_processed: int


class BatchEmailValidationResponseDtoCreateData(TypedDict):
    failed_validation: int
    result: dict
    successful_validation: int
    total_processed: int


class CacheManagement(TypedDict):
    pass


class CacheManagementLoadMatch(TypedDict, total=False):
    domain: str


class CacheManagementRemoveMatch(TypedDict):
    pass


class DomainAnalysi(TypedDict):
    domain: list


class DomainAnalysiLoadMatch(TypedDict):
    domain: str


class DomainAnalysiCreateData(TypedDict):
    domain: list


class DomainReputationV1Dto(TypedDict):
    domain: str
    is_disposable_email_domain: bool
    is_valid: bool
    resolved_ip: list
    threat: dict


class DomainReputationV1DtoLoadMatch(TypedDict):
    domain: str


class EmailRequired(TypedDict):
    email: str
    factor: dict
    has_mx_record: bool
    is_disposable: bool
    mx_record: list
    risk_level: str
    score: float
    syntax: dict


class Email(EmailRequired, total=False):
    ip: Any


class EmailLoadMatch(TypedDict):
    id: str


class Forward(TypedDict):
    address: list
    hostname: str


class ForwardLoadMatch(TypedDict):
    id: str


class IpInfoV0(TypedDict):
    pass


class IpInfoV0LoadMatch(TypedDict, total=False):
    ip: str


class IpReputationRequired(TypedDict):
    factor: dict
    risk_level: str
    score: float


class IpReputation(IpReputationRequired, total=False):
    email: Any
    ip: Any


class IpReputationLoadMatch(TypedDict):
    id: str


class IpnRequired(TypedDict):
    ip: str
    location: dict
    suspicious_factor: dict


class Ipn(IpnRequired, total=False):
    asn: Any
    isp: Any


class IpnLoadMatch(TypedDict, total=False):
    asn: Any
    ip: str
    isp: Any
    location: dict
    suspicious_factor: dict


class Ipn2Required(TypedDict):
    ip: str
    location: dict
    suspicious_factor: dict


class Ipn2(Ipn2Required, total=False):
    asn: Any
    isp: Any


class Ipn2LoadMatch(TypedDict):
    ip: str


class Mxn(TypedDict):
    domain: str
    mx_record: list


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
    interval_second: int
    ip_api: dict
    plan_id: str


class RateLimitInfoDto(RateLimitInfoDtoRequired, total=False):
    next_renewal_date: str
    plan_name: str
    status: Any


class RateLimitInfoDtoLoadMatch(TypedDict, total=False):
    email_api: dict
    interval_second: int
    ip_api: dict
    next_renewal_date: str
    plan_id: str
    plan_name: str
    status: Any


class ReverseRequired(TypedDict):
    ip: str


class Reverse(ReverseRequired, total=False):
    hostname: Any
    ptr_record: str
    ttl: Any


class ReverseLoadMatch(TypedDict):
    id: str


class RiskScoreRequired(TypedDict):
    factor: dict
    risk_level: str
    score: float


class RiskScore(RiskScoreRequired, total=False):
    email: Any
    ip: Any


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
    name_server: list
    raw: str
    status: list


class Whoi(WhoiRequired, total=False):
    error: Any
    expires_on: str
    registered_on: str
    registrar: Any
    updated_on: str


class WhoiLoadMatch(TypedDict):
    id: str
