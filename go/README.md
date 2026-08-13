# IpGeolocationApi4 Golang SDK



The Golang SDK for the IpGeolocationApi4 API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Advanced(nil)` — each with the same small set of operations (`Load`, `Create`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/ip-geolocation-api4-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/ip-geolocation-api4-sdk/go=../ip-geolocation-api4-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/ip-geolocation-api4-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single advanced — the value is the loaded record.
    advanced, err := client.Advanced(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(advanced)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
riskscore, err := client.RiskScore(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = riskscore
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

riskScore, err := client.RiskScore(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(riskScore) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewIpGeolocationApi4SDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewIpGeolocationApi4SDK

```go
func NewIpGeolocationApi4SDK(options map[string]any) *IpGeolocationApi4SDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *IpGeolocationApi4SDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IpGeolocationApi4SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Advanced` | `(data map[string]any) IpGeolocationApi4Entity` | Create an Advanced entity instance. |
| `ApiUsageStatsModel` | `(data map[string]any) IpGeolocationApi4Entity` | Create an ApiUsageStatsModel entity instance. |
| `ApiUsageSummary` | `(data map[string]any) IpGeolocationApi4Entity` | Create an ApiUsageSummary entity instance. |
| `Asn` | `(data map[string]any) IpGeolocationApi4Entity` | Create an Asn entity instance. |
| `Batch` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Batch entity instance. |
| `BatchEmailValidationResponseDto` | `(data map[string]any) IpGeolocationApi4Entity` | Create a BatchEmailValidationResponseDto entity instance. |
| `CacheManagement` | `(data map[string]any) IpGeolocationApi4Entity` | Create a CacheManagement entity instance. |
| `DomainAnalysi` | `(data map[string]any) IpGeolocationApi4Entity` | Create a DomainAnalysi entity instance. |
| `DomainReputationV1Dto` | `(data map[string]any) IpGeolocationApi4Entity` | Create a DomainReputationV1Dto entity instance. |
| `Email` | `(data map[string]any) IpGeolocationApi4Entity` | Create an Email entity instance. |
| `Forward` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Forward entity instance. |
| `IpInfoV0` | `(data map[string]any) IpGeolocationApi4Entity` | Create an IpInfoV0 entity instance. |
| `IpReputation` | `(data map[string]any) IpGeolocationApi4Entity` | Create an IpReputation entity instance. |
| `Ipn` | `(data map[string]any) IpGeolocationApi4Entity` | Create an Ipn entity instance. |
| `Mxn` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Mxn entity instance. |
| `PaddleController` | `(data map[string]any) IpGeolocationApi4Entity` | Create a PaddleController entity instance. |
| `RateLimitInfoDto` | `(data map[string]any) IpGeolocationApi4Entity` | Create a RateLimitInfoDto entity instance. |
| `Reverse` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Reverse entity instance. |
| `RiskScore` | `(data map[string]any) IpGeolocationApi4Entity` | Create a RiskScore entity instance. |
| `Status` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Status entity instance. |
| `Tor` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Tor entity instance. |
| `UsageStatistic` | `(data map[string]any) IpGeolocationApi4Entity` | Create an UsageStatistic entity instance. |
| `Whoi` | `(data map[string]any) IpGeolocationApi4Entity` | Create a Whoi entity instance. |

### Entity interface (IpGeolocationApi4Entity)

All entities implement the `IpGeolocationApi4Entity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Remove` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    advanced, err := client.Advanced(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // advanced is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Advanced

| Field | Description |
| --- | --- |
| `"disposable"` |  |
| `"email"` |  |
| `"free"` |  |
| `"gravatar"` |  |
| `"has_mx_records"` |  |
| `"reachable"` |  |
| `"role_account"` |  |
| `"smtp"` |  |
| `"suggestion"` |  |
| `"syntax"` |  |

Operations: Load.

API path: `/api/v1/email/advanced/{email}`

#### ApiUsageStatsModel

| Field | Description |
| --- | --- |
| `"apiKey"` |  |
| `"apiType"` |  |
| `"authType"` |  |
| `"avgRequestDurationNanos"` |  |
| `"batchOperations"` |  |
| `"batchTokensConsumed"` |  |
| `"createdAt"` |  |
| `"hourBucket"` |  |
| `"id"` |  |
| `"minRemainingQuota"` |  |
| `"peakRemainingQuota"` |  |
| `"planId"` |  |
| `"quotaConsumed"` |  |
| `"rateLimitedRequests"` |  |
| `"successfulRequests"` |  |
| `"totalRequests"` |  |
| `"updatedAt"` |  |

Operations: Load.

API path: `/api/v1/usage/stats`

#### ApiUsageSummary

| Field | Description |
| --- | --- |
| `"apiKey"` |  |
| `"apiType"` |  |
| `"avgRequestDurationMs"` |  |
| `"batchOperations"` |  |
| `"periodEnd"` |  |
| `"periodStart"` |  |
| `"quotaConsumed"` |  |
| `"rateLimitedRequests"` |  |
| `"successfulRequests"` |  |
| `"totalRequests"` |  |

Operations: Load.

API path: `/api/v1/usage/summary`

#### Asn

| Field | Description |
| --- | --- |
| `"asn"` |  |
| `"country"` |  |
| `"country_code"` |  |
| `"ip"` |  |
| `"is_datacenter"` |  |
| `"network"` |  |
| `"organization"` |  |

Operations: Load.

API path: `/api/v1/asn/{ip}`

#### Batch

| Field | Description |
| --- | --- |
| `"emails"` |  |
| `"ips"` |  |

Operations: Create.

API path: `/api/v1/email/advanced/batch`

#### BatchEmailValidationResponseDto

| Field | Description |
| --- | --- |
| `"failed_validations"` |  |
| `"results"` |  |
| `"successful_validations"` |  |
| `"total_processed"` |  |

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
| `"domains"` |  |

Operations: Create, Load.

API path: `/api/v1/domain/age/batch`

#### DomainReputationV1Dto

| Field | Description |
| --- | --- |
| `"domain"` |  |
| `"is_disposable_email_domain"` |  |
| `"is_valid"` |  |
| `"resolved_ips"` |  |
| `"threat"` |  |

Operations: Load.

API path: `/api/v1/domain/reputation/{domain}`

#### Email

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"email_factors"` |  |
| `"has_mx_records"` |  |
| `"ip_factors"` |  |
| `"is_disposable"` |  |
| `"mx_records"` |  |
| `"syntax"` |  |

Operations: Load.

API path: `/api/v1/email/{email}`

#### Forward

| Field | Description |
| --- | --- |
| `"addresses"` |  |
| `"hostname"` |  |

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
| `"email_factors"` |  |
| `"ip_factors"` |  |

Operations: Load.

API path: `/api/v1/ip-reputation/{ip}`

#### Ipn

| Field | Description |
| --- | --- |
| `"asn"` |  |
| `"ip"` |  |
| `"isp"` |  |
| `"location"` |  |
| `"suspicious_factors"` |  |

Operations: Load.

API path: `/api/v1/ip/{ip}`

#### Mxn

| Field | Description |
| --- | --- |
| `"domain"` |  |
| `"mx_records"` |  |

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
| `"email_api"` |  |
| `"interval_seconds"` |  |
| `"ip_api"` |  |
| `"next_renewal_date"` |  |
| `"plan_id"` |  |
| `"plan_name"` |  |
| `"status"` |  |

Operations: Load.

API path: `/api/v1/ratelimit`

#### Reverse

| Field | Description |
| --- | --- |
| `"hostname"` |  |
| `"ip"` |  |
| `"ptr_record"` |  |
| `"ttl"` |  |

Operations: Load.

API path: `/api/v1/dns/reverse/{ip}`

#### RiskScore

| Field | Description |
| --- | --- |
| `"email_factors"` |  |
| `"ip_factors"` |  |

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
| `"ip"` |  |
| `"is_tor"` |  |
| `"tor_node_count"` |  |

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
| `"domain"` |  |
| `"error"` |  |
| `"expires_on"` |  |
| `"name_servers"` |  |
| `"raw"` |  |
| `"registered_on"` |  |
| `"registrar"` |  |
| `"status"` |  |
| `"updated_on"` |  |

Operations: Load.

API path: `/api/v1/dns/whois/{domain}`



## Entities


### Advanced

Create an instance: `advanced := client.Advanced(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disposable` | `bool` |  |
| `email` | `string` |  |
| `free` | `bool` |  |
| `gravatar` | `any` |  |
| `has_mx_records` | `bool` |  |
| `reachable` | `string` |  |
| `role_account` | `bool` |  |
| `smtp` | `any` |  |
| `suggestion` | `string` |  |
| `syntax` | `map[string]any` |  |

#### Example: Load

```go
advanced, err := client.Advanced(nil).Load(map[string]any{"id": "advanced_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(advanced) // the loaded record
```


### ApiUsageStatsModel

Create an instance: `apiUsageStatsModel := client.ApiUsageStatsModel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `apiType` | `string` |  |
| `authType` | `string` |  |
| `avgRequestDurationNanos` | `any` |  |
| `batchOperations` | `int` |  |
| `batchTokensConsumed` | `int` |  |
| `createdAt` | `any` |  |
| `hourBucket` | `string` |  |
| `id` | `any` |  |
| `minRemainingQuota` | `any` |  |
| `peakRemainingQuota` | `any` |  |
| `planId` | `string` |  |
| `quotaConsumed` | `int` |  |
| `rateLimitedRequests` | `int` |  |
| `successfulRequests` | `int` |  |
| `totalRequests` | `int` |  |
| `updatedAt` | `any` |  |

#### Example: Load

```go
apiUsageStatsModel, err := client.ApiUsageStatsModel(nil).Load(map[string]any{"id": "api_usage_stats_model_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiUsageStatsModel) // the loaded record
```


### ApiUsageSummary

Create an instance: `apiUsageSummary := client.ApiUsageSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiKey` | `string` |  |
| `apiType` | `string` |  |
| `avgRequestDurationMs` | `any` |  |
| `batchOperations` | `int` |  |
| `periodEnd` | `string` |  |
| `periodStart` | `string` |  |
| `quotaConsumed` | `int` |  |
| `rateLimitedRequests` | `int` |  |
| `successfulRequests` | `int` |  |
| `totalRequests` | `int` |  |

#### Example: Load

```go
apiUsageSummary, err := client.ApiUsageSummary(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiUsageSummary) // the loaded record
```


### Asn

Create an instance: `asn := client.Asn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `any` |  |
| `country` | `any` |  |
| `country_code` | `string` |  |
| `ip` | `string` |  |
| `is_datacenter` | `bool` |  |
| `network` | `any` |  |
| `organization` | `any` |  |

#### Example: Load

```go
asn, err := client.Asn(nil).Load(map[string]any{"id": "asn_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(asn) // the loaded record
```


### Batch

Create an instance: `batch := client.Batch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emails` | `[]any` |  |
| `ips` | `[]any` |  |

#### Example: Create

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


### BatchEmailValidationResponseDto

Create an instance: `batchEmailValidationResponseDto := client.BatchEmailValidationResponseDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed_validations` | `int` |  |
| `results` | `map[string]any` |  |
| `successful_validations` | `int` |  |
| `total_processed` | `int` |  |

#### Example: Create

```go
result, err := client.BatchEmailValidationResponseDto(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CacheManagement

Create an instance: `cacheManagement := client.CacheManagement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Example: Load

```go
cacheManagement, err := client.CacheManagement(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cacheManagement) // the loaded record
```


### DomainAnalysi

Create an instance: `domainAnalysi := client.DomainAnalysi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domains` | `[]any` |  |

#### Example: Load

```go
domainAnalysi, err := client.DomainAnalysi(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainAnalysi) // the loaded record
```

#### Example: Create

```go
result, err := client.DomainAnalysi(nil).Create(map[string]any{
    "domains": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DomainReputationV1Dto

Create an instance: `domainReputationV1Dto := client.DomainReputationV1Dto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `is_disposable_email_domain` | `bool` |  |
| `is_valid` | `bool` |  |
| `resolved_ips` | `[]any` |  |
| `threat` | `map[string]any` |  |

#### Example: Load

```go
domainReputationV1Dto, err := client.DomainReputationV1Dto(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(domainReputationV1Dto) // the loaded record
```


### Email

Create an instance: `email := client.Email(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `email_factors` | `any` |  |
| `has_mx_records` | `bool` |  |
| `ip_factors` | `any` |  |
| `is_disposable` | `bool` |  |
| `mx_records` | `[]any` |  |
| `syntax` | `map[string]any` |  |

#### Example: Load

```go
email, err := client.Email(nil).Load(map[string]any{"id": "email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(email) // the loaded record
```


### Forward

Create an instance: `forward := client.Forward(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `addresses` | `[]any` |  |
| `hostname` | `string` |  |

#### Example: Load

```go
forward, err := client.Forward(nil).Load(map[string]any{"id": "forward_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(forward) // the loaded record
```


### IpInfoV0

Create an instance: `ipInfoV0 := client.IpInfoV0(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
ipInfoV0, err := client.IpInfoV0(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipInfoV0) // the loaded record
```


### IpReputation

Create an instance: `ipReputation := client.IpReputation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_factors` | `any` |  |
| `ip_factors` | `any` |  |

#### Example: Load

```go
ipReputation, err := client.IpReputation(nil).Load(map[string]any{"id": "ip_reputation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipReputation) // the loaded record
```


### Ipn

Create an instance: `ipn := client.Ipn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `any` |  |
| `ip` | `string` |  |
| `isp` | `any` |  |
| `location` | `map[string]any` |  |
| `suspicious_factors` | `map[string]any` |  |

#### Example: Load

```go
ipn, err := client.Ipn(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipn) // the loaded record
```


### Mxn

Create an instance: `mxn := client.Mxn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `mx_records` | `[]any` |  |

#### Example: Load

```go
mxn, err := client.Mxn(nil).Load(map[string]any{"domain": "domain"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(mxn) // the loaded record
```


### PaddleController

Create an instance: `paddleController := client.PaddleController(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Load

```go
paddleController, err := client.PaddleController(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paddleController) // the loaded record
```

#### Example: Create

```go
result, err := client.PaddleController(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### RateLimitInfoDto

Create an instance: `rateLimitInfoDto := client.RateLimitInfoDto(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_api` | `map[string]any` |  |
| `interval_seconds` | `int` |  |
| `ip_api` | `map[string]any` |  |
| `next_renewal_date` | `string` |  |
| `plan_id` | `string` |  |
| `plan_name` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
rateLimitInfoDto, err := client.RateLimitInfoDto(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rateLimitInfoDto) // the loaded record
```


### Reverse

Create an instance: `reverse := client.Reverse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `any` |  |
| `ip` | `string` |  |
| `ptr_record` | `string` |  |
| `ttl` | `any` |  |

#### Example: Load

```go
reverse, err := client.Reverse(nil).Load(map[string]any{"id": "reverse_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reverse) // the loaded record
```


### RiskScore

Create an instance: `riskScore := client.RiskScore(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_factors` | `any` |  |
| `ip_factors` | `any` |  |

#### Example: Load

```go
riskScore, err := client.RiskScore(nil).Load(map[string]any{"id": "risk_score_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(riskScore) // the loaded record
```


### Status

Create an instance: `status := client.Status(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
status, err := client.Status(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(status) // the loaded record
```


### Tor

Create an instance: `tor := client.Tor(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ip` | `string` |  |
| `is_tor` | `bool` |  |
| `tor_node_count` | `int` |  |

#### Example: Load

```go
tor, err := client.Tor(nil).Load(map[string]any{"id": "tor_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tor) // the loaded record
```


### UsageStatistic

Create an instance: `usageStatistic := client.UsageStatistic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
usageStatistic, err := client.UsageStatistic(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usageStatistic) // the loaded record
```


### Whoi

Create an instance: `whoi := client.Whoi(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `string` |  |
| `error` | `any` |  |
| `expires_on` | `string` |  |
| `name_servers` | `[]any` |  |
| `raw` | `string` |  |
| `registered_on` | `string` |  |
| `registrar` | `any` |  |
| `status` | `[]any` |  |
| `updated_on` | `string` |  |

#### Example: Load

```go
whoi, err := client.Whoi(nil).Load(map[string]any{"id": "whoi_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(whoi) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/ip-geolocation-api4-sdk/go/
├── ip-geolocation-api4.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/ip-geolocation-api4-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
riskscore := client.RiskScore(nil)
riskscore.Load(nil, nil)

// riskscore.Data() now returns the riskscore data from the last load
// riskscore.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
