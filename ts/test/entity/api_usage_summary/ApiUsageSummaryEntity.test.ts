

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


describe('ApiUsageSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.ApiUsageSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_usage_summary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"apiKey","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"apiType","req":true,"type":"`$STRING`","index$":1},{"active":true,"format":"double","name":"avgRequestDurationMs","req":false,"type":["`$ONE`",["`$NUMBER`","`$NULL`"]],"index$":2},{"active":true,"format":"int64","name":"batchOperations","req":true,"type":"`$INTEGER`","index$":3},{"active":true,"format":"date-time","name":"periodEnd","req":true,"type":"`$STRING`","index$":4},{"active":true,"format":"date-time","name":"periodStart","req":true,"type":"`$STRING`","index$":5},{"active":true,"format":"int64","name":"quotaConsumed","req":true,"type":"`$INTEGER`","index$":6},{"active":true,"format":"int64","name":"rateLimitedRequests","req":true,"type":"`$INTEGER`","index$":7},{"active":true,"format":"int64","name":"successfulRequests","req":true,"type":"`$INTEGER`","index$":8},{"active":true,"format":"int64","name":"totalRequests","req":true,"type":"`$INTEGER`","index$":9}],"name":"api_usage_summary","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"your-api-key-here","kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"IP","kind":"query","name":"api_type","orig":"api_type","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"2025-11-04T00:00:00Z","kind":"query","name":"end_date","orig":"end_date","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":"2025-11-01T00:00:00Z","kind":"query","name":"start_date","orig":"start_date","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /api/v1/usage/summary","json":"{\"operationId\":\"getUsageSummary\",\"parameters\":[{\"description\":\"Your API key\",\"example\":\"your-api-key-here\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Start date in ISO 8601 format (inclusive)\",\"example\":\"2025-11-01T00:00:00Z\",\"in\":\"query\",\"name\":\"start_date\",\"required\":true,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"End date in ISO 8601 format (exclusive)\",\"example\":\"2025-11-04T00:00:00Z\",\"in\":\"query\",\"name\":\"end_date\",\"required\":true,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Filter by API type (optional)\",\"example\":\"IP\",\"in\":\"query\",\"name\":\"api_type\",\"required\":false,\"schema\":{\"enum\":[\"IP\",\"ADVANCED_EMAIL_VALIDATION\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apiKey\":{\"type\":\"string\"},\"apiType\":{\"type\":\"string\"},\"avgRequestDurationMs\":{\"format\":\"double\",\"type\":[\"number\",\"null\"]},\"batchOperations\":{\"format\":\"int64\",\"type\":\"integer\"},\"periodEnd\":{\"format\":\"date-time\",\"type\":\"string\"},\"periodStart\":{\"format\":\"date-time\",\"type\":\"string\"},\"quotaConsumed\":{\"format\":\"int64\",\"type\":\"integer\"},\"rateLimitedRequests\":{\"format\":\"int64\",\"type\":\"integer\"},\"successfulRequests\":{\"format\":\"int64\",\"type\":\"integer\"},\"totalRequests\":{\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"apiKey\",\"apiType\",\"batchOperations\",\"periodEnd\",\"periodStart\",\"quotaConsumed\",\"rateLimitedRequests\",\"successfulRequests\",\"totalRequests\"],\"type\":\"object\"}}},\"description\":\"Successfully retrieved usage summary\"},\"401\":{\"content\":{\"*/*\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"Invalid or missing API key\"},\"404\":{\"content\":{\"*/*\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"No usage data found for this period\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/usage/summary","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"usage"},{"lit":"summary"}],"select":{"exist":["api_key","api_type","end_date","start_date"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_usage_summary","name__orig":"api_usage_summary","Name":"ApiUsageSummary","name_":"api_usage_summary","name-":"api-usage-summary","NAME":"API_USAGE_SUMMARY","index$":2}, {"active":true,"entity":"api_usage_summary","key$":"BasicApiUsageSummaryFlow","kind":"basic","name":"BasicApiUsageSummaryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_usage_summary_ref01","srcdatavar":"api_usage_summary_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_usage_summary_ref01"}}],"index$":0}]}, 'ApiUsageSummary')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_usage_summary_ref01_data = Object.values(setup.data.existing.api_usage_summary)[0] as any

    // LOAD
    const api_usage_summary_ref01_ent = client.ApiUsageSummary()
    const api_usage_summary_ref01_match_dt0: any = {}
    const api_usage_summary_ref01_data_dt0 = (await api_usage_summary_ref01_ent.load(api_usage_summary_ref01_match_dt0)).data()
    assert(null != api_usage_summary_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_usage_summary/ApiUsageSummaryTestData.json')

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
    ['api_usage_summary01','api_usage_summary02','api_usage_summary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID']
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
  
