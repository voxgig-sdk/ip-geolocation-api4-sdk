export interface Advanced {
    disposable: boolean;
    email: string;
    free: boolean;
    gravatar?: any;
    has_mx_records: boolean;
    id?: string;
    reachable: string;
    role_account: boolean;
    smtp?: any;
    suggestion: string;
    syntax: Record<string, any>;
}
export interface AdvancedLoadMatch {
    id: string;
}
export interface ApiUsageStatsModel {
    apiKey: string;
    apiType: string;
    authType: string;
    avgRequestDurationNanos?: number | null;
    batchOperations: number;
    batchTokensConsumed: number;
    createdAt?: string | null;
    hourBucket: string;
    id?: number | null;
    minRemainingQuota?: number | null;
    peakRemainingQuota?: number | null;
    planId: string;
    quotaConsumed: number;
    rateLimitedRequests: number;
    successfulRequests: number;
    totalRequests: number;
    updatedAt?: string | null;
}
export interface ApiUsageStatsModelLoadMatch {
    api_key: string;
    api_type?: string;
    end_date: string;
    start_date: string;
}
export interface ApiUsageSummary {
    apiKey: string;
    apiType: string;
    avgRequestDurationMs?: number | null;
    batchOperations: number;
    periodEnd: string;
    periodStart: string;
    quotaConsumed: number;
    rateLimitedRequests: number;
    successfulRequests: number;
    totalRequests: number;
}
export interface ApiUsageSummaryLoadMatch {
    api_key: string;
    api_type?: string;
    end_date: string;
    start_date: string;
}
export interface Asn {
    asn?: number | null;
    country?: string | null;
    country_code?: string;
    id?: string;
    ip: string;
    is_datacenter: boolean;
    network?: string | null;
    organization?: string | null;
}
export interface AsnLoadMatch {
    id: string;
}
export interface Batch {
    emails: any[];
    ips: any[];
}
export interface BatchCreateData {
    emails: any[];
    ips: any[];
}
export interface BatchEmailValidationResponseDto {
    failed_validations?: number;
    results?: Record<string, any>;
    successful_validations?: number;
    total_processed?: number;
}
export interface BatchEmailValidationResponseDtoCreateData {
    failed_validations?: number;
    results?: Record<string, any>;
    successful_validations?: number;
    total_processed?: number;
}
export interface CacheManagement {
}
export interface CacheManagementLoadMatch {
    domain: string;
}
export interface CacheManagementRemoveMatch {
}
export interface DomainAnalysi {
    domains: any[];
}
export interface DomainAnalysiLoadMatch {
    domain: string;
}
export interface DomainAnalysiCreateData {
    domains: any[];
}
export interface DomainReputationV1Dto {
    domain: string;
    is_disposable_email_domain: boolean;
    is_valid: boolean;
    resolved_ips: any[];
    threat: Record<string, any>;
}
export interface DomainReputationV1DtoLoadMatch {
    domain: string;
}
export interface Email {
    email: string;
    email_factors: null;
    has_mx_records: boolean;
    id?: string;
    ip_factors: null;
    is_disposable: boolean;
    mx_records: any[];
    syntax: Record<string, any>;
}
export interface EmailLoadMatch {
    id: string;
}
export interface Forward {
    addresses: any[];
    hostname: string;
    id?: string;
}
export interface ForwardLoadMatch {
    id: string;
}
export interface IpInfoV0 {
}
export interface IpInfoV0LoadMatch {
    ip: string;
}
export interface IpReputation {
    email_factors: null;
    id?: string;
    ip_factors: null;
}
export interface IpReputationLoadMatch {
    id: string;
}
export interface Ipn {
    asn?: string | null;
    ip: string;
    isp?: string | null;
    location: Record<string, any>;
    suspicious_factors: Record<string, any>;
}
export interface IpnLoadMatch {
    ip: string;
}
export interface Mxn {
    domain: string;
    mx_records: any[];
}
export interface MxnLoadMatch {
    domain: string;
}
export interface PaddleController {
}
export interface PaddleControllerLoadMatch {
}
export interface PaddleControllerCreateData {
    http_entity: string;
}
export interface RateLimitInfoDto {
    email_api: Record<string, any>;
    interval_seconds: number;
    ip_api: Record<string, any>;
    next_renewal_date?: string;
    plan_id: string;
    plan_name?: string;
    status?: string | null;
}
export interface RateLimitInfoDtoLoadMatch {
    api_key: string;
}
export interface Reverse {
    hostname?: string | null;
    id?: string;
    ip: string;
    ptr_record?: string;
    ttl?: number | null;
}
export interface ReverseLoadMatch {
    id: string;
}
export interface RiskScore {
    email_factors: null;
    id?: string;
    ip_factors: null;
}
export interface RiskScoreLoadMatch {
    id: string;
    email?: string;
}
export interface Status {
}
export interface StatusLoadMatch {
}
export interface Tor {
    id?: string;
    ip: string;
    is_tor: boolean;
    tor_node_count: number;
}
export interface TorLoadMatch {
    id: string;
}
export interface UsageStatistic {
}
export interface UsageStatisticLoadMatch {
    api_key: string;
    api_type?: string;
}
export interface Whoi {
    domain: string;
    error?: string | null;
    expires_on?: string;
    id?: string;
    name_servers: any[];
    raw: string;
    registered_on?: string;
    registrar?: any;
    status: any[];
    updated_on?: string;
}
export interface WhoiLoadMatch {
    id: string;
}
