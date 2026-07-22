# IpGeolocationApi4 SDK utility: make_context
require_relative '../core/context'
module IpGeolocationApi4Utilities
  MakeContext = ->(ctxmap, basectx) {
    IpGeolocationApi4Context.new(ctxmap, basectx)
  }
end
