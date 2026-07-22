# IpGeolocationApi4 TypeScript SDK



The TypeScript SDK for the IpGeolocationApi4 API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Advanced()` — each with a small set of operations (`load`, `create`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases](https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { IpGeolocationApi4SDK } from '@voxgig-sdk/ip-geolocation-api4'

const client = new IpGeolocationApi4SDK()
```

### 3. Load a domainanalysi

DomainAnalysi is nested under domain, so provide the `domain`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const domainanalysi = await client.DomainAnalysi().load({
    domain: 'example_domain',
  })
  console.log(domainanalysi)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const advanced = await client.Advanced().load({ id: "example_id" })
  console.log(advanced)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = IpGeolocationApi4SDK.test()

const advanced = await client.Advanced().load({ id: 'test01' })
// advanced is a bare entity populated with mock response data
console.log(advanced)
```

You can also use the instance method:

```ts
const client = new IpGeolocationApi4SDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Advanced()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new IpGeolocationApi4SDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
IP_GEOLOCATION_API4_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### IpGeolocationApi4SDK

#### Constructor

```ts
new IpGeolocationApi4SDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Advanced(data?)` | `AdvancedEntity` | Create an Advanced entity instance. |
| `ApiUsageStatsModel(data?)` | `ApiUsageStatsModelEntity` | Create an ApiUsageStatsModel entity instance. |
| `ApiUsageSummary(data?)` | `ApiUsageSummaryEntity` | Create an ApiUsageSummary entity instance. |
| `Asn(data?)` | `AsnEntity` | Create an Asn entity instance. |
| `Batch(data?)` | `BatchEntity` | Create a Batch entity instance. |
| `BatchEmailValidationResponseDto(data?)` | `BatchEmailValidationResponseDtoEntity` | Create a BatchEmailValidationResponseDto entity instance. |
| `CacheManagement(data?)` | `CacheManagementEntity` | Create a CacheManagement entity instance. |
| `DomainAnalysi(data?)` | `DomainAnalysiEntity` | Create a DomainAnalysi entity instance. |
| `DomainReputationV1Dto(data?)` | `DomainReputationV1DtoEntity` | Create a DomainReputationV1Dto entity instance. |
| `Email(data?)` | `EmailEntity` | Create an Email entity instance. |
| `Forward(data?)` | `ForwardEntity` | Create a Forward entity instance. |
| `IpInfoV0(data?)` | `IpInfoV0Entity` | Create an IpInfoV0 entity instance. |
| `IpReputation(data?)` | `IpReputationEntity` | Create an IpReputation entity instance. |
| `Ipn(data?)` | `IpnEntity` | Create an Ipn entity instance. |
| `Ipn2(data?)` | `Ipn2Entity` | Create an Ipn2 entity instance. |
| `Mxn(data?)` | `MxnEntity` | Create a Mxn entity instance. |
| `PaddleController(data?)` | `PaddleControllerEntity` | Create a PaddleController entity instance. |
| `RateLimitInfoDto(data?)` | `RateLimitInfoDtoEntity` | Create a RateLimitInfoDto entity instance. |
| `Reverse(data?)` | `ReverseEntity` | Create a Reverse entity instance. |
| `RiskScore(data?)` | `RiskScoreEntity` | Create a RiskScore entity instance. |
| `Status(data?)` | `StatusEntity` | Create a Status entity instance. |
| `Tor(data?)` | `TorEntity` | Create a Tor entity instance. |
| `UsageStatistic(data?)` | `UsageStatisticEntity` | Create an UsageStatistic entity instance. |
| `Whoi(data?)` | `WhoiEntity` | Create a Whoi entity instance. |
| `tester(testopts?, sdkopts?)` | `IpGeolocationApi4SDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `IpGeolocationApi4SDK.test(testopts?, sdkopts?)` | `IpGeolocationApi4SDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): IpGeolocationApi4SDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: load.

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

Operations: load.

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

Operations: load.

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

Operations: load.

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

Operations: create.

API path: `/api/v1/email/advanced/batch`

#### BatchEmailValidationResponseDto

| Field | Description |
| --- | --- |
| `failed_validation` |  |
| `result` |  |
| `successful_validation` |  |
| `total_processed` |  |

Operations: create.

API path: `/api/v1/email/advanced/batch/csv`

#### CacheManagement

| Field | Description |
| --- | --- |

Operations: load, remove.

API path: `/management/cache/domain-age/check/{domain}`

#### DomainAnalysi

| Field | Description |
| --- | --- |
| `domain` |  |

Operations: create, load.

API path: `/api/v1/domain/age/batch`

#### DomainReputationV1Dto

| Field | Description |
| --- | --- |
| `domain` |  |
| `is_disposable_email_domain` |  |
| `is_valid` |  |
| `resolved_ip` |  |
| `threat` |  |

Operations: load.

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

Operations: load.

API path: `/api/v1/email/{email}`

#### Forward

| Field | Description |
| --- | --- |
| `address` |  |
| `hostname` |  |

Operations: load.

API path: `/api/v1/dns/forward/{hostname}`

#### IpInfoV0

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/json/{ip}`

#### IpReputation

| Field | Description |
| --- | --- |
| `email` |  |
| `factor` |  |
| `ip` |  |
| `risk_level` |  |
| `score` |  |

Operations: load.

API path: `/api/v1/ip-reputation/{ip}`

#### Ipn

| Field | Description |
| --- | --- |
| `asn` |  |
| `ip` |  |
| `isp` |  |
| `location` |  |
| `suspicious_factor` |  |

Operations: load.

API path: `/api/v1/ip`

#### Ipn2

| Field | Description |
| --- | --- |
| `asn` |  |
| `ip` |  |
| `isp` |  |
| `location` |  |
| `suspicious_factor` |  |

Operations: load.

API path: `/api/v1/ip/{ip}`

#### Mxn

| Field | Description |
| --- | --- |
| `domain` |  |
| `mx_record` |  |

Operations: load.

API path: `/api/v1/dns/mx/{domain}`

#### PaddleController

| Field | Description |
| --- | --- |

Operations: create, load.

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

Operations: load.

API path: `/api/v1/ratelimit`

#### Reverse

| Field | Description |
| --- | --- |
| `hostname` |  |
| `ip` |  |
| `ptr_record` |  |
| `ttl` |  |

Operations: load.

API path: `/api/v1/dns/reverse/{ip}`

#### RiskScore

| Field | Description |
| --- | --- |
| `email` |  |
| `factor` |  |
| `ip` |  |
| `risk_level` |  |
| `score` |  |

Operations: load.

API path: `/api/v1/risk-score/{ip}`

#### Status

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/status`

#### Tor

| Field | Description |
| --- | --- |
| `ip` |  |
| `is_tor` |  |
| `tor_node_count` |  |

Operations: load.

API path: `/api/v1/tor/{ip}`

#### UsageStatistic

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: load.

API path: `/api/v1/dns/whois/{domain}`



## Entities


### Advanced

Create an instance: `const advanced = client.Advanced()`

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
| `syntax` | `Record<string, any>` |  |

#### Example: Load

```ts
const advanced = await client.Advanced().load({ id: 'advanced_id' })
```


### ApiUsageStatsModel

Create an instance: `const api_usage_stats_model = client.ApiUsageStatsModel()`

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

```ts
const api_usage_stats_model = await client.ApiUsageStatsModel().load({ id: 'api_usage_stats_model_id' })
```


### ApiUsageSummary

Create an instance: `const api_usage_summary = client.ApiUsageSummary()`

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

```ts
const api_usage_summary = await client.ApiUsageSummary().load()
```


### Asn

Create an instance: `const asn = client.Asn()`

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

```ts
const asn = await client.Asn().load({ id: 'asn_id' })
```


### Batch

Create an instance: `const batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `any[]` |  |
| `failed_lookup` | `number` |  |
| `failed_validation` | `number` |  |
| `ips` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `successful_lookup` | `number` |  |
| `successful_validation` | `number` |  |
| `total_processed` | `number` |  |

#### Example: Create

```ts
const batch = await client.Batch().create({
  email: [],
  failed_lookup: 1,
  failed_validation: 1,
  ips: [],
  result: {},
  successful_lookup: 1,
  successful_validation: 1,
  total_processed: 1,
})
```


### BatchEmailValidationResponseDto

Create an instance: `const batch_email_validation_response_dto = client.BatchEmailValidationResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed_validation` | `number` |  |
| `result` | `Record<string, any>` |  |
| `successful_validation` | `number` |  |
| `total_processed` | `number` |  |

#### Example: Create

```ts
const batch_email_validation_response_dto = await client.BatchEmailValidationResponseDto().create({
  failed_validation: 1,
  result: {},
  successful_validation: 1,
  total_processed: 1,
})
```


### CacheManagement

Create an instance: `const cache_management = client.CacheManagement()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ts
const cache_management = await client.CacheManagement().load()
```


### DomainAnalysi

Create an instance: `const domain_analysi = client.DomainAnalysi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `any[]` |  |

#### Example: Load

```ts
const domain_analysi = await client.DomainAnalysi().load({ domain: 'domain' })
```

#### Example: Create

```ts
const domain_analysi = await client.DomainAnalysi().create({
  domain: [],
})
```


### DomainReputationV1Dto

Create an instance: `const domain_reputation_v1_dto = client.DomainReputationV1Dto()`

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
| `resolved_ip` | `any[]` |  |
| `threat` | `Record<string, any>` |  |

#### Example: Load

```ts
const domain_reputation_v1_dto = await client.DomainReputationV1Dto().load({ domain: 'domain' })
```


### Email

Create an instance: `const email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `factor` | `Record<string, any>` |  |
| `has_mx_record` | `boolean` |  |
| `ip` | `any` |  |
| `is_disposable` | `boolean` |  |
| `mx_record` | `any[]` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |
| `syntax` | `Record<string, any>` |  |

#### Example: Load

```ts
const email = await client.Email().load({ id: 'email_id' })
```


### Forward

Create an instance: `const forward = client.Forward()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `any[]` |  |
| `hostname` | `string` |  |

#### Example: Load

```ts
const forward = await client.Forward().load({ id: 'forward_id' })
```


### IpInfoV0

Create an instance: `const ip_info_v0 = client.IpInfoV0()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const ip_info_v0 = await client.IpInfoV0().load()
```


### IpReputation

Create an instance: `const ip_reputation = client.IpReputation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `any` |  |
| `factor` | `Record<string, any>` |  |
| `ip` | `any` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |

#### Example: Load

```ts
const ip_reputation = await client.IpReputation().load({ id: 'ip_reputation_id' })
```


### Ipn

Create an instance: `const ipn = client.Ipn()`

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
| `location` | `Record<string, any>` |  |
| `suspicious_factor` | `Record<string, any>` |  |

#### Example: Load

```ts
const ipn = await client.Ipn().load()
```


### Ipn2

Create an instance: `const ipn2 = client.Ipn2()`

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
| `location` | `Record<string, any>` |  |
| `suspicious_factor` | `Record<string, any>` |  |

#### Example: Load

```ts
const ipn2 = await client.Ipn2().load({ ip: 'ip' })
```


### Mxn

Create an instance: `const mxn = client.Mxn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `mx_record` | `any[]` |  |

#### Example: Load

```ts
const mxn = await client.Mxn().load({ domain: 'domain' })
```


### PaddleController

Create an instance: `const paddle_controller = client.PaddleController()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const paddle_controller = await client.PaddleController().load()
```

#### Example: Create

```ts
const paddle_controller = await client.PaddleController().create({
})
```


### RateLimitInfoDto

Create an instance: `const rate_limit_info_dto = client.RateLimitInfoDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_api` | `Record<string, any>` |  |
| `interval_second` | `number` |  |
| `ip_api` | `Record<string, any>` |  |
| `next_renewal_date` | `string` |  |
| `plan_id` | `string` |  |
| `plan_name` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const rate_limit_info_dto = await client.RateLimitInfoDto().load()
```


### Reverse

Create an instance: `const reverse = client.Reverse()`

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

```ts
const reverse = await client.Reverse().load({ id: 'reverse_id' })
```


### RiskScore

Create an instance: `const risk_score = client.RiskScore()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `any` |  |
| `factor` | `Record<string, any>` |  |
| `ip` | `any` |  |
| `risk_level` | `string` |  |
| `score` | `number` |  |

#### Example: Load

```ts
const risk_score = await client.RiskScore().load({ id: 'risk_score_id' })
```


### Status

Create an instance: `const status = client.Status()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const status = await client.Status().load()
```


### Tor

Create an instance: `const tor = client.Tor()`

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

```ts
const tor = await client.Tor().load({ id: 'tor_id' })
```


### UsageStatistic

Create an instance: `const usage_statistic = client.UsageStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const usage_statistic = await client.UsageStatistic().load()
```


### Whoi

Create an instance: `const whoi = client.Whoi()`

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
| `name_server` | `any[]` |  |
| `raw` | `string` |  |
| `registered_on` | `string` |  |
| `registrar` | `any` |  |
| `status` | `any[]` |  |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const whoi = await client.Whoi().load({ id: 'whoi_id' })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
ip-geolocation-api4/
├── src/
│   ├── IpGeolocationApi4SDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { IpGeolocationApi4SDK } from '@voxgig-sdk/ip-geolocation-api4'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const advanced = client.Advanced()
await advanced.load({ id: "example_id" })

// advanced.data() now returns the advanced data from the last `load`
// advanced.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
