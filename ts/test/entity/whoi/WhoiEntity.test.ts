

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


describe('WhoiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Whoi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'whoi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domain":{"a":true,"h":"Domain","n":"domain","r":true,"t":"`$STRING`","key$":"domain","index$":0},"error":{"a":true,"h":"Error","n":"error","r":false,"t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"error","index$":1},"expires_on":{"a":true,"h":"Expires On","n":"expires_on","r":false,"t":"`$STRING`","key$":"expires_on","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"name_servers":{"a":true,"h":"Name Servers","n":"name_servers","r":true,"t":"`$ARRAY`","key$":"name_servers","index$":4},"raw":{"a":true,"h":"Raw","n":"raw","r":true,"t":"`$STRING`","key$":"raw","index$":5},"registered_on":{"a":true,"h":"Registered On","n":"registered_on","r":false,"t":"`$STRING`","key$":"registered_on","index$":6},"registrar":{"a":true,"h":"Registrar","n":"registrar","r":false,"t":"`$ANY`","key$":"registrar","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$ARRAY`","key$":"status","index$":8},"updated_on":{"a":true,"h":"Updated On","n":"updated_on","r":false,"t":"`$STRING`","key$":"updated_on","index$":9}},"id":{"field":"id","name":"id"},"name":"whoi","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/dns/whois/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"example.com","k":"param","n":"id","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/dns/whois/{domain}","q":{"exist":["id"]},"r":{"param":{"domain":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"whois"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whoi","name__orig":"whoi","Name":"Whoi","name_":"whoi","name-":"whoi","NAME":"WHOI","index$":22}, {"active":true,"entity":"whoi","key$":"BasicWhoiFlow","kind":"basic","name":"BasicWhoiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"whoi_ref01","srcdatavar":"whoi_ref01_data","suffix":"_dt0"},"m":{"id":"whoi01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whoi_ref01"}}],"index$":0}]}, 'Whoi', {"GET /api/v1/dns/whois/{domain}":{"protocol":"http","operationId":"getWhois","responses":{"200":{"description":"WHOIS data retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"registrar":{"oneOf":[{"type":"object","properties":{"name":{"type":["string","null"]},"url":{"type":["string","null"]},"iana_id":{"type":"string"}},"x-ref":"#/components/schemas/WhoisRegistrar"},{"type":"null"}],"key$":"registrar"},"registered_on":{"type":"string","key$":"registered_on"},"expires_on":{"type":"string","key$":"expires_on"},"updated_on":{"type":"string","key$":"updated_on"},"name_servers":{"type":"array","items":{"type":"string"},"key$":"name_servers"},"status":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string"},"humanized":{"type":"string"}},"required":["code","humanized"],"x-ref":"#/components/schemas/WhoisStatus"},"key$":"status"},"raw":{"type":"string","key$":"raw"},"error":{"type":["string","null"],"key$":"error"}},"required":["domain","name_servers","raw","status"],"x-ref":"#/components/schemas/WhoisResponse","index$":0}}}},"400":{"description":"Invalid domain name format","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"registrar":{"oneOf":[{"type":"object","properties":{"name":{"type":["string","null"]},"url":{"type":["string","null"]},"iana_id":{"type":"string"}},"x-ref":"#/components/schemas/WhoisRegistrar"},{"type":"null"}],"key$":"registrar"},"registered_on":{"type":"string","key$":"registered_on"},"expires_on":{"type":"string","key$":"expires_on"},"updated_on":{"type":"string","key$":"updated_on"},"name_servers":{"type":"array","items":{"type":"string"},"key$":"name_servers"},"status":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string"},"humanized":{"type":"string"}},"required":["code","humanized"],"x-ref":"#/components/schemas/WhoisStatus"},"key$":"status"},"raw":{"type":"string","key$":"raw"},"error":{"type":["string","null"],"key$":"error"}},"required":["domain","name_servers","raw","status"],"x-ref":"#/components/schemas/WhoisResponse"}}}},"404":{"description":"Domain not found or not registered","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"registrar":{"oneOf":[{"type":"object","properties":{"name":{"type":["string","null"]},"url":{"type":["string","null"]},"iana_id":{"type":"string"}},"x-ref":"#/components/schemas/WhoisRegistrar"},{"type":"null"}],"key$":"registrar"},"registered_on":{"type":"string","key$":"registered_on"},"expires_on":{"type":"string","key$":"expires_on"},"updated_on":{"type":"string","key$":"updated_on"},"name_servers":{"type":"array","items":{"type":"string"},"key$":"name_servers"},"status":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string"},"humanized":{"type":"string"}},"required":["code","humanized"],"x-ref":"#/components/schemas/WhoisStatus"},"key$":"status"},"raw":{"type":"string","key$":"raw"},"error":{"type":["string","null"],"key$":"error"}},"required":["domain","name_servers","raw","status"],"x-ref":"#/components/schemas/WhoisResponse"}}}},"502":{"description":"WHOIS lookup failed","content":{"application/json":{"schema":{"type":"object","properties":{"domain":{"type":"string","key$":"domain"},"registrar":{"oneOf":[{"type":"object","properties":{"name":{"type":["string","null"]},"url":{"type":["string","null"]},"iana_id":{"type":"string"}},"x-ref":"#/components/schemas/WhoisRegistrar"},{"type":"null"}],"key$":"registrar"},"registered_on":{"type":"string","key$":"registered_on"},"expires_on":{"type":"string","key$":"expires_on"},"updated_on":{"type":"string","key$":"updated_on"},"name_servers":{"type":"array","items":{"type":"string"},"key$":"name_servers"},"status":{"type":"array","items":{"type":"object","properties":{"code":{"type":"string"},"humanized":{"type":"string"}},"required":["code","humanized"],"x-ref":"#/components/schemas/WhoisStatus"},"key$":"status"},"raw":{"type":"string","key$":"raw"},"error":{"type":["string","null"],"key$":"error"}},"required":["domain","name_servers","raw","status"],"x-ref":"#/components/schemas/WhoisResponse"}}}}},"parameters":[{"name":"domain","in":"path","description":"Domain name, e.g. example.com","required":true,"schema":{"type":"string"},"example":"example.com","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let whoi_ref01_data = Object.values(setup.data.existing.whoi)[0] as any

    // LOAD
    const whoi_ref01_ent = client.Whoi()
    const whoi_ref01_match_dt0: any = {}
    whoi_ref01_match_dt0.id = whoi_ref01_data.id
    const whoi_ref01_data_dt0 = (await whoi_ref01_ent.load(whoi_ref01_match_dt0)).data()
    assert(whoi_ref01_data_dt0.id === whoi_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/whoi/WhoiTestData.json')

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
    ['whoi01','whoi02','whoi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_WHOI_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_WHOI_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_WHOI_ENTID']
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
  
