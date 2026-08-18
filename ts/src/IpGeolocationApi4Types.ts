// Typed models for the IpGeolocationApi4 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Advanced {
  disposable: boolean
  email: string
  free: boolean
  gravatar?: any
  has_mx_records: boolean
  reachable: string
  role_account: boolean
  smtp?: any
  suggestion: string
  syntax: Record<string, any>
}

export interface AdvancedLoadMatch {
  id: string
}

export interface ApiUsageStatsModel {
  apiKey: string
  apiType: string
  authType: string
  avgRequestDurationNanos?: number | null
  batchOperations: number
  batchTokensConsumed: number
  createdAt?: string | null
  hourBucket: string
  id?: number | null
  minRemainingQuota?: number | null
  peakRemainingQuota?: number | null
  planId: string
  quotaConsumed: number
  rateLimitedRequests: number
  successfulRequests: number
  totalRequests: number
  updatedAt?: string | null
}

export interface ApiUsageStatsModelLoadMatch {
  apiKey?: string
  apiType?: string
  authType?: string
  avgRequestDurationNanos?: number | null
  batchOperations?: number
  batchTokensConsumed?: number
  createdAt?: string | null
  hourBucket?: string
  id: number | null
  minRemainingQuota?: number | null
  peakRemainingQuota?: number | null
  planId?: string
  quotaConsumed?: number
  rateLimitedRequests?: number
  successfulRequests?: number
  totalRequests?: number
  updatedAt?: string | null
}

export interface ApiUsageSummary {
  apiKey: string
  apiType: string
  avgRequestDurationMs?: number | null
  batchOperations: number
  periodEnd: string
  periodStart: string
  quotaConsumed: number
  rateLimitedRequests: number
  successfulRequests: number
  totalRequests: number
}

export interface ApiUsageSummaryLoadMatch {
  apiKey?: string
  apiType?: string
  avgRequestDurationMs?: number | null
  batchOperations?: number
  periodEnd?: string
  periodStart?: string
  quotaConsumed?: number
  rateLimitedRequests?: number
  successfulRequests?: number
  totalRequests?: number
}

export interface Asn {
  asn?: number | null
  country?: string | null
  country_code?: string
  ip: string
  is_datacenter: boolean
  network?: string | null
  organization?: string | null
}

export interface AsnLoadMatch {
  id: string
}

export interface Batch {
  emails: any[]
  ips: any[]
}

export interface BatchCreateData {
  emails: any[]
  ips: any[]
}

export interface BatchEmailValidationResponseDto {
  failed_validations?: number
  results?: Record<string, any>
  successful_validations?: number
  total_processed?: number
}

export interface BatchEmailValidationResponseDtoCreateData {
  failed_validations?: number
  results?: Record<string, any>
  successful_validations?: number
  total_processed?: number
}

export interface CacheManagement {
}

export interface CacheManagementLoadMatch {
  domain: string
}

export interface CacheManagementRemoveMatch {
}

export interface DomainAnalysi {
  domains: any[]
}

export interface DomainAnalysiLoadMatch {
  domain: string
}

export interface DomainAnalysiCreateData {
  domains: any[]
}

export interface DomainReputationV1Dto {
  domain: string
  is_disposable_email_domain: boolean
  is_valid: boolean
  resolved_ips: any[]
  threat: Record<string, any>
}

export interface DomainReputationV1DtoLoadMatch {
  domain: string
}

export interface Email {
  email: string
  email_factors: null
  has_mx_records: boolean
  ip_factors: null
  is_disposable: boolean
  mx_records: any[]
  syntax: Record<string, any>
}

export interface EmailLoadMatch {
  id: string
}

export interface Forward {
  addresses: any[]
  hostname: string
}

export interface ForwardLoadMatch {
  id: string
}

export interface IpInfoV0 {
}

export interface IpInfoV0LoadMatch {
  ip: string
}

export interface IpReputation {
  email_factors: null
  ip_factors: null
}

export interface IpReputationLoadMatch {
  id: string
}

export interface Ipn {
  asn?: string | null
  ip: string
  isp?: string | null
  location: Record<string, any>
  suspicious_factors: Record<string, any>
}

export interface IpnLoadMatch {
  ip: string
}

export interface Mxn {
  domain: string
  mx_records: any[]
}

export interface MxnLoadMatch {
  domain: string
}

export interface PaddleController {
}

export interface PaddleControllerLoadMatch {
}

export interface PaddleControllerCreateData {
}

export interface RateLimitInfoDto {
  email_api: Record<string, any>
  interval_seconds: number
  ip_api: Record<string, any>
  next_renewal_date?: string
  plan_id: string
  plan_name?: string
  status?: string | null
}

export interface RateLimitInfoDtoLoadMatch {
  email_api?: Record<string, any>
  interval_seconds?: number
  ip_api?: Record<string, any>
  next_renewal_date?: string
  plan_id?: string
  plan_name?: string
  status?: string | null
}

export interface Reverse {
  hostname?: string | null
  ip: string
  ptr_record?: string
  ttl?: number | null
}

export interface ReverseLoadMatch {
  id: string
}

export interface RiskScore {
  email_factors: null
  ip_factors: null
}

export interface RiskScoreLoadMatch {
  id: string
}

export interface Status {
}

export interface StatusLoadMatch {
}

export interface Tor {
  ip: string
  is_tor: boolean
  tor_node_count: number
}

export interface TorLoadMatch {
  id: string
}

export interface UsageStatistic {
}

export interface UsageStatisticLoadMatch {
}

export interface Whoi {
  domain: string
  error?: string | null
  expires_on?: string
  name_servers: any[]
  raw: string
  registered_on?: string
  registrar?: any
  status: any[]
  updated_on?: string
}

export interface WhoiLoadMatch {
  id: string
}

