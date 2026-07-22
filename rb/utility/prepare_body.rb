# IpGeolocationApi4 SDK utility: prepare_body
module IpGeolocationApi4Utilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
