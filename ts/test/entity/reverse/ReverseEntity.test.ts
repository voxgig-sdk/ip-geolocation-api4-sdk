

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


describe('ReverseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Reverse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'reverse.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"hostname","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"ip","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"ptr_record","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"int64","name":"ttl","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":4}],"id":{"field":"id","name":"id"},"name":"reverse","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"8.8.8.8","kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/dns/reverse/{ip}","json":"{\"operationId\":\"getReverseDns\",\"parameters\":[{\"description\":\"IPv4 or IPv6 address\",\"example\":\"8.8.8.8\",\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"hostname\":{\"type\":[\"string\",\"null\"]},\"ip\":{\"type\":\"string\"},\"ptr_record\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]}},\"required\":[\"ip\"],\"type\":\"object\"}}},\"description\":\"Reverse DNS lookup completed (hostname may be null if no PTR record exists)\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"hostname\":{\"type\":[\"string\",\"null\"]},\"ip\":{\"type\":\"string\"},\"ptr_record\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]}},\"required\":[\"ip\"],\"type\":\"object\"}}},\"description\":\"Invalid IP address format\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"hostname\":{\"type\":[\"string\",\"null\"]},\"ip\":{\"type\":\"string\"},\"ptr_record\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]}},\"required\":[\"ip\"],\"type\":\"object\"}}},\"description\":\"DNS lookup failed\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/dns/reverse/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"reverse"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"reverse","name__orig":"reverse","Name":"Reverse","name_":"reverse","name-":"reverse","NAME":"REVERSE","index$":17}, {"active":true,"entity":"reverse","key$":"BasicReverseFlow","kind":"basic","name":"BasicReverseFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"reverse_ref01","srcdatavar":"reverse_ref01_data","suffix":"_dt0"},"match":{"id":"reverse01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-reverse_ref01"}}],"index$":0}]}, 'Reverse')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reverse_ref01_data = Object.values(setup.data.existing.reverse)[0] as any

    // LOAD
    const reverse_ref01_ent = client.Reverse()
    const reverse_ref01_match_dt0: any = {}
    reverse_ref01_match_dt0.id = reverse_ref01_data.id
    const reverse_ref01_data_dt0 = (await reverse_ref01_ent.load(reverse_ref01_match_dt0)).data()
    assert(reverse_ref01_data_dt0.id === reverse_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/reverse/ReverseTestData.json')

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
    ['reverse01','reverse02','reverse03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_REVERSE_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_REVERSE_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_REVERSE_ENTID']
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
  
