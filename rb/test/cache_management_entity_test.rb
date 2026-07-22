# CacheManagement entity test

require "minitest/autorun"
require "json"
require_relative "../IpGeolocationApi4_sdk"
require_relative "runner"

class CacheManagementEntityTest < Minitest::Test
  def test_create_instance
    testsdk = IpGeolocationApi4SDK.test(nil, nil)
    ent = testsdk.CacheManagement(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = cache_management_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "cache_management." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    cache_management_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.cache_management")))
    cache_management_ref01_data = nil
    if cache_management_ref01_data_raw.length > 0
      cache_management_ref01_data = Helpers.to_map(cache_management_ref01_data_raw[0][1])
    end

    # LOAD
    cache_management_ref01_ent = client.CacheManagement(nil)
    cache_management_ref01_match_dt0 = {}
    cache_management_ref01_data_dt0_loaded = cache_management_ref01_ent.load(cache_management_ref01_match_dt0, nil)
    assert !cache_management_ref01_data_dt0_loaded.nil?

  end
end

def cache_management_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "cache_management", "CacheManagementTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IpGeolocationApi4SDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["cache_management01", "cache_management02", "cache_management03", "check01", "check02", "check03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID" => idmap,
    "IPGEOLOCATIONAPI__TEST_LIVE" => "FALSE",
    "IPGEOLOCATIONAPI__TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["IPGEOLOCATIONAPI__TEST_CACHE_MANAGEMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = IpGeolocationApi4SDK.new(Helpers.to_map(merged_opts))
  end

  live = env["IPGEOLOCATIONAPI__TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["IPGEOLOCATIONAPI__TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
