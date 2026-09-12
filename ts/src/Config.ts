
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'IpGeolocationApi4',
        slug: "ip-geolocation-api4",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://ip-api.io",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      advanced: {
      },

      api_usage_stats_model: {
      },

      api_usage_summary: {
      },

      asn: {
      },

      batch: {
      },

      batch_email_validation_response_dto: {
      },

      cache_management: {
      },

      domain_analysi: {
      },

      domain_reputation_v1_dto: {
      },

      email: {
      },

      forward: {
      },

      ip_info_v0: {
      },

      ip_reputation: {
      },

      ipn: {
      },

      mxn: {
      },

      paddle_controller: {
      },

      rate_limit_info_dto: {
      },

      reverse: {
      },

      risk_score: {
      },

      status: {
      },

      tor: {
      },

      usage_statistic: {
      },

      whoi: {
      },

    }
  }


  entity = {
    "advanced": {
      "fields": [
        {
          "name": "disposable",
          "req": true,
          "short": "Indicates whether the email is from a disposable/temporary email service.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "email",
          "req": true,
          "short": "The email address that was analyzed, returned in the original format provided.",
          "type": "`$STRING`"
        },
        {
          "name": "free",
          "req": true,
          "short": "Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "gravatar",
          "type": "`$ANY`"
        },
        {
          "name": "has_mx_records",
          "req": true,
          "short": "Indicates whether the domain has valid MX (Mail Exchange) records configured.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "reachable",
          "req": true,
          "short": "Overall reachability assessment.",
          "type": "`$STRING`"
        },
        {
          "name": "role_account",
          "req": true,
          "short": "Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "smtp",
          "type": "`$ANY`"
        },
        {
          "name": "suggestion",
          "req": true,
          "short": "Suggested correction for misspelled domains.",
          "type": "`$STRING`"
        },
        {
          "name": "syntax",
          "req": true,
          "short": "Detailed syntax analysis of the email address components.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "advanced",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "test@yandex.ru",
                    "kind": "param",
                    "name": "id",
                    "orig": "email",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/email/advanced/{email}",
              "rename": {
                "param": {
                  "email": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "email"
                },
                {
                  "lit": "advanced"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "email",
                "advanced",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "api_usage_stats_model": {
      "fields": [
        {
          "name": "apiKey",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "apiType",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "authType",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "avgRequestDurationNanos",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int32",
          "name": "batchOperations",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "batchTokensConsumed",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "createdAt",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "date-time",
          "name": "hourBucket",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int32",
          "name": "minRemainingQuota",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int32",
          "name": "peakRemainingQuota",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "planId",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int32",
          "name": "quotaConsumed",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "rateLimitedRequests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "successfulRequests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int32",
          "name": "totalRequests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updatedAt",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_usage_stats_model",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "your-api-key-here",
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "IP",
                    "kind": "query",
                    "name": "api_type",
                    "orig": "api_type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2025-11-04T00:00:00Z",
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2025-11-01T00:00:00Z",
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/usage/stats",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "usage"
                },
                {
                  "lit": "stats"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "api_type",
                  "end_date",
                  "start_date"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "usage",
                "stats"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "api_usage_summary": {
      "fields": [
        {
          "name": "apiKey",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "apiType",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "avgRequestDurationMs",
          "type": [
            "`$ONE`",
            [
              "`$NUMBER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "format": "int64",
          "name": "batchOperations",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "periodEnd",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "periodStart",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "quotaConsumed",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "rateLimitedRequests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "successfulRequests",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "totalRequests",
          "req": true,
          "type": "`$INTEGER`"
        }
      ],
      "name": "api_usage_summary",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "your-api-key-here",
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "IP",
                    "kind": "query",
                    "name": "api_type",
                    "orig": "api_type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2025-11-04T00:00:00Z",
                    "kind": "query",
                    "name": "end_date",
                    "orig": "end_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2025-11-01T00:00:00Z",
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/usage/summary",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "usage"
                },
                {
                  "lit": "summary"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "api_type",
                  "end_date",
                  "start_date"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "usage",
                "summary"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "asn": {
      "fields": [
        {
          "format": "int64",
          "name": "asn",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "country",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "country_code",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "is_datacenter",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "network",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "organization",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "asn",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "8.8.8.8",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/asn/{ip}",
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "asn"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "asn",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "batch": {
      "fields": [
        {
          "name": "emails",
          "req": true,
          "short": "List of email addresses to validate.",
          "type": "`$ARRAY`"
        },
        {
          "name": "ips",
          "req": true,
          "short": "List of IP addresses to look up.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "batch",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v1/email/advanced/batch",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "email"
                },
                {
                  "lit": "advanced"
                },
                {
                  "lit": "batch"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "api",
                "v1",
                "email",
                "advanced",
                "batch"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v1/ip/batch",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "ip"
                },
                {
                  "lit": "batch"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "api",
                "v1",
                "ip",
                "batch"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "batch_email_validation_response_dto": {
      "fields": [
        {
          "name": "failed_validations",
          "type": "`$INTEGER`"
        },
        {
          "name": "results",
          "type": "`$OBJECT`"
        },
        {
          "name": "successful_validations",
          "type": "`$INTEGER`"
        },
        {
          "name": "total_processed",
          "type": "`$INTEGER`"
        }
      ],
      "name": "batch_email_validation_response_dto",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v1/email/advanced/batch/csv",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "email"
                },
                {
                  "lit": "advanced"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "csv"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "api",
                "v1",
                "email",
                "advanced",
                "batch",
                "csv"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "domain",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/management/cache/domain-age/check/{domain}",
              "segments": [
                {
                  "lit": "management"
                },
                {
                  "lit": "cache"
                },
                {
                  "lit": "domain-age"
                },
                {
                  "lit": "check"
                },
                {
                  "var": "domain"
                }
              ],
              "select": {
                "exist": [
                  "domain"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "management",
                "cache",
                "domain-age",
                "check",
                "{domain}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/management/cache/domain-age/stats",
              "segments": [
                {
                  "lit": "management"
                },
                {
                  "lit": "cache"
                },
                {
                  "lit": "domain-age"
                },
                {
                  "lit": "stats"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "management",
                "cache",
                "domain-age",
                "stats"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "DELETE",
              "orig": "/management/cache/domain-age",
              "segments": [
                {
                  "lit": "management"
                },
                {
                  "lit": "cache"
                },
                {
                  "lit": "domain-age"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "management",
                "cache",
                "domain-age"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "DELETE",
              "orig": "/management/cache/domain-age/all",
              "segments": [
                {
                  "lit": "management"
                },
                {
                  "lit": "cache"
                },
                {
                  "lit": "domain-age"
                },
                {
                  "lit": "all"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "management",
                "cache",
                "domain-age",
                "all"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "check"
          ]
        ]
      }
    },
    "domain_analysi": {
      "fields": [
        {
          "name": "domains",
          "req": true,
          "type": "`$ARRAY`"
        }
      ],
      "name": "domain_analysi",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v1/domain/age/batch",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "domain"
                },
                {
                  "lit": "age"
                },
                {
                  "lit": "batch"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "domain",
                "age",
                "batch"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "google.com",
                    "kind": "param",
                    "name": "domain",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/domain/age/{domain}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "domain"
                },
                {
                  "lit": "age"
                },
                {
                  "var": "domain"
                }
              ],
              "select": {
                "exist": [
                  "domain"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "domain",
                "age",
                "{domain}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "age"
          ]
        ]
      }
    },
    "domain_reputation_v1_dto": {
      "fields": [
        {
          "name": "domain",
          "req": true,
          "short": "The normalized domain that was analyzed (lowercased, scheme/path stripped).",
          "type": "`$STRING`"
        },
        {
          "name": "is_disposable_email_domain",
          "req": true,
          "short": "Whether the domain is a known disposable/temporary email provider domain.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "is_valid",
          "req": true,
          "short": "Whether the input was a syntactically valid domain name.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "resolved_ips",
          "req": true,
          "short": "DNS A/AAAA records the domain currently resolves to.",
          "type": "`$ARRAY`"
        },
        {
          "name": "threat",
          "req": true,
          "short": "Threat-intelligence verdict for the domain itself (independent of its IPs).",
          "type": "`$OBJECT`"
        }
      ],
      "name": "domain_reputation_v1_dto",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "example.com",
                    "kind": "param",
                    "name": "domain",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/domain/reputation/{domain}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "domain"
                },
                {
                  "lit": "reputation"
                },
                {
                  "var": "domain"
                }
              ],
              "select": {
                "exist": [
                  "domain"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "domain",
                "reputation",
                "{domain}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "reputation"
          ]
        ]
      }
    },
    "email": {
      "fields": [
        {
          "name": "email",
          "req": true,
          "short": "The email address that was analyzed, returned in normalized lowercase format.",
          "type": "`$STRING`"
        },
        {
          "name": "email_factors",
          "req": true,
          "short": "Email-specific risk factors and validation results.",
          "type": "`$NULL`"
        },
        {
          "name": "has_mx_records",
          "req": true,
          "short": "Whether the email domain has valid MX records in DNS.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip_factors",
          "req": true,
          "short": "IP-specific risk factors and analysis results.",
          "type": "`$NULL`"
        },
        {
          "name": "is_disposable",
          "req": true,
          "short": "Indicates whether the email address uses a disposable or temporary email service.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "mx_records",
          "req": true,
          "short": "MX records for the email domain, sorted by priority ascending.",
          "type": "`$ARRAY`"
        },
        {
          "name": "syntax",
          "req": true,
          "short": "Detailed syntax validation results and email component breakdown.",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "email",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "john.doe@company.com",
                    "kind": "param",
                    "name": "id",
                    "orig": "email",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/email/{email}",
              "rename": {
                "param": {
                  "email": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "email"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "email",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "example": "john.doe@legitbusiness.com",
                    "kind": "param",
                    "name": "id",
                    "orig": "email",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/risk-score/email/{email}",
              "rename": {
                "param": {
                  "email": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "risk-score"
                },
                {
                  "lit": "email"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.factors`"
              },
              "parts": [
                "api",
                "v1",
                "risk-score",
                "email",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "forward": {
      "fields": [
        {
          "name": "addresses",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "hostname",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "forward",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "dns.google",
                    "kind": "param",
                    "name": "id",
                    "orig": "hostname",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/dns/forward/{hostname}",
              "rename": {
                "param": {
                  "hostname": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "dns"
                },
                {
                  "lit": "forward"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "dns",
                "forward",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "ip",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/json/{ip}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "json"
                },
                {
                  "var": "ip"
                }
              ],
              "select": {
                "exist": [
                  "ip"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "json",
                "{ip}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "ip",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/json/{ip}",
              "segments": [
                {
                  "lit": "json"
                },
                {
                  "var": "ip"
                }
              ],
              "select": {
                "exist": [
                  "ip"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "json",
                "{ip}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/json",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/json/",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/json",
              "segments": [
                {
                  "lit": "json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "json"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/json/",
              "segments": [
                {
                  "lit": "json"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "json"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "json"
          ]
        ]
      }
    },
    "ip_reputation": {
      "fields": [
        {
          "name": "email_factors",
          "req": true,
          "short": "Email-specific risk factors and validation results.",
          "type": "`$NULL`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip_factors",
          "req": true,
          "short": "IP-specific risk factors and analysis results.",
          "type": "`$NULL`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "ip_reputation",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "203.0.113.195",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/ip-reputation/{ip}",
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "ip-reputation"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.factors`"
              },
              "parts": [
                "api",
                "v1",
                "ip-reputation",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "ipn": {
      "fields": [
        {
          "name": "asn",
          "short": "Autonomous System Number in AS<number> format.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "ip",
          "req": true,
          "short": "The IP address that was analyzed, returned in standard format.",
          "type": "`$STRING`"
        },
        {
          "name": "isp",
          "short": "Internet Service Provider name derived from the ASN organization field.",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "location",
          "req": true,
          "short": "Geographic location and timezone information for the IP address.",
          "type": "`$OBJECT`"
        },
        {
          "name": "suspicious_factors",
          "req": true,
          "short": "Comprehensive security threat analysis and suspicious activity indicators.",
          "type": "`$OBJECT`"
        }
      ],
      "name": "ipn",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "203.0.113.195",
                    "kind": "param",
                    "name": "ip",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/ip/{ip}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "ip"
                },
                {
                  "var": "ip"
                }
              ],
              "select": {
                "exist": [
                  "ip"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "ip",
                "{ip}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/ip",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "ip"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "ip"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "ip"
          ]
        ]
      }
    },
    "mxn": {
      "fields": [
        {
          "name": "domain",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "mx_records",
          "req": true,
          "type": "`$ARRAY`"
        }
      ],
      "name": "mxn",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "gmail.com",
                    "kind": "param",
                    "name": "domain",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/dns/mx/{domain}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "dns"
                },
                {
                  "lit": "mx"
                },
                {
                  "var": "domain"
                }
              ],
              "select": {
                "exist": [
                  "domain"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "dns",
                "mx",
                "{domain}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "mx"
          ]
        ]
      }
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "http_entity",
                    "orig": "http_entity",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/month-sub",
              "segments": [
                {
                  "lit": "month-sub"
                }
              ],
              "select": {
                "exist": [
                  "http_entity"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "month-sub"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/month-sub",
              "segments": [
                {
                  "lit": "month-sub"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "month-sub"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rate_limit_info_dto": {
      "fields": [
        {
          "name": "email_api",
          "req": true,
          "short": "Email validation API rate limit information",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "interval_seconds",
          "req": true,
          "short": "Rate limit interval in seconds (time period for quota renewal)",
          "type": "`$INTEGER`"
        },
        {
          "name": "ip_api",
          "req": true,
          "short": "IP lookup API rate limit information",
          "type": "`$OBJECT`"
        },
        {
          "format": "date",
          "name": "next_renewal_date",
          "short": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)",
          "type": "`$STRING`"
        },
        {
          "name": "plan_id",
          "req": true,
          "short": "Subscription plan ID or 'default' for free tier users",
          "type": "`$STRING`"
        },
        {
          "name": "plan_name",
          "short": "Human-readable plan name (if available)",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Subscription status (active, past_due, cancelled, etc.)",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "name": "rate_limit_info_dto",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "abcdef1234567890abcdef1234567890",
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/ratelimit",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "ratelimit"
                }
              ],
              "select": {
                "exist": [
                  "api_key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "ratelimit"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "reverse": {
      "fields": [
        {
          "name": "hostname",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "ptr_record",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "ttl",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ]
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "reverse",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "8.8.8.8",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/dns/reverse/{ip}",
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "dns"
                },
                {
                  "lit": "reverse"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "dns",
                "reverse",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "risk_score": {
      "fields": [
        {
          "name": "email_factors",
          "req": true,
          "short": "Email-specific risk factors and validation results.",
          "type": "`$NULL`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip_factors",
          "req": true,
          "short": "IP-specific risk factors and analysis results.",
          "type": "`$NULL`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "risk_score",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "203.0.113.195",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": "suspicious.user@tempmail.com",
                    "kind": "query",
                    "name": "email",
                    "orig": "email",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/risk-score/{ip}",
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "risk-score"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "email",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.factors`"
              },
              "parts": [
                "api",
                "v1",
                "risk-score",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/risk-score",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "risk-score"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.factors`"
              },
              "parts": [
                "api",
                "v1",
                "risk-score"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/status",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "status"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "status"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tor": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "ip",
          "req": true,
          "short": "The IP address that was checked",
          "type": "`$STRING`"
        },
        {
          "name": "is_tor",
          "req": true,
          "short": "Whether the IP is a known Tor exit node",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int32",
          "name": "tor_node_count",
          "req": true,
          "short": "Total number of currently known Tor exit nodes in the database",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "tor",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "185.220.101.50",
                    "kind": "param",
                    "name": "id",
                    "orig": "ip",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/tor/{ip}",
              "rename": {
                "param": {
                  "ip": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "tor"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "tor",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "api_type",
                    "orig": "api_type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/usage/current-month",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "usage"
                },
                {
                  "lit": "current-month"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "api_type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "usage",
                "current-month"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "api_key",
                    "orig": "api_key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "api_type",
                    "orig": "api_type",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/usage/recent",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "usage"
                },
                {
                  "lit": "recent"
                }
              ],
              "select": {
                "exist": [
                  "api_key",
                  "api_type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "usage",
                "recent"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "whoi": {
      "fields": [
        {
          "name": "domain",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "error",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ]
        },
        {
          "name": "expires_on",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "name_servers",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "raw",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "registered_on",
          "type": "`$STRING`"
        },
        {
          "name": "registrar",
          "type": "`$ANY`"
        },
        {
          "name": "status",
          "req": true,
          "type": "`$ARRAY`"
        },
        {
          "name": "updated_on",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "whoi",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "example.com",
                    "kind": "param",
                    "name": "id",
                    "orig": "domain",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v1/dns/whois/{domain}",
              "rename": {
                "param": {
                  "domain": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v1"
                },
                {
                  "lit": "dns"
                },
                {
                  "lit": "whois"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v1",
                "dns",
                "whois",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

