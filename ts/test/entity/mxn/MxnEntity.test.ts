

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domain":{"a":true,"h":"Domain","n":"domain","r":true,"t":"`$STRING`","key$":"domain","index$":0},"mx_records":{"a":true,"h":"Mx Records","n":"mx_records","r":true,"t":"`$ARRAY`","key$":"mx_records","index$":1}},"name":"mxn","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/dns/mx/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"gmail.com","k":"param","n":"domain","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/dns/mx/{domain}","q":{"exist":["domain"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"mx"},{"var":"domain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"mxn","name__orig":"mxn","Name":"Mxn","name_":"mxn","name-":"mxn","NAME":"MXN","index$":14}, {"active":true,"entity":"mxn","key$":"BasicMxnFlow","kind":"basic","name":"BasicMxnFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"mxn_ref01","srcdatavar":"mxn_ref01_data","suffix":"_dt0"},"m":{"id":"mxn01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-mxn_ref01"}}],"index$":0}]}, 'Mxn', {"GET /api/v1/dns/mx/{domain}":{"protocol":"http","operationId":"getMxRecords","responses":{"200":{"description":"MX records retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"mx_records":{"type":"array","items":{"type":"object","properties":{"priority":{"type":"integer","format":"int32"},"hostname":{"type":"string"},"ttl":{"type":"integer","format":"int64"}},"required":["hostname","priority","ttl"],"x-ref":"#/components/schemas/MxRecord"},"key$":"mx_records"}},"required":["domain","mx_records"],"x-ref":"#/components/schemas/MxLookupResponse","index$":0}}}},"400":{"description":"Invalid domain name format","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"mx_records":{"type":"array","items":{"type":"object","properties":{"priority":{"type":"integer","format":"int32"},"hostname":{"type":"string"},"ttl":{"type":"integer","format":"int64"}},"required":["hostname","priority","ttl"],"x-ref":"#/components/schemas/MxRecord"},"key$":"mx_records"}},"required":["domain","mx_records"],"x-ref":"#/components/schemas/MxLookupResponse"}}}},"404":{"description":"Domain not found (NXDOMAIN)","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"mx_records":{"type":"array","items":{"type":"object","properties":{"priority":{"type":"integer","format":"int32"},"hostname":{"type":"string"},"ttl":{"type":"integer","format":"int64"}},"required":["hostname","priority","ttl"],"x-ref":"#/components/schemas/MxRecord"},"key$":"mx_records"}},"required":["domain","mx_records"],"x-ref":"#/components/schemas/MxLookupResponse"}}}},"502":{"description":"DNS lookup failed","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"mx_records":{"type":"array","items":{"type":"object","properties":{"priority":{"type":"integer","format":"int32"},"hostname":{"type":"string"},"ttl":{"type":"integer","format":"int64"}},"required":["hostname","priority","ttl"],"x-ref":"#/components/schemas/MxRecord"},"key$":"mx_records"}},"required":["domain","mx_records"],"x-ref":"#/components/schemas/MxLookupResponse"}}}}},"parameters":[{"name":"domain","in":"path","description":"Domain name, e.g. gmail.com","required":true,"schema":{"type":"string"},"example":"gmail.com","index$":0}],"securitySource":"unspecified"}})
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
    ['mxn01','mxn02','mxn03'],
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
  
