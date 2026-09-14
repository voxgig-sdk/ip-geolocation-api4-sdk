# IpGeolocationApi4 TypeScript SDK



The TypeScript SDK for the IpGeolocationApi4 API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Advanced()` — each with a small set of operations (`load`, `create`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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
import { IpGeolocationApi4SDK } from '@voxgig-sdk/ip-geolocation-api4-sdk'

const client = new IpGeolocationApi4SDK()
```

### 3. Load a cachemanagement

CacheManagement is nested under domain, so provide the `domain`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const cachemanagement = await client.CacheManagement().load({
    domain: 'example_domain',
  })
  console.log(cachemanagement)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const riskscore = await client.RiskScore().load({ id: "example_id" })
  console.log(riskscore)
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

const riskscore = await client.RiskScore().load({ id: 'test01' })
// riskscore is the entity, populated with mock response data
// — call riskscore.data() for the record itself
console.log(riskscore)
```

You can also use the instance method:

```ts
const client = new IpGeolocationApi4SDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.RiskScore()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
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
| `disposable` | Indicates whether the email is from a disposable/temporary email service. |
| `email` | The email address that was analyzed, returned in the original format provided. |
| `free` | Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.). |
| `gravatar` |  |
| `has_mx_records` | Indicates whether the domain has valid MX (Mail Exchange) records configured. |
| `id` |  |
| `reachable` | Overall reachability assessment. |
| `role_account` | Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.). |
| `smtp` |  |
| `suggestion` | Suggested correction for misspelled domains. |
| `syntax` | Detailed syntax analysis of the email address components. |

Operations: load.

API path: `/api/v1/email/advanced/{email}`

#### ApiUsageStatsModel

| Field | Description |
| --- | --- |
| `apiKey` |  |
| `apiType` |  |
| `authType` |  |
| `avgRequestDurationNanos` |  |
| `batchOperations` |  |
| `batchTokensConsumed` |  |
| `createdAt` |  |
| `hourBucket` |  |
| `id` |  |
| `minRemainingQuota` |  |
| `peakRemainingQuota` |  |
| `planId` |  |
| `quotaConsumed` |  |
| `rateLimitedRequests` |  |
| `successfulRequests` |  |
| `totalRequests` |  |
| `updatedAt` |  |

Operations: load.

API path: `/api/v1/usage/stats`

#### ApiUsageSummary

| Field | Description |
| --- | --- |
| `apiKey` |  |
| `apiType` |  |
| `avgRequestDurationMs` |  |
| `batchOperations` |  |
| `periodEnd` |  |
| `periodStart` |  |
| `quotaConsumed` |  |
| `rateLimitedRequests` |  |
| `successfulRequests` |  |
| `totalRequests` |  |

Operations: load.

API path: `/api/v1/usage/summary`

#### Asn

| Field | Description |
| --- | --- |
| `asn` |  |
| `country` |  |
| `country_code` |  |
| `id` |  |
| `ip` |  |
| `is_datacenter` |  |
| `network` |  |
| `organization` |  |

Operations: load.

API path: `/api/v1/asn/{ip}`

#### Batch

| Field | Description |
| --- | --- |
| `emails` | List of email addresses to validate. |
| `ips` | List of IP addresses to look up. |

Operations: create.

API path: `/api/v1/email/advanced/batch`

#### BatchEmailValidationResponseDto

| Field | Description |
| --- | --- |
| `failed_validations` |  |
| `results` |  |
| `successful_validations` |  |
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
| `domains` |  |

Operations: create, load.

API path: `/api/v1/domain/age/batch`

#### DomainReputationV1Dto

| Field | Description |
| --- | --- |
| `domain` | The normalized domain that was analyzed (lowercased, scheme/path stripped). |
| `is_disposable_email_domain` | Whether the domain is a known disposable/temporary email provider domain. |
| `is_valid` | Whether the input was a syntactically valid domain name. |
| `resolved_ips` | DNS A/AAAA records the domain currently resolves to. |
| `threat` | Threat-intelligence verdict for the domain itself (independent of its IPs). |

Operations: load.

API path: `/api/v1/domain/reputation/{domain}`

#### Email

| Field | Description |
| --- | --- |
| `email` | The email address that was analyzed, returned in normalized lowercase format. |
| `email_factors` | Email-specific risk factors and validation results. |
| `has_mx_records` | Whether the email domain has valid MX records in DNS. |
| `id` |  |
| `ip_factors` | IP-specific risk factors and analysis results. |
| `is_disposable` | Indicates whether the email address uses a disposable or temporary email service. |
| `mx_records` | MX records for the email domain, sorted by priority ascending. |
| `syntax` | Detailed syntax validation results and email component breakdown. |

Operations: load.

API path: `/api/v1/email/{email}`

#### Forward

| Field | Description |
| --- | --- |
| `addresses` |  |
| `hostname` |  |
| `id` |  |

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
| `email_factors` | Email-specific risk factors and validation results. |
| `id` |  |
| `ip_factors` | IP-specific risk factors and analysis results. |

Operations: load.

API path: `/api/v1/ip-reputation/{ip}`

#### Ipn

| Field | Description |
| --- | --- |
| `asn` | Autonomous System Number in AS<number> format. |
| `ip` | The IP address that was analyzed, returned in standard format. |
| `isp` | Internet Service Provider name derived from the ASN organization field. |
| `location` | Geographic location and timezone information for the IP address. |
| `suspicious_factors` | Comprehensive security threat analysis and suspicious activity indicators. |

Operations: load.

API path: `/api/v1/ip/{ip}`

#### Mxn

| Field | Description |
| --- | --- |
| `domain` |  |
| `mx_records` |  |

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
| `email_api` | Email validation API rate limit information |
| `interval_seconds` | Rate limit interval in seconds (time period for quota renewal) |
| `ip_api` | IP lookup API rate limit information |
| `next_renewal_date` | Next billing/renewal date when the quota will be reset (ISO 8601 date format) |
| `plan_id` | Subscription plan ID or 'default' for free tier users |
| `plan_name` | Human-readable plan name (if available) |
| `status` | Subscription status (active, past_due, cancelled, etc.) |

Operations: load.

API path: `/api/v1/ratelimit`

#### Reverse

| Field | Description |
| --- | --- |
| `hostname` |  |
| `id` |  |
| `ip` |  |
| `ptr_record` |  |
| `ttl` |  |

Operations: load.

API path: `/api/v1/dns/reverse/{ip}`

#### RiskScore

| Field | Description |
| --- | --- |
| `email_factors` | Email-specific risk factors and validation results. |
| `id` |  |
| `ip_factors` | IP-specific risk factors and analysis results. |

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
| `id` |  |
| `ip` | The IP address that was checked |
| `is_tor` | Whether the IP is a known Tor exit node |
| `tor_node_count` | Total number of currently known Tor exit nodes in the database |

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
| `id` |  |
| `name_servers` |  |
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
| `disposable` | `boolean` | Indicates whether the email is from a disposable/temporary email service. |
| `email` | `string` | The email address that was analyzed, returned in the original format provided. |
| `free` | `boolean` | Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.). |
| `gravatar` | `any` |  |
| `has_mx_records` | `boolean` | Indicates whether the domain has valid MX (Mail Exchange) records configured. |
| `id` | `string` |  |
| `reachable` | `string` | Overall reachability assessment. |
| `role_account` | `boolean` | Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.). |
| `smtp` | `any` |  |
| `suggestion` | `string` | Suggested correction for misspelled domains. |
| `syntax` | `Record<string, any>` | Detailed syntax analysis of the email address components. |

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
| `apiKey` | `string` |  |
| `apiType` | `string` |  |
| `authType` | `string` |  |
| `avgRequestDurationNanos` | `number | null` |  |
| `batchOperations` | `number` |  |
| `batchTokensConsumed` | `number` |  |
| `createdAt` | `string | null` |  |
| `hourBucket` | `string` |  |
| `id` | `number | null` |  |
| `minRemainingQuota` | `number | null` |  |
| `peakRemainingQuota` | `number | null` |  |
| `planId` | `string` |  |
| `quotaConsumed` | `number` |  |
| `rateLimitedRequests` | `number` |  |
| `successfulRequests` | `number` |  |
| `totalRequests` | `number` |  |
| `updatedAt` | `string | null` |  |

#### Example: Load

```ts
const api_usage_stats_model = await client.ApiUsageStatsModel().load({ api_key: 'api_key', end_date: 'end_date', start_date: 'start_date' })
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
| `apiKey` | `string` |  |
| `apiType` | `string` |  |
| `avgRequestDurationMs` | `number | null` |  |
| `batchOperations` | `number` |  |
| `periodEnd` | `string` |  |
| `periodStart` | `string` |  |
| `quotaConsumed` | `number` |  |
| `rateLimitedRequests` | `number` |  |
| `successfulRequests` | `number` |  |
| `totalRequests` | `number` |  |

#### Example: Load

```ts
const api_usage_summary = await client.ApiUsageSummary().load({ api_key: 'api_key', end_date: 'end_date', start_date: 'start_date' })
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
| `asn` | `number | null` |  |
| `country` | `string | null` |  |
| `country_code` | `string` |  |
| `id` | `string` |  |
| `ip` | `string` |  |
| `is_datacenter` | `boolean` |  |
| `network` | `string | null` |  |
| `organization` | `string | null` |  |

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
| `emails` | `any[]` | List of email addresses to validate. |
| `ips` | `any[]` | List of IP addresses to look up. |

#### Example: Create

```ts
const batch = await client.Batch().create({
  emails: [],
  ips: [],
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
| `failed_validations` | `number` |  |
| `results` | `Record<string, any>` |  |
| `successful_validations` | `number` |  |
| `total_processed` | `number` |  |

#### Example: Create

```ts
const batch_email_validation_response_dto = await client.BatchEmailValidationResponseDto().create({
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
const cache_management = await client.CacheManagement().load({ domain: 'domain' })
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
| `domains` | `any[]` |  |

#### Example: Load

```ts
const domain_analysi = await client.DomainAnalysi().load({ domain: 'domain' })
```

#### Example: Create

```ts
const domain_analysi = await client.DomainAnalysi().create({
  domains: [],
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
| `domain` | `string` | The normalized domain that was analyzed (lowercased, scheme/path stripped). |
| `is_disposable_email_domain` | `boolean` | Whether the domain is a known disposable/temporary email provider domain. |
| `is_valid` | `boolean` | Whether the input was a syntactically valid domain name. |
| `resolved_ips` | `any[]` | DNS A/AAAA records the domain currently resolves to. |
| `threat` | `Record<string, any>` | Threat-intelligence verdict for the domain itself (independent of its IPs). |

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
| `email` | `string` | The email address that was analyzed, returned in normalized lowercase format. |
| `email_factors` | `null` | Email-specific risk factors and validation results. |
| `has_mx_records` | `boolean` | Whether the email domain has valid MX records in DNS. |
| `id` | `string` |  |
| `ip_factors` | `null` | IP-specific risk factors and analysis results. |
| `is_disposable` | `boolean` | Indicates whether the email address uses a disposable or temporary email service. |
| `mx_records` | `any[]` | MX records for the email domain, sorted by priority ascending. |
| `syntax` | `Record<string, any>` | Detailed syntax validation results and email component breakdown. |

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
| `addresses` | `any[]` |  |
| `hostname` | `string` |  |
| `id` | `string` |  |

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
const ip_info_v0 = await client.IpInfoV0().load({ ip: 'ip' })
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
| `email_factors` | `null` | Email-specific risk factors and validation results. |
| `id` | `string` |  |
| `ip_factors` | `null` | IP-specific risk factors and analysis results. |

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
| `asn` | `string | null` | Autonomous System Number in AS<number> format. |
| `ip` | `string` | The IP address that was analyzed, returned in standard format. |
| `isp` | `string | null` | Internet Service Provider name derived from the ASN organization field. |
| `location` | `Record<string, any>` | Geographic location and timezone information for the IP address. |
| `suspicious_factors` | `Record<string, any>` | Comprehensive security threat analysis and suspicious activity indicators. |

#### Example: Load

```ts
const ipn = await client.Ipn().load({ ip: 'ip' })
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
| `mx_records` | `any[]` |  |

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
  http_entity: 'example_http_entity',
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
| `email_api` | `Record<string, any>` | Email validation API rate limit information |
| `interval_seconds` | `number` | Rate limit interval in seconds (time period for quota renewal) |
| `ip_api` | `Record<string, any>` | IP lookup API rate limit information |
| `next_renewal_date` | `string` | Next billing/renewal date when the quota will be reset (ISO 8601 date format) |
| `plan_id` | `string` | Subscription plan ID or 'default' for free tier users |
| `plan_name` | `string` | Human-readable plan name (if available) |
| `status` | `string | null` | Subscription status (active, past_due, cancelled, etc.) |

#### Example: Load

```ts
const rate_limit_info_dto = await client.RateLimitInfoDto().load({ api_key: 'api_key' })
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
| `hostname` | `string | null` |  |
| `id` | `string` |  |
| `ip` | `string` |  |
| `ptr_record` | `string` |  |
| `ttl` | `number | null` |  |

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
| `email_factors` | `null` | Email-specific risk factors and validation results. |
| `id` | `string` |  |
| `ip_factors` | `null` | IP-specific risk factors and analysis results. |

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
| `id` | `string` |  |
| `ip` | `string` | The IP address that was checked |
| `is_tor` | `boolean` | Whether the IP is a known Tor exit node |
| `tor_node_count` | `number` | Total number of currently known Tor exit nodes in the database |

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
const usage_statistic = await client.UsageStatistic().load({ api_key: 'api_key' })
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
| `error` | `string | null` |  |
| `expires_on` | `string` |  |
| `id` | `string` |  |
| `name_servers` | `any[]` |  |
| `raw` | `string` |  |
| `registered_on` | `string` |  |
| `registrar` | `any` |  |
| `status` | `any[]` |  |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const whoi = await client.Whoi().load({ id: 'whoi_id' })
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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
import { IpGeolocationApi4SDK } from '@voxgig-sdk/ip-geolocation-api4-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const riskscore = client.RiskScore()
await riskscore.load({ id: "example_id" })

// riskscore.data() now returns the riskscore data from the last `load`
// riskscore.match() returns { id: "example_id" }
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
