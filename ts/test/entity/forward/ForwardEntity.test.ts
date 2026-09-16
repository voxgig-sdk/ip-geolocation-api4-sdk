

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


describe('ForwardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Forward()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'forward.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"addresses","req":true,"type":"`$ARRAY`","index$":0},{"active":true,"name":"hostname","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"forward","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"dns.google","kind":"param","name":"id","orig":"hostname","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/dns/forward/{hostname}","json":"{\"operationId\":\"getForwardDns\",\"parameters\":[{\"description\":\"Hostname to look up, e.g. dns.google\",\"example\":\"dns.google\",\"in\":\"path\",\"name\":\"hostname\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"addresses\":{\"items\":{\"properties\":{\"address\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"type\":\"string\"}},\"required\":[\"address\",\"ttl\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"hostname\":{\"type\":\"string\"}},\"required\":[\"addresses\",\"hostname\"],\"type\":\"object\"}}},\"description\":\"Forward DNS lookup succeeded\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"addresses\":{\"items\":{\"properties\":{\"address\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"type\":\"string\"}},\"required\":[\"address\",\"ttl\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"hostname\":{\"type\":\"string\"}},\"required\":[\"addresses\",\"hostname\"],\"type\":\"object\"}}},\"description\":\"Invalid hostname format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"addresses\":{\"items\":{\"properties\":{\"address\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"type\":\"string\"}},\"required\":[\"address\",\"ttl\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"hostname\":{\"type\":\"string\"}},\"required\":[\"addresses\",\"hostname\"],\"type\":\"object\"}}},\"description\":\"No address records found for the hostname\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"addresses\":{\"items\":{\"properties\":{\"address\":{\"type\":\"string\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"},\"type\":{\"type\":\"string\"}},\"required\":[\"address\",\"ttl\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"hostname\":{\"type\":\"string\"}},\"required\":[\"addresses\",\"hostname\"],\"type\":\"object\"}}},\"description\":\"DNS lookup failed\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/dns/forward/{hostname}","rename":{"param":{"hostname":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"forward"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"forward","name__orig":"forward","Name":"Forward","name_":"forward","name-":"forward","NAME":"FORWARD","index$":10}, {"active":true,"entity":"forward","key$":"BasicForwardFlow","kind":"basic","name":"BasicForwardFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"forward_ref01","srcdatavar":"forward_ref01_data","suffix":"_dt0"},"match":{"id":"forward01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-forward_ref01"}}],"index$":0}]}, 'Forward')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let forward_ref01_data = Object.values(setup.data.existing.forward)[0] as any

    // LOAD
    const forward_ref01_ent = client.Forward()
    const forward_ref01_match_dt0: any = {}
    forward_ref01_match_dt0.id = forward_ref01_data.id
    const forward_ref01_data_dt0 = (await forward_ref01_ent.load(forward_ref01_match_dt0)).data()
    assert(forward_ref01_data_dt0.id === forward_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/forward/ForwardTestData.json')

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
    ['forward01','forward02','forward03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_FORWARD_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_FORWARD_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_FORWARD_ENTID']
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
  
