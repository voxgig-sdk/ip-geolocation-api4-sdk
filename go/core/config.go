package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "IpGeolocationApi4",
			"slug": "ip-geolocation-api4",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://ip-api.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"advanced": map[string]any{},
				"api_usage_stats_model": map[string]any{},
				"api_usage_summary": map[string]any{},
				"asn": map[string]any{},
				"batch": map[string]any{},
				"batch_email_validation_response_dto": map[string]any{},
				"cache_management": map[string]any{},
				"domain_analysi": map[string]any{},
				"domain_reputation_v1_dto": map[string]any{},
				"email": map[string]any{},
				"forward": map[string]any{},
				"ip_info_v0": map[string]any{},
				"ip_reputation": map[string]any{},
				"ipn": map[string]any{},
				"mxn": map[string]any{},
				"paddle_controller": map[string]any{},
				"rate_limit_info_dto": map[string]any{},
				"reverse": map[string]any{},
				"risk_score": map[string]any{},
				"status": map[string]any{},
				"tor": map[string]any{},
				"usage_statistic": map[string]any{},
				"whoi": map[string]any{},
			},
		},
		"entity": map[string]any{
			"advanced": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "disposable",
						"req": true,
						"short": "Indicates whether the email is from a disposable/temporary email service.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email address that was analyzed, returned in the original format provided.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "free",
						"req": true,
						"short": "Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "gravatar",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "has_mx_records",
						"req": true,
						"short": "Indicates whether the domain has valid MX (Mail Exchange) records configured.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reachable",
						"req": true,
						"short": "Overall reachability assessment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role_account",
						"req": true,
						"short": "Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "smtp",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "suggestion",
						"req": true,
						"short": "Suggested correction for misspelled domains.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "syntax",
						"req": true,
						"short": "Detailed syntax analysis of the email address components.",
						"type": "`$OBJECT`",
					},
				},
				"name": "advanced",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "test@yandex.ru",
											"kind": "param",
											"name": "id",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/email/advanced/{email}",
								"parts": []any{
									"api",
									"v1",
									"email",
									"advanced",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"email": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"api_usage_stats_model": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "apiType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "authType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avgRequestDurationNanos",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "batchOperations",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "batchTokensConsumed",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "createdAt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "hourBucket",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "minRemainingQuota",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "peakRemainingQuota",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "planId",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quotaConsumed",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rateLimitedRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "successfulRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "totalRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updatedAt",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "api_usage_stats_model",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "your-api-key-here",
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "IP",
											"kind": "query",
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2025-11-04T00:00:00Z",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2025-11-01T00:00:00Z",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/stats",
								"parts": []any{
									"api",
									"v1",
									"usage",
									"stats",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
										"end_date",
										"start_date",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"api_usage_summary": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apiKey",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "apiType",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avgRequestDurationMs",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "batchOperations",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "periodEnd",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodStart",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quotaConsumed",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rateLimitedRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "successfulRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "totalRequests",
						"req": true,
						"type": "`$INTEGER`",
					},
				},
				"name": "api_usage_summary",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "your-api-key-here",
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "IP",
											"kind": "query",
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2025-11-04T00:00:00Z",
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2025-11-01T00:00:00Z",
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/summary",
								"parts": []any{
									"api",
									"v1",
									"usage",
									"summary",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
										"end_date",
										"start_date",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asn",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "country",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "country_code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_datacenter",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "network",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "organization",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "asn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8.8.8.8",
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/asn/{ip}",
								"parts": []any{
									"api",
									"v1",
									"asn",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"batch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "emails",
						"req": true,
						"short": "List of email addresses to validate.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ips",
						"req": true,
						"short": "List of IP addresses to look up.",
						"type": "`$ARRAY`",
					},
				},
				"name": "batch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/email/advanced/batch",
								"parts": []any{
									"api",
									"v1",
									"email",
									"advanced",
									"batch",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/ip/batch",
								"parts": []any{
									"api",
									"v1",
									"ip",
									"batch",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"batch_email_validation_response_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "failed_validations",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "results",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "successful_validations",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_processed",
						"type": "`$INTEGER`",
					},
				},
				"name": "batch_email_validation_response_dto",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/email/advanced/batch/csv",
								"parts": []any{
									"api",
									"v1",
									"email",
									"advanced",
									"batch",
									"csv",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cache_management": map[string]any{
				"fields": []any{},
				"name": "cache_management",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "domain",
											"orig": "domain",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/management/cache/domain-age/check/{domain}",
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"check",
									"{domain}",
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/management/cache/domain-age/stats",
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"stats",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "DELETE",
								"orig": "/management/cache/domain-age",
								"parts": []any{
									"management",
									"cache",
									"domain-age",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "DELETE",
								"orig": "/management/cache/domain-age/all",
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"all",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"check",
						},
					},
				},
			},
			"domain_analysi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domains",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "domain_analysi",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/domain/age/batch",
								"parts": []any{
									"api",
									"v1",
									"domain",
									"age",
									"batch",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "google.com",
											"kind": "param",
											"name": "domain",
											"orig": "domain",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/domain/age/{domain}",
								"parts": []any{
									"api",
									"v1",
									"domain",
									"age",
									"{domain}",
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"age",
						},
					},
				},
			},
			"domain_reputation_v1_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"req": true,
						"short": "The normalized domain that was analyzed (lowercased, scheme/path stripped).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_disposable_email_domain",
						"req": true,
						"short": "Whether the domain is a known disposable/temporary email provider domain.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_valid",
						"req": true,
						"short": "Whether the input was a syntactically valid domain name.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "resolved_ips",
						"req": true,
						"short": "DNS A/AAAA records the domain currently resolves to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "threat",
						"req": true,
						"short": "Threat-intelligence verdict for the domain itself (independent of its IPs).",
						"type": "`$OBJECT`",
					},
				},
				"name": "domain_reputation_v1_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "example.com",
											"kind": "param",
											"name": "domain",
											"orig": "domain",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/domain/reputation/{domain}",
								"parts": []any{
									"api",
									"v1",
									"domain",
									"reputation",
									"{domain}",
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"reputation",
						},
					},
				},
			},
			"email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"req": true,
						"short": "The email address that was analyzed, returned in normalized lowercase format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email_factors",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "has_mx_records",
						"req": true,
						"short": "Whether the email domain has valid MX records in DNS.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "is_disposable",
						"req": true,
						"short": "Indicates whether the email address uses a disposable or temporary email service.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mx_records",
						"req": true,
						"short": "MX records for the email domain, sorted by priority ascending.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "syntax",
						"req": true,
						"short": "Detailed syntax validation results and email component breakdown.",
						"type": "`$OBJECT`",
					},
				},
				"name": "email",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "john.doe@company.com",
											"kind": "param",
											"name": "id",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/email/{email}",
								"parts": []any{
									"api",
									"v1",
									"email",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"email": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "john.doe@legitbusiness.com",
											"kind": "param",
											"name": "id",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score/email/{email}",
								"parts": []any{
									"api",
									"v1",
									"risk-score",
									"email",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"email": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"forward": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "addresses",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "hostname",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "forward",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "dns.google",
											"kind": "param",
											"name": "id",
											"orig": "hostname",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/forward/{hostname}",
								"parts": []any{
									"api",
									"v1",
									"dns",
									"forward",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"hostname": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ip_info_v0": map[string]any{
				"fields": []any{},
				"name": "ip_info_v0",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "ip",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/json/{ip}",
								"parts": []any{
									"api",
									"json",
									"{ip}",
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "ip",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/json/{ip}",
								"parts": []any{
									"json",
									"{ip}",
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/json",
								"parts": []any{
									"api",
									"json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/json/",
								"parts": []any{
									"api",
									"json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/json",
								"parts": []any{
									"json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/json/",
								"parts": []any{
									"json",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"json",
						},
					},
				},
			},
			"ip_reputation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email_factors",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
						"type": "`$NULL`",
					},
				},
				"name": "ip_reputation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "203.0.113.195",
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip-reputation/{ip}",
								"parts": []any{
									"api",
									"v1",
									"ip-reputation",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ipn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "asn",
						"short": "Autonomous System Number in AS<number> format.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"short": "The IP address that was analyzed, returned in standard format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isp",
						"short": "Internet Service Provider name derived from the ASN organization field.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "location",
						"req": true,
						"short": "Geographic location and timezone information for the IP address.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "suspicious_factors",
						"req": true,
						"short": "Comprehensive security threat analysis and suspicious activity indicators.",
						"type": "`$OBJECT`",
					},
				},
				"name": "ipn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "203.0.113.195",
											"kind": "param",
											"name": "ip",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip/{ip}",
								"parts": []any{
									"api",
									"v1",
									"ip",
									"{ip}",
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip",
								"parts": []any{
									"api",
									"v1",
									"ip",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"ip",
						},
					},
				},
			},
			"mxn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mx_records",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "mxn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "gmail.com",
											"kind": "param",
											"name": "domain",
											"orig": "domain",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/mx/{domain}",
								"parts": []any{
									"api",
									"v1",
									"dns",
									"mx",
									"{domain}",
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"mx",
						},
					},
				},
			},
			"paddle_controller": map[string]any{
				"fields": []any{},
				"name": "paddle_controller",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "http_entity",
											"orig": "http_entity",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/month-sub",
								"parts": []any{
									"month-sub",
								},
								"select": map[string]any{
									"exist": []any{
										"http_entity",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/month-sub",
								"parts": []any{
									"month-sub",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rate_limit_info_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email_api",
						"req": true,
						"short": "Email validation API rate limit information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "interval_seconds",
						"req": true,
						"short": "Rate limit interval in seconds (time period for quota renewal)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ip_api",
						"req": true,
						"short": "IP lookup API rate limit information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "next_renewal_date",
						"short": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan_id",
						"req": true,
						"short": "Subscription plan ID or 'default' for free tier users",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan_name",
						"short": "Human-readable plan name (if available)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Subscription status (active, past_due, cancelled, etc.)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "rate_limit_info_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "abcdef1234567890abcdef1234567890",
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ratelimit",
								"parts": []any{
									"api",
									"v1",
									"ratelimit",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"reverse": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "hostname",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ptr_record",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ttl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
				},
				"name": "reverse",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8.8.8.8",
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/reverse/{ip}",
								"parts": []any{
									"api",
									"v1",
									"dns",
									"reverse",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"risk_score": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email_factors",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
						"type": "`$NULL`",
					},
				},
				"name": "risk_score",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "203.0.113.195",
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "suspicious.user@tempmail.com",
											"kind": "query",
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score/{ip}",
								"parts": []any{
									"api",
									"v1",
									"risk-score",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score",
								"parts": []any{
									"api",
									"v1",
									"risk-score",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"status": map[string]any{
				"fields": []any{},
				"name": "status",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/status",
								"parts": []any{
									"api",
									"status",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"req": true,
						"short": "The IP address that was checked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_tor",
						"req": true,
						"short": "Whether the IP is a known Tor exit node",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tor_node_count",
						"req": true,
						"short": "Total number of currently known Tor exit nodes in the database",
						"type": "`$INTEGER`",
					},
				},
				"name": "tor",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "185.220.101.50",
											"kind": "param",
											"name": "id",
											"orig": "ip",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tor/{ip}",
								"parts": []any{
									"api",
									"v1",
									"tor",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"ip": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usage_statistic": map[string]any{
				"fields": []any{},
				"name": "usage_statistic",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/current-month",
								"parts": []any{
									"api",
									"v1",
									"usage",
									"current-month",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "api_key",
											"orig": "api_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/recent",
								"parts": []any{
									"api",
									"v1",
									"usage",
									"recent",
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whoi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "error",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "expires_on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_servers",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "raw",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registered_on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registrar",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_on",
						"type": "`$STRING`",
					},
				},
				"name": "whoi",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "example.com",
											"kind": "param",
											"name": "id",
											"orig": "domain",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/whois/{domain}",
								"parts": []any{
									"api",
									"v1",
									"dns",
									"whois",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"domain": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
