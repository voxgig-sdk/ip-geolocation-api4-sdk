# IpGeolocationApi4 Ruby SDK Reference

Complete API reference for the IpGeolocationApi4 Ruby SDK.


## IpGeolocationApi4SDK

### Constructor

```ruby
require_relative 'IpGeolocationApi4_sdk'

client = IpGeolocationApi4SDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi4SDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = IpGeolocationApi4SDK.test
```


### Instance Methods

#### `Advanced(data = nil)`

Create a new `Advanced` entity instance. Pass `nil` for no initial data.

#### `ApiUsageStatsModel(data = nil)`

Create a new `ApiUsageStatsModel` entity instance. Pass `nil` for no initial data.

#### `ApiUsageSummary(data = nil)`

Create a new `ApiUsageSummary` entity instance. Pass `nil` for no initial data.

#### `Asn(data = nil)`

Create a new `Asn` entity instance. Pass `nil` for no initial data.

#### `Batch(data = nil)`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `BatchEmailValidationResponseDto(data = nil)`

Create a new `BatchEmailValidationResponseDto` entity instance. Pass `nil` for no initial data.

#### `CacheManagement(data = nil)`

Create a new `CacheManagement` entity instance. Pass `nil` for no initial data.

#### `DomainAnalysi(data = nil)`

Create a new `DomainAnalysi` entity instance. Pass `nil` for no initial data.

#### `DomainReputationV1Dto(data = nil)`

Create a new `DomainReputationV1Dto` entity instance. Pass `nil` for no initial data.

#### `Email(data = nil)`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Forward(data = nil)`

Create a new `Forward` entity instance. Pass `nil` for no initial data.

#### `IpInfoV0(data = nil)`

Create a new `IpInfoV0` entity instance. Pass `nil` for no initial data.

#### `IpReputation(data = nil)`

Create a new `IpReputation` entity instance. Pass `nil` for no initial data.

#### `Ipn(data = nil)`

Create a new `Ipn` entity instance. Pass `nil` for no initial data.

#### `Mxn(data = nil)`

Create a new `Mxn` entity instance. Pass `nil` for no initial data.

#### `PaddleController(data = nil)`

Create a new `PaddleController` entity instance. Pass `nil` for no initial data.

#### `RateLimitInfoDto(data = nil)`

Create a new `RateLimitInfoDto` entity instance. Pass `nil` for no initial data.

#### `Reverse(data = nil)`

Create a new `Reverse` entity instance. Pass `nil` for no initial data.

#### `RiskScore(data = nil)`

Create a new `RiskScore` entity instance. Pass `nil` for no initial data.

#### `Status(data = nil)`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `Tor(data = nil)`

Create a new `Tor` entity instance. Pass `nil` for no initial data.

#### `UsageStatistic(data = nil)`

Create a new `UsageStatistic` entity instance. Pass `nil` for no initial data.

#### `Whoi(data = nil)`

Create a new `Whoi` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AdvancedEntity

```ruby
advanced = client.Advanced
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disposable` | `Boolean` | Yes | Indicates whether the email is from a disposable/temporary email service. |
| `email` | `String` | Yes | The email address that was analyzed, returned in the original format provided. |
| `free` | `Boolean` | Yes | Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.). |
| `gravatar` | `Object` | No |  |
| `has_mx_records` | `Boolean` | Yes | Indicates whether the domain has valid MX (Mail Exchange) records configured. |
| `id` | `String` | No |  |
| `reachable` | `String` | Yes | Overall reachability assessment. |
| `role_account` | `Boolean` | Yes | Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.). |
| `smtp` | `Object` | No |  |
| `suggestion` | `String` | Yes | Suggested correction for misspelled domains. |
| `syntax` | `Hash` | Yes | Detailed syntax analysis of the email address components. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Advanced.load({ "id" => "advanced_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiUsageStatsModelEntity

```ruby
api_usage_stats_model = client.ApiUsageStatsModel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | Yes |  |
| `apiType` | `String` | Yes |  |
| `authType` | `String` | Yes |  |
| `avgRequestDurationNanos` | `Object` | No |  |
| `batchOperations` | `Integer` | Yes |  |
| `batchTokensConsumed` | `Integer` | Yes |  |
| `createdAt` | `Object` | No |  |
| `hourBucket` | `String` | Yes |  |
| `id` | `Object` | No |  |
| `minRemainingQuota` | `Object` | No |  |
| `peakRemainingQuota` | `Object` | No |  |
| `planId` | `String` | Yes |  |
| `quotaConsumed` | `Integer` | Yes |  |
| `rateLimitedRequests` | `Integer` | Yes |  |
| `successfulRequests` | `Integer` | Yes |  |
| `totalRequests` | `Integer` | Yes |  |
| `updatedAt` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiUsageStatsModel.load({ "api_key" => "api_key", "end_date" => "end_date", "start_date" => "start_date" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiUsageStatsModelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiUsageSummaryEntity

```ruby
api_usage_summary = client.ApiUsageSummary
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `String` | Yes |  |
| `apiType` | `String` | Yes |  |
| `avgRequestDurationMs` | `Object` | No |  |
| `batchOperations` | `Integer` | Yes |  |
| `periodEnd` | `String` | Yes |  |
| `periodStart` | `String` | Yes |  |
| `quotaConsumed` | `Integer` | Yes |  |
| `rateLimitedRequests` | `Integer` | Yes |  |
| `successfulRequests` | `Integer` | Yes |  |
| `totalRequests` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiUsageSummary.load({ "api_key" => "api_key", "end_date" => "end_date", "start_date" => "start_date" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiUsageSummaryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AsnEntity

```ruby
asn = client.Asn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Object` | No |  |
| `country` | `Object` | No |  |
| `country_code` | `String` | No |  |
| `id` | `String` | No |  |
| `ip` | `String` | Yes |  |
| `is_datacenter` | `Boolean` | Yes |  |
| `network` | `Object` | No |  |
| `organization` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Asn.load({ "id" => "asn_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AsnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BatchEntity

```ruby
batch = client.Batch
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `Array` | Yes | List of email addresses to validate. |
| `ips` | `Array` | Yes | List of IP addresses to look up. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Batch.create({
  "emails" => [], # Array
  "ips" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BatchEmailValidationResponseDtoEntity

```ruby
batch_email_validation_response_dto = client.BatchEmailValidationResponseDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validations` | `Integer` | No |  |
| `results` | `Hash` | No |  |
| `successful_validations` | `Integer` | No |  |
| `total_processed` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BatchEmailValidationResponseDto.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CacheManagementEntity

```ruby
cache_management = client.CacheManagement
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CacheManagement.load({ "domain" => "domain" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CacheManagement.remove()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CacheManagementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainAnalysiEntity

```ruby
domain_analysi = client.DomainAnalysi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DomainAnalysi.create({
  "domains" => [], # Array
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DomainAnalysi.load({ "domain" => "domain" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainAnalysiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DomainReputationV1DtoEntity

```ruby
domain_reputation_v1_dto = client.DomainReputationV1Dto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `String` | Yes | The normalized domain that was analyzed (lowercased, scheme/path stripped). |
| `is_disposable_email_domain` | `Boolean` | Yes | Whether the domain is a known disposable/temporary email provider domain. |
| `is_valid` | `Boolean` | Yes | Whether the input was a syntactically valid domain name. |
| `resolved_ips` | `Array` | Yes | DNS A/AAAA records the domain currently resolves to. |
| `threat` | `Hash` | Yes | Threat-intelligence verdict for the domain itself (independent of its IPs). |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DomainReputationV1Dto.load({ "domain" => "domain" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DomainReputationV1DtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EmailEntity

```ruby
email = client.Email
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | Yes | The email address that was analyzed, returned in normalized lowercase format. |
| `email_factors` | `NilClass` | Yes | Email-specific risk factors and validation results. |
| `has_mx_records` | `Boolean` | Yes | Whether the email domain has valid MX records in DNS. |
| `id` | `String` | No |  |
| `ip_factors` | `NilClass` | Yes | IP-specific risk factors and analysis results. |
| `is_disposable` | `Boolean` | Yes | Indicates whether the email address uses a disposable or temporary email service. |
| `mx_records` | `Array` | Yes | MX records for the email domain, sorted by priority ascending. |
| `syntax` | `Hash` | Yes | Detailed syntax validation results and email component breakdown. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Email.load({ "id" => "email_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ForwardEntity

```ruby
forward = client.Forward
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `Array` | Yes |  |
| `hostname` | `String` | Yes |  |
| `id` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Forward.load({ "id" => "forward_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ForwardEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpInfoV0Entity

```ruby
ip_info_v0 = client.IpInfoV0
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IpInfoV0.load({ "ip" => "ip" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpInfoV0Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpReputationEntity

```ruby
ip_reputation = client.IpReputation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `NilClass` | Yes | Email-specific risk factors and validation results. |
| `id` | `String` | No |  |
| `ip_factors` | `NilClass` | Yes | IP-specific risk factors and analysis results. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IpReputation.load({ "id" => "ip_reputation_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpReputationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpnEntity

```ruby
ipn = client.Ipn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Object` | No | Autonomous System Number in AS<number> format. |
| `ip` | `String` | Yes | The IP address that was analyzed, returned in standard format. |
| `isp` | `Object` | No | Internet Service Provider name derived from the ASN organization field. |
| `location` | `Hash` | Yes | Geographic location and timezone information for the IP address. |
| `suspicious_factors` | `Hash` | Yes | Comprehensive security threat analysis and suspicious activity indicators. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ipn.load({ "ip" => "ip" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MxnEntity

```ruby
mxn = client.Mxn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `String` | Yes |  |
| `mx_records` | `Array` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Mxn.load({ "domain" => "domain" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MxnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PaddleControllerEntity

```ruby
paddle_controller = client.PaddleController
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PaddleController.create({
  "http_entity" => "example_http_entity", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PaddleController.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PaddleControllerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RateLimitInfoDtoEntity

```ruby
rate_limit_info_dto = client.RateLimitInfoDto
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `Hash` | Yes | Email validation API rate limit information |
| `interval_seconds` | `Integer` | Yes | Rate limit interval in seconds (time period for quota renewal) |
| `ip_api` | `Hash` | Yes | IP lookup API rate limit information |
| `next_renewal_date` | `String` | No | Next billing/renewal date when the quota will be reset (ISO 8601 date format) |
| `plan_id` | `String` | Yes | Subscription plan ID or 'default' for free tier users |
| `plan_name` | `String` | No | Human-readable plan name (if available) |
| `status` | `Object` | No | Subscription status (active, past_due, cancelled, etc.) |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RateLimitInfoDto.load({ "api_key" => "api_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RateLimitInfoDtoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReverseEntity

```ruby
reverse = client.Reverse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `Object` | No |  |
| `id` | `String` | No |  |
| `ip` | `String` | Yes |  |
| `ptr_record` | `String` | No |  |
| `ttl` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Reverse.load({ "id" => "reverse_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReverseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RiskScoreEntity

```ruby
risk_score = client.RiskScore
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `NilClass` | Yes | Email-specific risk factors and validation results. |
| `id` | `String` | No |  |
| `ip_factors` | `NilClass` | Yes | IP-specific risk factors and analysis results. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RiskScore.load({ "id" => "risk_score_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RiskScoreEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusEntity

```ruby
status = client.Status
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Status.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TorEntity

```ruby
tor = client.Tor
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `ip` | `String` | Yes | The IP address that was checked |
| `is_tor` | `Boolean` | Yes | Whether the IP is a known Tor exit node |
| `tor_node_count` | `Integer` | Yes | Total number of currently known Tor exit nodes in the database |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tor.load({ "id" => "tor_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageStatisticEntity

```ruby
usage_statistic = client.UsageStatistic
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UsageStatistic.load({ "api_key" => "api_key" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageStatisticEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WhoiEntity

```ruby
whoi = client.Whoi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `String` | Yes |  |
| `error` | `Object` | No |  |
| `expires_on` | `String` | No |  |
| `id` | `String` | No |  |
| `name_servers` | `Array` | Yes |  |
| `raw` | `String` | Yes |  |
| `registered_on` | `String` | No |  |
| `registrar` | `Object` | No |  |
| `status` | `Array` | Yes |  |
| `updated_on` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Whoi.load({ "id" => "whoi_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WhoiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = IpGeolocationApi4SDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

