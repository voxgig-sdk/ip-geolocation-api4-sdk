# IpGeolocationApi4 Golang SDK Reference

Complete API reference for the IpGeolocationApi4 Golang SDK.


## IpGeolocationApi4SDK

### Constructor

```go
func NewIpGeolocationApi4SDK(options map[string]any) *IpGeolocationApi4SDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *IpGeolocationApi4SDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *IpGeolocationApi4SDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Advanced(data map[string]any) IpGeolocationApi4Entity`

Create a new `Advanced` entity instance. Pass `nil` for no initial data.

#### `ApiUsageStatsModel(data map[string]any) IpGeolocationApi4Entity`

Create a new `ApiUsageStatsModel` entity instance. Pass `nil` for no initial data.

#### `ApiUsageSummary(data map[string]any) IpGeolocationApi4Entity`

Create a new `ApiUsageSummary` entity instance. Pass `nil` for no initial data.

#### `Asn(data map[string]any) IpGeolocationApi4Entity`

Create a new `Asn` entity instance. Pass `nil` for no initial data.

#### `Batch(data map[string]any) IpGeolocationApi4Entity`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `BatchEmailValidationResponseDto(data map[string]any) IpGeolocationApi4Entity`

Create a new `BatchEmailValidationResponseDto` entity instance. Pass `nil` for no initial data.

#### `CacheManagement(data map[string]any) IpGeolocationApi4Entity`

Create a new `CacheManagement` entity instance. Pass `nil` for no initial data.

#### `DomainAnalysi(data map[string]any) IpGeolocationApi4Entity`

Create a new `DomainAnalysi` entity instance. Pass `nil` for no initial data.

#### `DomainReputationV1Dto(data map[string]any) IpGeolocationApi4Entity`

Create a new `DomainReputationV1Dto` entity instance. Pass `nil` for no initial data.

#### `Email(data map[string]any) IpGeolocationApi4Entity`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `Forward(data map[string]any) IpGeolocationApi4Entity`

Create a new `Forward` entity instance. Pass `nil` for no initial data.

#### `IpInfoV0(data map[string]any) IpGeolocationApi4Entity`

Create a new `IpInfoV0` entity instance. Pass `nil` for no initial data.

#### `IpReputation(data map[string]any) IpGeolocationApi4Entity`

Create a new `IpReputation` entity instance. Pass `nil` for no initial data.

#### `Ipn(data map[string]any) IpGeolocationApi4Entity`

Create a new `Ipn` entity instance. Pass `nil` for no initial data.

#### `Mxn(data map[string]any) IpGeolocationApi4Entity`

Create a new `Mxn` entity instance. Pass `nil` for no initial data.

#### `PaddleController(data map[string]any) IpGeolocationApi4Entity`

Create a new `PaddleController` entity instance. Pass `nil` for no initial data.

#### `RateLimitInfoDto(data map[string]any) IpGeolocationApi4Entity`

Create a new `RateLimitInfoDto` entity instance. Pass `nil` for no initial data.

#### `Reverse(data map[string]any) IpGeolocationApi4Entity`

Create a new `Reverse` entity instance. Pass `nil` for no initial data.

#### `RiskScore(data map[string]any) IpGeolocationApi4Entity`

Create a new `RiskScore` entity instance. Pass `nil` for no initial data.

#### `Status(data map[string]any) IpGeolocationApi4Entity`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `Tor(data map[string]any) IpGeolocationApi4Entity`

Create a new `Tor` entity instance. Pass `nil` for no initial data.

#### `UsageStatistic(data map[string]any) IpGeolocationApi4Entity`

Create a new `UsageStatistic` entity instance. Pass `nil` for no initial data.

#### `Whoi(data map[string]any) IpGeolocationApi4Entity`

Create a new `Whoi` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AdvancedEntity

```go
advanced := client.Advanced(nil)
fmt.Println(advanced.GetName()) // "advanced"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disposable` | `bool` | Yes |  |
| `email` | `string` | Yes |  |
| `free` | `bool` | Yes |  |
| `gravatar` | `any` | No |  |
| `has_mx_records` | `bool` | Yes |  |
| `reachable` | `string` | Yes |  |
| `role_account` | `bool` | Yes |  |
| `smtp` | `any` | No |  |
| `suggestion` | `string` | Yes |  |
| `syntax` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Advanced(nil).Load(map[string]any{"id": "advanced_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiUsageStatsModelEntity

```go
apiUsageStatsModel := client.ApiUsageStatsModel(nil)
fmt.Println(apiUsageStatsModel.GetName()) // "api_usage_stats_model"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `authType` | `string` | Yes |  |
| `avgRequestDurationNanos` | `any` | No |  |
| `batchOperations` | `int` | Yes |  |
| `batchTokensConsumed` | `int` | Yes |  |
| `createdAt` | `any` | No |  |
| `hourBucket` | `string` | Yes |  |
| `id` | `any` | No |  |
| `minRemainingQuota` | `any` | No |  |
| `peakRemainingQuota` | `any` | No |  |
| `planId` | `string` | Yes |  |
| `quotaConsumed` | `int` | Yes |  |
| `rateLimitedRequests` | `int` | Yes |  |
| `successfulRequests` | `int` | Yes |  |
| `totalRequests` | `int` | Yes |  |
| `updatedAt` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiUsageStatsModel(nil).Load(map[string]any{"id": "api_usage_stats_model_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiUsageStatsModelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApiUsageSummaryEntity

```go
apiUsageSummary := client.ApiUsageSummary(nil)
fmt.Println(apiUsageSummary.GetName()) // "api_usage_summary"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `avgRequestDurationMs` | `any` | No |  |
| `batchOperations` | `int` | Yes |  |
| `periodEnd` | `string` | Yes |  |
| `periodStart` | `string` | Yes |  |
| `quotaConsumed` | `int` | Yes |  |
| `rateLimitedRequests` | `int` | Yes |  |
| `successfulRequests` | `int` | Yes |  |
| `totalRequests` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiUsageSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiUsageSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AsnEntity

```go
asn := client.Asn(nil)
fmt.Println(asn.GetName()) // "asn"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `any` | No |  |
| `country` | `any` | No |  |
| `country_code` | `string` | No |  |
| `ip` | `string` | Yes |  |
| `is_datacenter` | `bool` | Yes |  |
| `network` | `any` | No |  |
| `organization` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Asn(nil).Load(map[string]any{"id": "asn_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AsnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BatchEntity

```go
batch := client.Batch(nil)
fmt.Println(batch.GetName()) // "batch"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `[]any` | Yes |  |
| `ips` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Batch(nil).Create(map[string]any{
    "emails": []any{},
    "ips": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BatchEmailValidationResponseDtoEntity

```go
batchEmailValidationResponseDto := client.BatchEmailValidationResponseDto(nil)
fmt.Println(batchEmailValidationResponseDto.GetName()) // "batch_email_validation_response_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validations` | `int` | No |  |
| `results` | `map[string]any` | No |  |
| `successful_validations` | `int` | No |  |
| `total_processed` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BatchEmailValidationResponseDto(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CacheManagementEntity

```go
cacheManagement := client.CacheManagement(nil)
fmt.Println(cacheManagement.GetName()) // "cache_management"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CacheManagement(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CacheManagement(nil).Remove(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CacheManagementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainAnalysiEntity

```go
domainAnalysi := client.DomainAnalysi(nil)
fmt.Println(domainAnalysi.GetName()) // "domain_analysi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DomainAnalysi(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DomainAnalysi(nil).Create(map[string]any{
    "domains": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainAnalysiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DomainReputationV1DtoEntity

```go
domainReputationV1Dto := client.DomainReputationV1Dto(nil)
fmt.Println(domainReputationV1Dto.GetName()) // "domain_reputation_v1_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `is_disposable_email_domain` | `bool` | Yes |  |
| `is_valid` | `bool` | Yes |  |
| `resolved_ips` | `[]any` | Yes |  |
| `threat` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DomainReputationV1Dto(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DomainReputationV1DtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailEntity

```go
email := client.Email(nil)
fmt.Println(email.GetName()) // "email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `email_factors` | `any` | Yes |  |
| `has_mx_records` | `bool` | Yes |  |
| `ip_factors` | `any` | Yes |  |
| `is_disposable` | `bool` | Yes |  |
| `mx_records` | `[]any` | Yes |  |
| `syntax` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Email(nil).Load(map[string]any{"id": "email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ForwardEntity

```go
forward := client.Forward(nil)
fmt.Println(forward.GetName()) // "forward"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `[]any` | Yes |  |
| `hostname` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Forward(nil).Load(map[string]any{"id": "forward_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ForwardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpInfoV0Entity

```go
ipInfoV0 := client.IpInfoV0(nil)
fmt.Println(ipInfoV0.GetName()) // "ip_info_v0"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IpInfoV0(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpInfoV0Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpReputationEntity

```go
ipReputation := client.IpReputation(nil)
fmt.Println(ipReputation.GetName()) // "ip_reputation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `any` | Yes |  |
| `ip_factors` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IpReputation(nil).Load(map[string]any{"id": "ip_reputation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpReputationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpnEntity

```go
ipn := client.Ipn(nil)
fmt.Println(ipn.GetName()) // "ipn"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `any` | No |  |
| `ip` | `string` | Yes |  |
| `isp` | `any` | No |  |
| `location` | `map[string]any` | Yes |  |
| `suspicious_factors` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Ipn(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MxnEntity

```go
mxn := client.Mxn(nil)
fmt.Println(mxn.GetName()) // "mxn"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `mx_records` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Mxn(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MxnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaddleControllerEntity

```go
paddleController := client.PaddleController(nil)
fmt.Println(paddleController.GetName()) // "paddle_controller"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaddleController(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PaddleController(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaddleControllerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RateLimitInfoDtoEntity

```go
rateLimitInfoDto := client.RateLimitInfoDto(nil)
fmt.Println(rateLimitInfoDto.GetName()) // "rate_limit_info_dto"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `map[string]any` | Yes |  |
| `interval_seconds` | `int` | Yes |  |
| `ip_api` | `map[string]any` | Yes |  |
| `next_renewal_date` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `plan_name` | `string` | No |  |
| `status` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RateLimitInfoDto(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RateLimitInfoDtoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReverseEntity

```go
reverse := client.Reverse(nil)
fmt.Println(reverse.GetName()) // "reverse"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `any` | No |  |
| `ip` | `string` | Yes |  |
| `ptr_record` | `string` | No |  |
| `ttl` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reverse(nil).Load(map[string]any{"id": "reverse_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReverseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RiskScoreEntity

```go
riskScore := client.RiskScore(nil)
fmt.Println(riskScore.GetName()) // "risk_score"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `any` | Yes |  |
| `ip_factors` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RiskScore(nil).Load(map[string]any{"id": "risk_score_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RiskScoreEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StatusEntity

```go
status := client.Status(nil)
fmt.Println(status.GetName()) // "status"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Status(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TorEntity

```go
tor := client.Tor(nil)
fmt.Println(tor.GetName()) // "tor"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `string` | Yes |  |
| `is_tor` | `bool` | Yes |  |
| `tor_node_count` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tor(nil).Load(map[string]any{"id": "tor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageStatisticEntity

```go
usageStatistic := client.UsageStatistic(nil)
fmt.Println(usageStatistic.GetName()) // "usage_statistic"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.UsageStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageStatisticEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WhoiEntity

```go
whoi := client.Whoi(nil)
fmt.Println(whoi.GetName()) // "whoi"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `error` | `any` | No |  |
| `expires_on` | `string` | No |  |
| `name_servers` | `[]any` | Yes |  |
| `raw` | `string` | Yes |  |
| `registered_on` | `string` | No |  |
| `registrar` | `any` | No |  |
| `status` | `[]any` | Yes |  |
| `updated_on` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Whoi(nil).Load(map[string]any{"id": "whoi_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WhoiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewIpGeolocationApi4SDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

