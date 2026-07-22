# IpGeolocationApi4 Lua SDK



The Lua SDK for the IpGeolocationApi4 API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Advanced()` — each with the same small set of operations (`load`, `create`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("ip-geolocation-api4_sdk")

local client = sdk.new()
```

### 3. Load a domainanalysi

DomainAnalysi is nested under domain, so provide the `domain`.

```lua
local domainanalysi, err = client:DomainAnalysi():load({ domain = "example_domain" })
if err then error(err) end
print(domainanalysi)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local advanced, err = client:Advanced():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Advanced():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
IP_GEOLOCATION_API4_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### IpGeolocationApi4SDK

```lua
local sdk = require("ip-geolocation-api4_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IpGeolocationApi4SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Advanced` | `(data) -> AdvancedEntity` | Create an Advanced entity instance. |
| `ApiUsageStatsModel` | `(data) -> ApiUsageStatsModelEntity` | Create an ApiUsageStatsModel entity instance. |
| `ApiUsageSummary` | `(data) -> ApiUsageSummaryEntity` | Create an ApiUsageSummary entity instance. |
| `Asn` | `(data) -> AsnEntity` | Create an Asn entity instance. |
| `Batch` | `(data) -> BatchEntity` | Create a Batch entity instance. |
| `BatchEmailValidationResponseDto` | `(data) -> BatchEmailValidationResponseDtoEntity` | Create a BatchEmailValidationResponseDto entity instance. |
| `CacheManagement` | `(data) -> CacheManagementEntity` | Create a CacheManagement entity instance. |
| `DomainAnalysi` | `(data) -> DomainAnalysiEntity` | Create a DomainAnalysi entity instance. |
| `DomainReputationV1Dto` | `(data) -> DomainReputationV1DtoEntity` | Create a DomainReputationV1Dto entity instance. |
| `Email` | `(data) -> EmailEntity` | Create an Email entity instance. |
| `Forward` | `(data) -> ForwardEntity` | Create a Forward entity instance. |
| `IpInfoV0` | `(data) -> IpInfoV0Entity` | Create an IpInfoV0 entity instance. |
| `IpReputation` | `(data) -> IpReputationEntity` | Create an IpReputation entity instance. |
| `Ipn` | `(data) -> IpnEntity` | Create an Ipn entity instance. |
| `Ipn2` | `(data) -> Ipn2Entity` | Create an Ipn2 entity instance. |
| `Mxn` | `(data) -> MxnEntity` | Create a Mxn entity instance. |
| `PaddleController` | `(data) -> PaddleControllerEntity` | Create a PaddleController entity instance. |
| `RateLimitInfoDto` | `(data) -> RateLimitInfoDtoEntity` | Create a RateLimitInfoDto entity instance. |
| `Reverse` | `(data) -> ReverseEntity` | Create a Reverse entity instance. |
| `RiskScore` | `(data) -> RiskScoreEntity` | Create a RiskScore entity instance. |
| `Status` | `(data) -> StatusEntity` | Create a Status entity instance. |
| `Tor` | `(data) -> TorEntity` | Create a Tor entity instance. |
| `UsageStatistic` | `(data) -> UsageStatisticEntity` | Create an UsageStatistic entity instance. |
| `Whoi` | `(data) -> WhoiEntity` | Create a Whoi entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `remove` | the entity record (a `table`) |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local advanced, err = client:Advanced():load({ id = "example_id" })
    if err then error(err) end
    -- advanced is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Advanced

| Field | Description |
| --- | --- |
| `disposable` |  |
| `email` |  |
| `free` |  |
| `gravatar` |  |
| `has_mx_record` |  |
| `reachable` |  |
| `role_account` |  |
| `smtp` |  |
| `suggestion` |  |
| `syntax` |  |

Operations: Load.

API path: `/api/v1/email/advanced/{email}`

#### ApiUsageStatsModel

| Field | Description |
| --- | --- |
| `api_key` |  |
| `api_type` |  |
| `auth_type` |  |
| `avg_request_duration_nano` |  |
| `batch_operation` |  |
| `batch_tokens_consumed` |  |
| `created_at` |  |
| `hour_bucket` |  |
| `id` |  |
| `min_remaining_quota` |  |
| `peak_remaining_quota` |  |
| `plan_id` |  |
| `quota_consumed` |  |
| `rate_limited_request` |  |
| `successful_request` |  |
| `total_request` |  |
| `updated_at` |  |

Operations: Load.

API path: `/api/v1/usage/stats`

#### ApiUsageSummary

| Field | Description |
| --- | --- |
| `api_key` |  |
| `api_type` |  |
| `avg_request_duration_m` |  |
| `batch_operation` |  |
| `period_end` |  |
| `period_start` |  |
| `quota_consumed` |  |
| `rate_limited_request` |  |
| `successful_request` |  |
| `total_request` |  |

Operations: Load.

API path: `/api/v1/usage/summary`

#### Asn

| Field | Description |
| --- | --- |
| `asn` |  |
| `country` |  |
| `country_code` |  |
| `ip` |  |
| `is_datacenter` |  |
| `network` |  |
| `organization` |  |

Operations: Load.

API path: `/api/v1/asn/{ip}`

#### Batch

| Field | Description |
| --- | --- |
| `email` |  |
| `failed_lookup` |  |
| `failed_validation` |  |
| `ips` |  |
| `result` |  |
| `successful_lookup` |  |
| `successful_validation` |  |
| `total_processed` |  |

Operations: Create.

API path: `/api/v1/email/advanced/batch`

#### BatchEmailValidationResponseDto

| Field | Description |
| --- | --- |
| `failed_validation` |  |
| `result` |  |
| `successful_validation` |  |
| `total_processed` |  |

Operations: Create.

API path: `/api/v1/email/advanced/batch/csv`

#### CacheManagement

| Field | Description |
| --- | --- |

Operations: Load, Remove.

API path: `/management/cache/domain-age/check/{domain}`

#### DomainAnalysi

| Field | Description |
| --- | --- |
| `domain` |  |

Operations: Create, Load.

API path: `/api/v1/domain/age/batch`

#### DomainReputationV1Dto

| Field | Description |
| --- | --- |
| `domain` |  |
| `is_disposable_email_domain` |  |
| `is_valid` |  |
| `resolved_ip` |  |
| `threat` |  |

Operations: Load.

API path: `/api/v1/domain/reputation/{domain}`

#### Email

| Field | Description |
| --- | --- |
| `email` |  |
| `factor` |  |
| `has_mx_record` |  |
| `ip` |  |
| `is_disposable` |  |
| `mx_record` |  |
| `risk_level` |  |
| `score` |  |
| `syntax` |  |

Operations: Load.

API path: `/api/v1/email/{email}`

#### Forward

| Field | Description |
| --- | --- |
| `address` |  |
| `hostname` |  |

Operations: Load.

API path: `/api/v1/dns/forward/{hostname}`

#### IpInfoV0

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/json/{ip}`

#### IpReputation

| Field | Description |
| --- | --- |
| `email` |  |
| `factor` |  |
| `ip` |  |
| `risk_level` |  |
| `score` |  |

Operations: Load.

API path: `/api/v1/ip-reputation/{ip}`

#### Ipn

| Field | Description |
| --- | --- |
| `asn` |  |
| `ip` |  |
| `isp` |  |
| `location` |  |
| `suspicious_factor` |  |

Operations: Load.

API path: `/api/v1/ip`

#### Ipn2

| Field | Description |
| --- | --- |
| `asn` |  |
| `ip` |  |
| `isp` |  |
| `location` |  |
| `suspicious_factor` |  |

Operations: Load.

API path: `/api/v1/ip/{ip}`

#### Mxn

| Field | Description |
| --- | --- |
| `domain` |  |
| `mx_record` |  |

Operations: Load.

API path: `/api/v1/dns/mx/{domain}`

#### PaddleController

| Field | Description |
| --- | --- |

Operations: Create, Load.

API path: `/month-sub`

#### RateLimitInfoDto

| Field | Description |
| --- | --- |
| `email_api` |  |
| `interval_second` |  |
| `ip_api` |  |
| `next_renewal_date` |  |
| `plan_id` |  |
| `plan_name` |  |
| `status` |  |

Operations: Load.

API path: `/api/v1/ratelimit`

#### Reverse

| Field | Description |
| --- | --- |
| `hostname` |  |
| `ip` |  |
| `ptr_record` |  |
| `ttl` |  |

Operations: Load.

API path: `/api/v1/dns/reverse/{ip}`

#### RiskScore

| Field | Description |
| --- | --- |
| `email` |  |
| `factor` |  |
| `ip` |  |
| `risk_level` |  |
| `score` |  |

Operations: Load.

API path: `/api/v1/risk-score/{ip}`

#### Status

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/status`

#### Tor

| Field | Description |
| --- | --- |
| `ip` |  |
| `is_tor` |  |
| `tor_node_count` |  |

Operations: Load.

API path: `/api/v1/tor/{ip}`

#### UsageStatistic

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/api/v1/usage/current-month`

#### Whoi

| Field | Description |
| --- | --- |
| `domain` |  |
| `error` |  |
| `expires_on` |  |
| `name_server` |  |
| `raw` |  |
| `registered_on` |  |
| `registrar` |  |
| `status` |  |
| `updated_on` |  |

Operations: Load.

API path: `/api/v1/dns/whois/{domain}`



## Entities


### Advanced

Create an instance: `local advanced = client:Advanced(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disposable` | `boolean` |  |
| `email` | `string` |  |
| `free` | `boolean` |  |
| `gravatar` | `any` |  |
| `has_mx_record` | `boolean` |  |
| `reachable` | `string` |  |
| `role_account` | `boolean` |  |
| `smtp` | `any` |  |
| `suggestion` | `string` |  |
| `syntax` | `table` |  |

#### Example: Load

```lua
local advanced, err = client:Advanced():load({ id = "advanced_id" })
```


### ApiUsageStatsModel

Create an instance: `local api_usage_stats_model = client:ApiUsageStatsModel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `string` |  |
| `api_type` | `string` |  |
| `auth_type` | `string` |  |
| `avg_request_duration_nano` | `any` |  |
| `batch_operation` | `number` |  |
| `batch_tokens_consumed` | `number` |  |
| `created_at` | `any` |  |
| `hour_bucket` | `string` |  |
| `id` | `any` |  |
| `min_remaining_quota` | `any` |  |
| `peak_remaining_quota` | `any` |  |
| `plan_id` | `string` |  |
| `quota_consumed` | `number` |  |
| `rate_limited_request` | `number` |  |
| `successful_request` | `number` |  |
| `total_request` | `number` |  |
| `updated_at` | `any` |  |

#### Example: Load

```lua
local api_usage_stats_model, err = client:ApiUsageStatsModel():load({ id = "api_usage_stats_model_id" })
```


### ApiUsageSummary

Create an instance: `local api_usage_summary = client:ApiUsageSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `string` |  |
| `api_type` | `string` |  |
| `avg_request_duration_m` | `any` |  |
| `batch_operation` | `number` |  |
| `period_end` | `string` |  |
| `period_start` | `string` |  |
| `quota_consumed` | `number` |  |
| `rate_limited_request` | `number` |  |
| `successful_request` | `number` |  |
| `total_request` | `number` |  |

#### Example: Load

```lua
local api_usage_summary, err = client:ApiUsageSummary():load()
```


### Asn

Create an instance: `local asn = client:Asn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `any` |  |
| `country` | `any` |  |
| `country_code` | `string` |  |
| `ip` | `string` |  |
| `is_datacenter` | `boolean` |  |
| `network` | `any` |  |
| `organization` | `any` |  |

#### Example: Load

```lua
local asn, err = client:Asn():load({ id = "asn_id" })
```


### Batch

Create an instance: `local batch = client:Batch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `table` |  |
| `failed_lookup` | `number` |  |
| `failed_validation` | `number` |  |
| `ips` | `table` |  |
| `result` | `table` |  |
| `successful_lookup` | `number` |  |
| `successful_validation` | `number` |  |
| `total_processed` | `number` |  |

#### Example: Create

```lua
local batch, err = client:Batch():create({
  email = {}, -- table
  failed_lookup = 1, -- number
  failed_validation = 1, -- number
  ips = {}, -- table
  result = {}, -- table
  successful_lookup = 1, -- number
  successful_validation = 1, -- number
  total_processed = 1, -- number
})
```


### BatchEmailValidationResponseDto

Create an instance: `local batch_email_validation_response_dto = client:BatchEmailValidationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed_validation` | `number` |  |
| `result` | `table` |  |
| `successful_validation` | `number` |  |
| `total_processed` | `number` |  |

#### Example: Create

```lua
local batch_email_validation_response_dto, err = client:BatchEmailValidationResponseDto():create({
  failed_validation = 1, -- number
  result = {}, -- table
  successful_validation = 1, -- number
  total_processed = 1, -- number
})
```


### CacheManagement

Create an instance: `local cache_management = client:CacheManagement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```lua
local cache_management, err = client:CacheManagement():load()
```


### DomainAnalysi

Create an instance: `local domain_analysi = client:DomainAnalysi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `table` |  |

#### Example: Load

```lua
local domain_analysi, err = client:DomainAnalysi():load({ domain = "domain" })
```

#### Example: Create

```lua
local domain_analysi, err = client:DomainAnalysi():create({
  domain = {}, -- table
})
```


### DomainReputationV1Dto

Create an instance: `local domain_reputation_v1_dto = client:DomainReputationV1Dto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `is_disposable_email_domain` | `boolean` |  |
| `is_valid` | `boolean` |  |
| `resolved_ip` | `table` |  |
| `threat` | `table` |  |

#### Example: Load

```lua
local domain_reputation_v1_dto, err = client:DomainReputationV1Dto():load({ domain = "domain" })
```


### Email

Create an instance: `local email = client:Email(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `factor` | `table` |  |
| `has_mx_record` | `boolean` |  |
| `ip` | `any` |  |
| `is_disposable` | `boolean` |  |
| `mx_record` | `table` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |
| `syntax` | `table` |  |

#### Example: Load

```lua
local email, err = client:Email():load({ id = "email_id" })
```


### Forward

Create an instance: `local forward = client:Forward(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `table` |  |
| `hostname` | `string` |  |

#### Example: Load

```lua
local forward, err = client:Forward():load({ id = "forward_id" })
```


### IpInfoV0

Create an instance: `local ip_info_v0 = client:IpInfoV0(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local ip_info_v0, err = client:IpInfoV0():load()
```


### IpReputation

Create an instance: `local ip_reputation = client:IpReputation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `any` |  |
| `factor` | `table` |  |
| `ip` | `any` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |

#### Example: Load

```lua
local ip_reputation, err = client:IpReputation():load({ id = "ip_reputation_id" })
```


### Ipn

Create an instance: `local ipn = client:Ipn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `any` |  |
| `ip` | `string` |  |
| `isp` | `any` |  |
| `location` | `table` |  |
| `suspicious_factor` | `table` |  |

#### Example: Load

```lua
local ipn, err = client:Ipn():load()
```


### Ipn2

Create an instance: `local ipn2 = client:Ipn2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `any` |  |
| `ip` | `string` |  |
| `isp` | `any` |  |
| `location` | `table` |  |
| `suspicious_factor` | `table` |  |

#### Example: Load

```lua
local ipn2, err = client:Ipn2():load({ ip = "ip" })
```


### Mxn

Create an instance: `local mxn = client:Mxn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `mx_record` | `table` |  |

#### Example: Load

```lua
local mxn, err = client:Mxn():load({ domain = "domain" })
```


### PaddleController

Create an instance: `local paddle_controller = client:PaddleController(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local paddle_controller, err = client:PaddleController():load()
```

#### Example: Create

```lua
local paddle_controller, err = client:PaddleController():create({
})
```


### RateLimitInfoDto

Create an instance: `local rate_limit_info_dto = client:RateLimitInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_api` | `table` |  |
| `interval_second` | `number` |  |
| `ip_api` | `table` |  |
| `next_renewal_date` | `string` |  |
| `plan_id` | `string` |  |
| `plan_name` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```lua
local rate_limit_info_dto, err = client:RateLimitInfoDto():load()
```


### Reverse

Create an instance: `local reverse = client:Reverse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `any` |  |
| `ip` | `string` |  |
| `ptr_record` | `string` |  |
| `ttl` | `any` |  |

#### Example: Load

```lua
local reverse, err = client:Reverse():load({ id = "reverse_id" })
```


### RiskScore

Create an instance: `local risk_score = client:RiskScore(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `any` |  |
| `factor` | `table` |  |
| `ip` | `any` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |

#### Example: Load

```lua
local risk_score, err = client:RiskScore():load({ id = "risk_score_id" })
```


### Status

Create an instance: `local status = client:Status(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local status, err = client:Status():load()
```


### Tor

Create an instance: `local tor = client:Tor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ip` | `string` |  |
| `is_tor` | `boolean` |  |
| `tor_node_count` | `number` |  |

#### Example: Load

```lua
local tor, err = client:Tor():load({ id = "tor_id" })
```


### UsageStatistic

Create an instance: `local usage_statistic = client:UsageStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local usage_statistic, err = client:UsageStatistic():load()
```


### Whoi

Create an instance: `local whoi = client:Whoi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `error` | `any` |  |
| `expires_on` | `string` |  |
| `name_server` | `table` |  |
| `raw` | `string` |  |
| `registered_on` | `string` |  |
| `registrar` | `any` |  |
| `status` | `table` |  |
| `updated_on` | `string` |  |

#### Example: Load

```lua
local whoi, err = client:Whoi():load({ id = "whoi_id" })
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── ip-geolocation-api4_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`ip-geolocation-api4_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local advanced = client:Advanced()
advanced:load({ id = "example_id" })

-- advanced:data_get() now returns the advanced data from the last load
-- advanced:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
