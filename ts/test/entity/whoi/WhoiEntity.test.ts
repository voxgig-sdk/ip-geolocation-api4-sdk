

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"domain","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"error","req":false,"type":["`$ONE`",["`$STRING`","`$NULL`"]],"index$":1},{"active":true,"name":"expires_on","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name_servers","req":true,"type":"`$ARRAY`","index$":4},{"active":true,"name":"raw","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"registered_on","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"registrar","req":false,"type":"`$ANY`","index$":7},{"active":true,"name":"status","req":true,"type":"`$ARRAY`","index$":8},{"active":true,"name":"updated_on","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"whoi","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"example.com","kind":"param","name":"id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/dns/whois/{domain}","json":"{\"operationId\":\"getWhois\",\"parameters\":[{\"description\":\"Domain name, e.g. example.com\",\"example\":\"example.com\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"expires_on\":{\"type\":\"string\"},\"name_servers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"raw\":{\"type\":\"string\"},\"registered_on\":{\"type\":\"string\"},\"registrar\":{\"oneOf\":[{\"properties\":{\"iana_id\":{\"type\":\"string\"},\"name\":{\"type\":[\"string\",\"null\"]},\"url\":{\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},{\"type\":\"null\"}]},\"status\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"humanized\":{\"type\":\"string\"}},\"required\":[\"code\",\"humanized\"],\"type\":\"object\"},\"type\":\"array\"},\"updated_on\":{\"type\":\"string\"}},\"required\":[\"domain\",\"name_servers\",\"raw\",\"status\"],\"type\":\"object\"}}},\"description\":\"WHOIS data retrieved successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"expires_on\":{\"type\":\"string\"},\"name_servers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"raw\":{\"type\":\"string\"},\"registered_on\":{\"type\":\"string\"},\"registrar\":{\"oneOf\":[{\"properties\":{\"iana_id\":{\"type\":\"string\"},\"name\":{\"type\":[\"string\",\"null\"]},\"url\":{\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},{\"type\":\"null\"}]},\"status\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"humanized\":{\"type\":\"string\"}},\"required\":[\"code\",\"humanized\"],\"type\":\"object\"},\"type\":\"array\"},\"updated_on\":{\"type\":\"string\"}},\"required\":[\"domain\",\"name_servers\",\"raw\",\"status\"],\"type\":\"object\"}}},\"description\":\"Invalid domain name format\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"expires_on\":{\"type\":\"string\"},\"name_servers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"raw\":{\"type\":\"string\"},\"registered_on\":{\"type\":\"string\"},\"registrar\":{\"oneOf\":[{\"properties\":{\"iana_id\":{\"type\":\"string\"},\"name\":{\"type\":[\"string\",\"null\"]},\"url\":{\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},{\"type\":\"null\"}]},\"status\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"humanized\":{\"type\":\"string\"}},\"required\":[\"code\",\"humanized\"],\"type\":\"object\"},\"type\":\"array\"},\"updated_on\":{\"type\":\"string\"}},\"required\":[\"domain\",\"name_servers\",\"raw\",\"status\"],\"type\":\"object\"}}},\"description\":\"Domain not found or not registered\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"expires_on\":{\"type\":\"string\"},\"name_servers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"raw\":{\"type\":\"string\"},\"registered_on\":{\"type\":\"string\"},\"registrar\":{\"oneOf\":[{\"properties\":{\"iana_id\":{\"type\":\"string\"},\"name\":{\"type\":[\"string\",\"null\"]},\"url\":{\"type\":[\"string\",\"null\"]}},\"type\":\"object\"},{\"type\":\"null\"}]},\"status\":{\"items\":{\"properties\":{\"code\":{\"type\":\"string\"},\"humanized\":{\"type\":\"string\"}},\"required\":[\"code\",\"humanized\"],\"type\":\"object\"},\"type\":\"array\"},\"updated_on\":{\"type\":\"string\"}},\"required\":[\"domain\",\"name_servers\",\"raw\",\"status\"],\"type\":\"object\"}}},\"description\":\"WHOIS lookup failed\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/dns/whois/{domain}","rename":{"param":{"domain":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"dns"},{"lit":"whois"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"whoi","name__orig":"whoi","Name":"Whoi","name_":"whoi","name-":"whoi","NAME":"WHOI","index$":22}, {"active":true,"entity":"whoi","key$":"BasicWhoiFlow","kind":"basic","name":"BasicWhoiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"whoi_ref01","srcdatavar":"whoi_ref01_data","suffix":"_dt0"},"match":{"id":"whoi01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-whoi_ref01"}}],"index$":0}]}, 'Whoi')
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
  
