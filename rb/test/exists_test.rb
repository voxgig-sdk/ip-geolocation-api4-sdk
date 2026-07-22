# IpGeolocationApi4 SDK exists test

require "minitest/autorun"
require_relative "../IpGeolocationApi4_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpGeolocationApi4SDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
