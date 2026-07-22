<?php
declare(strict_types=1);

// CacheManagement entity test

require_once __DIR__ . '/../ipgeolocationapi4_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CacheManagementEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IpGeolocationApi4SDK::test(null, null);
        $ent = $testsdk->CacheManagement(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = cache_management_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "cache_management." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $cache_management_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.cache_management")));
        $cache_management_ref01_data = null;
        if (count($cache_management_ref01_data_raw) > 0) {
            $cache_management_ref01_data = Helpers::to_map($cache_management_ref01_data_raw[0][1]);
        }

        // LOAD
        $cache_management_ref01_ent = $client->CacheManagement(null);
        $cache_management_ref01_match_dt0 = [];
        $cache_management_ref01_data_dt0_loaded = $cache_management_ref01_ent->load($cache_management_ref01_match_dt0, null);
        $this->assertNotNull($cache_management_ref01_data_dt0_loaded);

    }
}

function cache_management_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/cache_management/CacheManagementTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IpGeolocationApi4SDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["cache_management01", "cache_management02", "cache_management03", "check01", "check02", "check03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID" => $idmap,
        "IPGEOLOCATIONAPI__TEST_LIVE" => "FALSE",
        "IPGEOLOCATIONAPI__TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["IPGEOLOCATIONAPI__TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new IpGeolocationApi4SDK(Helpers::to_map($merged_opts));
    }

    $live = $env["IPGEOLOCATIONAPI__TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["IPGEOLOCATIONAPI__TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
