

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IpGeolocationApi4SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('RateLimitInfoDtoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.RateLimitInfoDto()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rate_limit_info_dto.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"email_api","req":true,"short":"Email validation API rate limit information","type":"`$OBJECT`","index$":0},{"active":true,"format":"int64","name":"interval_seconds","req":true,"short":"Rate limit interval in seconds (time period for quota renewal)","type":"`$INTEGER`","index$":1},{"active":true,"name":"ip_api","req":true,"short":"IP lookup API rate limit information","type":"`$OBJECT`","index$":2},{"active":true,"format":"date","name":"next_renewal_date","req":false,"short":"Next billing/renewal date when the quota will be reset (ISO 8601 date format)","type":"`$STRING`","index$":3},{"active":true,"name":"plan_id","req":true,"short":"Subscription plan ID or 'default' for free tier users","type":"`$STRING`","index$":4},{"active":true,"name":"plan_name","req":false,"short":"Human-readable plan name (if available)","type":"`$STRING`","index$":5},{"active":true,"name":"status","req":false,"short":"Subscription status (active, past_due, cancelled, etc.)","type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":6}],"name":"rate_limit_info_dto","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"abcdef1234567890abcdef1234567890","kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/ratelimit","json":"{\"operationId\":\"getRateLimitInfo\",\"parameters\":[{\"description\":\"API key for authentication (required).\\n\\n**API Key Format**: 32-character alphanumeric string\\n**Required**: This parameter is mandatory for accessing rate limit information\\n**Note**: Works with both active and expired API keys\\n\\n**Example**: `?api_key=your_api_key_here`\",\"example\":\"abcdef1234567890abcdef1234567890\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Rate limit information for the authenticated user, including current usage, limits, and renewal date\",\"properties\":{\"email_api\":{\"description\":\"Email validation API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"interval_seconds\":{\"description\":\"Rate limit interval in seconds (time period for quota renewal)\",\"example\":2678400,\"format\":\"int64\",\"type\":\"integer\"},\"ip_api\":{\"description\":\"IP lookup API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"next_renewal_date\":{\"description\":\"Next billing/renewal date when the quota will be reset (ISO 8601 date format)\",\"example\":\"2025-11-26\",\"format\":\"date\",\"type\":\"string\"},\"plan_id\":{\"description\":\"Subscription plan ID or 'default' for free tier users\",\"example\":\"550712\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Human-readable plan name (if available)\",\"example\":\"Professional Monthly\",\"type\":\"string\"},\"status\":{\"description\":\"Subscription status (active, past_due, cancelled, etc.)\",\"example\":\"active\",\"type\":[\"string\",\"null\"]}},\"required\":[\"email_api\",\"interval_seconds\",\"ip_api\",\"plan_id\"],\"type\":\"object\"}}},\"description\":\"Rate limit information retrieved successfully\"},\"400\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Rate limit information for the authenticated user, including current usage, limits, and renewal date\",\"properties\":{\"email_api\":{\"description\":\"Email validation API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"interval_seconds\":{\"description\":\"Rate limit interval in seconds (time period for quota renewal)\",\"example\":2678400,\"format\":\"int64\",\"type\":\"integer\"},\"ip_api\":{\"description\":\"IP lookup API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"next_renewal_date\":{\"description\":\"Next billing/renewal date when the quota will be reset (ISO 8601 date format)\",\"example\":\"2025-11-26\",\"format\":\"date\",\"type\":\"string\"},\"plan_id\":{\"description\":\"Subscription plan ID or 'default' for free tier users\",\"example\":\"550712\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Human-readable plan name (if available)\",\"example\":\"Professional Monthly\",\"type\":\"string\"},\"status\":{\"description\":\"Subscription status (active, past_due, cancelled, etc.)\",\"example\":\"active\",\"type\":[\"string\",\"null\"]}},\"required\":[\"email_api\",\"interval_seconds\",\"ip_api\",\"plan_id\"],\"type\":\"object\"}}},\"description\":\"Bad Request - API key is required\"},\"404\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Rate limit information for the authenticated user, including current usage, limits, and renewal date\",\"properties\":{\"email_api\":{\"description\":\"Email validation API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"interval_seconds\":{\"description\":\"Rate limit interval in seconds (time period for quota renewal)\",\"example\":2678400,\"format\":\"int64\",\"type\":\"integer\"},\"ip_api\":{\"description\":\"IP lookup API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"next_renewal_date\":{\"description\":\"Next billing/renewal date when the quota will be reset (ISO 8601 date format)\",\"example\":\"2025-11-26\",\"format\":\"date\",\"type\":\"string\"},\"plan_id\":{\"description\":\"Subscription plan ID or 'default' for free tier users\",\"example\":\"550712\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Human-readable plan name (if available)\",\"example\":\"Professional Monthly\",\"type\":\"string\"},\"status\":{\"description\":\"Subscription status (active, past_due, cancelled, etc.)\",\"example\":\"active\",\"type\":[\"string\",\"null\"]}},\"required\":[\"email_api\",\"interval_seconds\",\"ip_api\",\"plan_id\"],\"type\":\"object\"}}},\"description\":\"Not Found - API key does not exist in the system\"},\"500\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Rate limit information for the authenticated user, including current usage, limits, and renewal date\",\"properties\":{\"email_api\":{\"description\":\"Email validation API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"interval_seconds\":{\"description\":\"Rate limit interval in seconds (time period for quota renewal)\",\"example\":2678400,\"format\":\"int64\",\"type\":\"integer\"},\"ip_api\":{\"description\":\"IP lookup API rate limit information\",\"properties\":{\"limit\":{\"description\":\"Maximum number of requests allowed in the rate limit interval\",\"example\":100000,\"format\":\"int64\",\"type\":\"integer\"},\"remaining\":{\"description\":\"Remaining requests available in the current interval\",\"example\":87532,\"format\":\"int64\",\"type\":\"integer\"},\"usage_percent\":{\"description\":\"Percentage of quota utilized (0-100)\",\"example\":12.47,\"format\":\"double\",\"type\":\"number\"},\"used\":{\"description\":\"Number of requests consumed in the current interval\",\"example\":12468,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"limit\",\"remaining\",\"usage_percent\",\"used\"],\"type\":\"object\"},\"next_renewal_date\":{\"description\":\"Next billing/renewal date when the quota will be reset (ISO 8601 date format)\",\"example\":\"2025-11-26\",\"format\":\"date\",\"type\":\"string\"},\"plan_id\":{\"description\":\"Subscription plan ID or 'default' for free tier users\",\"example\":\"550712\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Human-readable plan name (if available)\",\"example\":\"Professional Monthly\",\"type\":\"string\"},\"status\":{\"description\":\"Subscription status (active, past_due, cancelled, etc.)\",\"example\":\"active\",\"type\":[\"string\",\"null\"]}},\"required\":[\"email_api\",\"interval_seconds\",\"ip_api\",\"plan_id\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Unable to retrieve rate limit information\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/ratelimit","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"ratelimit"}],"select":{"exist":["api_key"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"rate_limit_info_dto","name__orig":"rate_limit_info_dto","Name":"RateLimitInfoDto","name_":"rate_limit_info_dto","name-":"rate-limit-info-dto","NAME":"RATE_LIMIT_INFO_DTO","index$":16}, {"active":true,"entity":"rate_limit_info_dto","key$":"BasicRateLimitInfoDtoFlow","kind":"basic","name":"BasicRateLimitInfoDtoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"rate_limit_info_dto_ref01","srcdatavar":"rate_limit_info_dto_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rate_limit_info_dto_ref01"}}],"index$":0}]}, 'RateLimitInfoDto')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rate_limit_info_dto_ref01_data = Object.values(setup.data.existing.rate_limit_info_dto)[0] as any

    // LOAD
    const rate_limit_info_dto_ref01_ent = client.RateLimitInfoDto()
    const rate_limit_info_dto_ref01_match_dt0: any = {}
    const rate_limit_info_dto_ref01_data_dt0 = (await rate_limit_info_dto_ref01_ent.load(rate_limit_info_dto_ref01_match_dt0)).data()
    assert(null != rate_limit_info_dto_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rate_limit_info_dto/RateLimitInfoDtoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IpGeolocationApi4SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['rate_limit_info_dto01','rate_limit_info_dto02','rate_limit_info_dto03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IpGeolocationApi4SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.IP_GEOLOCATION_API4_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
