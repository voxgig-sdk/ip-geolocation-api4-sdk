

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


describe('MxnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Mxn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'mxn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"domain","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"mx_records","req":true,"type":"`$ARRAY`","index$":1}],"name":"mxn","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"gmail.com","kind":"param","name":"domain","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/dns/mx/{domain}","json":"{\"operationId\":\"getMxRecords\",\"parameters\":[{\"description\":\"Domain name, e.g. gmail.com\",\"example\":\"gmail.com\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"mx_records\":{\"items\":{\"properties\":{\"hostname\":{\"type\":\"string\"},\"priority\":{\"format\":\"int32\",\"type\":\"integer\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"hostname\",\"priority\",\"ttl\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"domain\",\"mx_records\"],\"type\":\"object\"}}},\"description\":\"MX records retrieved successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"mx_records\":{\"items\":{\"properties\":{\"hostname\":{\"type\":\"string\"},\"priority\":{\"format\":\"int32\",\"type\":\"integer\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"hostname\",\"priority\",\"ttl\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"domain\",\"mx_records\"],\"type\":\"object\"}}},\"description\":\"Invalid domain name format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"mx_records\":{\"items\":{\"properties\":{\"hostname\":{\"type\":\"string\"},\"priority\":{\"format\":\"int32\",\"type\":\"integer\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"hostname\",\"priority\",\"ttl\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"domain\",\"mx_records\"],\"type\":\"object\"}}},\"description\":\"Domain not found (NXDOMAIN)\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"mx_records\":{\"items\":{\"properties\":{\"hostname\":{\"type\":\"string\"},\"priority\":{\"format\":\"int32\",\"type\":\"integer\"},\"ttl\":{\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"hostname\",\"priority\",\"ttl\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"domain\",\"mx_records\"],\"type\":\"object\"}}},\"description\":\"DNS lookup failed\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/dns/mx/{domain}","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"mx"},{"var":"domain"}],"select":{"exist":["domain"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["mx"]]},"key$":"mxn","name__orig":"mxn","Name":"Mxn","name_":"mxn","name-":"mxn","NAME":"MXN","index$":14}, {"active":true,"entity":"mxn","key$":"BasicMxnFlow","kind":"basic","name":"BasicMxnFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"mxn_ref01","srcdatavar":"mxn_ref01_data","suffix":"_dt0"},"match":{"id":"mxn01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-mxn_ref01"}}],"index$":0}]}, 'Mxn')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let mxn_ref01_data = Object.values(setup.data.existing.mxn)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const mxn_ref01_ent = client.Mxn()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/mxn/MxnTestData.json')

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
    ['mxn01','mxn02','mxn03','mx01','mx02','mx03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_MXN_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_MXN_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_MXN_ENTID']
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
  
