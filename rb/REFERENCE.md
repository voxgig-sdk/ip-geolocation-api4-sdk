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

#### `Ipn2(data = nil)`

Create a new `Ipn2` entity instance. Pass `nil` for no initial data.

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
| `disposable` | `Boolean` | Yes |  |
| `email` | `String` | Yes |  |
| `free` | `Boolean` | Yes |  |
| `gravatar` | `Object` | No |  |
| `has_mx_record` | `Boolean` | Yes |  |
| `reachable` | `String` | Yes |  |
| `role_account` | `Boolean` | Yes |  |
| `smtp` | `Object` | No |  |
| `suggestion` | `String` | Yes |  |
| `syntax` | `Hash` | Yes |  |

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
| `api_key` | `String` | Yes |  |
| `api_type` | `String` | Yes |  |
| `auth_type` | `String` | Yes |  |
| `avg_request_duration_nano` | `Object` | No |  |
| `batch_operation` | `Integer` | Yes |  |
| `batch_tokens_consumed` | `Integer` | Yes |  |
| `created_at` | `Object` | No |  |
| `hour_bucket` | `String` | Yes |  |
| `id` | `Object` | No |  |
| `min_remaining_quota` | `Object` | No |  |
| `peak_remaining_quota` | `Object` | No |  |
| `plan_id` | `String` | Yes |  |
| `quota_consumed` | `Integer` | Yes |  |
| `rate_limited_request` | `Integer` | Yes |  |
| `successful_request` | `Integer` | Yes |  |
| `total_request` | `Integer` | Yes |  |
| `updated_at` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiUsageStatsModel.load({ "id" => "api_usage_stats_model_id" })
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
| `api_key` | `String` | Yes |  |
| `api_type` | `String` | Yes |  |
| `avg_request_duration_m` | `Object` | No |  |
| `batch_operation` | `Integer` | Yes |  |
| `period_end` | `String` | Yes |  |
| `period_start` | `String` | Yes |  |
| `quota_consumed` | `Integer` | Yes |  |
| `rate_limited_request` | `Integer` | Yes |  |
| `successful_request` | `Integer` | Yes |  |
| `total_request` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ApiUsageSummary.load()
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
| `email` | `Array` | Yes |  |
| `failed_lookup` | `Integer` | Yes |  |
| `failed_validation` | `Integer` | Yes |  |
| `ips` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `successful_lookup` | `Integer` | Yes |  |
| `successful_validation` | `Integer` | Yes |  |
| `total_processed` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Batch.create({
  "email" => [], # Array
  "failed_lookup" => 1, # Integer
  "failed_validation" => 1, # Integer
  "ips" => [], # Array
  "result" => {}, # Hash
  "successful_lookup" => 1, # Integer
  "successful_validation" => 1, # Integer
  "total_processed" => 1, # Integer
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
| `failed_validation` | `Integer` | Yes |  |
| `result` | `Hash` | Yes |  |
| `successful_validation` | `Integer` | Yes |  |
| `total_processed` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BatchEmailValidationResponseDto.create({
  "failed_validation" => 1, # Integer
  "result" => {}, # Hash
  "successful_validation" => 1, # Integer
  "total_processed" => 1, # Integer
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
result = client.CacheManagement.load()
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
| `domain` | `Array` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DomainAnalysi.create({
  "domain" => [], # Array
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
| `domain` | `String` | Yes |  |
| `is_disposable_email_domain` | `Boolean` | Yes |  |
| `is_valid` | `Boolean` | Yes |  |
| `resolved_ip` | `Array` | Yes |  |
| `threat` | `Hash` | Yes |  |

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
| `email` | `String` | Yes |  |
| `factor` | `Hash` | Yes |  |
| `has_mx_record` | `Boolean` | Yes |  |
| `ip` | `Object` | No |  |
| `is_disposable` | `Boolean` | Yes |  |
| `mx_record` | `Array` | Yes |  |
| `risk_level` | `String` | Yes |  |
| `score` | `Float` | Yes |  |
| `syntax` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load |
| --- | --- |
| `email` | Yes |
| `factor` | - |
| `has_mx_record` | - |
| `ip` | - |
| `is_disposable` | - |
| `mx_record` | - |
| `risk_level` | - |
| `score` | - |
| `syntax` | - |

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
| `address` | `Array` | Yes |  |
| `hostname` | `String` | Yes |  |

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
result = client.IpInfoV0.load()
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
| `email` | `Object` | No |  |
| `factor` | `Hash` | Yes |  |
| `ip` | `Object` | No |  |
| `risk_level` | `String` | Yes |  |
| `score` | `Float` | Yes |  |

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
| `asn` | `Object` | No |  |
| `ip` | `String` | Yes |  |
| `isp` | `Object` | No |  |
| `location` | `Hash` | Yes |  |
| `suspicious_factor` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ipn.load()
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

## Ipn2Entity

```ruby
ipn2 = client.Ipn2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Object` | No |  |
| `ip` | `String` | Yes |  |
| `isp` | `Object` | No |  |
| `location` | `Hash` | Yes |  |
| `suspicious_factor` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ipn2.load({ "ip" => "ip" })
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

Create a new `Ipn2Entity` instance with the same client and
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
| `mx_record` | `Array` | Yes |  |

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
| `email_api` | `Hash` | Yes |  |
| `interval_second` | `Integer` | Yes |  |
| `ip_api` | `Hash` | Yes |  |
| `next_renewal_date` | `String` | No |  |
| `plan_id` | `String` | Yes |  |
| `plan_name` | `String` | No |  |
| `status` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RateLimitInfoDto.load()
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
| `email` | `Object` | No |  |
| `factor` | `Hash` | Yes |  |
| `ip` | `Object` | No |  |
| `risk_level` | `String` | Yes |  |
| `score` | `Float` | Yes |  |

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
| `ip` | `String` | Yes |  |
| `is_tor` | `Boolean` | Yes |  |
| `tor_node_count` | `Integer` | Yes |  |

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
result = client.UsageStatistic.load()
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
| `name_server` | `Array` | Yes |  |
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

