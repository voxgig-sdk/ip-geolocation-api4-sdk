-- IpGeolocationApi4 SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("ip-geolocation-api4_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local IpGeolocationApi4SDK = {}
IpGeolocationApi4SDK.__index = IpGeolocationApi4SDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

IpGeolocationApi4SDK._make_feature = _make_feature


function IpGeolocationApi4SDK.new(options)
  local self = setmetatable({}, IpGeolocationApi4SDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function IpGeolocationApi4SDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function IpGeolocationApi4SDK:get_utility()
  return Utility.copy(self._utility)
end


function IpGeolocationApi4SDK:get_root_ctx()
  return self._rootctx
end


function IpGeolocationApi4SDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function IpGeolocationApi4SDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function IpGeolocationApi4SDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function IpGeolocationApi4SDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "IpGeolocationApi4SDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function IpGeolocationApi4SDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function IpGeolocationApi4SDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "IpGeolocationApi4SDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Advanced():list() / client:Advanced():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Advanced(data)
  local EntityMod = require("entity.advanced_entity")
  if data == nil then
    if self._advanced == nil then
      self._advanced = EntityMod.new(self, nil)
    end
    return self._advanced
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiUsageStatsModel():list() / client:ApiUsageStatsModel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:ApiUsageStatsModel(data)
  local EntityMod = require("entity.api_usage_stats_model_entity")
  if data == nil then
    if self._api_usage_stats_model == nil then
      self._api_usage_stats_model = EntityMod.new(self, nil)
    end
    return self._api_usage_stats_model
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiUsageSummary():list() / client:ApiUsageSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:ApiUsageSummary(data)
  local EntityMod = require("entity.api_usage_summary_entity")
  if data == nil then
    if self._api_usage_summary == nil then
      self._api_usage_summary = EntityMod.new(self, nil)
    end
    return self._api_usage_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Asn():list() / client:Asn():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Asn(data)
  local EntityMod = require("entity.asn_entity")
  if data == nil then
    if self._asn == nil then
      self._asn = EntityMod.new(self, nil)
    end
    return self._asn
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Batch():list() / client:Batch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Batch(data)
  local EntityMod = require("entity.batch_entity")
  if data == nil then
    if self._batch == nil then
      self._batch = EntityMod.new(self, nil)
    end
    return self._batch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BatchEmailValidationResponseDto():list() / client:BatchEmailValidationResponseDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:BatchEmailValidationResponseDto(data)
  local EntityMod = require("entity.batch_email_validation_response_dto_entity")
  if data == nil then
    if self._batch_email_validation_response_dto == nil then
      self._batch_email_validation_response_dto = EntityMod.new(self, nil)
    end
    return self._batch_email_validation_response_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CacheManagement():list() / client:CacheManagement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:CacheManagement(data)
  local EntityMod = require("entity.cache_management_entity")
  if data == nil then
    if self._cache_management == nil then
      self._cache_management = EntityMod.new(self, nil)
    end
    return self._cache_management
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainAnalysi():list() / client:DomainAnalysi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:DomainAnalysi(data)
  local EntityMod = require("entity.domain_analysi_entity")
  if data == nil then
    if self._domain_analysi == nil then
      self._domain_analysi = EntityMod.new(self, nil)
    end
    return self._domain_analysi
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DomainReputationV1Dto():list() / client:DomainReputationV1Dto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:DomainReputationV1Dto(data)
  local EntityMod = require("entity.domain_reputation_v1_dto_entity")
  if data == nil then
    if self._domain_reputation_v1_dto == nil then
      self._domain_reputation_v1_dto = EntityMod.new(self, nil)
    end
    return self._domain_reputation_v1_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Email():list() / client:Email():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Email(data)
  local EntityMod = require("entity.email_entity")
  if data == nil then
    if self._email == nil then
      self._email = EntityMod.new(self, nil)
    end
    return self._email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Forward():list() / client:Forward():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Forward(data)
  local EntityMod = require("entity.forward_entity")
  if data == nil then
    if self._forward == nil then
      self._forward = EntityMod.new(self, nil)
    end
    return self._forward
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpInfoV0():list() / client:IpInfoV0():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:IpInfoV0(data)
  local EntityMod = require("entity.ip_info_v0_entity")
  if data == nil then
    if self._ip_info_v0 == nil then
      self._ip_info_v0 = EntityMod.new(self, nil)
    end
    return self._ip_info_v0
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpReputation():list() / client:IpReputation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:IpReputation(data)
  local EntityMod = require("entity.ip_reputation_entity")
  if data == nil then
    if self._ip_reputation == nil then
      self._ip_reputation = EntityMod.new(self, nil)
    end
    return self._ip_reputation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Ipn():list() / client:Ipn():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Ipn(data)
  local EntityMod = require("entity.ipn_entity")
  if data == nil then
    if self._ipn == nil then
      self._ipn = EntityMod.new(self, nil)
    end
    return self._ipn
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Mxn():list() / client:Mxn():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Mxn(data)
  local EntityMod = require("entity.mxn_entity")
  if data == nil then
    if self._mxn == nil then
      self._mxn = EntityMod.new(self, nil)
    end
    return self._mxn
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaddleController():list() / client:PaddleController():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:PaddleController(data)
  local EntityMod = require("entity.paddle_controller_entity")
  if data == nil then
    if self._paddle_controller == nil then
      self._paddle_controller = EntityMod.new(self, nil)
    end
    return self._paddle_controller
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RateLimitInfoDto():list() / client:RateLimitInfoDto():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:RateLimitInfoDto(data)
  local EntityMod = require("entity.rate_limit_info_dto_entity")
  if data == nil then
    if self._rate_limit_info_dto == nil then
      self._rate_limit_info_dto = EntityMod.new(self, nil)
    end
    return self._rate_limit_info_dto
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reverse():list() / client:Reverse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Reverse(data)
  local EntityMod = require("entity.reverse_entity")
  if data == nil then
    if self._reverse == nil then
      self._reverse = EntityMod.new(self, nil)
    end
    return self._reverse
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:RiskScore():list() / client:RiskScore():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:RiskScore(data)
  local EntityMod = require("entity.risk_score_entity")
  if data == nil then
    if self._risk_score == nil then
      self._risk_score = EntityMod.new(self, nil)
    end
    return self._risk_score
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Status():list() / client:Status():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Status(data)
  local EntityMod = require("entity.status_entity")
  if data == nil then
    if self._status == nil then
      self._status = EntityMod.new(self, nil)
    end
    return self._status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tor():list() / client:Tor():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Tor(data)
  local EntityMod = require("entity.tor_entity")
  if data == nil then
    if self._tor == nil then
      self._tor = EntityMod.new(self, nil)
    end
    return self._tor
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsageStatistic():list() / client:UsageStatistic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:UsageStatistic(data)
  local EntityMod = require("entity.usage_statistic_entity")
  if data == nil then
    if self._usage_statistic == nil then
      self._usage_statistic = EntityMod.new(self, nil)
    end
    return self._usage_statistic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Whoi():list() / client:Whoi():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IpGeolocationApi4SDK:Whoi(data)
  local EntityMod = require("entity.whoi_entity")
  if data == nil then
    if self._whoi == nil then
      self._whoi = EntityMod.new(self, nil)
    end
    return self._whoi
  end
  return EntityMod.new(self, data)
end




function IpGeolocationApi4SDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = IpGeolocationApi4SDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return IpGeolocationApi4SDK
