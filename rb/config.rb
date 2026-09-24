# IpGeolocationApi4 SDK configuration

module IpGeolocationApi4Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "IpGeolocationApi4",
        "slug" => "ip-geolocation-api4",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://ip-api.io",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "advanced" => {},
          "api_usage_stats_model" => {},
          "api_usage_summary" => {},
          "asn" => {},
          "batch" => {},
          "batch_email_validation_response_dto" => {},
          "cache_management" => {},
          "domain_analysi" => {},
          "domain_reputation_v1_dto" => {},
          "email" => {},
          "forward" => {},
          "ip_info_v0" => {},
          "ip_reputation" => {},
          "ipn" => {},
          "mxn" => {},
          "paddle_controller" => {},
          "rate_limit_info_dto" => {},
          "reverse" => {},
          "risk_score" => {},
          "status" => {},
          "tor" => {},
          "usage_statistic" => {},
          "whoi" => {},
        },
      },
      "entity" => {
        "advanced" => {
          "fields" => [
            {
              "name" => "disposable",
              "title" => "Disposable",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the email is from a disposable/temporary email service.",
            },
            {
              "name" => "email",
              "title" => "Email",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The email address that was analyzed, returned in the original format provided.",
            },
            {
              "name" => "free",
              "title" => "Free",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).",
            },
            {
              "name" => "gravatar",
              "title" => "Gravatar",
              "type" => "`$ANY`",
            },
            {
              "name" => "has_mx_records",
              "title" => "Has Mx Records",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the domain has valid MX (Mail Exchange) records configured.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "reachable",
              "title" => "Reachable",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Overall reachability assessment.",
            },
            {
              "name" => "role_account",
              "title" => "Role Account",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).",
            },
            {
              "name" => "smtp",
              "title" => "Smtp",
              "type" => "`$ANY`",
            },
            {
              "name" => "suggestion",
              "title" => "Suggestion",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Suggested correction for misspelled domains.",
            },
            {
              "name" => "syntax",
              "title" => "Syntax",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Detailed syntax analysis of the email address components.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "advanced",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/email/advanced/{email}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "email",
                    },
                    {
                      "lit" => "advanced",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "email",
                    "advanced",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "email" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "email",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "test@yandex.ru",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "api_usage_stats_model" => {
          "fields" => [
            {
              "name" => "apiKey",
              "title" => "Api Key",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "apiType",
              "title" => "Api Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "authType",
              "title" => "Auth Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "avgRequestDurationNanos",
              "title" => "Avg Request Duration Nanos",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int64",
            },
            {
              "name" => "batchOperations",
              "title" => "Batch Operations",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "batchTokensConsumed",
              "title" => "Batch Tokens Consumed",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "createdAt",
              "title" => "Created At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "format" => "date-time",
            },
            {
              "name" => "hourBucket",
              "title" => "Hour Bucket",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int64",
            },
            {
              "name" => "minRemainingQuota",
              "title" => "Min Remaining Quota",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int32",
            },
            {
              "name" => "peakRemainingQuota",
              "title" => "Peak Remaining Quota",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int32",
            },
            {
              "name" => "planId",
              "title" => "Plan Id",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "quotaConsumed",
              "title" => "Quota Consumed",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "rateLimitedRequests",
              "title" => "Rate Limited Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "successfulRequests",
              "title" => "Successful Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "totalRequests",
              "title" => "Total Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int32",
            },
            {
              "name" => "updatedAt",
              "title" => "Updated At",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "format" => "date-time",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "api_usage_stats_model",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/usage/stats",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "usage",
                    },
                    {
                      "lit" => "stats",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "usage",
                    "stats",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "api_key",
                        "orig" => "api_key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "your-api-key-here",
                      },
                      {
                        "name" => "api_type",
                        "orig" => "api_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "IP",
                      },
                      {
                        "name" => "end_date",
                        "orig" => "end_date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "2025-11-04T00:00:00Z",
                      },
                      {
                        "name" => "start_date",
                        "orig" => "start_date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "2025-11-01T00:00:00Z",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key",
                      "api_type",
                      "end_date",
                      "start_date",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "api_usage_summary" => {
          "fields" => [
            {
              "name" => "apiKey",
              "title" => "Api Key",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "apiType",
              "title" => "Api Type",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "avgRequestDurationMs",
              "title" => "Avg Request Duration Ms",
              "type" => [
                "`$ONE`",
                [
                  "`$NUMBER`",
                  "`$NULL`",
                ],
              ],
              "format" => "double",
            },
            {
              "name" => "batchOperations",
              "title" => "Batch Operations",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int64",
            },
            {
              "name" => "periodEnd",
              "title" => "Period End",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "periodStart",
              "title" => "Period Start",
              "type" => "`$STRING`",
              "req" => true,
              "format" => "date-time",
            },
            {
              "name" => "quotaConsumed",
              "title" => "Quota Consumed",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int64",
            },
            {
              "name" => "rateLimitedRequests",
              "title" => "Rate Limited Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int64",
            },
            {
              "name" => "successfulRequests",
              "title" => "Successful Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int64",
            },
            {
              "name" => "totalRequests",
              "title" => "Total Requests",
              "type" => "`$INTEGER`",
              "req" => true,
              "format" => "int64",
            },
          ],
          "name" => "api_usage_summary",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/usage/summary",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "usage",
                    },
                    {
                      "lit" => "summary",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "usage",
                    "summary",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "api_key",
                        "orig" => "api_key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "your-api-key-here",
                      },
                      {
                        "name" => "api_type",
                        "orig" => "api_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "IP",
                      },
                      {
                        "name" => "end_date",
                        "orig" => "end_date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "2025-11-04T00:00:00Z",
                      },
                      {
                        "name" => "start_date",
                        "orig" => "start_date",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "2025-11-01T00:00:00Z",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key",
                      "api_type",
                      "end_date",
                      "start_date",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "asn" => {
          "fields" => [
            {
              "name" => "asn",
              "title" => "Asn",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int64",
            },
            {
              "name" => "country",
              "title" => "Country",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "country_code",
              "title" => "Country Code",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "title" => "Ip",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "is_datacenter",
              "title" => "Is Datacenter",
              "type" => "`$BOOLEAN`",
              "req" => true,
            },
            {
              "name" => "network",
              "title" => "Network",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "organization",
              "title" => "Organization",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "asn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/asn/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "asn",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "asn",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8.8.8.8",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "batch" => {
          "fields" => [
            {
              "name" => "emails",
              "title" => "Emails",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of email addresses to validate.",
            },
            {
              "name" => "ips",
              "title" => "Ips",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "List of IP addresses to look up.",
            },
          ],
          "name" => "batch",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/email/advanced/batch",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "email",
                    },
                    {
                      "lit" => "advanced",
                    },
                    {
                      "lit" => "batch",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "email",
                    "advanced",
                    "batch",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/ip/batch",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ip",
                    },
                    {
                      "lit" => "batch",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "ip",
                    "batch",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "batch_email_validation_response_dto" => {
          "fields" => [
            {
              "name" => "failed_validations",
              "title" => "Failed Validations",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "results",
              "title" => "Results",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "successful_validations",
              "title" => "Successful Validations",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "total_processed",
              "title" => "Total Processed",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "batch_email_validation_response_dto",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/email/advanced/batch/csv",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "email",
                    },
                    {
                      "lit" => "advanced",
                    },
                    {
                      "lit" => "batch",
                    },
                    {
                      "lit" => "csv",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "email",
                    "advanced",
                    "batch",
                    "csv",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.results`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "cache_management" => {
          "fields" => [],
          "name" => "cache_management",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/management/cache/domain-age/check/{domain}",
                  "segments" => [
                    {
                      "lit" => "management",
                    },
                    {
                      "lit" => "cache",
                    },
                    {
                      "lit" => "domain-age",
                    },
                    {
                      "lit" => "check",
                    },
                    {
                      "var" => "domain",
                    },
                  ],
                  "parts" => [
                    "management",
                    "cache",
                    "domain-age",
                    "check",
                    "{domain}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "domain",
                        "orig" => "domain",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "domain",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/management/cache/domain-age/stats",
                  "segments" => [
                    {
                      "lit" => "management",
                    },
                    {
                      "lit" => "cache",
                    },
                    {
                      "lit" => "domain-age",
                    },
                    {
                      "lit" => "stats",
                    },
                  ],
                  "parts" => [
                    "management",
                    "cache",
                    "domain-age",
                    "stats",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "remove" => {
              "input" => "data",
              "name" => "remove",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/management/cache/domain-age",
                  "segments" => [
                    {
                      "lit" => "management",
                    },
                    {
                      "lit" => "cache",
                    },
                    {
                      "lit" => "domain-age",
                    },
                  ],
                  "parts" => [
                    "management",
                    "cache",
                    "domain-age",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "DELETE",
                  "orig" => "/management/cache/domain-age/all",
                  "segments" => [
                    {
                      "lit" => "management",
                    },
                    {
                      "lit" => "cache",
                    },
                    {
                      "lit" => "domain-age",
                    },
                    {
                      "lit" => "all",
                    },
                  ],
                  "parts" => [
                    "management",
                    "cache",
                    "domain-age",
                    "all",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "domain_analysi" => {
          "fields" => [
            {
              "name" => "domains",
              "title" => "Domains",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "domain_analysi",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/api/v1/domain/age/batch",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "domain",
                    },
                    {
                      "lit" => "age",
                    },
                    {
                      "lit" => "batch",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "domain",
                    "age",
                    "batch",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/domain/age/{domain}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "domain",
                    },
                    {
                      "lit" => "age",
                    },
                    {
                      "var" => "domain",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "domain",
                    "age",
                    "{domain}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "domain",
                        "orig" => "domain",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "google.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "domain",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "domain_reputation_v1_dto" => {
          "fields" => [
            {
              "name" => "domain",
              "title" => "Domain",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The normalized domain that was analyzed (lowercased, scheme/path stripped).",
            },
            {
              "name" => "is_disposable_email_domain",
              "title" => "Is Disposable Email Domain",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the domain is a known disposable/temporary email provider domain.",
            },
            {
              "name" => "is_valid",
              "title" => "Is Valid",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the input was a syntactically valid domain name.",
            },
            {
              "name" => "resolved_ips",
              "title" => "Resolved Ips",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "DNS A/AAAA records the domain currently resolves to.",
            },
            {
              "name" => "threat",
              "title" => "Threat",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Threat-intelligence verdict for the domain itself (independent of its IPs).",
            },
          ],
          "name" => "domain_reputation_v1_dto",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/domain/reputation/{domain}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "domain",
                    },
                    {
                      "lit" => "reputation",
                    },
                    {
                      "var" => "domain",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "domain",
                    "reputation",
                    "{domain}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "domain",
                        "orig" => "domain",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "example.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "domain",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "email" => {
          "fields" => [
            {
              "name" => "email",
              "title" => "Email",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The email address that was analyzed, returned in normalized lowercase format.",
            },
            {
              "name" => "email_factors",
              "title" => "Email Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "Email-specific risk factors and validation results.",
            },
            {
              "name" => "has_mx_records",
              "title" => "Has Mx Records",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the email domain has valid MX records in DNS.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip_factors",
              "title" => "Ip Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "IP-specific risk factors and analysis results.",
            },
            {
              "name" => "is_disposable",
              "title" => "Is Disposable",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Indicates whether the email address uses a disposable or temporary email service.",
            },
            {
              "name" => "mx_records",
              "title" => "Mx Records",
              "type" => "`$ARRAY`",
              "req" => true,
              "short" => "MX records for the email domain, sorted by priority ascending.",
            },
            {
              "name" => "syntax",
              "title" => "Syntax",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Detailed syntax validation results and email component breakdown.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "email",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/email/{email}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "email",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "email",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "email" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "email",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "john.doe@company.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/risk-score/email/{email}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "risk-score",
                    },
                    {
                      "lit" => "email",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "risk-score",
                    "email",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "email" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.factors`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "email",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "john.doe@legitbusiness.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "forward" => {
          "fields" => [
            {
              "name" => "addresses",
              "title" => "Addresses",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "hostname",
              "title" => "Hostname",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "forward",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/dns/forward/{hostname}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "dns",
                    },
                    {
                      "lit" => "forward",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "dns",
                    "forward",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "hostname" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "hostname",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "dns.google",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ip_info_v0" => {
          "fields" => [],
          "name" => "ip_info_v0",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/json/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "json",
                    },
                    {
                      "var" => "ip",
                    },
                  ],
                  "parts" => [
                    "api",
                    "json",
                    "{ip}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "ip",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "ip",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/json/{ip}",
                  "segments" => [
                    {
                      "lit" => "json",
                    },
                    {
                      "var" => "ip",
                    },
                  ],
                  "parts" => [
                    "json",
                    "{ip}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "ip",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "ip",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/json",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "api",
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/json/",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "api",
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/json",
                  "segments" => [
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/json/",
                  "segments" => [
                    {
                      "lit" => "json",
                    },
                  ],
                  "parts" => [
                    "json",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ip_reputation" => {
          "fields" => [
            {
              "name" => "email_factors",
              "title" => "Email Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "Email-specific risk factors and validation results.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip_factors",
              "title" => "Ip Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "IP-specific risk factors and analysis results.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "ip_reputation",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/ip-reputation/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ip-reputation",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "ip-reputation",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.factors`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "203.0.113.195",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "ipn" => {
          "fields" => [
            {
              "name" => "asn",
              "title" => "Asn",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Autonomous System Number in AS<number> format.",
            },
            {
              "name" => "ip",
              "title" => "Ip",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The IP address that was analyzed, returned in standard format.",
            },
            {
              "name" => "isp",
              "title" => "Isp",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Internet Service Provider name derived from the ASN organization field.",
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Geographic location and timezone information for the IP address.",
            },
            {
              "name" => "suspicious_factors",
              "title" => "Suspicious Factors",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Comprehensive security threat analysis and suspicious activity indicators.",
            },
          ],
          "name" => "ipn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/ip/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ip",
                    },
                    {
                      "var" => "ip",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "ip",
                    "{ip}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "ip",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "203.0.113.195",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "ip",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/ip",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ip",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "ip",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "mxn" => {
          "fields" => [
            {
              "name" => "domain",
              "title" => "Domain",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "mx_records",
              "title" => "Mx Records",
              "type" => "`$ARRAY`",
              "req" => true,
            },
          ],
          "name" => "mxn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/dns/mx/{domain}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "dns",
                    },
                    {
                      "lit" => "mx",
                    },
                    {
                      "var" => "domain",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "dns",
                    "mx",
                    "{domain}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "domain",
                        "orig" => "domain",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "gmail.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "domain",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "paddle_controller" => {
          "fields" => [],
          "name" => "paddle_controller",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/month-sub",
                  "segments" => [
                    {
                      "lit" => "month-sub",
                    },
                  ],
                  "parts" => [
                    "month-sub",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "http_entity",
                        "orig" => "http_entity",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "http_entity",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/month-sub",
                  "segments" => [
                    {
                      "lit" => "month-sub",
                    },
                  ],
                  "parts" => [
                    "month-sub",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "rate_limit_info_dto" => {
          "fields" => [
            {
              "name" => "email_api",
              "title" => "Email Api",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "Email validation API rate limit information",
            },
            {
              "name" => "interval_seconds",
              "title" => "Interval Seconds",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Rate limit interval in seconds (time period for quota renewal)",
              "format" => "int64",
            },
            {
              "name" => "ip_api",
              "title" => "Ip Api",
              "type" => "`$OBJECT`",
              "req" => true,
              "short" => "IP lookup API rate limit information",
            },
            {
              "name" => "next_renewal_date",
              "title" => "Next Renewal Date",
              "type" => "`$STRING`",
              "short" => "Next billing/renewal date when the quota will be reset (ISO 8601 date format)",
              "format" => "date",
            },
            {
              "name" => "plan_id",
              "title" => "Plan Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Subscription plan ID or 'default' for free tier users",
            },
            {
              "name" => "plan_name",
              "title" => "Plan Name",
              "type" => "`$STRING`",
              "short" => "Human-readable plan name (if available)",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
              "short" => "Subscription status (active, past_due, cancelled, etc.)",
            },
          ],
          "name" => "rate_limit_info_dto",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/ratelimit",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ratelimit",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "ratelimit",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "api_key",
                        "orig" => "api_key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "abcdef1234567890abcdef1234567890",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "reverse" => {
          "fields" => [
            {
              "name" => "hostname",
              "title" => "Hostname",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "title" => "Ip",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "ptr_record",
              "title" => "Ptr Record",
              "type" => "`$STRING`",
            },
            {
              "name" => "ttl",
              "title" => "Ttl",
              "type" => [
                "`$ONE`",
                [
                  "`$INTEGER`",
                  "`$NULL`",
                ],
              ],
              "format" => "int64",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "reverse",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/dns/reverse/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "dns",
                    },
                    {
                      "lit" => "reverse",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "dns",
                    "reverse",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "8.8.8.8",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "risk_score" => {
          "fields" => [
            {
              "name" => "email_factors",
              "title" => "Email Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "Email-specific risk factors and validation results.",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip_factors",
              "title" => "Ip Factors",
              "type" => "`$NULL`",
              "req" => true,
              "short" => "IP-specific risk factors and analysis results.",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "risk_score",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/risk-score/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "risk-score",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "risk-score",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.factors`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "203.0.113.195",
                      },
                    ],
                    "query" => [
                      {
                        "name" => "email",
                        "orig" => "email",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "suspicious.user@tempmail.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "email",
                      "id",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/risk-score",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "risk-score",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "risk-score",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.factors`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "status" => {
          "fields" => [],
          "name" => "status",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/status",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "status",
                    },
                  ],
                  "parts" => [
                    "api",
                    "status",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {},
                  "select" => {},
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "tor" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "ip",
              "title" => "Ip",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "The IP address that was checked",
            },
            {
              "name" => "is_tor",
              "title" => "Is Tor",
              "type" => "`$BOOLEAN`",
              "req" => true,
              "short" => "Whether the IP is a known Tor exit node",
            },
            {
              "name" => "tor_node_count",
              "title" => "Tor Node Count",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Total number of currently known Tor exit nodes in the database",
              "format" => "int32",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "tor",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/tor/{ip}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "tor",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "tor",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "ip" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "ip",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "185.220.101.50",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "usage_statistic" => {
          "fields" => [],
          "name" => "usage_statistic",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/usage/current-month",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "usage",
                    },
                    {
                      "lit" => "current-month",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "usage",
                    "current-month",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "api_key",
                        "orig" => "api_key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "api_type",
                        "orig" => "api_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key",
                      "api_type",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/usage/recent",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "usage",
                    },
                    {
                      "lit" => "recent",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "usage",
                    "recent",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "api_key",
                        "orig" => "api_key",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "api_type",
                        "orig" => "api_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "api_key",
                      "api_type",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "whoi" => {
          "fields" => [
            {
              "name" => "domain",
              "title" => "Domain",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "error",
              "title" => "Error",
              "type" => [
                "`$ONE`",
                [
                  "`$STRING`",
                  "`$NULL`",
                ],
              ],
            },
            {
              "name" => "expires_on",
              "title" => "Expires On",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "name_servers",
              "title" => "Name Servers",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "raw",
              "title" => "Raw",
              "type" => "`$STRING`",
              "req" => true,
            },
            {
              "name" => "registered_on",
              "title" => "Registered On",
              "type" => "`$STRING`",
            },
            {
              "name" => "registrar",
              "title" => "Registrar",
              "type" => "`$ANY`",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$ARRAY`",
              "req" => true,
            },
            {
              "name" => "updated_on",
              "title" => "Updated On",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "whoi",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/v1/dns/whois/{domain}",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "dns",
                    },
                    {
                      "lit" => "whois",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "api",
                    "v1",
                    "dns",
                    "whois",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "domain" => "id",
                    },
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "domain",
                        "type" => "`$STRING`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => "example.com",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpGeolocationApi4Features.make_feature(name)
  end
end
