# IpGeolocationApi4 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpGeolocationApi4Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi4BaseFeature.new
    when "test"
      IpGeolocationApi4TestFeature.new
    else
      IpGeolocationApi4BaseFeature.new
    end
  end
end
