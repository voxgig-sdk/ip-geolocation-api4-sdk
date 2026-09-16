# IpGeolocationApi4 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpGeolocationApi4Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi4BaseFeature.new
    when "ratelimit"
      IpGeolocationApi4RatelimitFeature.new
    when "retry"
      IpGeolocationApi4RetryFeature.new
    when "test"
      IpGeolocationApi4TestFeature.new
    when "timeout"
      IpGeolocationApi4TimeoutFeature.new
    else
      IpGeolocationApi4BaseFeature.new
    end
  end
end
