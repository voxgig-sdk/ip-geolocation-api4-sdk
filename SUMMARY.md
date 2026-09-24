# IP-API.io - IP Geolocation &amp; Security API

Comprehensive IP address intelligence API providing geolocation, security analysis, and network information. Features: - Real-time IP geolocation with city-level accuracy - Advanced threat detection and security scoring - VPN, proxy, and Tor node detection - Email validation and reputation analysis - Email / ip risk scoring for fraud prevention Perfect for fraud prevention, security applications, content personalization, and compliance requirements.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 23 entities and 38 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Advanced

Results: Advanced email validation completed successfully with comprehensive analysis.

SDK operations: `load`.

Key fields to recognise:

- `disposable`: Indicates whether the email is from a disposable/temporary email service. **Disposable Email Detection**: - Checks against extensive database of known disposable providers - Identifies temporary email services - Detects throwaway email patterns
- `email`: The email address that was analyzed, returned in the original format provided.
- `free`: Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.). **Free Email Providers Include**: - Gmail, Yahoo Mail, Hotmail/Outlook - Regional free providers - Educational institution emails - Government email domains
- `has_mx_records`: Indicates whether the domain has valid MX (Mail Exchange) records configured. **MX Record Verification**: - Checks DNS for MX records - Validates mail server configuration - Essential for email deliverability
- `reachable`: Overall reachability assessment. Values: &#39;yes&#39;, &#39;no&#39;, &#39;unknown&#39;. **Reachability Levels**: - **yes**: Email is deliverable and reachable - **no**: Email is not reachable or invalid - **unknown**: Unable to determine reachability status

### ApiUsageStatsModel

Results: Successfully retrieved usage statistics.

SDK operations: `load`.

### ApiUsageSummary

Results: Successfully retrieved usage summary.

SDK operations: `load`.

### Asn

Results: ASN data retrieved successfully.

SDK operations: `load`.

### Batch

Results: Batch validation completed successfully; Batch lookup completed successfully with intelligence for all processed IPs.

SDK operations: `create`.

Key fields to recognise:

- `emails`: List of email addresses to validate.
- `ips`: List of IP addresses to look up.

### BatchEmailValidationResponseDto

Results: CSV batch validation completed successfully.

SDK operations: `create`.

Key fields to recognise:

- `results`: Map of email addresses to their validation results. The key is the original email address, and the value is the complete validation result.

### CacheManagement

Results: Cache status retrieved successfully; Cache statistics retrieved successfully; Cache cleared successfully; All caches cleared successfully.

SDK operations: `load`, `remove`.

### DomainAnalysi

Results: Domain age information retrieved successfully.

SDK operations: `create`, `load`.

### DomainReputationV1Dto

Results: Domain reputation report generated successfully.

SDK operations: `load`.

Key fields to recognise:

- `domain`: The normalized domain that was analyzed (lowercased, scheme/path stripped).
- `is_disposable_email_domain`: Whether the domain is a known disposable/temporary email provider domain.
- `is_valid`: Whether the input was a syntactically valid domain name.
- `resolved_ips`: DNS A/AAAA records the domain currently resolves to. Empty when the domain does not resolve (which is itself common for parked or taken-down malicious domains). IP intelligence is embedded for the first records to bound response time.
- `threat`: Threat-intelligence verdict for the domain itself (independent of its IPs).

### Email

Results: Email validation completed successfully with detailed analysis results; Email risk score calculated successfully with validation details.

SDK operations: `load`.

Key fields to recognise:

- `email`: The email address that was analyzed, returned in normalized lowercase format. **Normalization Applied**: - Converted to lowercase - Whitespace trimmed - Unicode normalization (NFC) - Punycode encoding for international domains **Note**: The returned format may differ slightly from input due to normalization
- `email_factors`: Email-specific risk factors and validation results. **Null when**: No email address was provided for analysis **Present when**: Email analysis was performed (from path parameter or query parameter) Contains validation results, reputation checks, and numerical risk score.
- `has_mx_records`: Whether the email domain has valid MX records in DNS. False when no records exist or DNS lookup fails.
- `ip_factors`: IP-specific risk factors and analysis results. **Null when**: No IP address was provided for analysis **Present when**: IP analysis was performed (from headers, path parameter, or query parameter) Contains boolean flags for various IP characteristics and a numerical risk score.
- `is_disposable`: Indicates whether the email address uses a disposable or temporary email service. **Disposable Email Characteristics**: - Temporary email addresses that auto-expire - One-time use email services - Anonymous email generators - Throwaway email providers **Detection Method**: Real-time lookup against 10,000+ known disposable domains **Risk Level**: High for fraud prevention use cases **Update Frequency**: Daily threat intelligence updates

### Forward

Results: Forward DNS lookup succeeded.

SDK operations: `load`.

### IpInfoV0

Results: OK.

SDK operations: `load`.

### IpReputation

Results: Reputation score calculated successfully.

SDK operations: `load`.

Key fields to recognise:

- `email_factors`: Email-specific risk factors and validation results. **Null when**: No email address was provided for analysis **Present when**: Email analysis was performed (from path parameter or query parameter) Contains validation results, reputation checks, and numerical risk score.
- `ip_factors`: IP-specific risk factors and analysis results. **Null when**: No IP address was provided for analysis **Present when**: IP analysis was performed (from headers, path parameter, or query parameter) Contains boolean flags for various IP characteristics and a numerical risk score.

### Ipn

Results: Complete IP intelligence analysis with geolocation and security data; IP intelligence gathered successfully with complete analysis.

SDK operations: `load`.

Key fields to recognise:

- `asn`: Autonomous System Number in AS&lt;number&gt; format.
- `ip`: The IP address that was analyzed, returned in standard format. **Normalization Applied**: - IPv4: Standard dotted decimal notation - IPv6: Compressed format when possible - Case normalization for IPv6 **Note**: Returned format may differ from input due to standardization
- `isp`: Internet Service Provider name derived from the ASN organization field.
- `location`: Geographic location and timezone information for the IP address. Provides detailed location data including coordinates, administrative regions, timezone details, and local time calculations with daylight saving consideration. **Accuracy Levels**: - Country: 99.8% accuracy - City: 85-95% accuracy (varies by region) - Coordinates: ~50km median accuracy radius
- `suspicious_factors`: Comprehensive security threat analysis and suspicious activity indicators. Contains multiple boolean flags indicating various types of potentially malicious or suspicious network behavior associated with the IP address. **Data Sources**: Real-time threat intelligence from 50+ global security feeds **Update Frequency**: Continuous updates with sub-minute latency for new threats

### Mxn

Results: MX records retrieved successfully.

SDK operations: `load`.

### PaddleController

Results: OK.

SDK operations: `create`, `load`.

### RateLimitInfoDto

Results: Rate limit information retrieved successfully.

SDK operations: `load`.

Key fields to recognise:

- `email_api`: Email validation API rate limit information
- `interval_seconds`: Rate limit interval in seconds (time period for quota renewal)
- `ip_api`: IP lookup API rate limit information
- `next_renewal_date`: Next billing/renewal date when the quota will be reset (ISO 8601 date format)
- `plan_id`: Subscription plan ID or &#39;default&#39; for free tier users

### Reverse

Results: Reverse DNS lookup completed (hostname may be null if no PTR record exists).

SDK operations: `load`.

### RiskScore

Results: Risk score calculated successfully with detailed factor breakdown; Risk score calculated successfully.

SDK operations: `load`.

Key fields to recognise:

- `email_factors`: Email-specific risk factors and validation results. **Null when**: No email address was provided for analysis **Present when**: Email analysis was performed (from path parameter or query parameter) Contains validation results, reputation checks, and numerical risk score.
- `ip_factors`: IP-specific risk factors and analysis results. **Null when**: No IP address was provided for analysis **Present when**: IP analysis was performed (from headers, path parameter, or query parameter) Contains boolean flags for various IP characteristics and a numerical risk score.

### Status

Results: OK.

SDK operations: `load`.

### Tor

Results: Tor detection result returned successfully.

SDK operations: `load`.

Key fields to recognise:

- `ip`: The IP address that was checked
- `is_tor`: Whether the IP is a known Tor exit node
- `tor_node_count`: Total number of currently known Tor exit nodes in the database

### UsageStatistic

Results: OK.

SDK operations: `load`.

### Whoi

Results: WHOIS data retrieved successfully.

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Advanced | `load` | `GET /api/v1/email/advanced/{email}` | See reference |
| ApiUsageStatsModel | `load` | `GET /api/v1/usage/stats` | See reference |
| ApiUsageSummary | `load` | `GET /api/v1/usage/summary` | See reference |
| Asn | `load` | `GET /api/v1/asn/{ip}` | See reference |
| Batch | `create` | `POST /api/v1/email/advanced/batch` | See reference |
| Batch | `create` | `POST /api/v1/ip/batch` | See reference |
| BatchEmailValidationResponseDto | `create` | `POST /api/v1/email/advanced/batch/csv` | See reference |
| CacheManagement | `load` | `GET /management/cache/domain-age/check/{domain}` | See reference |
| CacheManagement | `load` | `GET /management/cache/domain-age/stats` | See reference |
| CacheManagement | `remove` | `DELETE /management/cache/domain-age` | See reference |
| CacheManagement | `remove` | `DELETE /management/cache/domain-age/all` | See reference |
| DomainAnalysi | `create` | `POST /api/v1/domain/age/batch` | See reference |
| DomainAnalysi | `load` | `GET /api/v1/domain/age/{domain}` | See reference |
| DomainReputationV1Dto | `load` | `GET /api/v1/domain/reputation/{domain}` | See reference |
| Email | `load` | `GET /api/v1/email/{email}` | See reference |
| Email | `load` | `GET /api/v1/risk-score/email/{email}` | See reference |
| Forward | `load` | `GET /api/v1/dns/forward/{hostname}` | See reference |
| IpInfoV0 | `load` | `GET /api/json/{ip}` | See reference |
| IpInfoV0 | `load` | `GET /json/{ip}` | See reference |
| IpInfoV0 | `load` | `GET /api/json` | See reference |
| IpInfoV0 | `load` | `GET /api/json/` | See reference |
| IpInfoV0 | `load` | `GET /json` | See reference |
| IpInfoV0 | `load` | `GET /json/` | See reference |
| IpReputation | `load` | `GET /api/v1/ip-reputation/{ip}` | See reference |
| Ipn | `load` | `GET /api/v1/ip/{ip}` | See reference |
| Ipn | `load` | `GET /api/v1/ip` | See reference |
| Mxn | `load` | `GET /api/v1/dns/mx/{domain}` | See reference |
| PaddleController | `create` | `POST /month-sub` | See reference |
| PaddleController | `load` | `GET /month-sub` | See reference |
| RateLimitInfoDto | `load` | `GET /api/v1/ratelimit` | See reference |
| Reverse | `load` | `GET /api/v1/dns/reverse/{ip}` | See reference |
| RiskScore | `load` | `GET /api/v1/risk-score/{ip}` | See reference |
| RiskScore | `load` | `GET /api/v1/risk-score` | See reference |
| Status | `load` | `GET /api/status` | See reference |
| Tor | `load` | `GET /api/v1/tor/{ip}` | See reference |
| UsageStatistic | `load` | `GET /api/v1/usage/current-month` | See reference |
| UsageStatistic | `load` | `GET /api/v1/usage/recent` | See reference |
| Whoi | `load` | `GET /api/v1/dns/whois/{domain}` | See reference |

## Connect to the API

- Generated server url: `https://ip-api.io`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `ip-geolocation-api4_list`: List records for an entity. No active entity supports this operation.
- `ip-geolocation-api4_load`: Load one record for an entity. Supported entities: `advanced`, `api_usage_stats_model`, `api_usage_summary`, `asn`, `cache_management`, `domain_analysi`, `domain_reputation_v1_dto`, `email`, `forward`, `ip_info_v0`, `ip_reputation`, `ipn`, `mxn`, `paddle_controller`, `rate_limit_info_dto`, `reverse`, `risk_score`, `status`, `tor`, `usage_statistic`, `whoi`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

