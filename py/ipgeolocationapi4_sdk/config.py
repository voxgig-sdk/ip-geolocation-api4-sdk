# IpGeolocationApi4 SDK configuration


def make_config():
    return {
        "main": {
            "name": "IpGeolocationApi4",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://ip-api.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "advanced": {},
                "api_usage_stats_model": {},
                "api_usage_summary": {},
                "asn": {},
                "batch": {},
                "batch_email_validation_response_dto": {},
                "cache_management": {},
                "domain_analysi": {},
                "domain_reputation_v1_dto": {},
                "email": {},
                "forward": {},
                "ip_info_v0": {},
                "ip_reputation": {},
                "ipn": {},
                "mxn": {},
                "paddle_controller": {},
                "rate_limit_info_dto": {},
                "reverse": {},
                "risk_score": {},
                "status": {},
                "tor": {},
                "usage_statistic": {},
                "whoi": {},
            },
        },
        "entity": {
      "advanced": {
        "fields": [
          {
            "active": True,
            "name": "disposable",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "email",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "free",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "gravatar",
            "req": False,
            "type": "`$ANY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "has_mx_records",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "reachable",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "role_account",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "smtp",
            "req": False,
            "type": "`$ANY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "suggestion",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "syntax",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
        ],
        "name": "advanced",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "test@yandex.ru",
                      "kind": "param",
                      "name": "id",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/email/advanced/{email}",
                "parts": [
                  "api",
                  "v1",
                  "email",
                  "advanced",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "email": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "api_usage_stats_model": {
        "fields": [
          {
            "active": True,
            "name": "apiKey",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "apiType",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "authType",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "avgRequestDurationNanos",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
          {
            "active": True,
            "name": "batchOperations",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "batchTokensConsumed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "createdAt",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
          {
            "active": True,
            "name": "hourBucket",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 8,
          },
          {
            "active": True,
            "name": "minRemainingQuota",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 9,
          },
          {
            "active": True,
            "name": "peakRemainingQuota",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 10,
          },
          {
            "active": True,
            "name": "planId",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "quotaConsumed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "rateLimitedRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "successfulRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "totalRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "updatedAt",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 16,
          },
        ],
        "name": "api_usage_stats_model",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "your-api-key-here",
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "IP",
                      "kind": "query",
                      "name": "api_type",
                      "orig": "api_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2025-11-04T00:00:00Z",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2025-11-01T00:00:00Z",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/usage/stats",
                "parts": [
                  "api",
                  "v1",
                  "usage",
                  "stats",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "api_type",
                    "end_date",
                    "start_date",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "api_usage_summary": {
        "fields": [
          {
            "active": True,
            "name": "apiKey",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "apiType",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "avgRequestDurationMs",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$NUMBER`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "batchOperations",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "periodEnd",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "periodStart",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "quotaConsumed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "rateLimitedRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "successfulRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "totalRequests",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
        ],
        "name": "api_usage_summary",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "your-api-key-here",
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "IP",
                      "kind": "query",
                      "name": "api_type",
                      "orig": "api_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2025-11-04T00:00:00Z",
                      "kind": "query",
                      "name": "end_date",
                      "orig": "end_date",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2025-11-01T00:00:00Z",
                      "kind": "query",
                      "name": "start_date",
                      "orig": "start_date",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/usage/summary",
                "parts": [
                  "api",
                  "v1",
                  "usage",
                  "summary",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "api_type",
                    "end_date",
                    "start_date",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "asn": {
        "fields": [
          {
            "active": True,
            "name": "asn",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "country",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "country_code",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "is_datacenter",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "network",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 5,
          },
          {
            "active": True,
            "name": "organization",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
        ],
        "name": "asn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8.8.8.8",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/asn/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "asn",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "batch": {
        "fields": [
          {
            "active": True,
            "name": "emails",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "ips",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "batch",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/email/advanced/batch",
                "parts": [
                  "api",
                  "v1",
                  "email",
                  "advanced",
                  "batch",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/ip/batch",
                "parts": [
                  "api",
                  "v1",
                  "ip",
                  "batch",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "batch_email_validation_response_dto": {
        "fields": [
          {
            "active": True,
            "name": "failed_validations",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "successful_validations",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "total_processed",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
        ],
        "name": "batch_email_validation_response_dto",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/email/advanced/batch/csv",
                "parts": [
                  "api",
                  "v1",
                  "email",
                  "advanced",
                  "batch",
                  "csv",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cache_management": {
        "fields": [],
        "name": "cache_management",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "domain",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/management/cache/domain-age/check/{domain}",
                "parts": [
                  "management",
                  "cache",
                  "domain-age",
                  "check",
                  "{domain}",
                ],
                "select": {
                  "exist": [
                    "domain",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/management/cache/domain-age/stats",
                "parts": [
                  "management",
                  "cache",
                  "domain-age",
                  "stats",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "DELETE",
                "orig": "/management/cache/domain-age",
                "parts": [
                  "management",
                  "cache",
                  "domain-age",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "DELETE",
                "orig": "/management/cache/domain-age/all",
                "parts": [
                  "management",
                  "cache",
                  "domain-age",
                  "all",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "check",
            ],
          ],
        },
      },
      "domain_analysi": {
        "fields": [
          {
            "active": True,
            "name": "domains",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "domain_analysi",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v1/domain/age/batch",
                "parts": [
                  "api",
                  "v1",
                  "domain",
                  "age",
                  "batch",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "google.com",
                      "kind": "param",
                      "name": "domain",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/domain/age/{domain}",
                "parts": [
                  "api",
                  "v1",
                  "domain",
                  "age",
                  "{domain}",
                ],
                "select": {
                  "exist": [
                    "domain",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "age",
            ],
          ],
        },
      },
      "domain_reputation_v1_dto": {
        "fields": [
          {
            "active": True,
            "name": "domain",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "is_disposable_email_domain",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "is_valid",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "resolved_ips",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "threat",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
        ],
        "name": "domain_reputation_v1_dto",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "example.com",
                      "kind": "param",
                      "name": "domain",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/domain/reputation/{domain}",
                "parts": [
                  "api",
                  "v1",
                  "domain",
                  "reputation",
                  "{domain}",
                ],
                "select": {
                  "exist": [
                    "domain",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "reputation",
            ],
          ],
        },
      },
      "email": {
        "fields": [
          {
            "active": True,
            "name": "email",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "email_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "has_mx_records",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ip_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "is_disposable",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "mx_records",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "syntax",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
        ],
        "name": "email",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "john.doe@company.com",
                      "kind": "param",
                      "name": "id",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/email/{email}",
                "parts": [
                  "api",
                  "v1",
                  "email",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "email": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "john.doe@legitbusiness.com",
                      "kind": "param",
                      "name": "id",
                      "orig": "email",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/risk-score/email/{email}",
                "parts": [
                  "api",
                  "v1",
                  "risk-score",
                  "email",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "email": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.factors`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "forward": {
        "fields": [
          {
            "active": True,
            "name": "addresses",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "hostname",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "forward",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "dns.google",
                      "kind": "param",
                      "name": "id",
                      "orig": "hostname",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/dns/forward/{hostname}",
                "parts": [
                  "api",
                  "v1",
                  "dns",
                  "forward",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "hostname": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ip_info_v0": {
        "fields": [],
        "name": "ip_info_v0",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "ip",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/json/{ip}",
                "parts": [
                  "api",
                  "json",
                  "{ip}",
                ],
                "select": {
                  "exist": [
                    "ip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "ip",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/json/{ip}",
                "parts": [
                  "json",
                  "{ip}",
                ],
                "select": {
                  "exist": [
                    "ip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/json",
                "parts": [
                  "api",
                  "json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/json/",
                "parts": [
                  "api",
                  "json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/json",
                "parts": [
                  "json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/json/",
                "parts": [
                  "json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 5,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "json",
            ],
          ],
        },
      },
      "ip_reputation": {
        "fields": [
          {
            "active": True,
            "name": "email_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "ip_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 1,
          },
        ],
        "name": "ip_reputation",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "203.0.113.195",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/ip-reputation/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "ip-reputation",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.factors`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ipn": {
        "fields": [
          {
            "active": True,
            "name": "asn",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "isp",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 2,
          },
          {
            "active": True,
            "name": "location",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "suspicious_factors",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
        ],
        "name": "ipn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "203.0.113.195",
                      "kind": "param",
                      "name": "ip",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/ip/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "ip",
                  "{ip}",
                ],
                "select": {
                  "exist": [
                    "ip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/ip",
                "parts": [
                  "api",
                  "v1",
                  "ip",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "ip",
            ],
          ],
        },
      },
      "mxn": {
        "fields": [
          {
            "active": True,
            "name": "domain",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "mx_records",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "mxn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "gmail.com",
                      "kind": "param",
                      "name": "domain",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/dns/mx/{domain}",
                "parts": [
                  "api",
                  "v1",
                  "dns",
                  "mx",
                  "{domain}",
                ],
                "select": {
                  "exist": [
                    "domain",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "mx",
            ],
          ],
        },
      },
      "paddle_controller": {
        "fields": [],
        "name": "paddle_controller",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "http_entity",
                      "orig": "http_entity",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/month-sub",
                "parts": [
                  "month-sub",
                ],
                "select": {
                  "exist": [
                    "http_entity",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/month-sub",
                "parts": [
                  "month-sub",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rate_limit_info_dto": {
        "fields": [
          {
            "active": True,
            "name": "email_api",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "interval_seconds",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ip_api",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "next_renewal_date",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "plan_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "plan_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 6,
          },
        ],
        "name": "rate_limit_info_dto",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "abcdef1234567890abcdef1234567890",
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/ratelimit",
                "parts": [
                  "api",
                  "v1",
                  "ratelimit",
                ],
                "select": {
                  "exist": [
                    "api_key",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "reverse": {
        "fields": [
          {
            "active": True,
            "name": "hostname",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 0,
          },
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ptr_record",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ttl",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$INTEGER`",
                "`$NULL`",
              ],
            ],
            "index$": 3,
          },
        ],
        "name": "reverse",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "8.8.8.8",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/dns/reverse/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "dns",
                  "reverse",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "risk_score": {
        "fields": [
          {
            "active": True,
            "name": "email_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "ip_factors",
            "req": True,
            "type": "`$NULL`",
            "index$": 1,
          },
        ],
        "name": "risk_score",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "203.0.113.195",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "suspicious.user@tempmail.com",
                      "kind": "query",
                      "name": "email",
                      "orig": "email",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/risk-score/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "risk-score",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "email",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.factors`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/risk-score",
                "parts": [
                  "api",
                  "v1",
                  "risk-score",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.factors`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status": {
        "fields": [],
        "name": "status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/status",
                "parts": [
                  "api",
                  "status",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tor": {
        "fields": [
          {
            "active": True,
            "name": "ip",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "is_tor",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tor_node_count",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
        ],
        "name": "tor",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "185.220.101.50",
                      "kind": "param",
                      "name": "id",
                      "orig": "ip",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/tor/{ip}",
                "parts": [
                  "api",
                  "v1",
                  "tor",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "ip": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usage_statistic": {
        "fields": [],
        "name": "usage_statistic",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "api_type",
                      "orig": "api_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/usage/current-month",
                "parts": [
                  "api",
                  "v1",
                  "usage",
                  "current-month",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "api_type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "api_key",
                      "orig": "api_key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "api_type",
                      "orig": "api_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/usage/recent",
                "parts": [
                  "api",
                  "v1",
                  "usage",
                  "recent",
                ],
                "select": {
                  "exist": [
                    "api_key",
                    "api_type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "whoi": {
        "fields": [
          {
            "active": True,
            "name": "domain",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "error",
            "req": False,
            "type": [
              "`$ONE`",
              [
                "`$STRING`",
                "`$NULL`",
              ],
            ],
            "index$": 1,
          },
          {
            "active": True,
            "name": "expires_on",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name_servers",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "raw",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "registered_on",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "registrar",
            "req": False,
            "type": "`$ANY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_on",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "whoi",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "example.com",
                      "kind": "param",
                      "name": "id",
                      "orig": "domain",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v1/dns/whois/{domain}",
                "parts": [
                  "api",
                  "v1",
                  "dns",
                  "whois",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "domain": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
