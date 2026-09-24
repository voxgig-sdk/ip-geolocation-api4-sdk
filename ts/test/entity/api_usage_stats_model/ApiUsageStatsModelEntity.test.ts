

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiUsageStatsModelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.ApiUsageStatsModel()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_usage_stats_model.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiKey":{"a":true,"h":"Api Key","n":"apiKey","r":true,"t":"`$STRING`","key$":"apiKey","index$":0},"apiType":{"a":true,"h":"Api Type","n":"apiType","r":true,"t":"`$STRING`","key$":"apiType","index$":1},"authType":{"a":true,"h":"Auth Type","n":"authType","r":true,"t":"`$STRING`","key$":"authType","index$":2},"avgRequestDurationNanos":{"a":true,"fo":"int64","h":"Avg Request Duration Nanos","n":"avgRequestDurationNanos","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"avgRequestDurationNanos","index$":3},"batchOperations":{"a":true,"fo":"int32","h":"Batch Operations","n":"batchOperations","r":true,"t":"`$INTEGER`","key$":"batchOperations","index$":4},"batchTokensConsumed":{"a":true,"fo":"int32","h":"Batch Tokens Consumed","n":"batchTokensConsumed","r":true,"t":"`$INTEGER`","key$":"batchTokensConsumed","index$":5},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"createdAt","index$":6},"hourBucket":{"a":true,"fo":"date-time","h":"Hour Bucket","n":"hourBucket","r":true,"t":"`$STRING`","key$":"hourBucket","index$":7},"id":{"a":true,"fo":"int64","h":"Id","n":"id","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"id","index$":8},"minRemainingQuota":{"a":true,"fo":"int32","h":"Min Remaining Quota","n":"minRemainingQuota","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"minRemainingQuota","index$":9},"peakRemainingQuota":{"a":true,"fo":"int32","h":"Peak Remaining Quota","n":"peakRemainingQuota","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"peakRemainingQuota","index$":10},"planId":{"a":true,"h":"Plan Id","n":"planId","r":true,"t":"`$STRING`","key$":"planId","index$":11},"quotaConsumed":{"a":true,"fo":"int32","h":"Quota Consumed","n":"quotaConsumed","r":true,"t":"`$INTEGER`","key$":"quotaConsumed","index$":12},"rateLimitedRequests":{"a":true,"fo":"int32","h":"Rate Limited Requests","n":"rateLimitedRequests","r":true,"t":"`$INTEGER`","key$":"rateLimitedRequests","index$":13},"successfulRequests":{"a":true,"fo":"int32","h":"Successful Requests","n":"successfulRequests","r":true,"t":"`$INTEGER`","key$":"successfulRequests","index$":14},"totalRequests":{"a":true,"fo":"int32","h":"Total Requests","n":"totalRequests","r":true,"t":"`$INTEGER`","key$":"totalRequests","index$":15},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"updatedAt","index$":16}},"id":{"field":"id","name":"id"},"name":"api_usage_stats_model","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/usage/stats","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"your-api-key-here","k":"query","n":"api_key","or":"api_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"IP","k":"query","n":"api_type","or":"api_type","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2025-11-04T00:00:00Z","k":"query","n":"end_date","or":"end_date","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"2025-11-01T00:00:00Z","k":"query","n":"start_date","or":"start_date","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/api/v1/usage/stats","q":{"exist":["api_key","api_type","end_date","start_date"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"usage"},{"lit":"stats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_usage_stats_model","name__orig":"api_usage_stats_model","Name":"ApiUsageStatsModel","name_":"api_usage_stats_model","name-":"api-usage-stats-model","NAME":"API_USAGE_STATS_MODEL","index$":1}, {"active":true,"entity":"api_usage_stats_model","key$":"BasicApiUsageStatsModelFlow","kind":"basic","name":"BasicApiUsageStatsModelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_usage_stats_model_ref01","srcdatavar":"api_usage_stats_model_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_usage_stats_model_ref01"}}],"index$":0}]}, 'ApiUsageStatsModel', {"GET /api/v1/usage/stats":{"protocol":"http","operationId":"getUsageStats","responses":{"200":{"description":"Successfully retrieved usage statistics","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"format":"int64","key$":"id","type":["integer","null"]},"apiKey":{"key$":"apiKey","type":"string"},"planId":{"key$":"planId","type":"string"},"apiType":{"key$":"apiType","type":"string"},"authType":{"key$":"authType","type":"string"},"hourBucket":{"format":"date-time","key$":"hourBucket","type":"string"},"totalRequests":{"format":"int32","key$":"totalRequests","type":"integer"},"successfulRequests":{"format":"int32","key$":"successfulRequests","type":"integer"},"rateLimitedRequests":{"format":"int32","key$":"rateLimitedRequests","type":"integer"},"quotaConsumed":{"format":"int32","key$":"quotaConsumed","type":"integer"},"peakRemainingQuota":{"format":"int32","key$":"peakRemainingQuota","type":["integer","null"]},"minRemainingQuota":{"format":"int32","key$":"minRemainingQuota","type":["integer","null"]},"batchOperations":{"format":"int32","key$":"batchOperations","type":"integer"},"batchTokensConsumed":{"format":"int32","key$":"batchTokensConsumed","type":"integer"},"avgRequestDurationNanos":{"format":"int64","key$":"avgRequestDurationNanos","type":["integer","null"]},"createdAt":{"format":"date-time","key$":"createdAt","type":["string","null"]},"updatedAt":{"format":"date-time","key$":"updatedAt","type":["string","null"]}},"required":["apiKey","apiType","authType","batchOperations","batchTokensConsumed","hourBucket","planId","quotaConsumed","rateLimitedRequests","successfulRequests","totalRequests"],"x-ref":"#/components/schemas/ApiUsageStatsModel","index$":0}}}},"400":{"description":"Invalid date range or parameters","content":{"*/*":{"schema":{"type":"object"}}}},"401":{"description":"Invalid or missing API key","content":{"*/*":{"schema":{"type":"object"}}}}},"parameters":[{"name":"api_key","in":"query","description":"Your API key","required":true,"schema":{"type":"string"},"example":"your-api-key-here","index$":0},{"name":"start_date","in":"query","description":"Start date in ISO 8601 format (inclusive)","required":true,"schema":{"type":"string","format":"date-time"},"example":"2025-11-01T00:00:00Z","index$":1},{"name":"end_date","in":"query","description":"End date in ISO 8601 format (exclusive)","required":true,"schema":{"type":"string","format":"date-time"},"example":"2025-11-04T00:00:00Z","index$":2},{"name":"api_type","in":"query","description":"Filter by API type (optional)","required":false,"schema":{"type":"string","enum":["IP","ADVANCED_EMAIL_VALIDATION"]},"example":"IP","index$":3}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_usage_stats_model_ref01_data = Object.values(setup.data.existing.api_usage_stats_model)[0] as any

    // LOAD
    const api_usage_stats_model_ref01_ent = client.ApiUsageStatsModel()
    const api_usage_stats_model_ref01_match_dt0: any = {}
    api_usage_stats_model_ref01_match_dt0.id = api_usage_stats_model_ref01_data.id
    const api_usage_stats_model_ref01_data_dt0 = (await api_usage_stats_model_ref01_ent.load(api_usage_stats_model_ref01_match_dt0)).data()
    assert(api_usage_stats_model_ref01_data_dt0.id === api_usage_stats_model_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_usage_stats_model/ApiUsageStatsModelTestData.json')

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
    ['api_usage_stats_model01','api_usage_stats_model02','api_usage_stats_model03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_API_USAGE_STATS_MODEL_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_API_USAGE_STATS_MODEL_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_API_USAGE_STATS_MODEL_ENTID']
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
  
