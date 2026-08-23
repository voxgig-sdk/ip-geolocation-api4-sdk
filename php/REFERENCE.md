# IpGeolocationApi4 PHP SDK Reference

Complete API reference for the IpGeolocationApi4 PHP SDK.


## IpGeolocationApi4SDK

### Constructor

```php
require_once __DIR__ . '/ipgeolocationapi4_sdk.php';

$client = new IpGeolocationApi4SDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi4SDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = IpGeolocationApi4SDK::test();
```


### Instance Methods

#### `Advanced($data = null)`

Create a new `AdvancedEntity` instance. Pass `null` for no initial data.

#### `ApiUsageStatsModel($data = null)`

Create a new `ApiUsageStatsModelEntity` instance. Pass `null` for no initial data.

#### `ApiUsageSummary($data = null)`

Create a new `ApiUsageSummaryEntity` instance. Pass `null` for no initial data.

#### `Asn($data = null)`

Create a new `AsnEntity` instance. Pass `null` for no initial data.

#### `Batch($data = null)`

Create a new `BatchEntity` instance. Pass `null` for no initial data.

#### `BatchEmailValidationResponseDto($data = null)`

Create a new `BatchEmailValidationResponseDtoEntity` instance. Pass `null` for no initial data.

#### `CacheManagement($data = null)`

Create a new `CacheManagementEntity` instance. Pass `null` for no initial data.

#### `DomainAnalysi($data = null)`

Create a new `DomainAnalysiEntity` instance. Pass `null` for no initial data.

#### `DomainReputationV1Dto($data = null)`

Create a new `DomainReputationV1DtoEntity` instance. Pass `null` for no initial data.

#### `Email($data = null)`

Create a new `EmailEntity` instance. Pass `null` for no initial data.

#### `Forward($data = null)`

Create a new `ForwardEntity` instance. Pass `null` for no initial data.

#### `IpInfoV0($data = null)`

Create a new `IpInfoV0Entity` instance. Pass `null` for no initial data.

#### `IpReputation($data = null)`

Create a new `IpReputationEntity` instance. Pass `null` for no initial data.

#### `Ipn($data = null)`

Create a new `IpnEntity` instance. Pass `null` for no initial data.

#### `Mxn($data = null)`

Create a new `MxnEntity` instance. Pass `null` for no initial data.

#### `PaddleController($data = null)`

Create a new `PaddleControllerEntity` instance. Pass `null` for no initial data.

#### `RateLimitInfoDto($data = null)`

Create a new `RateLimitInfoDtoEntity` instance. Pass `null` for no initial data.

#### `Reverse($data = null)`

Create a new `ReverseEntity` instance. Pass `null` for no initial data.

#### `RiskScore($data = null)`

Create a new `RiskScoreEntity` instance. Pass `null` for no initial data.

#### `Status($data = null)`

Create a new `StatusEntity` instance. Pass `null` for no initial data.

#### `Tor($data = null)`

Create a new `TorEntity` instance. Pass `null` for no initial data.

#### `UsageStatistic($data = null)`

Create a new `UsageStatisticEntity` instance. Pass `null` for no initial data.

#### `Whoi($data = null)`

Create a new `WhoiEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): IpGeolocationApi4Utility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AdvancedEntity

```php
$advanced = $client->Advanced();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disposable` | `bool` | Yes | Indicates whether the email is from a disposable/temporary email service. |
| `email` | `string` | Yes | The email address that was analyzed, returned in the original format provided. |
| `free` | `bool` | Yes | Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.). |
| `gravatar` | `mixed` | No |  |
| `has_mx_records` | `bool` | Yes | Indicates whether the domain has valid MX (Mail Exchange) records configured. |
| `reachable` | `string` | Yes | Overall reachability assessment. |
| `role_account` | `bool` | Yes | Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.). |
| `smtp` | `mixed` | No |  |
| `suggestion` | `string` | Yes | Suggested correction for misspelled domains. |
| `syntax` | `array` | Yes | Detailed syntax analysis of the email address components. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Advanced()->load(["id" => "advanced_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdvancedEntity`

Create a new `AdvancedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiUsageStatsModelEntity

```php
$api_usage_stats_model = $client->ApiUsageStatsModel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `authType` | `string` | Yes |  |
| `avgRequestDurationNanos` | `mixed` | No |  |
| `batchOperations` | `int` | Yes |  |
| `batchTokensConsumed` | `int` | Yes |  |
| `createdAt` | `mixed` | No |  |
| `hourBucket` | `string` | Yes |  |
| `id` | `mixed` | No |  |
| `minRemainingQuota` | `mixed` | No |  |
| `peakRemainingQuota` | `mixed` | No |  |
| `planId` | `string` | Yes |  |
| `quotaConsumed` | `int` | Yes |  |
| `rateLimitedRequests` | `int` | Yes |  |
| `successfulRequests` | `int` | Yes |  |
| `totalRequests` | `int` | Yes |  |
| `updatedAt` | `mixed` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiUsageStatsModel()->load(["id" => "api_usage_stats_model_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiUsageStatsModelEntity`

Create a new `ApiUsageStatsModelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiUsageSummaryEntity

```php
$api_usage_summary = $client->ApiUsageSummary();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes |  |
| `apiType` | `string` | Yes |  |
| `avgRequestDurationMs` | `mixed` | No |  |
| `batchOperations` | `int` | Yes |  |
| `periodEnd` | `string` | Yes |  |
| `periodStart` | `string` | Yes |  |
| `quotaConsumed` | `int` | Yes |  |
| `rateLimitedRequests` | `int` | Yes |  |
| `successfulRequests` | `int` | Yes |  |
| `totalRequests` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiUsageSummary()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiUsageSummaryEntity`

Create a new `ApiUsageSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AsnEntity

```php
$asn = $client->Asn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `mixed` | No |  |
| `country` | `mixed` | No |  |
| `country_code` | `string` | No |  |
| `ip` | `string` | Yes |  |
| `is_datacenter` | `bool` | Yes |  |
| `network` | `mixed` | No |  |
| `organization` | `mixed` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Asn()->load(["id" => "asn_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AsnEntity`

Create a new `AsnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BatchEntity

```php
$batch = $client->Batch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `array` | Yes | List of email addresses to validate. |
| `ips` | `array` | Yes | List of IP addresses to look up. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Batch()->create([
  "emails" => null, // array
  "ips" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BatchEntity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BatchEmailValidationResponseDtoEntity

```php
$batch_email_validation_response_dto = $client->BatchEmailValidationResponseDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failed_validations` | `int` | No |  |
| `results` | `array` | No |  |
| `successful_validations` | `int` | No |  |
| `total_processed` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BatchEmailValidationResponseDto()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BatchEmailValidationResponseDtoEntity`

Create a new `BatchEmailValidationResponseDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CacheManagementEntity

```php
$cache_management = $client->CacheManagement();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CacheManagement()->load(["domain" => "domain"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CacheManagement()->remove();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CacheManagementEntity`

Create a new `CacheManagementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainAnalysiEntity

```php
$domain_analysi = $client->DomainAnalysi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domains` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DomainAnalysi()->create([
  "domains" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DomainAnalysi()->load(["domain" => "domain"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainAnalysiEntity`

Create a new `DomainAnalysiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DomainReputationV1DtoEntity

```php
$domain_reputation_v1_dto = $client->DomainReputationV1Dto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes | The normalized domain that was analyzed (lowercased, scheme/path stripped). |
| `is_disposable_email_domain` | `bool` | Yes | Whether the domain is a known disposable/temporary email provider domain. |
| `is_valid` | `bool` | Yes | Whether the input was a syntactically valid domain name. |
| `resolved_ips` | `array` | Yes | DNS A/AAAA records the domain currently resolves to. |
| `threat` | `array` | Yes | Threat-intelligence verdict for the domain itself (independent of its IPs). |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DomainReputationV1Dto()->load(["domain" => "domain"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DomainReputationV1DtoEntity`

Create a new `DomainReputationV1DtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailEntity

```php
$email = $client->Email();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes | The email address that was analyzed, returned in normalized lowercase format. |
| `email_factors` | `null` | Yes | Email-specific risk factors and validation results. |
| `has_mx_records` | `bool` | Yes | Whether the email domain has valid MX records in DNS. |
| `ip_factors` | `null` | Yes | IP-specific risk factors and analysis results. |
| `is_disposable` | `bool` | Yes | Indicates whether the email address uses a disposable or temporary email service. |
| `mx_records` | `array` | Yes | MX records for the email domain, sorted by priority ascending. |
| `syntax` | `array` | Yes | Detailed syntax validation results and email component breakdown. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Email()->load(["id" => "email_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailEntity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ForwardEntity

```php
$forward = $client->Forward();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `array` | Yes |  |
| `hostname` | `string` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Forward()->load(["id" => "forward_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ForwardEntity`

Create a new `ForwardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpInfoV0Entity

```php
$ip_info_v0 = $client->IpInfoV0();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IpInfoV0()->load(["ip" => "ip"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpInfoV0Entity`

Create a new `IpInfoV0Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpReputationEntity

```php
$ip_reputation = $client->IpReputation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `null` | Yes | Email-specific risk factors and validation results. |
| `ip_factors` | `null` | Yes | IP-specific risk factors and analysis results. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IpReputation()->load(["id" => "ip_reputation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpReputationEntity`

Create a new `IpReputationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpnEntity

```php
$ipn = $client->Ipn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `asn` | `mixed` | No | Autonomous System Number in AS<number> format. |
| `ip` | `string` | Yes | The IP address that was analyzed, returned in standard format. |
| `isp` | `mixed` | No | Internet Service Provider name derived from the ASN organization field. |
| `location` | `array` | Yes | Geographic location and timezone information for the IP address. |
| `suspicious_factors` | `array` | Yes | Comprehensive security threat analysis and suspicious activity indicators. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Ipn()->load(["ip" => "ip"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpnEntity`

Create a new `IpnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MxnEntity

```php
$mxn = $client->Mxn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `mx_records` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Mxn()->load(["domain" => "domain"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MxnEntity`

Create a new `MxnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaddleControllerEntity

```php
$paddle_controller = $client->PaddleController();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaddleController()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaddleController()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaddleControllerEntity`

Create a new `PaddleControllerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RateLimitInfoDtoEntity

```php
$rate_limit_info_dto = $client->RateLimitInfoDto();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_api` | `array` | Yes | Email validation API rate limit information |
| `interval_seconds` | `int` | Yes | Rate limit interval in seconds (time period for quota renewal) |
| `ip_api` | `array` | Yes | IP lookup API rate limit information |
| `next_renewal_date` | `string` | No | Next billing/renewal date when the quota will be reset (ISO 8601 date format) |
| `plan_id` | `string` | Yes | Subscription plan ID or 'default' for free tier users |
| `plan_name` | `string` | No | Human-readable plan name (if available) |
| `status` | `mixed` | No | Subscription status (active, past_due, cancelled, etc.) |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RateLimitInfoDto()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RateLimitInfoDtoEntity`

Create a new `RateLimitInfoDtoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReverseEntity

```php
$reverse = $client->Reverse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostname` | `mixed` | No |  |
| `ip` | `string` | Yes |  |
| `ptr_record` | `string` | No |  |
| `ttl` | `mixed` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reverse()->load(["id" => "reverse_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReverseEntity`

Create a new `ReverseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RiskScoreEntity

```php
$risk_score = $client->RiskScore();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email_factors` | `null` | Yes | Email-specific risk factors and validation results. |
| `ip_factors` | `null` | Yes | IP-specific risk factors and analysis results. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RiskScore()->load(["id" => "risk_score_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RiskScoreEntity`

Create a new `RiskScoreEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusEntity

```php
$status = $client->Status();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Status()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusEntity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TorEntity

```php
$tor = $client->Tor();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `string` | Yes | The IP address that was checked |
| `is_tor` | `bool` | Yes | Whether the IP is a known Tor exit node |
| `tor_node_count` | `int` | Yes | Total number of currently known Tor exit nodes in the database |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tor()->load(["id" => "tor_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TorEntity`

Create a new `TorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageStatisticEntity

```php
$usage_statistic = $client->UsageStatistic();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UsageStatistic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageStatisticEntity`

Create a new `UsageStatisticEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WhoiEntity

```php
$whoi = $client->Whoi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain` | `string` | Yes |  |
| `error` | `mixed` | No |  |
| `expires_on` | `string` | No |  |
| `name_servers` | `array` | Yes |  |
| `raw` | `string` | Yes |  |
| `registered_on` | `string` | No |  |
| `registrar` | `mixed` | No |  |
| `status` | `array` | Yes |  |
| `updated_on` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Whoi()->load(["id" => "whoi_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WhoiEntity`

Create a new `WhoiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new IpGeolocationApi4SDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

