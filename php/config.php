<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK configuration

class IpGeolocationApi4Config
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpGeolocationApi4",
                "slug" => "ip-geolocation-api4",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://ip-api.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "advanced" => [],
                    "api_usage_stats_model" => [],
                    "api_usage_summary" => [],
                    "asn" => [],
                    "batch" => [],
                    "batch_email_validation_response_dto" => [],
                    "cache_management" => [],
                    "domain_analysi" => [],
                    "domain_reputation_v1_dto" => [],
                    "email" => [],
                    "forward" => [],
                    "ip_info_v0" => [],
                    "ip_reputation" => [],
                    "ipn" => [],
                    "mxn" => [],
                    "paddle_controller" => [],
                    "rate_limit_info_dto" => [],
                    "reverse" => [],
                    "risk_score" => [],
                    "status" => [],
                    "tor" => [],
                    "usage_statistic" => [],
                    "whoi" => [],
                ],
            ],
            "entity" => [
        'advanced' => [
          'fields' => [
            [
              'name' => 'disposable',
              'req' => true,
              'short' => 'Indicates whether the email is from a disposable/temporary email service.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'email',
              'req' => true,
              'short' => 'The email address that was analyzed, returned in the original format provided.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'free',
              'req' => true,
              'short' => 'Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'gravatar',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'has_mx_records',
              'req' => true,
              'short' => 'Indicates whether the domain has valid MX (Mail Exchange) records configured.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reachable',
              'req' => true,
              'short' => 'Overall reachability assessment.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role_account',
              'req' => true,
              'short' => 'Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'smtp',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'suggestion',
              'req' => true,
              'short' => 'Suggested correction for misspelled domains.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'syntax',
              'req' => true,
              'short' => 'Detailed syntax analysis of the email address components.',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'advanced',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'test@yandex.ru',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'email',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/email/advanced/{email}',
                  'parts' => [
                    'api',
                    'v1',
                    'email',
                    'advanced',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'email' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'api_usage_stats_model' => [
          'fields' => [
            [
              'name' => 'apiKey',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'apiType',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'authType',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'avgRequestDurationNanos',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'batchOperations',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'batchTokensConsumed',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'createdAt',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'hourBucket',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'minRemainingQuota',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'peakRemainingQuota',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'planId',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quotaConsumed',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rateLimitedRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'successfulRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'totalRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'updatedAt',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
          ],
          'name' => 'api_usage_stats_model',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'your-api-key-here',
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'IP',
                        'kind' => 'query',
                        'name' => 'api_type',
                        'orig' => 'api_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '2025-11-04T00:00:00Z',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '2025-11-01T00:00:00Z',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/usage/stats',
                  'parts' => [
                    'api',
                    'v1',
                    'usage',
                    'stats',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'api_type',
                      'end_date',
                      'start_date',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'api_usage_summary' => [
          'fields' => [
            [
              'name' => 'apiKey',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'apiType',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'avgRequestDurationMs',
              'type' => [
                '`$ONE`',
                [
                  '`$NUMBER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'batchOperations',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'periodEnd',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'periodStart',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quotaConsumed',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'rateLimitedRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'successfulRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'totalRequests',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'api_usage_summary',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'your-api-key-here',
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'IP',
                        'kind' => 'query',
                        'name' => 'api_type',
                        'orig' => 'api_type',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '2025-11-04T00:00:00Z',
                        'kind' => 'query',
                        'name' => 'end_date',
                        'orig' => 'end_date',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '2025-11-01T00:00:00Z',
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/usage/summary',
                  'parts' => [
                    'api',
                    'v1',
                    'usage',
                    'summary',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'api_type',
                      'end_date',
                      'start_date',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'asn' => [
          'fields' => [
            [
              'name' => 'asn',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'country',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'country_code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_datacenter',
              'req' => true,
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'network',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'organization',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
          ],
          'name' => 'asn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/asn/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'asn',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'batch' => [
          'fields' => [
            [
              'name' => 'emails',
              'req' => true,
              'short' => 'List of email addresses to validate.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'ips',
              'req' => true,
              'short' => 'List of IP addresses to look up.',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'batch',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v1/email/advanced/batch',
                  'parts' => [
                    'api',
                    'v1',
                    'email',
                    'advanced',
                    'batch',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v1/ip/batch',
                  'parts' => [
                    'api',
                    'v1',
                    'ip',
                    'batch',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'batch_email_validation_response_dto' => [
          'fields' => [
            [
              'name' => 'failed_validations',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'results',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'successful_validations',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'total_processed',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'batch_email_validation_response_dto',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v1/email/advanced/batch/csv',
                  'parts' => [
                    'api',
                    'v1',
                    'email',
                    'advanced',
                    'batch',
                    'csv',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'cache_management' => [
          'fields' => [],
          'name' => 'cache_management',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'domain',
                        'orig' => 'domain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/management/cache/domain-age/check/{domain}',
                  'parts' => [
                    'management',
                    'cache',
                    'domain-age',
                    'check',
                    '{domain}',
                  ],
                  'select' => [
                    'exist' => [
                      'domain',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/management/cache/domain-age/stats',
                  'parts' => [
                    'management',
                    'cache',
                    'domain-age',
                    'stats',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/management/cache/domain-age',
                  'parts' => [
                    'management',
                    'cache',
                    'domain-age',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/management/cache/domain-age/all',
                  'parts' => [
                    'management',
                    'cache',
                    'domain-age',
                    'all',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'check',
              ],
            ],
          ],
        ],
        'domain_analysi' => [
          'fields' => [
            [
              'name' => 'domains',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'domain_analysi',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v1/domain/age/batch',
                  'parts' => [
                    'api',
                    'v1',
                    'domain',
                    'age',
                    'batch',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'google.com',
                        'kind' => 'param',
                        'name' => 'domain',
                        'orig' => 'domain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/domain/age/{domain}',
                  'parts' => [
                    'api',
                    'v1',
                    'domain',
                    'age',
                    '{domain}',
                  ],
                  'select' => [
                    'exist' => [
                      'domain',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'age',
              ],
            ],
          ],
        ],
        'domain_reputation_v1_dto' => [
          'fields' => [
            [
              'name' => 'domain',
              'req' => true,
              'short' => 'The normalized domain that was analyzed (lowercased, scheme/path stripped).',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_disposable_email_domain',
              'req' => true,
              'short' => 'Whether the domain is a known disposable/temporary email provider domain.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'is_valid',
              'req' => true,
              'short' => 'Whether the input was a syntactically valid domain name.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'resolved_ips',
              'req' => true,
              'short' => 'DNS A/AAAA records the domain currently resolves to.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'threat',
              'req' => true,
              'short' => 'Threat-intelligence verdict for the domain itself (independent of its IPs).',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'domain_reputation_v1_dto',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'example.com',
                        'kind' => 'param',
                        'name' => 'domain',
                        'orig' => 'domain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/domain/reputation/{domain}',
                  'parts' => [
                    'api',
                    'v1',
                    'domain',
                    'reputation',
                    '{domain}',
                  ],
                  'select' => [
                    'exist' => [
                      'domain',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'reputation',
              ],
            ],
          ],
        ],
        'email' => [
          'fields' => [
            [
              'name' => 'email',
              'req' => true,
              'short' => 'The email address that was analyzed, returned in normalized lowercase format.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'email_factors',
              'req' => true,
              'short' => 'Email-specific risk factors and validation results.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'has_mx_records',
              'req' => true,
              'short' => 'Whether the email domain has valid MX records in DNS.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip_factors',
              'req' => true,
              'short' => 'IP-specific risk factors and analysis results.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'is_disposable',
              'req' => true,
              'short' => 'Indicates whether the email address uses a disposable or temporary email service.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'mx_records',
              'req' => true,
              'short' => 'MX records for the email domain, sorted by priority ascending.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'syntax',
              'req' => true,
              'short' => 'Detailed syntax validation results and email component breakdown.',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'email',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'john.doe@company.com',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'email',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/email/{email}',
                  'parts' => [
                    'api',
                    'v1',
                    'email',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'email' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'john.doe@legitbusiness.com',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'email',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/risk-score/email/{email}',
                  'parts' => [
                    'api',
                    'v1',
                    'risk-score',
                    'email',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'email' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.factors`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'forward' => [
          'fields' => [
            [
              'name' => 'addresses',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'hostname',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'forward',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'dns.google',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'hostname',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/dns/forward/{hostname}',
                  'parts' => [
                    'api',
                    'v1',
                    'dns',
                    'forward',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'hostname' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'ip_info_v0' => [
          'fields' => [],
          'name' => 'ip_info_v0',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/json/{ip}',
                  'parts' => [
                    'api',
                    'json',
                    '{ip}',
                  ],
                  'select' => [
                    'exist' => [
                      'ip',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json/{ip}',
                  'parts' => [
                    'json',
                    '{ip}',
                  ],
                  'select' => [
                    'exist' => [
                      'ip',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/json',
                  'parts' => [
                    'api',
                    'json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/json/',
                  'parts' => [
                    'api',
                    'json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json',
                  'parts' => [
                    'json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json/',
                  'parts' => [
                    'json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'json',
              ],
            ],
          ],
        ],
        'ip_reputation' => [
          'fields' => [
            [
              'name' => 'email_factors',
              'req' => true,
              'short' => 'Email-specific risk factors and validation results.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip_factors',
              'req' => true,
              'short' => 'IP-specific risk factors and analysis results.',
              'type' => '`$NULL`',
            ],
          ],
          'name' => 'ip_reputation',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '203.0.113.195',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/ip-reputation/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'ip-reputation',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.factors`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'ipn' => [
          'fields' => [
            [
              'name' => 'asn',
              'short' => 'Autonomous System Number in AS<number> format.',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'ip',
              'req' => true,
              'short' => 'The IP address that was analyzed, returned in standard format.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'isp',
              'short' => 'Internet Service Provider name derived from the ASN organization field.',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'location',
              'req' => true,
              'short' => 'Geographic location and timezone information for the IP address.',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'suspicious_factors',
              'req' => true,
              'short' => 'Comprehensive security threat analysis and suspicious activity indicators.',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'ipn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '203.0.113.195',
                        'kind' => 'param',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/ip/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'ip',
                    '{ip}',
                  ],
                  'select' => [
                    'exist' => [
                      'ip',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/ip',
                  'parts' => [
                    'api',
                    'v1',
                    'ip',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'ip',
              ],
            ],
          ],
        ],
        'mxn' => [
          'fields' => [
            [
              'name' => 'domain',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mx_records',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'mxn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'gmail.com',
                        'kind' => 'param',
                        'name' => 'domain',
                        'orig' => 'domain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/dns/mx/{domain}',
                  'parts' => [
                    'api',
                    'v1',
                    'dns',
                    'mx',
                    '{domain}',
                  ],
                  'select' => [
                    'exist' => [
                      'domain',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'mx',
              ],
            ],
          ],
        ],
        'paddle_controller' => [
          'fields' => [],
          'name' => 'paddle_controller',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'http_entity',
                        'orig' => 'http_entity',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/month-sub',
                  'parts' => [
                    'month-sub',
                  ],
                  'select' => [
                    'exist' => [
                      'http_entity',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/month-sub',
                  'parts' => [
                    'month-sub',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rate_limit_info_dto' => [
          'fields' => [
            [
              'name' => 'email_api',
              'req' => true,
              'short' => 'Email validation API rate limit information',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'interval_seconds',
              'req' => true,
              'short' => 'Rate limit interval in seconds (time period for quota renewal)',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'ip_api',
              'req' => true,
              'short' => 'IP lookup API rate limit information',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'next_renewal_date',
              'short' => 'Next billing/renewal date when the quota will be reset (ISO 8601 date format)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan_id',
              'req' => true,
              'short' => 'Subscription plan ID or \'default\' for free tier users',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan_name',
              'short' => 'Human-readable plan name (if available)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Subscription status (active, past_due, cancelled, etc.)',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
          ],
          'name' => 'rate_limit_info_dto',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'abcdef1234567890abcdef1234567890',
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/ratelimit',
                  'parts' => [
                    'api',
                    'v1',
                    'ratelimit',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'reverse' => [
          'fields' => [
            [
              'name' => 'hostname',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ptr_record',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ttl',
              'type' => [
                '`$ONE`',
                [
                  '`$INTEGER`',
                  '`$NULL`',
                ],
              ],
            ],
          ],
          'name' => 'reverse',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/dns/reverse/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'dns',
                    'reverse',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'risk_score' => [
          'fields' => [
            [
              'name' => 'email_factors',
              'req' => true,
              'short' => 'Email-specific risk factors and validation results.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip_factors',
              'req' => true,
              'short' => 'IP-specific risk factors and analysis results.',
              'type' => '`$NULL`',
            ],
          ],
          'name' => 'risk_score',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '203.0.113.195',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'suspicious.user@tempmail.com',
                        'kind' => 'query',
                        'name' => 'email',
                        'orig' => 'email',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/risk-score/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'risk-score',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'email',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.factors`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/risk-score',
                  'parts' => [
                    'api',
                    'v1',
                    'risk-score',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.factors`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'status' => [
          'fields' => [],
          'name' => 'status',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/status',
                  'parts' => [
                    'api',
                    'status',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tor' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ip',
              'req' => true,
              'short' => 'The IP address that was checked',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_tor',
              'req' => true,
              'short' => 'Whether the IP is a known Tor exit node',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'tor_node_count',
              'req' => true,
              'short' => 'Total number of currently known Tor exit nodes in the database',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'tor',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '185.220.101.50',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'ip',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/tor/{ip}',
                  'parts' => [
                    'api',
                    'v1',
                    'tor',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'ip' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'usage_statistic' => [
          'fields' => [],
          'name' => 'usage_statistic',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'api_type',
                        'orig' => 'api_type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/usage/current-month',
                  'parts' => [
                    'api',
                    'v1',
                    'usage',
                    'current-month',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'api_type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'api_key',
                        'orig' => 'api_key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'api_type',
                        'orig' => 'api_type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/usage/recent',
                  'parts' => [
                    'api',
                    'v1',
                    'usage',
                    'recent',
                  ],
                  'select' => [
                    'exist' => [
                      'api_key',
                      'api_type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'whoi' => [
          'fields' => [
            [
              'name' => 'domain',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'error',
              'type' => [
                '`$ONE`',
                [
                  '`$STRING`',
                  '`$NULL`',
                ],
              ],
            ],
            [
              'name' => 'expires_on',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name_servers',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'raw',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'registered_on',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'registrar',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'updated_on',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'whoi',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'example.com',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'domain',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v1/dns/whois/{domain}',
                  'parts' => [
                    'api',
                    'v1',
                    'dns',
                    'whois',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'domain' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpGeolocationApi4Features::make_feature($name);
    }
}
