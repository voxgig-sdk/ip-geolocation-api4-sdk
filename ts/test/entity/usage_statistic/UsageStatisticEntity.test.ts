

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


describe('UsageStatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.UsageStatistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage_statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"usage_statistic","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"api_type","orig":"api_type","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v1/usage/current-month","json":"{\"operationId\":\"getCurrentMonthSummary\",\"parameters\":[{\"description\":\"Your API key\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by API type (optional)\",\"in\":\"query\",\"name\":\"api_type\",\"required\":false,\"schema\":{\"enum\":[\"IP\",\"ADVANCED_EMAIL_VALIDATION\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/usage/current-month","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"usage"},{"lit":"current-month"}],"select":{"exist":["api_key","api_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"api_key","orig":"api_key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"api_type","orig":"api_type","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v1/usage/recent","json":"{\"operationId\":\"getRecentUsage\",\"parameters\":[{\"description\":\"Your API key\",\"in\":\"query\",\"name\":\"api_key\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by API type (optional)\",\"in\":\"query\",\"name\":\"api_type\",\"required\":false,\"schema\":{\"enum\":[\"IP\",\"ADVANCED_EMAIL_VALIDATION\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/usage/recent","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"usage"},{"lit":"recent"}],"select":{"exist":["api_key","api_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage_statistic","name__orig":"usage_statistic","Name":"UsageStatistic","name_":"usage_statistic","name-":"usage-statistic","NAME":"USAGE_STATISTIC","index$":21}, {"active":true,"entity":"usage_statistic","key$":"BasicUsageStatisticFlow","kind":"basic","name":"BasicUsageStatisticFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"usage_statistic_ref01","srcdatavar":"usage_statistic_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_statistic_ref01"}}],"index$":0}]}, 'UsageStatistic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_statistic_ref01_data = Object.values(setup.data.existing.usage_statistic)[0] as any

    // LOAD
    const usage_statistic_ref01_ent = client.UsageStatistic()
    const usage_statistic_ref01_match_dt0: any = {}
    const usage_statistic_ref01_data_dt0 = (await usage_statistic_ref01_ent.load(usage_statistic_ref01_match_dt0)).data()
    assert(null != usage_statistic_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage_statistic/UsageStatisticTestData.json')

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
    ['usage_statistic01','usage_statistic02','usage_statistic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_USAGE_STATISTIC_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_USAGE_STATISTIC_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_USAGE_STATISTIC_ENTID']
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
  
