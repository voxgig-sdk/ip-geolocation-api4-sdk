-- IpGeolocationApi4 SDK error

local IpGeolocationApi4Error = {}
IpGeolocationApi4Error.__index = IpGeolocationApi4Error


function IpGeolocationApi4Error.new(code, msg, ctx)
  local self = setmetatable({}, IpGeolocationApi4Error)
  self.is_sdk_error = true
  self.sdk = "IpGeolocationApi4"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpGeolocationApi4Error:error()
  return self.msg
end


function IpGeolocationApi4Error:__tostring()
  return self.msg
end


return IpGeolocationApi4Error
