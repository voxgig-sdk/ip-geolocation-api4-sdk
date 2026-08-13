# IpGeolocationApi4 Lua SDK Reference

Complete API reference for the IpGeolocationApi4 Lua SDK.


## IpGeolocationApi4SDK

### Constructor

```lua
local sdk = require("ip-geolocation-api4_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Advanced(data)`

Create a new `Advanced` entity instance. Pass `nil` for no initial data.

#### `ApiUsageStatsModel(data)`

Create a new `ApiUsageStatsModel` entity instance. Pass `nil` for no initial data.

#### `ApiUsageSummary(data)`

Create a new `ApiUsageSummary` entity instance. Pass `nil` for no initial data.

#### `Asn(data)`

Create a new `Asn` entity instance. Pass `nil` for no initial data.

#### `Batch(data)`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `BatchEmailValidationResponseDto(data)`

Create a new `BatchEmailValidationResponseDto` entity instance. Pass `nil` for no initial data.

#### `CacheManagement(data)`

Create a new `CacheManagement` entity instance. Pass `nil` for no initial data.

#### `DomainAnalysi(data)`

Create a new `DomainAnalysi` entity instance. Pass `nil` for no initial data.

#### `DomainReputationV1Dto(data)`

Create a new `DomainReputationV1Dto` entity instance. Pass `nil` for no initial data.

#### `Email(data)`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Forward(data)`

Create a new `Forward` entity instance. Pass `nil` for no initial data.

#### `IpInfoV0(data)`

Create a new `IpInfoV0` entity instance. Pass `nil` for no initial data.

#### `IpReputation(data)`

Create a new `IpReputation` entity instance. Pass `nil` for no initial data.

#### `Ipn(data)`

Create a new `Ipn` entity instance. Pass `nil` for no initial data.

#### `Mxn(data)`

Create a new `Mxn` entity instance. Pass `nil` for no initial data.

#### `PaddleController(data)`

Create a new `PaddleController` entity instance. Pass `nil` for no initial data.

#### `RateLimitInfoDto(data)`

Create a new `RateLimitInfoDto` entity instance. Pass `nil` for no initial data.

#### `Reverse(data)`

Create a new `Reverse` entity instance. Pass `nil` for no initial data.

#### `RiskScore(data)`

Create a new `RiskScore` entity instance. Pass `nil` for no initial data.

#### `Status(data)`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `Tor(data)`

Create a new `Tor` entity instance. Pass `nil` for no initial data.

#### `UsageStatistic(data)`

Create a new `UsageStatistic` entity instance. Pass `nil` for no initial data.

#### `Whoi(data)`

Create a new `Whoi` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AdvancedEntity

```lua
local advanced = client:Advanced(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disposable` | `boolean` | Yes |  |
| `email` | `string` | Yes |  |
| `free` | `boolean` | Yes |  |
| `gravatar` | `any` | No |  |
| `has_mx_records` | `boolean` | Yes |  |
| `reachable` | `string` | Yes |  |
| `role_account` | `boolean` | Yes |  |
| `smtp` | `any` | No |  |
| `suggestion` | `string` | Yes |  |
| `syntax` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Advanced():load({ id = "advanced_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiUsageStatsModelEntity

```lua
local api_usage_stats_model = client:ApiUsageStatsModel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `authType` | `string` | Yes |  |
| `avgRequestDurationNanos` | `number|nil` | No |  |
| `batchOperations` | `number` | Yes |  |
| `batchTokensConsumed` | `number` | Yes |  |
| `createdAt` | `string|nil` | No |  |
| `hourBucket` | `string` | Yes |  |
| `id` | `number|nil` | No |  |
| `minRemainingQuota` | `number|nil` | No |  |
| `peakRemainingQuota` | `number|nil` | No |  |
| `planId` | `string` | Yes |  |
| `quotaConsumed` | `number` | Yes |  |
| `rateLimitedRequests` | `number` | Yes |  |
| `successfulRequests` | `number` | Yes |  |
| `totalRequests` | `number` | Yes |  |
| `updatedAt` | `string|nil` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiUsageStatsModel():load({ id = "api_usage_stats_model_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiUsageStatsModelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiUsageSummaryEntity

```lua
local api_usage_summary = client:ApiUsageSummary(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `avgRequestDurationMs` | `number|nil` | No |  |
| `batchOperations` | `number` | Yes |  |
| `periodEnd` | `string` | Yes |  |
| `periodStart` | `string` | Yes |  |
| `quotaConsumed` | `number` | Yes |  |
| `rateLimitedRequests` | `number` | Yes |  |
| `successfulRequests` | `number` | Yes |  |
| `totalRequests` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiUsageSummary():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiUsageSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AsnEntity

```lua
local asn = client:Asn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `number|nil` | No |  |
| `country` | `string|nil` | No |  |
| `country_code` | `string` | No |  |
| `ip` | `string` | Yes |  |
| `is_datacenter` | `boolean` | Yes |  |
| `network` | `string|nil` | No |  |
| `organization` | `string|nil` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Asn():load({ id = "asn_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BatchEntity

```lua
local batch = client:Batch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `table` | Yes |  |
| `ips` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Batch():create({
  emails = --[[ table ]],
  ips = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BatchEmailValidationResponseDtoEntity

```lua
local batch_email_validation_response_dto = client:BatchEmailValidationResponseDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validations` | `number` | No |  |
| `results` | `table` | No |  |
| `successful_validations` | `number` | No |  |
| `total_processed` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BatchEmailValidationResponseDto():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CacheManagementEntity

```lua
local cache_management = client:CacheManagement(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CacheManagement():load()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CacheManagement():remove()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheManagementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainAnalysiEntity

```lua
local domain_analysi = client:DomainAnalysi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DomainAnalysi():create({
  domains = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DomainAnalysi():load({ domain = "domain" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainAnalysiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DomainReputationV1DtoEntity

```lua
local domain_reputation_v1_dto = client:DomainReputationV1Dto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `is_disposable_email_domain` | `boolean` | Yes |  |
| `is_valid` | `boolean` | Yes |  |
| `resolved_ips` | `table` | Yes |  |
| `threat` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DomainReputationV1Dto():load({ domain = "domain" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainReputationV1DtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailEntity

```lua
local email = client:Email(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `email_factors` | `nil` | Yes |  |
| `has_mx_records` | `boolean` | Yes |  |
| `ip_factors` | `nil` | Yes |  |
| `is_disposable` | `boolean` | Yes |  |
| `mx_records` | `table` | Yes |  |
| `syntax` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Email():load({ id = "email_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ForwardEntity

```lua
local forward = client:Forward(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `table` | Yes |  |
| `hostname` | `string` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Forward():load({ id = "forward_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ForwardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpInfoV0Entity

```lua
local ip_info_v0 = client:IpInfoV0(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IpInfoV0():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpInfoV0Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpReputationEntity

```lua
local ip_reputation = client:IpReputation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `nil` | Yes |  |
| `ip_factors` | `nil` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IpReputation():load({ id = "ip_reputation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpReputationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpnEntity

```lua
local ipn = client:Ipn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `string|nil` | No |  |
| `ip` | `string` | Yes |  |
| `isp` | `string|nil` | No |  |
| `location` | `table` | Yes |  |
| `suspicious_factors` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Ipn():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MxnEntity

```lua
local mxn = client:Mxn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `mx_records` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Mxn():load({ domain = "domain" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MxnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaddleControllerEntity

```lua
local paddle_controller = client:PaddleController(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaddleController():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaddleController():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaddleControllerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RateLimitInfoDtoEntity

```lua
local rate_limit_info_dto = client:RateLimitInfoDto(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `table` | Yes |  |
| `interval_seconds` | `number` | Yes |  |
| `ip_api` | `table` | Yes |  |
| `next_renewal_date` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `plan_name` | `string` | No |  |
| `status` | `string|nil` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RateLimitInfoDto():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RateLimitInfoDtoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReverseEntity

```lua
local reverse = client:Reverse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `string|nil` | No |  |
| `ip` | `string` | Yes |  |
| `ptr_record` | `string` | No |  |
| `ttl` | `number|nil` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reverse():load({ id = "reverse_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReverseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RiskScoreEntity

```lua
local risk_score = client:RiskScore(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `nil` | Yes |  |
| `ip_factors` | `nil` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RiskScore():load({ id = "risk_score_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RiskScoreEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusEntity

```lua
local status = client:Status(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Status():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TorEntity

```lua
local tor = client:Tor(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `string` | Yes |  |
| `is_tor` | `boolean` | Yes |  |
| `tor_node_count` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tor():load({ id = "tor_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageStatisticEntity

```lua
local usage_statistic = client:UsageStatistic(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UsageStatistic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageStatisticEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhoiEntity

```lua
local whoi = client:Whoi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `error` | `string|nil` | No |  |
| `expires_on` | `string` | No |  |
| `name_servers` | `table` | Yes |  |
| `raw` | `string` | Yes |  |
| `registered_on` | `string` | No |  |
| `registrar` | `any` | No |  |
| `status` | `table` | Yes |  |
| `updated_on` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Whoi():load({ id = "whoi_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhoiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

