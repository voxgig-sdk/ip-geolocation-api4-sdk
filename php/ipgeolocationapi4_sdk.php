<?php
declare(strict_types=1);

// IpGeolocationApi4 SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class IpGeolocationApi4SDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new IpGeolocationApi4Utility();
        $this->_utility = $utility;

        $config = IpGeolocationApi4Config::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = IpGeolocationApi4Helpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = IpGeolocationApi4Helpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, IpGeolocationApi4Features::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return IpGeolocationApi4Utility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = IpGeolocationApi4Helpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = IpGeolocationApi4Helpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = IpGeolocationApi4Helpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new IpGeolocationApi4Spec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new IpGeolocationApi4Error($op . "_allow",
                "IpGeolocationApi4SDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = IpGeolocationApi4Helpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = IpGeolocationApi4Helpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new IpGeolocationApi4Error("graphql_error",
                "IpGeolocationApi4SDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_advanced = null;

    // Canonical facade: $client->Advanced()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->advanced()
    // resolves here too.
    public function Advanced($data = null)
    {
        require_once __DIR__ . '/entity/advanced_entity.php';
        if ($data === null) {
            if ($this->_advanced === null) {
                $this->_advanced = new AdvancedEntity($this, null);
            }
            return $this->_advanced;
        }
        return new AdvancedEntity($this, $data);
    }


    private $_api_usage_stats_model = null;

    // Canonical facade: $client->ApiUsageStatsModel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_usage_stats_model()
    // resolves here too.
    public function ApiUsageStatsModel($data = null)
    {
        require_once __DIR__ . '/entity/api_usage_stats_model_entity.php';
        if ($data === null) {
            if ($this->_api_usage_stats_model === null) {
                $this->_api_usage_stats_model = new ApiUsageStatsModelEntity($this, null);
            }
            return $this->_api_usage_stats_model;
        }
        return new ApiUsageStatsModelEntity($this, $data);
    }


    private $_api_usage_summary = null;

    // Canonical facade: $client->ApiUsageSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_usage_summary()
    // resolves here too.
    public function ApiUsageSummary($data = null)
    {
        require_once __DIR__ . '/entity/api_usage_summary_entity.php';
        if ($data === null) {
            if ($this->_api_usage_summary === null) {
                $this->_api_usage_summary = new ApiUsageSummaryEntity($this, null);
            }
            return $this->_api_usage_summary;
        }
        return new ApiUsageSummaryEntity($this, $data);
    }


    private $_asn = null;

    // Canonical facade: $client->Asn()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asn()
    // resolves here too.
    public function Asn($data = null)
    {
        require_once __DIR__ . '/entity/asn_entity.php';
        if ($data === null) {
            if ($this->_asn === null) {
                $this->_asn = new AsnEntity($this, null);
            }
            return $this->_asn;
        }
        return new AsnEntity($this, $data);
    }


    private $_batch = null;

    // Canonical facade: $client->Batch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->batch()
    // resolves here too.
    public function Batch($data = null)
    {
        require_once __DIR__ . '/entity/batch_entity.php';
        if ($data === null) {
            if ($this->_batch === null) {
                $this->_batch = new BatchEntity($this, null);
            }
            return $this->_batch;
        }
        return new BatchEntity($this, $data);
    }


    private $_batch_email_validation_response_dto = null;

    // Canonical facade: $client->BatchEmailValidationResponseDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->batch_email_validation_response_dto()
    // resolves here too.
    public function BatchEmailValidationResponseDto($data = null)
    {
        require_once __DIR__ . '/entity/batch_email_validation_response_dto_entity.php';
        if ($data === null) {
            if ($this->_batch_email_validation_response_dto === null) {
                $this->_batch_email_validation_response_dto = new BatchEmailValidationResponseDtoEntity($this, null);
            }
            return $this->_batch_email_validation_response_dto;
        }
        return new BatchEmailValidationResponseDtoEntity($this, $data);
    }


    private $_cache_management = null;

    // Canonical facade: $client->CacheManagement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_management()
    // resolves here too.
    public function CacheManagement($data = null)
    {
        require_once __DIR__ . '/entity/cache_management_entity.php';
        if ($data === null) {
            if ($this->_cache_management === null) {
                $this->_cache_management = new CacheManagementEntity($this, null);
            }
            return $this->_cache_management;
        }
        return new CacheManagementEntity($this, $data);
    }


    private $_domain_analysi = null;

    // Canonical facade: $client->DomainAnalysi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_analysi()
    // resolves here too.
    public function DomainAnalysi($data = null)
    {
        require_once __DIR__ . '/entity/domain_analysi_entity.php';
        if ($data === null) {
            if ($this->_domain_analysi === null) {
                $this->_domain_analysi = new DomainAnalysiEntity($this, null);
            }
            return $this->_domain_analysi;
        }
        return new DomainAnalysiEntity($this, $data);
    }


    private $_domain_reputation_v1_dto = null;

    // Canonical facade: $client->DomainReputationV1Dto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->domain_reputation_v1_dto()
    // resolves here too.
    public function DomainReputationV1Dto($data = null)
    {
        require_once __DIR__ . '/entity/domain_reputation_v1_dto_entity.php';
        if ($data === null) {
            if ($this->_domain_reputation_v1_dto === null) {
                $this->_domain_reputation_v1_dto = new DomainReputationV1DtoEntity($this, null);
            }
            return $this->_domain_reputation_v1_dto;
        }
        return new DomainReputationV1DtoEntity($this, $data);
    }


    private $_email = null;

    // Canonical facade: $client->Email()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email()
    // resolves here too.
    public function Email($data = null)
    {
        require_once __DIR__ . '/entity/email_entity.php';
        if ($data === null) {
            if ($this->_email === null) {
                $this->_email = new EmailEntity($this, null);
            }
            return $this->_email;
        }
        return new EmailEntity($this, $data);
    }


    private $_forward = null;

    // Canonical facade: $client->Forward()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->forward()
    // resolves here too.
    public function Forward($data = null)
    {
        require_once __DIR__ . '/entity/forward_entity.php';
        if ($data === null) {
            if ($this->_forward === null) {
                $this->_forward = new ForwardEntity($this, null);
            }
            return $this->_forward;
        }
        return new ForwardEntity($this, $data);
    }


    private $_ip_info_v0 = null;

    // Canonical facade: $client->IpInfoV0()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_info_v0()
    // resolves here too.
    public function IpInfoV0($data = null)
    {
        require_once __DIR__ . '/entity/ip_info_v0_entity.php';
        if ($data === null) {
            if ($this->_ip_info_v0 === null) {
                $this->_ip_info_v0 = new IpInfoV0Entity($this, null);
            }
            return $this->_ip_info_v0;
        }
        return new IpInfoV0Entity($this, $data);
    }


    private $_ip_reputation = null;

    // Canonical facade: $client->IpReputation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_reputation()
    // resolves here too.
    public function IpReputation($data = null)
    {
        require_once __DIR__ . '/entity/ip_reputation_entity.php';
        if ($data === null) {
            if ($this->_ip_reputation === null) {
                $this->_ip_reputation = new IpReputationEntity($this, null);
            }
            return $this->_ip_reputation;
        }
        return new IpReputationEntity($this, $data);
    }


    private $_ipn = null;

    // Canonical facade: $client->Ipn()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ipn()
    // resolves here too.
    public function Ipn($data = null)
    {
        require_once __DIR__ . '/entity/ipn_entity.php';
        if ($data === null) {
            if ($this->_ipn === null) {
                $this->_ipn = new IpnEntity($this, null);
            }
            return $this->_ipn;
        }
        return new IpnEntity($this, $data);
    }


    private $_mxn = null;

    // Canonical facade: $client->Mxn()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->mxn()
    // resolves here too.
    public function Mxn($data = null)
    {
        require_once __DIR__ . '/entity/mxn_entity.php';
        if ($data === null) {
            if ($this->_mxn === null) {
                $this->_mxn = new MxnEntity($this, null);
            }
            return $this->_mxn;
        }
        return new MxnEntity($this, $data);
    }


    private $_paddle_controller = null;

    // Canonical facade: $client->PaddleController()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->paddle_controller()
    // resolves here too.
    public function PaddleController($data = null)
    {
        require_once __DIR__ . '/entity/paddle_controller_entity.php';
        if ($data === null) {
            if ($this->_paddle_controller === null) {
                $this->_paddle_controller = new PaddleControllerEntity($this, null);
            }
            return $this->_paddle_controller;
        }
        return new PaddleControllerEntity($this, $data);
    }


    private $_rate_limit_info_dto = null;

    // Canonical facade: $client->RateLimitInfoDto()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rate_limit_info_dto()
    // resolves here too.
    public function RateLimitInfoDto($data = null)
    {
        require_once __DIR__ . '/entity/rate_limit_info_dto_entity.php';
        if ($data === null) {
            if ($this->_rate_limit_info_dto === null) {
                $this->_rate_limit_info_dto = new RateLimitInfoDtoEntity($this, null);
            }
            return $this->_rate_limit_info_dto;
        }
        return new RateLimitInfoDtoEntity($this, $data);
    }


    private $_reverse = null;

    // Canonical facade: $client->Reverse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reverse()
    // resolves here too.
    public function Reverse($data = null)
    {
        require_once __DIR__ . '/entity/reverse_entity.php';
        if ($data === null) {
            if ($this->_reverse === null) {
                $this->_reverse = new ReverseEntity($this, null);
            }
            return $this->_reverse;
        }
        return new ReverseEntity($this, $data);
    }


    private $_risk_score = null;

    // Canonical facade: $client->RiskScore()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->risk_score()
    // resolves here too.
    public function RiskScore($data = null)
    {
        require_once __DIR__ . '/entity/risk_score_entity.php';
        if ($data === null) {
            if ($this->_risk_score === null) {
                $this->_risk_score = new RiskScoreEntity($this, null);
            }
            return $this->_risk_score;
        }
        return new RiskScoreEntity($this, $data);
    }


    private $_status = null;

    // Canonical facade: $client->Status()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status()
    // resolves here too.
    public function Status($data = null)
    {
        require_once __DIR__ . '/entity/status_entity.php';
        if ($data === null) {
            if ($this->_status === null) {
                $this->_status = new StatusEntity($this, null);
            }
            return $this->_status;
        }
        return new StatusEntity($this, $data);
    }


    private $_tor = null;

    // Canonical facade: $client->Tor()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tor()
    // resolves here too.
    public function Tor($data = null)
    {
        require_once __DIR__ . '/entity/tor_entity.php';
        if ($data === null) {
            if ($this->_tor === null) {
                $this->_tor = new TorEntity($this, null);
            }
            return $this->_tor;
        }
        return new TorEntity($this, $data);
    }


    private $_usage_statistic = null;

    // Canonical facade: $client->UsageStatistic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage_statistic()
    // resolves here too.
    public function UsageStatistic($data = null)
    {
        require_once __DIR__ . '/entity/usage_statistic_entity.php';
        if ($data === null) {
            if ($this->_usage_statistic === null) {
                $this->_usage_statistic = new UsageStatisticEntity($this, null);
            }
            return $this->_usage_statistic;
        }
        return new UsageStatisticEntity($this, $data);
    }


    private $_whoi = null;

    // Canonical facade: $client->Whoi()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->whoi()
    // resolves here too.
    public function Whoi($data = null)
    {
        require_once __DIR__ . '/entity/whoi_entity.php';
        if ($data === null) {
            if ($this->_whoi === null) {
                $this->_whoi = new WhoiEntity($this, null);
            }
            return $this->_whoi;
        }
        return new WhoiEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new IpGeolocationApi4SDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
