# IpGeolocationApi4 Ruby SDK



The Ruby SDK for the IpGeolocationApi4 API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Advanced` — with named operations (`load`/`create`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases](https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "IpGeolocationApi4_sdk"

client = IpGeolocationApi4SDK.new
```

### 3. Load a domainanalysi

DomainAnalysi is nested under domain, so provide the `domain`.

```ruby
begin
  # load returns the bare DomainAnalysi record (raises on error).
  domainanalysi = client.DomainAnalysi.load({ "domain" => "example_domain" })
  puts domainanalysi
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  advanced = client.Advanced.load({ "id" => "example_id" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = IpGeolocationApi4SDK.test({
  "entity" => { "advanced" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
advanced = client.Advanced.load({ "id" => "test01" })
puts advanced
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = IpGeolocationApi4SDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### IpGeolocationApi4SDK

```ruby
require_relative "IpGeolocationApi4_sdk"
client = IpGeolocationApi4SDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = IpGeolocationApi4SDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IpGeolocationApi4SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `IpGeolocationApi4Error` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `advanced = client.Advanced`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disposable` | `Boolean` |  |
| `email` | `String` |  |
| `free` | `Boolean` |  |
| `gravatar` | `Object` |  |
| `has_mx_record` | `Boolean` |  |
| `reachable` | `String` |  |
| `role_account` | `Boolean` |  |
| `smtp` | `Object` |  |
| `suggestion` | `String` |  |
| `syntax` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Advanced record (raises on error).
advanced = client.Advanced.load({ "id" => "advanced_id" })
```


### ApiUsageStatsModel

Create an instance: `api_usage_stats_model = client.ApiUsageStatsModel`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `String` |  |
| `api_type` | `String` |  |
| `auth_type` | `String` |  |
| `avg_request_duration_nano` | `Object` |  |
| `batch_operation` | `Integer` |  |
| `batch_tokens_consumed` | `Integer` |  |
| `created_at` | `Object` |  |
| `hour_bucket` | `String` |  |
| `id` | `Object` |  |
| `min_remaining_quota` | `Object` |  |
| `peak_remaining_quota` | `Object` |  |
| `plan_id` | `String` |  |
| `quota_consumed` | `Integer` |  |
| `rate_limited_request` | `Integer` |  |
| `successful_request` | `Integer` |  |
| `total_request` | `Integer` |  |
| `updated_at` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare ApiUsageStatsModel record (raises on error).
api_usage_stats_model = client.ApiUsageStatsModel.load({ "id" => "api_usage_stats_model_id" })
```


### ApiUsageSummary

Create an instance: `api_usage_summary = client.ApiUsageSummary`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `String` |  |
| `api_type` | `String` |  |
| `avg_request_duration_m` | `Object` |  |
| `batch_operation` | `Integer` |  |
| `period_end` | `String` |  |
| `period_start` | `String` |  |
| `quota_consumed` | `Integer` |  |
| `rate_limited_request` | `Integer` |  |
| `successful_request` | `Integer` |  |
| `total_request` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare ApiUsageSummary record (raises on error).
api_usage_summary = client.ApiUsageSummary.load()
```


### Asn

Create an instance: `asn = client.Asn`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Object` |  |
| `country` | `Object` |  |
| `country_code` | `String` |  |
| `ip` | `String` |  |
| `is_datacenter` | `Boolean` |  |
| `network` | `Object` |  |
| `organization` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare Asn record (raises on error).
asn = client.Asn.load({ "id" => "asn_id" })
```


### Batch

Create an instance: `batch = client.Batch`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `Array` |  |
| `failed_lookup` | `Integer` |  |
| `failed_validation` | `Integer` |  |
| `ips` | `Array` |  |
| `result` | `Hash` |  |
| `successful_lookup` | `Integer` |  |
| `successful_validation` | `Integer` |  |
| `total_processed` | `Integer` |  |

#### Example: Create

```ruby
batch = client.Batch.create({
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


### BatchEmailValidationResponseDto

Create an instance: `batch_email_validation_response_dto = client.BatchEmailValidationResponseDto`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed_validation` | `Integer` |  |
| `result` | `Hash` |  |
| `successful_validation` | `Integer` |  |
| `total_processed` | `Integer` |  |

#### Example: Create

```ruby
batch_email_validation_response_dto = client.BatchEmailValidationResponseDto.create({
  "failed_validation" => 1, # Integer
  "result" => {}, # Hash
  "successful_validation" => 1, # Integer
  "total_processed" => 1, # Integer
})
```


### CacheManagement

Create an instance: `cache_management = client.CacheManagement`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ruby
# load returns the bare CacheManagement record (raises on error).
cache_management = client.CacheManagement.load()
```


### DomainAnalysi

Create an instance: `domain_analysi = client.DomainAnalysi`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare DomainAnalysi record (raises on error).
domain_analysi = client.DomainAnalysi.load({ "domain" => "domain" })
```

#### Example: Create

```ruby
domain_analysi = client.DomainAnalysi.create({
  "domain" => [], # Array
})
```


### DomainReputationV1Dto

Create an instance: `domain_reputation_v1_dto = client.DomainReputationV1Dto`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `String` |  |
| `is_disposable_email_domain` | `Boolean` |  |
| `is_valid` | `Boolean` |  |
| `resolved_ip` | `Array` |  |
| `threat` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare DomainReputationV1Dto record (raises on error).
domain_reputation_v1_dto = client.DomainReputationV1Dto.load({ "domain" => "domain" })
```


### Email

Create an instance: `email = client.Email`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` |  |
| `factor` | `Hash` |  |
| `has_mx_record` | `Boolean` |  |
| `ip` | `Object` |  |
| `is_disposable` | `Boolean` |  |
| `mx_record` | `Array` |  |
| `risk_level` | `String` |  |
| `score` | `Float` |  |
| `syntax` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Email record (raises on error).
email = client.Email.load({ "id" => "email_id" })
```


### Forward

Create an instance: `forward = client.Forward`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `Array` |  |
| `hostname` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Forward record (raises on error).
forward = client.Forward.load({ "id" => "forward_id" })
```


### IpInfoV0

Create an instance: `ip_info_v0 = client.IpInfoV0`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare IpInfoV0 record (raises on error).
ip_info_v0 = client.IpInfoV0.load()
```


### IpReputation

Create an instance: `ip_reputation = client.IpReputation`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `Object` |  |
| `factor` | `Hash` |  |
| `ip` | `Object` |  |
| `risk_level` | `String` |  |
| `score` | `Float` |  |

#### Example: Load

```ruby
# load returns the bare IpReputation record (raises on error).
ip_reputation = client.IpReputation.load({ "id" => "ip_reputation_id" })
```


### Ipn

Create an instance: `ipn = client.Ipn`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Object` |  |
| `ip` | `String` |  |
| `isp` | `Object` |  |
| `location` | `Hash` |  |
| `suspicious_factor` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Ipn record (raises on error).
ipn = client.Ipn.load()
```


### Ipn2

Create an instance: `ipn2 = client.Ipn2`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Object` |  |
| `ip` | `String` |  |
| `isp` | `Object` |  |
| `location` | `Hash` |  |
| `suspicious_factor` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Ipn2 record (raises on error).
ipn2 = client.Ipn2.load({ "ip" => "ip" })
```


### Mxn

Create an instance: `mxn = client.Mxn`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `String` |  |
| `mx_record` | `Array` |  |

#### Example: Load

```ruby
# load returns the bare Mxn record (raises on error).
mxn = client.Mxn.load({ "domain" => "domain" })
```


### PaddleController

Create an instance: `paddle_controller = client.PaddleController`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare PaddleController record (raises on error).
paddle_controller = client.PaddleController.load()
```

#### Example: Create

```ruby
paddle_controller = client.PaddleController.create({
})
```


### RateLimitInfoDto

Create an instance: `rate_limit_info_dto = client.RateLimitInfoDto`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_api` | `Hash` |  |
| `interval_second` | `Integer` |  |
| `ip_api` | `Hash` |  |
| `next_renewal_date` | `String` |  |
| `plan_id` | `String` |  |
| `plan_name` | `String` |  |
| `status` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare RateLimitInfoDto record (raises on error).
rate_limit_info_dto = client.RateLimitInfoDto.load()
```


### Reverse

Create an instance: `reverse = client.Reverse`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `Object` |  |
| `ip` | `String` |  |
| `ptr_record` | `String` |  |
| `ttl` | `Object` |  |

#### Example: Load

```ruby
# load returns the bare Reverse record (raises on error).
reverse = client.Reverse.load({ "id" => "reverse_id" })
```


### RiskScore

Create an instance: `risk_score = client.RiskScore`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `Object` |  |
| `factor` | `Hash` |  |
| `ip` | `Object` |  |
| `risk_level` | `String` |  |
| `score` | `Float` |  |

#### Example: Load

```ruby
# load returns the bare RiskScore record (raises on error).
risk_score = client.RiskScore.load({ "id" => "risk_score_id" })
```


### Status

Create an instance: `status = client.Status`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare Status record (raises on error).
status = client.Status.load()
```


### Tor

Create an instance: `tor = client.Tor`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ip` | `String` |  |
| `is_tor` | `Boolean` |  |
| `tor_node_count` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Tor record (raises on error).
tor = client.Tor.load({ "id" => "tor_id" })
```


### UsageStatistic

Create an instance: `usage_statistic = client.UsageStatistic`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the bare UsageStatistic record (raises on error).
usage_statistic = client.UsageStatistic.load()
```


### Whoi

Create an instance: `whoi = client.Whoi`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `String` |  |
| `error` | `Object` |  |
| `expires_on` | `String` |  |
| `name_server` | `Array` |  |
| `raw` | `String` |  |
| `registered_on` | `String` |  |
| `registrar` | `Object` |  |
| `status` | `Array` |  |
| `updated_on` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Whoi record (raises on error).
whoi = client.Whoi.load({ "id" => "whoi_id" })
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── IpGeolocationApi4_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`IpGeolocationApi4_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
advanced = client.Advanced
advanced.load({ "id" => "example_id" })

# advanced.data_get now returns the advanced data from the last load
# advanced.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
