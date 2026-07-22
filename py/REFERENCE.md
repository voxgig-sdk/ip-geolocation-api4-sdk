# IpGeolocationApi4 Python SDK Reference

Complete API reference for the IpGeolocationApi4 Python SDK.


## IpGeolocationApi4SDK

### Constructor

```python
from ipgeolocationapi4_sdk import IpGeolocationApi4SDK

client = IpGeolocationApi4SDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi4SDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IpGeolocationApi4SDK.test()
```


### Instance Methods

#### `Advanced(data=None)`

Create a new `AdvancedEntity` instance. Pass `None` for no initial data.

#### `ApiUsageStatsModel(data=None)`

Create a new `ApiUsageStatsModelEntity` instance. Pass `None` for no initial data.

#### `ApiUsageSummary(data=None)`

Create a new `ApiUsageSummaryEntity` instance. Pass `None` for no initial data.

#### `Asn(data=None)`

Create a new `AsnEntity` instance. Pass `None` for no initial data.

#### `Batch(data=None)`

Create a new `BatchEntity` instance. Pass `None` for no initial data.

#### `BatchEmailValidationResponseDto(data=None)`

Create a new `BatchEmailValidationResponseDtoEntity` instance. Pass `None` for no initial data.

#### `CacheManagement(data=None)`

Create a new `CacheManagementEntity` instance. Pass `None` for no initial data.

#### `DomainAnalysi(data=None)`

Create a new `DomainAnalysiEntity` instance. Pass `None` for no initial data.

#### `DomainReputationV1Dto(data=None)`

Create a new `DomainReputationV1DtoEntity` instance. Pass `None` for no initial data.

#### `Email(data=None)`

Create a new `EmailEntity` instance. Pass `None` for no initial data.

#### `Forward(data=None)`

Create a new `ForwardEntity` instance. Pass `None` for no initial data.

#### `IpInfoV0(data=None)`

Create a new `IpInfoV0Entity` instance. Pass `None` for no initial data.

#### `IpReputation(data=None)`

Create a new `IpReputationEntity` instance. Pass `None` for no initial data.

#### `Ipn(data=None)`

Create a new `IpnEntity` instance. Pass `None` for no initial data.

#### `Ipn2(data=None)`

Create a new `Ipn2Entity` instance. Pass `None` for no initial data.

#### `Mxn(data=None)`

Create a new `MxnEntity` instance. Pass `None` for no initial data.

#### `PaddleController(data=None)`

Create a new `PaddleControllerEntity` instance. Pass `None` for no initial data.

#### `RateLimitInfoDto(data=None)`

Create a new `RateLimitInfoDtoEntity` instance. Pass `None` for no initial data.

#### `Reverse(data=None)`

Create a new `ReverseEntity` instance. Pass `None` for no initial data.

#### `RiskScore(data=None)`

Create a new `RiskScoreEntity` instance. Pass `None` for no initial data.

#### `Status(data=None)`

Create a new `StatusEntity` instance. Pass `None` for no initial data.

#### `Tor(data=None)`

Create a new `TorEntity` instance. Pass `None` for no initial data.

#### `UsageStatistic(data=None)`

Create a new `UsageStatisticEntity` instance. Pass `None` for no initial data.

#### `Whoi(data=None)`

Create a new `WhoiEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AdvancedEntity

```python
advanced = client.Advanced()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disposable` | `bool` | Yes |  |
| `email` | `str` | Yes |  |
| `free` | `bool` | Yes |  |
| `gravatar` | `Any` | No |  |
| `has_mx_record` | `bool` | Yes |  |
| `reachable` | `str` | Yes |  |
| `role_account` | `bool` | Yes |  |
| `smtp` | `Any` | No |  |
| `suggestion` | `str` | Yes |  |
| `syntax` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Advanced().load({"id": "advanced_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdvancedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiUsageStatsModelEntity

```python
api_usage_stats_model = client.ApiUsageStatsModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `str` | Yes |  |
| `api_type` | `str` | Yes |  |
| `auth_type` | `str` | Yes |  |
| `avg_request_duration_nano` | `Any` | No |  |
| `batch_operation` | `int` | Yes |  |
| `batch_tokens_consumed` | `int` | Yes |  |
| `created_at` | `Any` | No |  |
| `hour_bucket` | `str` | Yes |  |
| `id` | `Any` | No |  |
| `min_remaining_quota` | `Any` | No |  |
| `peak_remaining_quota` | `Any` | No |  |
| `plan_id` | `str` | Yes |  |
| `quota_consumed` | `int` | Yes |  |
| `rate_limited_request` | `int` | Yes |  |
| `successful_request` | `int` | Yes |  |
| `total_request` | `int` | Yes |  |
| `updated_at` | `Any` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiUsageStatsModel().load({"id": "api_usage_stats_model_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiUsageStatsModelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiUsageSummaryEntity

```python
api_usage_summary = client.ApiUsageSummary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `str` | Yes |  |
| `api_type` | `str` | Yes |  |
| `avg_request_duration_m` | `Any` | No |  |
| `batch_operation` | `int` | Yes |  |
| `period_end` | `str` | Yes |  |
| `period_start` | `str` | Yes |  |
| `quota_consumed` | `int` | Yes |  |
| `rate_limited_request` | `int` | Yes |  |
| `successful_request` | `int` | Yes |  |
| `total_request` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiUsageSummary().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiUsageSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AsnEntity

```python
asn = client.Asn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Any` | No |  |
| `country` | `Any` | No |  |
| `country_code` | `str` | No |  |
| `ip` | `str` | Yes |  |
| `is_datacenter` | `bool` | Yes |  |
| `network` | `Any` | No |  |
| `organization` | `Any` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Asn().load({"id": "asn_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AsnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchEntity

```python
batch = client.Batch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `list` | Yes |  |
| `failed_lookup` | `int` | Yes |  |
| `failed_validation` | `int` | Yes |  |
| `ips` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `successful_lookup` | `int` | Yes |  |
| `successful_validation` | `int` | Yes |  |
| `total_processed` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Batch().create({
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

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchEmailValidationResponseDtoEntity

```python
batch_email_validation_response_dto = client.BatchEmailValidationResponseDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validation` | `int` | Yes |  |
| `result` | `dict` | Yes |  |
| `successful_validation` | `int` | Yes |  |
| `total_processed` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BatchEmailValidationResponseDto().create({
    "failed_validation": 1,  # int
    "result": {},  # dict
    "successful_validation": 1,  # int
    "total_processed": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CacheManagementEntity

```python
cache_management = client.CacheManagement()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CacheManagement().load()
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CacheManagement().remove()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheManagementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainAnalysiEntity

```python
domain_analysi = client.DomainAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainAnalysi().create({
    "domain": [],  # list
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DomainAnalysi().load({"domain": "domain"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainAnalysiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainReputationV1DtoEntity

```python
domain_reputation_v1_dto = client.DomainReputationV1Dto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `str` | Yes |  |
| `is_disposable_email_domain` | `bool` | Yes |  |
| `is_valid` | `bool` | Yes |  |
| `resolved_ip` | `list` | Yes |  |
| `threat` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DomainReputationV1Dto().load({"domain": "domain"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainReputationV1DtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailEntity

```python
email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | Yes |  |
| `factor` | `dict` | Yes |  |
| `has_mx_record` | `bool` | Yes |  |
| `ip` | `Any` | No |  |
| `is_disposable` | `bool` | Yes |  |
| `mx_record` | `list` | Yes |  |
| `risk_level` | `str` | Yes |  |
| `score` | `float` | Yes |  |
| `syntax` | `dict` | Yes |  |

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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Email().load({"id": "email_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ForwardEntity

```python
forward = client.Forward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `list` | Yes |  |
| `hostname` | `str` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Forward().load({"id": "forward_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ForwardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpInfoV0Entity

```python
ip_info_v0 = client.IpInfoV0()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IpInfoV0().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpInfoV0Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpReputationEntity

```python
ip_reputation = client.IpReputation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `Any` | No |  |
| `factor` | `dict` | Yes |  |
| `ip` | `Any` | No |  |
| `risk_level` | `str` | Yes |  |
| `score` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IpReputation().load({"id": "ip_reputation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpReputationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpnEntity

```python
ipn = client.Ipn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Any` | No |  |
| `ip` | `str` | Yes |  |
| `isp` | `Any` | No |  |
| `location` | `dict` | Yes |  |
| `suspicious_factor` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ipn().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Ipn2Entity

```python
ipn2 = client.Ipn2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `Any` | No |  |
| `ip` | `str` | Yes |  |
| `isp` | `Any` | No |  |
| `location` | `dict` | Yes |  |
| `suspicious_factor` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Ipn2().load({"ip": "ip"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Ipn2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MxnEntity

```python
mxn = client.Mxn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `str` | Yes |  |
| `mx_record` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Mxn().load({"domain": "domain"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MxnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaddleControllerEntity

```python
paddle_controller = client.PaddleController()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaddleController().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaddleController().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaddleControllerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RateLimitInfoDtoEntity

```python
rate_limit_info_dto = client.RateLimitInfoDto()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `dict` | Yes |  |
| `interval_second` | `int` | Yes |  |
| `ip_api` | `dict` | Yes |  |
| `next_renewal_date` | `str` | No |  |
| `plan_id` | `str` | Yes |  |
| `plan_name` | `str` | No |  |
| `status` | `Any` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RateLimitInfoDto().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RateLimitInfoDtoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReverseEntity

```python
reverse = client.Reverse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `Any` | No |  |
| `ip` | `str` | Yes |  |
| `ptr_record` | `str` | No |  |
| `ttl` | `Any` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reverse().load({"id": "reverse_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReverseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RiskScoreEntity

```python
risk_score = client.RiskScore()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `Any` | No |  |
| `factor` | `dict` | Yes |  |
| `ip` | `Any` | No |  |
| `risk_level` | `str` | Yes |  |
| `score` | `float` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RiskScore().load({"id": "risk_score_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RiskScoreEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusEntity

```python
status = client.Status()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Status().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TorEntity

```python
tor = client.Tor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `str` | Yes |  |
| `is_tor` | `bool` | Yes |  |
| `tor_node_count` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Tor().load({"id": "tor_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageStatisticEntity

```python
usage_statistic = client.UsageStatistic()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.UsageStatistic().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageStatisticEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhoiEntity

```python
whoi = client.Whoi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `str` | Yes |  |
| `error` | `Any` | No |  |
| `expires_on` | `str` | No |  |
| `name_server` | `list` | Yes |  |
| `raw` | `str` | Yes |  |
| `registered_on` | `str` | No |  |
| `registrar` | `Any` | No |  |
| `status` | `list` | Yes |  |
| `updated_on` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Whoi().load({"id": "whoi_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhoiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = IpGeolocationApi4SDK({
    "feature": {
        "test": {"active": True},
    },
})
```

