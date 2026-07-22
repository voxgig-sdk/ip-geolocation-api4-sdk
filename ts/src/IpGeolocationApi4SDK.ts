// IpGeolocationApi4 Ts SDK

import { AdvancedEntity } from './entity/AdvancedEntity'
import { ApiUsageStatsModelEntity } from './entity/ApiUsageStatsModelEntity'
import { ApiUsageSummaryEntity } from './entity/ApiUsageSummaryEntity'
import { AsnEntity } from './entity/AsnEntity'
import { BatchEntity } from './entity/BatchEntity'
import { BatchEmailValidationResponseDtoEntity } from './entity/BatchEmailValidationResponseDtoEntity'
import { CacheManagementEntity } from './entity/CacheManagementEntity'
import { DomainAnalysiEntity } from './entity/DomainAnalysiEntity'
import { DomainReputationV1DtoEntity } from './entity/DomainReputationV1DtoEntity'
import { EmailEntity } from './entity/EmailEntity'
import { ForwardEntity } from './entity/ForwardEntity'
import { IpInfoV0Entity } from './entity/IpInfoV0Entity'
import { IpReputationEntity } from './entity/IpReputationEntity'
import { IpnEntity } from './entity/IpnEntity'
import { Ipn2Entity } from './entity/Ipn2Entity'
import { MxnEntity } from './entity/MxnEntity'
import { PaddleControllerEntity } from './entity/PaddleControllerEntity'
import { RateLimitInfoDtoEntity } from './entity/RateLimitInfoDtoEntity'
import { ReverseEntity } from './entity/ReverseEntity'
import { RiskScoreEntity } from './entity/RiskScoreEntity'
import { StatusEntity } from './entity/StatusEntity'
import { TorEntity } from './entity/TorEntity'
import { UsageStatisticEntity } from './entity/UsageStatisticEntity'
import { WhoiEntity } from './entity/WhoiEntity'

export type * from './IpGeolocationApi4Types'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { IpGeolocationApi4EntityBase } from './IpGeolocationApi4EntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class IpGeolocationApi4SDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Advanced().list()` / `client.Advanced().load({ id })`.
  Advanced(data?: any) {
    const self = this
    return new AdvancedEntity(self,data)
  }


  // Entity access: `client.ApiUsageStatsModel().list()` / `client.ApiUsageStatsModel().load({ id })`.
  ApiUsageStatsModel(data?: any) {
    const self = this
    return new ApiUsageStatsModelEntity(self,data)
  }


  // Entity access: `client.ApiUsageSummary().list()` / `client.ApiUsageSummary().load({ id })`.
  ApiUsageSummary(data?: any) {
    const self = this
    return new ApiUsageSummaryEntity(self,data)
  }


  // Entity access: `client.Asn().list()` / `client.Asn().load({ id })`.
  Asn(data?: any) {
    const self = this
    return new AsnEntity(self,data)
  }


  // Entity access: `client.Batch().list()` / `client.Batch().load({ id })`.
  Batch(data?: any) {
    const self = this
    return new BatchEntity(self,data)
  }


  // Entity access: `client.BatchEmailValidationResponseDto().list()` / `client.BatchEmailValidationResponseDto().load({ id })`.
  BatchEmailValidationResponseDto(data?: any) {
    const self = this
    return new BatchEmailValidationResponseDtoEntity(self,data)
  }


  // Entity access: `client.CacheManagement().list()` / `client.CacheManagement().load({ id })`.
  CacheManagement(data?: any) {
    const self = this
    return new CacheManagementEntity(self,data)
  }


  // Entity access: `client.DomainAnalysi().list()` / `client.DomainAnalysi().load({ id })`.
  DomainAnalysi(data?: any) {
    const self = this
    return new DomainAnalysiEntity(self,data)
  }


  // Entity access: `client.DomainReputationV1Dto().list()` / `client.DomainReputationV1Dto().load({ id })`.
  DomainReputationV1Dto(data?: any) {
    const self = this
    return new DomainReputationV1DtoEntity(self,data)
  }


  // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
  Email(data?: any) {
    const self = this
    return new EmailEntity(self,data)
  }


  // Entity access: `client.Forward().list()` / `client.Forward().load({ id })`.
  Forward(data?: any) {
    const self = this
    return new ForwardEntity(self,data)
  }


  // Entity access: `client.IpInfoV0().list()` / `client.IpInfoV0().load({ id })`.
  IpInfoV0(data?: any) {
    const self = this
    return new IpInfoV0Entity(self,data)
  }


  // Entity access: `client.IpReputation().list()` / `client.IpReputation().load({ id })`.
  IpReputation(data?: any) {
    const self = this
    return new IpReputationEntity(self,data)
  }


  // Entity access: `client.Ipn().list()` / `client.Ipn().load({ id })`.
  Ipn(data?: any) {
    const self = this
    return new IpnEntity(self,data)
  }


  // Entity access: `client.Ipn2().list()` / `client.Ipn2().load({ id })`.
  Ipn2(data?: any) {
    const self = this
    return new Ipn2Entity(self,data)
  }


  // Entity access: `client.Mxn().list()` / `client.Mxn().load({ id })`.
  Mxn(data?: any) {
    const self = this
    return new MxnEntity(self,data)
  }


  // Entity access: `client.PaddleController().list()` / `client.PaddleController().load({ id })`.
  PaddleController(data?: any) {
    const self = this
    return new PaddleControllerEntity(self,data)
  }


  // Entity access: `client.RateLimitInfoDto().list()` / `client.RateLimitInfoDto().load({ id })`.
  RateLimitInfoDto(data?: any) {
    const self = this
    return new RateLimitInfoDtoEntity(self,data)
  }


  // Entity access: `client.Reverse().list()` / `client.Reverse().load({ id })`.
  Reverse(data?: any) {
    const self = this
    return new ReverseEntity(self,data)
  }


  // Entity access: `client.RiskScore().list()` / `client.RiskScore().load({ id })`.
  RiskScore(data?: any) {
    const self = this
    return new RiskScoreEntity(self,data)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  Status(data?: any) {
    const self = this
    return new StatusEntity(self,data)
  }


  // Entity access: `client.Tor().list()` / `client.Tor().load({ id })`.
  Tor(data?: any) {
    const self = this
    return new TorEntity(self,data)
  }


  // Entity access: `client.UsageStatistic().list()` / `client.UsageStatistic().load({ id })`.
  UsageStatistic(data?: any) {
    const self = this
    return new UsageStatisticEntity(self,data)
  }


  // Entity access: `client.Whoi().list()` / `client.Whoi().load({ id })`.
  Whoi(data?: any) {
    const self = this
    return new WhoiEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new IpGeolocationApi4SDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return IpGeolocationApi4SDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'IpGeolocationApi4' }
  }

  toString() {
    return 'IpGeolocationApi4 ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = IpGeolocationApi4SDK


export {
  stdutil,
  config,

  BaseFeature,
  IpGeolocationApi4EntityBase,

  IpGeolocationApi4SDK,
  SDK,
}


