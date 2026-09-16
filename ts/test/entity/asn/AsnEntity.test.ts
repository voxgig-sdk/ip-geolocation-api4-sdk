

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


describe('AsnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Asn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'asn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int64","name":"asn","req":false,"type":["`$ONE`",["`$INTEGER`","`$NULL`"]],"index$":0},{"active":true,"name":"country","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":1},{"active":true,"name":"country_code","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"ip","req":true,"type":"`$STRING`","index$":4},{"active":true,"name":"is_datacenter","req":true,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"network","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":6},{"active":true,"name":"organization","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":7}],"id":{"field":"id","name":"id"},"name":"asn","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"8.8.8.8","kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/asn/{ip}","json":"{\"operationId\":\"getAsn\",\"parameters\":[{\"description\":\"IPv4 or IPv6 address, e.g. 8.8.8.8\",\"example\":\"8.8.8.8\",\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"asn\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]},\"country\":{\"type\":[\"string\",\"null\"]},\"country_code\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"is_datacenter\":{\"type\":\"boolean\"},\"network\":{\"type\":[\"string\",\"null\"]},\"organization\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"ip\",\"is_datacenter\"],\"type\":\"object\"}}},\"description\":\"ASN data retrieved successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"asn\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]},\"country\":{\"type\":[\"string\",\"null\"]},\"country_code\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"is_datacenter\":{\"type\":\"boolean\"},\"network\":{\"type\":[\"string\",\"null\"]},\"organization\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"ip\",\"is_datacenter\"],\"type\":\"object\"}}},\"description\":\"Invalid IP address format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"asn\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]},\"country\":{\"type\":[\"string\",\"null\"]},\"country_code\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"is_datacenter\":{\"type\":\"boolean\"},\"network\":{\"type\":[\"string\",\"null\"]},\"organization\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"ip\",\"is_datacenter\"],\"type\":\"object\"}}},\"description\":\"No ASN data found for IP\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"asn\":{\"format\":\"int64\",\"type\":[\"integer\",\"null\"]},\"country\":{\"type\":[\"string\",\"null\"]},\"country_code\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"is_datacenter\":{\"type\":\"boolean\"},\"network\":{\"type\":[\"string\",\"null\"]},\"organization\":{\"type\":[\"string\",\"null\"]}},\"required\":[\"ip\",\"is_datacenter\"],\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/asn/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"asn"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"asn","name__orig":"asn","Name":"Asn","name_":"asn","name-":"asn","NAME":"ASN","index$":3}, {"active":true,"entity":"asn","key$":"BasicAsnFlow","kind":"basic","name":"BasicAsnFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"asn_ref01","srcdatavar":"asn_ref01_data","suffix":"_dt0"},"match":{"id":"asn01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-asn_ref01"}}],"index$":0}]}, 'Asn')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let asn_ref01_data = Object.values(setup.data.existing.asn)[0] as any

    // LOAD
    const asn_ref01_ent = client.Asn()
    const asn_ref01_match_dt0: any = {}
    asn_ref01_match_dt0.id = asn_ref01_data.id
    const asn_ref01_data_dt0 = (await asn_ref01_ent.load(asn_ref01_match_dt0)).data()
    assert(asn_ref01_data_dt0.id === asn_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/asn/AsnTestData.json')

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
    ['asn01','asn02','asn03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_ASN_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_ASN_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_ASN_ENTID']
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
  
