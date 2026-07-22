# IpGeolocationApi4 Python SDK



The Python SDK for the IpGeolocationApi4 API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Advanced()` — each
carrying a small, uniform set of operations (`load`, `create`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/ip-geolocation-api4-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from ipgeolocationapi4_sdk import IpGeolocationApi4SDK

client = IpGeolocationApi4SDK()
```

### 3. Load a domainanalysi

DomainAnalysi is nested under domain, so provide the `domain`.
`load()` returns the bare record (a `dict`) and raises on error.

```python
try:
    domainanalysi = client.DomainAnalysi().load({"domain": "example_domain"})
    print(domainanalysi)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    advanced = client.Advanced().load({"id": "example_id"})
    print(advanced)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = IpGeolocationApi4SDK.test()

# Entity ops return the bare record and raise on error.
advanced = client.Advanced().load({"id": "test01"})
# advanced contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = IpGeolocationApi4SDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### IpGeolocationApi4SDK

```python
from ipgeolocationapi4_sdk import IpGeolocationApi4SDK

client = IpGeolocationApi4SDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = IpGeolocationApi4SDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### IpGeolocationApi4SDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `advanced = client.Advanced()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disposable` | `bool` |  |
| `email` | `str` |  |
| `free` | `bool` |  |
| `gravatar` | `Any` |  |
| `has_mx_record` | `bool` |  |
| `reachable` | `str` |  |
| `role_account` | `bool` |  |
| `smtp` | `Any` |  |
| `suggestion` | `str` |  |
| `syntax` | `dict` |  |

#### Example: Load

```python
advanced = client.Advanced().load({"id": "advanced_id"})
```


### ApiUsageStatsModel

Create an instance: `api_usage_stats_model = client.ApiUsageStatsModel()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `str` |  |
| `api_type` | `str` |  |
| `auth_type` | `str` |  |
| `avg_request_duration_nano` | `Any` |  |
| `batch_operation` | `int` |  |
| `batch_tokens_consumed` | `int` |  |
| `created_at` | `Any` |  |
| `hour_bucket` | `str` |  |
| `id` | `Any` |  |
| `min_remaining_quota` | `Any` |  |
| `peak_remaining_quota` | `Any` |  |
| `plan_id` | `str` |  |
| `quota_consumed` | `int` |  |
| `rate_limited_request` | `int` |  |
| `successful_request` | `int` |  |
| `total_request` | `int` |  |
| `updated_at` | `Any` |  |

#### Example: Load

```python
api_usage_stats_model = client.ApiUsageStatsModel().load({"id": "api_usage_stats_model_id"})
```


### ApiUsageSummary

Create an instance: `api_usage_summary = client.ApiUsageSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `str` |  |
| `api_type` | `str` |  |
| `avg_request_duration_m` | `Any` |  |
| `batch_operation` | `int` |  |
| `period_end` | `str` |  |
| `period_start` | `str` |  |
| `quota_consumed` | `int` |  |
| `rate_limited_request` | `int` |  |
| `successful_request` | `int` |  |
| `total_request` | `int` |  |

#### Example: Load

```python
api_usage_summary = client.ApiUsageSummary().load()
```


### Asn

Create an instance: `asn = client.Asn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Any` |  |
| `country` | `Any` |  |
| `country_code` | `str` |  |
| `ip` | `str` |  |
| `is_datacenter` | `bool` |  |
| `network` | `Any` |  |
| `organization` | `Any` |  |

#### Example: Load

```python
asn = client.Asn().load({"id": "asn_id"})
```


### Batch

Create an instance: `batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `list` |  |
| `failed_lookup` | `int` |  |
| `failed_validation` | `int` |  |
| `ips` | `list` |  |
| `result` | `dict` |  |
| `successful_lookup` | `int` |  |
| `successful_validation` | `int` |  |
| `total_processed` | `int` |  |

#### Example: Create

```python
batch = client.Batch().create({
    "email": [],  # list
    "failed_lookup": 1,  # int
    "failed_validation": 1,  # int
    "ips": [],  # list
    "result": {},  # dict
    "successful_lookup": 1,  # int
    "successful_validation": 1,  # int
    "total_processed": 1,  # int
})
```


### BatchEmailValidationResponseDto

Create an instance: `batch_email_validation_response_dto = client.BatchEmailValidationResponseDto()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failed_validation` | `int` |  |
| `result` | `dict` |  |
| `successful_validation` | `int` |  |
| `total_processed` | `int` |  |

#### Example: Create

```python
batch_email_validation_response_dto = client.BatchEmailValidationResponseDto().create({
    "failed_validation": 1,  # int
    "result": {},  # dict
    "successful_validation": 1,  # int
    "total_processed": 1,  # int
})
```


### CacheManagement

Create an instance: `cache_management = client.CacheManagement()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```python
cache_management = client.CacheManagement().load()
```


### DomainAnalysi

Create an instance: `domain_analysi = client.DomainAnalysi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `list` |  |

#### Example: Load

```python
domain_analysi = client.DomainAnalysi().load({"domain": "domain"})
```

#### Example: Create

```python
domain_analysi = client.DomainAnalysi().create({
    "domain": [],  # list
})
```


### DomainReputationV1Dto

Create an instance: `domain_reputation_v1_dto = client.DomainReputationV1Dto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `str` |  |
| `is_disposable_email_domain` | `bool` |  |
| `is_valid` | `bool` |  |
| `resolved_ip` | `list` |  |
| `threat` | `dict` |  |

#### Example: Load

```python
domain_reputation_v1_dto = client.DomainReputationV1Dto().load({"domain": "domain"})
```


### Email

Create an instance: `email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `factor` | `dict` |  |
| `has_mx_record` | `bool` |  |
| `ip` | `Any` |  |
| `is_disposable` | `bool` |  |
| `mx_record` | `list` |  |
| `risk_level` | `str` |  |
| `score` | `float` |  |
| `syntax` | `dict` |  |

#### Example: Load

```python
email = client.Email().load({"id": "email_id"})
```


### Forward

Create an instance: `forward = client.Forward()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `list` |  |
| `hostname` | `str` |  |

#### Example: Load

```python
forward = client.Forward().load({"id": "forward_id"})
```


### IpInfoV0

Create an instance: `ip_info_v0 = client.IpInfoV0()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
ip_info_v0 = client.IpInfoV0().load()
```


### IpReputation

Create an instance: `ip_reputation = client.IpReputation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `Any` |  |
| `factor` | `dict` |  |
| `ip` | `Any` |  |
| `risk_level` | `str` |  |
| `score` | `float` |  |

#### Example: Load

```python
ip_reputation = client.IpReputation().load({"id": "ip_reputation_id"})
```


### Ipn

Create an instance: `ipn = client.Ipn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Any` |  |
| `ip` | `str` |  |
| `isp` | `Any` |  |
| `location` | `dict` |  |
| `suspicious_factor` | `dict` |  |

#### Example: Load

```python
ipn = client.Ipn().load()
```


### Ipn2

Create an instance: `ipn2 = client.Ipn2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `asn` | `Any` |  |
| `ip` | `str` |  |
| `isp` | `Any` |  |
| `location` | `dict` |  |
| `suspicious_factor` | `dict` |  |

#### Example: Load

```python
ipn2 = client.Ipn2().load({"ip": "ip"})
```


### Mxn

Create an instance: `mxn = client.Mxn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `str` |  |
| `mx_record` | `list` |  |

#### Example: Load

```python
mxn = client.Mxn().load({"domain": "domain"})
```


### PaddleController

Create an instance: `paddle_controller = client.PaddleController()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
paddle_controller = client.PaddleController().load()
```

#### Example: Create

```python
paddle_controller = client.PaddleController().create({
})
```


### RateLimitInfoDto

Create an instance: `rate_limit_info_dto = client.RateLimitInfoDto()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email_api` | `dict` |  |
| `interval_second` | `int` |  |
| `ip_api` | `dict` |  |
| `next_renewal_date` | `str` |  |
| `plan_id` | `str` |  |
| `plan_name` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
rate_limit_info_dto = client.RateLimitInfoDto().load()
```


### Reverse

Create an instance: `reverse = client.Reverse()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hostname` | `Any` |  |
| `ip` | `str` |  |
| `ptr_record` | `str` |  |
| `ttl` | `Any` |  |

#### Example: Load

```python
reverse = client.Reverse().load({"id": "reverse_id"})
```


### RiskScore

Create an instance: `risk_score = client.RiskScore()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `Any` |  |
| `factor` | `dict` |  |
| `ip` | `Any` |  |
| `risk_level` | `str` |  |
| `score` | `float` |  |

#### Example: Load

```python
risk_score = client.RiskScore().load({"id": "risk_score_id"})
```


### Status

Create an instance: `status = client.Status()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
status = client.Status().load()
```


### Tor

Create an instance: `tor = client.Tor()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ip` | `str` |  |
| `is_tor` | `bool` |  |
| `tor_node_count` | `int` |  |

#### Example: Load

```python
tor = client.Tor().load({"id": "tor_id"})
```


### UsageStatistic

Create an instance: `usage_statistic = client.UsageStatistic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
usage_statistic = client.UsageStatistic().load()
```


### Whoi

Create an instance: `whoi = client.Whoi()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain` | `str` |  |
| `error` | `Any` |  |
| `expires_on` | `str` |  |
| `name_server` | `list` |  |
| `raw` | `str` |  |
| `registered_on` | `str` |  |
| `registrar` | `Any` |  |
| `status` | `list` |  |
| `updated_on` | `str` |  |

#### Example: Load

```python
whoi = client.Whoi().load({"id": "whoi_id"})
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── ipgeolocationapi4_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`ipgeolocationapi4_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
advanced = client.Advanced()
advanced.load({"id": "example_id"})

# advanced.data_get() now returns the advanced data from the last load
# advanced.match_get() returns the last match criteria
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
