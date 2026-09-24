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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Disposable",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the email is from a disposable/temporary email service.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email address that was analyzed, returned in the original format provided.",
					},
					map[string]any{
						"name": "free",
						"title": "Free",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).",
					},
					map[string]any{
						"name": "gravatar",
						"title": "Gravatar",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "has_mx_records",
						"title": "Has Mx Records",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the domain has valid MX (Mail Exchange) records configured.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reachable",
						"title": "Reachable",
						"type": "`$STRING`",
						"req": true,
						"short": "Overall reachability assessment.",
					},
					map[string]any{
						"name": "role_account",
						"title": "Role Account",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).",
					},
					map[string]any{
						"name": "smtp",
						"title": "Smtp",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "suggestion",
						"title": "Suggestion",
						"type": "`$STRING`",
						"req": true,
						"short": "Suggested correction for misspelled domains.",
					},
					map[string]any{
						"name": "syntax",
						"title": "Syntax",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Detailed syntax analysis of the email address components.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "advanced",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/email/advanced/{email}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "advanced",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "test@yandex.ru",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "apiType",
						"title": "Api Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "authType",
						"title": "Auth Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "avgRequestDurationNanos",
						"title": "Avg Request Duration Nanos",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int64",
					},
					map[string]any{
						"name": "batchOperations",
						"title": "Batch Operations",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "batchTokensConsumed",
						"title": "Batch Tokens Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date-time",
					},
					map[string]any{
						"name": "hourBucket",
						"title": "Hour Bucket",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int64",
					},
					map[string]any{
						"name": "minRemainingQuota",
						"title": "Min Remaining Quota",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int32",
					},
					map[string]any{
						"name": "peakRemainingQuota",
						"title": "Peak Remaining Quota",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int32",
					},
					map[string]any{
						"name": "planId",
						"title": "Plan Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "quotaConsumed",
						"title": "Quota Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "rateLimitedRequests",
						"title": "Rate Limited Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "successfulRequests",
						"title": "Successful Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "totalRequests",
						"title": "Total Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "api_usage_stats_model",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/stats",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "stats",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"usage",
									"stats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_key",
											"orig": "api_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "your-api-key-here",
										},
										map[string]any{
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "IP",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-11-04T00:00:00Z",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-11-01T00:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
										"end_date",
										"start_date",
									},
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
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "apiType",
						"title": "Api Type",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "avgRequestDurationMs",
						"title": "Avg Request Duration Ms",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NUMBER`",
								"`$NULL`",
							},
						},
						"format": "double",
					},
					map[string]any{
						"name": "batchOperations",
						"title": "Batch Operations",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "periodEnd",
						"title": "Period End",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "periodStart",
						"title": "Period Start",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "quotaConsumed",
						"title": "Quota Consumed",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "rateLimitedRequests",
						"title": "Rate Limited Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "successfulRequests",
						"title": "Successful Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "totalRequests",
						"title": "Total Requests",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
				},
				"name": "api_usage_summary",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/summary",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "summary",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"usage",
									"summary",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_key",
											"orig": "api_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "your-api-key-here",
										},
										map[string]any{
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "IP",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-11-04T00:00:00Z",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2025-11-01T00:00:00Z",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
										"end_date",
										"start_date",
									},
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
						"title": "Asn",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int64",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
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
						"title": "Country Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"title": "Ip",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "is_datacenter",
						"title": "Is Datacenter",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "network",
						"title": "Network",
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
						"title": "Organization",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "asn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/asn/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "asn",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8.8.8.8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Emails",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of email addresses to validate.",
					},
					map[string]any{
						"name": "ips",
						"title": "Ips",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of IP addresses to look up.",
					},
				},
				"name": "batch",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/email/advanced/batch",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "advanced",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"email",
									"advanced",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/ip/batch",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ip",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"ip",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Failed Validations",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "results",
						"title": "Results",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "successful_validations",
						"title": "Successful Validations",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_processed",
						"title": "Total Processed",
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
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/email/advanced/batch/csv",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"lit": "advanced",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "csv",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"email",
									"advanced",
									"batch",
									"csv",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
								"kind": "http",
								"method": "GET",
								"orig": "/management/cache/domain-age/check/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "management",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "domain-age",
									},
									map[string]any{
										"lit": "check",
									},
									map[string]any{
										"var": "domain",
									},
								},
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"check",
									"{domain}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/management/cache/domain-age/stats",
								"segments": []any{
									map[string]any{
										"lit": "management",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "domain-age",
									},
									map[string]any{
										"lit": "stats",
									},
								},
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"stats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/management/cache/domain-age",
								"segments": []any{
									map[string]any{
										"lit": "management",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "domain-age",
									},
								},
								"parts": []any{
									"management",
									"cache",
									"domain-age",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/management/cache/domain-age/all",
								"segments": []any{
									map[string]any{
										"lit": "management",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "domain-age",
									},
									map[string]any{
										"lit": "all",
									},
								},
								"parts": []any{
									"management",
									"cache",
									"domain-age",
									"all",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_analysi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domains",
						"title": "Domains",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "domain_analysi",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/v1/domain/age/batch",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domain",
									},
									map[string]any{
										"lit": "age",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"domain",
									"age",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/domain/age/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domain",
									},
									map[string]any{
										"lit": "age",
									},
									map[string]any{
										"var": "domain",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"domain",
									"age",
									"{domain}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "google.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"domain_reputation_v1_dto": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "The normalized domain that was analyzed (lowercased, scheme/path stripped).",
					},
					map[string]any{
						"name": "is_disposable_email_domain",
						"title": "Is Disposable Email Domain",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the domain is a known disposable/temporary email provider domain.",
					},
					map[string]any{
						"name": "is_valid",
						"title": "Is Valid",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the input was a syntactically valid domain name.",
					},
					map[string]any{
						"name": "resolved_ips",
						"title": "Resolved Ips",
						"type": "`$ARRAY`",
						"req": true,
						"short": "DNS A/AAAA records the domain currently resolves to.",
					},
					map[string]any{
						"name": "threat",
						"title": "Threat",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Threat-intelligence verdict for the domain itself (independent of its IPs).",
					},
				},
				"name": "domain_reputation_v1_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/domain/reputation/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "domain",
									},
									map[string]any{
										"lit": "reputation",
									},
									map[string]any{
										"var": "domain",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"domain",
									"reputation",
									"{domain}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "The email address that was analyzed, returned in normalized lowercase format.",
					},
					map[string]any{
						"name": "email_factors",
						"title": "Email Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
					},
					map[string]any{
						"name": "has_mx_records",
						"title": "Has Mx Records",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the email domain has valid MX records in DNS.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"title": "Ip Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
					},
					map[string]any{
						"name": "is_disposable",
						"title": "Is Disposable",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the email address uses a disposable or temporary email service.",
					},
					map[string]any{
						"name": "mx_records",
						"title": "Mx Records",
						"type": "`$ARRAY`",
						"req": true,
						"short": "MX records for the email domain, sorted by priority ascending.",
					},
					map[string]any{
						"name": "syntax",
						"title": "Syntax",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Detailed syntax validation results and email component breakdown.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "email",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/email/{email}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "john.doe@company.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score/email/{email}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "risk-score",
									},
									map[string]any{
										"lit": "email",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "john.doe@legitbusiness.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Addresses",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "hostname",
						"title": "Hostname",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "forward",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/forward/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dns",
									},
									map[string]any{
										"lit": "forward",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dns.google",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
								"kind": "http",
								"method": "GET",
								"orig": "/api/json/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"var": "ip",
									},
								},
								"parts": []any{
									"api",
									"json",
									"{ip}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "ip",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/json/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"var": "ip",
									},
								},
								"parts": []any{
									"json",
									"{ip}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "ip",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/json",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"api",
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/json/",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"api",
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/json",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/json/",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ip_reputation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email_factors",
						"title": "Email Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"title": "Ip Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "ip_reputation",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip-reputation/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ip-reputation",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "203.0.113.195",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Asn",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Autonomous System Number in AS<number> format.",
					},
					map[string]any{
						"name": "ip",
						"title": "Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "The IP address that was analyzed, returned in standard format.",
					},
					map[string]any{
						"name": "isp",
						"title": "Isp",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Internet Service Provider name derived from the ASN organization field.",
					},
					map[string]any{
						"name": "location",
						"title": "Location",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Geographic location and timezone information for the IP address.",
					},
					map[string]any{
						"name": "suspicious_factors",
						"title": "Suspicious Factors",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Comprehensive security threat analysis and suspicious activity indicators.",
					},
				},
				"name": "ipn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ip",
									},
									map[string]any{
										"var": "ip",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"ip",
									"{ip}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "ip",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "203.0.113.195",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ip",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ip",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ip",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"ip",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"mxn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "domain",
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "mx_records",
						"title": "Mx Records",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "mxn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/mx/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dns",
									},
									map[string]any{
										"lit": "mx",
									},
									map[string]any{
										"var": "domain",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"dns",
									"mx",
									"{domain}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gmail.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
								"kind": "http",
								"method": "POST",
								"orig": "/month-sub",
								"segments": []any{
									map[string]any{
										"lit": "month-sub",
									},
								},
								"parts": []any{
									"month-sub",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "http_entity",
											"orig": "http_entity",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"http_entity",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/month-sub",
								"segments": []any{
									map[string]any{
										"lit": "month-sub",
									},
								},
								"parts": []any{
									"month-sub",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Email Api",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Email validation API rate limit information",
					},
					map[string]any{
						"name": "interval_seconds",
						"title": "Interval Seconds",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Rate limit interval in seconds (time period for quota renewal)",
						"format": "int64",
					},
					map[string]any{
						"name": "ip_api",
						"title": "Ip Api",
						"type": "`$OBJECT`",
						"req": true,
						"short": "IP lookup API rate limit information",
					},
					map[string]any{
						"name": "next_renewal_date",
						"title": "Next Renewal Date",
						"type": "`$STRING`",
						"short": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)",
						"format": "date",
					},
					map[string]any{
						"name": "plan_id",
						"title": "Plan Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Subscription plan ID or 'default' for free tier users",
					},
					map[string]any{
						"name": "plan_name",
						"title": "Plan Name",
						"type": "`$STRING`",
						"short": "Human-readable plan name (if available)",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
						"short": "Subscription status (active, past_due, cancelled, etc.)",
					},
				},
				"name": "rate_limit_info_dto",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/ratelimit",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "ratelimit",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"ratelimit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_key",
											"orig": "api_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "abcdef1234567890abcdef1234567890",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
									},
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
						"title": "Hostname",
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"title": "Ip",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "ptr_record",
						"title": "Ptr Record",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ttl",
						"title": "Ttl",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
						"format": "int64",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reverse",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/reverse/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dns",
									},
									map[string]any{
										"lit": "reverse",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8.8.8.8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Email Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "Email-specific risk factors and validation results.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip_factors",
						"title": "Ip Factors",
						"type": "`$NULL`",
						"req": true,
						"short": "IP-specific risk factors and analysis results.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "risk_score",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "risk-score",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "203.0.113.195",
										},
									},
									"query": []any{
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "query",
											"example": "suspicious.user@tempmail.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/risk-score",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "risk-score",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"risk-score",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.factors`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
								"kind": "http",
								"method": "GET",
								"orig": "/api/status",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "status",
									},
								},
								"parts": []any{
									"api",
									"status",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"title": "Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "The IP address that was checked",
					},
					map[string]any{
						"name": "is_tor",
						"title": "Is Tor",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the IP is a known Tor exit node",
					},
					map[string]any{
						"name": "tor_node_count",
						"title": "Tor Node Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of currently known Tor exit nodes in the database",
						"format": "int32",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tor",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/tor/{ip}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "tor",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "185.220.101.50",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/current-month",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "current-month",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"usage",
									"current-month",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_key",
											"orig": "api_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/usage/recent",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
									map[string]any{
										"lit": "recent",
									},
								},
								"parts": []any{
									"api",
									"v1",
									"usage",
									"recent",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "api_key",
											"orig": "api_key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "api_type",
											"orig": "api_type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_key",
										"api_type",
									},
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
						"title": "Domain",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "error",
						"title": "Error",
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
						"title": "Expires On",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name_servers",
						"title": "Name Servers",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "raw",
						"title": "Raw",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "registered_on",
						"title": "Registered On",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registrar",
						"title": "Registrar",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "updated_on",
						"title": "Updated On",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "whoi",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/v1/dns/whois/{domain}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "dns",
									},
									map[string]any{
										"lit": "whois",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "domain",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
