# IpGeolocationApi4 TypeScript SDK Reference

Complete API reference for the IpGeolocationApi4 TypeScript SDK.


## IpGeolocationApi4SDK

### Constructor

```ts
new IpGeolocationApi4SDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi4SDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IpGeolocationApi4SDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IpGeolocationApi4SDK` instance in test mode.


### Instance Methods

#### `Advanced(data?: object)`

Create a new `Advanced` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdvancedEntity` instance.

#### `ApiUsageStatsModel(data?: object)`

Create a new `ApiUsageStatsModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiUsageStatsModelEntity` instance.

#### `ApiUsageSummary(data?: object)`

Create a new `ApiUsageSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiUsageSummaryEntity` instance.

#### `Asn(data?: object)`

Create a new `Asn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AsnEntity` instance.

#### `Batch(data?: object)`

Create a new `Batch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchEntity` instance.

#### `BatchEmailValidationResponseDto(data?: object)`

Create a new `BatchEmailValidationResponseDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchEmailValidationResponseDtoEntity` instance.

#### `CacheManagement(data?: object)`

Create a new `CacheManagement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CacheManagementEntity` instance.

#### `DomainAnalysi(data?: object)`

Create a new `DomainAnalysi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainAnalysiEntity` instance.

#### `DomainReputationV1Dto(data?: object)`

Create a new `DomainReputationV1Dto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainReputationV1DtoEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `Forward(data?: object)`

Create a new `Forward` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ForwardEntity` instance.

#### `IpInfoV0(data?: object)`

Create a new `IpInfoV0` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpInfoV0Entity` instance.

#### `IpReputation(data?: object)`

Create a new `IpReputation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpReputationEntity` instance.

#### `Ipn(data?: object)`

Create a new `Ipn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpnEntity` instance.

#### `Mxn(data?: object)`

Create a new `Mxn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MxnEntity` instance.

#### `PaddleController(data?: object)`

Create a new `PaddleController` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaddleControllerEntity` instance.

#### `RateLimitInfoDto(data?: object)`

Create a new `RateLimitInfoDto` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RateLimitInfoDtoEntity` instance.

#### `Reverse(data?: object)`

Create a new `Reverse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReverseEntity` instance.

#### `RiskScore(data?: object)`

Create a new `RiskScore` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RiskScoreEntity` instance.

#### `Status(data?: object)`

Create a new `Status` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusEntity` instance.

#### `Tor(data?: object)`

Create a new `Tor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TorEntity` instance.

#### `UsageStatistic(data?: object)`

Create a new `UsageStatistic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageStatisticEntity` instance.

#### `Whoi(data?: object)`

Create a new `Whoi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhoiEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IpGeolocationApi4SDK.test()`.

**Returns:** `IpGeolocationApi4SDK` instance in test mode.


---

## AdvancedEntity

```ts
const advanced = client.Advanced()
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
| `syntax` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Advanced().load({ id: 'advanced_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiUsageStatsModelEntity

```ts
const api_usage_stats_model = client.ApiUsageStatsModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `authType` | `string` | Yes |  |
| `avgRequestDurationNanos` | `number | null` | No |  |
| `batchOperations` | `number` | Yes |  |
| `batchTokensConsumed` | `number` | Yes |  |
| `createdAt` | `string | null` | No |  |
| `hourBucket` | `string` | Yes |  |
| `id` | `number | null` | No |  |
| `minRemainingQuota` | `number | null` | No |  |
| `peakRemainingQuota` | `number | null` | No |  |
| `planId` | `string` | Yes |  |
| `quotaConsumed` | `number` | Yes |  |
| `rateLimitedRequests` | `number` | Yes |  |
| `successfulRequests` | `number` | Yes |  |
| `totalRequests` | `number` | Yes |  |
| `updatedAt` | `string | null` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiUsageStatsModel().load({ id: 'api_usage_stats_model_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiUsageStatsModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiUsageSummaryEntity

```ts
const api_usage_summary = client.ApiUsageSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `avgRequestDurationMs` | `number | null` | No |  |
| `batchOperations` | `number` | Yes |  |
| `periodEnd` | `string` | Yes |  |
| `periodStart` | `string` | Yes |  |
| `quotaConsumed` | `number` | Yes |  |
| `rateLimitedRequests` | `number` | Yes |  |
| `successfulRequests` | `number` | Yes |  |
| `totalRequests` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiUsageSummary().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiUsageSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AsnEntity

```ts
const asn = client.Asn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `number | null` | No |  |
| `country` | `string | null` | No |  |
| `country_code` | `string` | No |  |
| `ip` | `string` | Yes |  |
| `is_datacenter` | `boolean` | Yes |  |
| `network` | `string | null` | No |  |
| `organization` | `string | null` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Asn().load({ id: 'asn_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AsnEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchEntity

```ts
const batch = client.Batch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `any[]` | Yes |  |
| `ips` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Batch().create({
  emails: [],
  ips: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchEmailValidationResponseDtoEntity

```ts
const batch_email_validation_response_dto = client.BatchEmailValidationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validations` | `number` | No |  |
| `results` | `Record<string, any>` | No |  |
| `successful_validations` | `number` | No |  |
| `total_processed` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BatchEmailValidationResponseDto().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CacheManagementEntity

```ts
const cache_management = client.CacheManagement()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CacheManagement().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CacheManagement().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CacheManagementEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainAnalysiEntity

```ts
const domain_analysi = client.DomainAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainAnalysi().create({
  domains: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DomainAnalysi().load({ domain: 'domain' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainAnalysiEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainReputationV1DtoEntity

```ts
const domain_reputation_v1_dto = client.DomainReputationV1Dto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `is_disposable_email_domain` | `boolean` | Yes |  |
| `is_valid` | `boolean` | Yes |  |
| `resolved_ips` | `any[]` | Yes |  |
| `threat` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DomainReputationV1Dto().load({ domain: 'domain' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainReputationV1DtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `email_factors` | `null` | Yes |  |
| `has_mx_records` | `boolean` | Yes |  |
| `ip_factors` | `null` | Yes |  |
| `is_disposable` | `boolean` | Yes |  |
| `mx_records` | `any[]` | Yes |  |
| `syntax` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Email().load({ id: 'email_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ForwardEntity

```ts
const forward = client.Forward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `any[]` | Yes |  |
| `hostname` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Forward().load({ id: 'forward_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ForwardEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpInfoV0Entity

```ts
const ip_info_v0 = client.IpInfoV0()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IpInfoV0().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpInfoV0Entity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpReputationEntity

```ts
const ip_reputation = client.IpReputation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `null` | Yes |  |
| `ip_factors` | `null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IpReputation().load({ id: 'ip_reputation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpReputationEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpnEntity

```ts
const ipn = client.Ipn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `string | null` | No |  |
| `ip` | `string` | Yes |  |
| `isp` | `string | null` | No |  |
| `location` | `Record<string, any>` | Yes |  |
| `suspicious_factors` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ipn().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpnEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MxnEntity

```ts
const mxn = client.Mxn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `mx_records` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Mxn().load({ domain: 'domain' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MxnEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaddleControllerEntity

```ts
const paddle_controller = client.PaddleController()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaddleController().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaddleController().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaddleControllerEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RateLimitInfoDtoEntity

```ts
const rate_limit_info_dto = client.RateLimitInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `Record<string, any>` | Yes |  |
| `interval_seconds` | `number` | Yes |  |
| `ip_api` | `Record<string, any>` | Yes |  |
| `next_renewal_date` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `plan_name` | `string` | No |  |
| `status` | `string | null` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RateLimitInfoDto().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RateLimitInfoDtoEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReverseEntity

```ts
const reverse = client.Reverse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `string | null` | No |  |
| `ip` | `string` | Yes |  |
| `ptr_record` | `string` | No |  |
| `ttl` | `number | null` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reverse().load({ id: 'reverse_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReverseEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RiskScoreEntity

```ts
const risk_score = client.RiskScore()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `null` | Yes |  |
| `ip_factors` | `null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RiskScore().load({ id: 'risk_score_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RiskScoreEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusEntity

```ts
const status = client.Status()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Status().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TorEntity

```ts
const tor = client.Tor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `string` | Yes |  |
| `is_tor` | `boolean` | Yes |  |
| `tor_node_count` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tor().load({ id: 'tor_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TorEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageStatisticEntity

```ts
const usage_statistic = client.UsageStatistic()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UsageStatistic().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageStatisticEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhoiEntity

```ts
const whoi = client.Whoi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `error` | `string | null` | No |  |
| `expires_on` | `string` | No |  |
| `name_servers` | `any[]` | Yes |  |
| `raw` | `string` | Yes |  |
| `registered_on` | `string` | No |  |
| `registrar` | `any` | No |  |
| `status` | `any[]` | Yes |  |
| `updated_on` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Whoi().load({ id: 'whoi_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhoiEntity` instance with the same client and
options.

#### `client()`

Return the parent `IpGeolocationApi4SDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new IpGeolocationApi4SDK({
  feature: {
    test: { active: true },
  }
})
```

