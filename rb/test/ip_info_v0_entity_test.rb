# IpInfoV0 entity test

require "minitest/autorun"
require "json"
require_relative "../IpGeolocationApi4_sdk"
require_relative "runner"

class IpInfoV0EntityTest < Minitest::Test
  def test_create_instance
    testsdk = IpGeolocationApi4SDK.test(nil, nil)
    ent = testsdk.IpInfoV0(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = ip_info_v0_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ip_info_v0." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set IPGEOLOCATIONAPI__TEST_IP_INFO_V__ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    ip_info_v0_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.ip_info_v0")))
    ip_info_v0_ref01_data = nil
    if ip_info_v0_ref01_data_raw.length > 0
      ip_info_v0_ref01_data = Helpers.to_map(ip_info_v0_ref01_data_raw[0][1])
    end

    # LOAD
    ip_info_v0_ref01_ent = client.IpInfoV0(nil)
    ip_info_v0_ref01_match_dt0 = {}
    ip_info_v0_ref01_data_dt0_loaded = ip_info_v0_ref01_ent.load(ip_info_v0_ref01_match_dt0, nil)
    assert !ip_info_v0_ref01_data_dt0_loaded.nil?

  end
end

def ip_info_v0_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ip_info_v0", "IpInfoV0TestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IpGeolocationApi4SDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ip_info_v001", "ip_info_v002", "ip_info_v003", "json01", "json02", "json03"],
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
  entid_env_raw = ENV["IPGEOLOCATIONAPI__TEST_IP_INFO_V__ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "IPGEOLOCATIONAPI__TEST_IP_INFO_V__ENTID" => idmap,
    "IPGEOLOCATIONAPI__TEST_LIVE" => "FALSE",
    "IPGEOLOCATIONAPI__TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["IPGEOLOCATIONAPI__TEST_IP_INFO_V__ENTID"])
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
