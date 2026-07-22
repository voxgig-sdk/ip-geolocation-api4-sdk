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
  has_mx_record: boolean
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
  api_key: string
  api_type: string
  auth_type: string
  avg_request_duration_nano?: any
  batch_operation: number
  batch_tokens_consumed: number
  created_at?: any
  hour_bucket: string
  id?: any
  min_remaining_quota?: any
  peak_remaining_quota?: any
  plan_id: string
  quota_consumed: number
  rate_limited_request: number
  successful_request: number
  total_request: number
  updated_at?: any
}

export interface ApiUsageStatsModelLoadMatch {
  api_key?: string
  api_type?: string
  auth_type?: string
  avg_request_duration_nano?: any
  batch_operation?: number
  batch_tokens_consumed?: number
  created_at?: any
  hour_bucket?: string
  id: any
  min_remaining_quota?: any
  peak_remaining_quota?: any
  plan_id?: string
  quota_consumed?: number
  rate_limited_request?: number
  successful_request?: number
  total_request?: number
  updated_at?: any
}

export interface ApiUsageSummary {
  api_key: string
  api_type: string
  avg_request_duration_m?: any
  batch_operation: number
  period_end: string
  period_start: string
  quota_consumed: number
  rate_limited_request: number
  successful_request: number
  total_request: number
}

export interface ApiUsageSummaryLoadMatch {
  api_key?: string
  api_type?: string
  avg_request_duration_m?: any
  batch_operation?: number
  period_end?: string
  period_start?: string
  quota_consumed?: number
  rate_limited_request?: number
  successful_request?: number
  total_request?: number
}

export interface Asn {
  asn?: any
  country?: any
  country_code?: string
  ip: string
  is_datacenter: boolean
  network?: any
  organization?: any
}

export interface AsnLoadMatch {
  id: string
}

export interface Batch {
  email: any[]
  failed_lookup: number
  failed_validation: number
  ips: any[]
  result: Record<string, any>
  successful_lookup: number
  successful_validation: number
  total_processed: number
}

export interface BatchCreateData {
  email: any[]
  failed_lookup: number
  failed_validation: number
  ips: any[]
  result: Record<string, any>
  successful_lookup: number
  successful_validation: number
  total_processed: number
}

export interface BatchEmailValidationResponseDto {
  failed_validation: number
  result: Record<string, any>
  successful_validation: number
  total_processed: number
}

export interface BatchEmailValidationResponseDtoCreateData {
  failed_validation: number
  result: Record<string, any>
  successful_validation: number
  total_processed: number
}

export interface CacheManagement {
}

export interface CacheManagementLoadMatch {
  domain?: string
}

export interface CacheManagementRemoveMatch {
}

export interface DomainAnalysi {
  domain: any[]
}

export interface DomainAnalysiLoadMatch {
  domain: string
}

export interface DomainAnalysiCreateData {
  domain: any[]
}

export interface DomainReputationV1Dto {
  domain: string
  is_disposable_email_domain: boolean
  is_valid: boolean
  resolved_ip: any[]
  threat: Record<string, any>
}

export interface DomainReputationV1DtoLoadMatch {
  domain: string
}

export interface Email {
  email: string
  factor: Record<string, any>
  has_mx_record: boolean
  ip?: any
  is_disposable: boolean
  mx_record: any[]
  risk_level: string
  score: number
  syntax: Record<string, any>
}

export interface EmailLoadMatch {
  id: string
}

export interface Forward {
  address: any[]
  hostname: string
}

export interface ForwardLoadMatch {
  id: string
}

export interface IpInfoV0 {
}

export interface IpInfoV0LoadMatch {
  ip?: string
}

export interface IpReputation {
  email?: any
  factor: Record<string, any>
  ip?: any
  risk_level: string
  score: number
}

export interface IpReputationLoadMatch {
  id: string
}

export interface Ipn {
  asn?: any
  ip: string
  isp?: any
  location: Record<string, any>
  suspicious_factor: Record<string, any>
}

export interface IpnLoadMatch {
  asn?: any
  ip?: string
  isp?: any
  location?: Record<string, any>
  suspicious_factor?: Record<string, any>
}

export interface Ipn2 {
  asn?: any
  ip: string
  isp?: any
  location: Record<string, any>
  suspicious_factor: Record<string, any>
}

export interface Ipn2LoadMatch {
  ip: string
}

export interface Mxn {
  domain: string
  mx_record: any[]
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
  interval_second: number
  ip_api: Record<string, any>
  next_renewal_date?: string
  plan_id: string
  plan_name?: string
  status?: any
}

export interface RateLimitInfoDtoLoadMatch {
  email_api?: Record<string, any>
  interval_second?: number
  ip_api?: Record<string, any>
  next_renewal_date?: string
  plan_id?: string
  plan_name?: string
  status?: any
}

export interface Reverse {
  hostname?: any
  ip: string
  ptr_record?: string
  ttl?: any
}

export interface ReverseLoadMatch {
  id: string
}

export interface RiskScore {
  email?: any
  factor: Record<string, any>
  ip?: any
  risk_level: string
  score: number
}

export interface RiskScoreLoadMatch {
  id?: string
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
  error?: any
  expires_on?: string
  name_server: any[]
  raw: string
  registered_on?: string
  registrar?: any
  status: any[]
  updated_on?: string
}

export interface WhoiLoadMatch {
  id: string
}

