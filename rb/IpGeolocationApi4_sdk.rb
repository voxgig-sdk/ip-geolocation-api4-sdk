# IpGeolocationApi4 SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'IpGeolocationApi4_types'


class IpGeolocationApi4SDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = IpGeolocationApi4Utility.new
    @_utility = utility

    config = IpGeolocationApi4Config.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = IpGeolocationApi4Helpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = IpGeolocationApi4Helpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, IpGeolocationApi4Features.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    IpGeolocationApi4Utility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = IpGeolocationApi4Helpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = IpGeolocationApi4Helpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = IpGeolocationApi4Helpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = IpGeolocationApi4Spec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => IpGeolocationApi4Error.new(
        "#{op}_allow",
        "IpGeolocationApi4SDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue IpGeolocationApi4Error => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = IpGeolocationApi4Helpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = IpGeolocationApi4Helpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = IpGeolocationApi4Error.new(
        "graphql_error", "IpGeolocationApi4SDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Advanced.list / client.Advanced.load({ "id" => ... })
  def Advanced(data = nil)
    require_relative 'entity/advanced_entity'
    AdvancedEntity.new(self, data)
  end


  # Canonical facade: client.ApiUsageStatsModel.list / client.ApiUsageStatsModel.load({ "id" => ... })
  def ApiUsageStatsModel(data = nil)
    require_relative 'entity/api_usage_stats_model_entity'
    ApiUsageStatsModelEntity.new(self, data)
  end


  # Canonical facade: client.ApiUsageSummary.list / client.ApiUsageSummary.load({ "id" => ... })
  def ApiUsageSummary(data = nil)
    require_relative 'entity/api_usage_summary_entity'
    ApiUsageSummaryEntity.new(self, data)
  end


  # Canonical facade: client.Asn.list / client.Asn.load({ "id" => ... })
  def Asn(data = nil)
    require_relative 'entity/asn_entity'
    AsnEntity.new(self, data)
  end


  # Canonical facade: client.Batch.list / client.Batch.load({ "id" => ... })
  def Batch(data = nil)
    require_relative 'entity/batch_entity'
    BatchEntity.new(self, data)
  end


  # Canonical facade: client.BatchEmailValidationResponseDto.list / client.BatchEmailValidationResponseDto.load({ "id" => ... })
  def BatchEmailValidationResponseDto(data = nil)
    require_relative 'entity/batch_email_validation_response_dto_entity'
    BatchEmailValidationResponseDtoEntity.new(self, data)
  end


  # Canonical facade: client.CacheManagement.list / client.CacheManagement.load({ "id" => ... })
  def CacheManagement(data = nil)
    require_relative 'entity/cache_management_entity'
    CacheManagementEntity.new(self, data)
  end


  # Canonical facade: client.DomainAnalysi.list / client.DomainAnalysi.load({ "id" => ... })
  def DomainAnalysi(data = nil)
    require_relative 'entity/domain_analysi_entity'
    DomainAnalysiEntity.new(self, data)
  end


  # Canonical facade: client.DomainReputationV1Dto.list / client.DomainReputationV1Dto.load({ "id" => ... })
  def DomainReputationV1Dto(data = nil)
    require_relative 'entity/domain_reputation_v1_dto_entity'
    DomainReputationV1DtoEntity.new(self, data)
  end


  # Canonical facade: client.Email.list / client.Email.load({ "id" => ... })
  def Email(data = nil)
    require_relative 'entity/email_entity'
    EmailEntity.new(self, data)
  end


  # Canonical facade: client.Forward.list / client.Forward.load({ "id" => ... })
  def Forward(data = nil)
    require_relative 'entity/forward_entity'
    ForwardEntity.new(self, data)
  end


  # Canonical facade: client.IpInfoV0.list / client.IpInfoV0.load({ "id" => ... })
  def IpInfoV0(data = nil)
    require_relative 'entity/ip_info_v0_entity'
    IpInfoV0Entity.new(self, data)
  end


  # Canonical facade: client.IpReputation.list / client.IpReputation.load({ "id" => ... })
  def IpReputation(data = nil)
    require_relative 'entity/ip_reputation_entity'
    IpReputationEntity.new(self, data)
  end


  # Canonical facade: client.Ipn.list / client.Ipn.load({ "id" => ... })
  def Ipn(data = nil)
    require_relative 'entity/ipn_entity'
    IpnEntity.new(self, data)
  end


  # Canonical facade: client.Mxn.list / client.Mxn.load({ "id" => ... })
  def Mxn(data = nil)
    require_relative 'entity/mxn_entity'
    MxnEntity.new(self, data)
  end


  # Canonical facade: client.PaddleController.list / client.PaddleController.load({ "id" => ... })
  def PaddleController(data = nil)
    require_relative 'entity/paddle_controller_entity'
    PaddleControllerEntity.new(self, data)
  end


  # Canonical facade: client.RateLimitInfoDto.list / client.RateLimitInfoDto.load({ "id" => ... })
  def RateLimitInfoDto(data = nil)
    require_relative 'entity/rate_limit_info_dto_entity'
    RateLimitInfoDtoEntity.new(self, data)
  end


  # Canonical facade: client.Reverse.list / client.Reverse.load({ "id" => ... })
  def Reverse(data = nil)
    require_relative 'entity/reverse_entity'
    ReverseEntity.new(self, data)
  end


  # Canonical facade: client.RiskScore.list / client.RiskScore.load({ "id" => ... })
  def RiskScore(data = nil)
    require_relative 'entity/risk_score_entity'
    RiskScoreEntity.new(self, data)
  end


  # Canonical facade: client.Status.list / client.Status.load({ "id" => ... })
  def Status(data = nil)
    require_relative 'entity/status_entity'
    StatusEntity.new(self, data)
  end


  # Canonical facade: client.Tor.list / client.Tor.load({ "id" => ... })
  def Tor(data = nil)
    require_relative 'entity/tor_entity'
    TorEntity.new(self, data)
  end


  # Canonical facade: client.UsageStatistic.list / client.UsageStatistic.load({ "id" => ... })
  def UsageStatistic(data = nil)
    require_relative 'entity/usage_statistic_entity'
    UsageStatisticEntity.new(self, data)
  end


  # Canonical facade: client.Whoi.list / client.Whoi.load({ "id" => ... })
  def Whoi(data = nil)
    require_relative 'entity/whoi_entity'
    WhoiEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = IpGeolocationApi4SDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
