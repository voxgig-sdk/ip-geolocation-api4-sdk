

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


describe('TorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Tor()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tor.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"ip","req":true,"short":"The IP address that was checked","type":"`$STRING`","index$":1},{"active":true,"name":"is_tor","req":true,"short":"Whether the IP is a known Tor exit node","type":"`$BOOLEAN`","index$":2},{"active":true,"format":"int32","name":"tor_node_count","req":true,"short":"Total number of currently known Tor exit nodes in the database","type":"`$INTEGER`","index$":3}],"id":{"field":"id","name":"id"},"name":"tor","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"185.220.101.50","kind":"param","name":"id","orig":"ip","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/tor/{ip}","json":"{\"operationId\":\"checkTorNode\",\"parameters\":[{\"description\":\"IPv4 or IPv6 address to check against the Tor exit node list\",\"example\":\"185.220.101.50\",\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Tor exit node detection result for the given IP address\",\"properties\":{\"ip\":{\"description\":\"The IP address that was checked\",\"example\":\"185.220.101.50\",\"type\":\"string\"},\"is_tor\":{\"description\":\"Whether the IP is a known Tor exit node\",\"example\":true,\"type\":\"boolean\"},\"tor_node_count\":{\"description\":\"Total number of currently known Tor exit nodes in the database\",\"example\":1247,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"ip\",\"is_tor\",\"tor_node_count\"],\"type\":\"object\"}}},\"description\":\"Tor detection result returned successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Tor exit node detection result for the given IP address\",\"properties\":{\"ip\":{\"description\":\"The IP address that was checked\",\"example\":\"185.220.101.50\",\"type\":\"string\"},\"is_tor\":{\"description\":\"Whether the IP is a known Tor exit node\",\"example\":true,\"type\":\"boolean\"},\"tor_node_count\":{\"description\":\"Total number of currently known Tor exit nodes in the database\",\"example\":1247,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"ip\",\"is_tor\",\"tor_node_count\"],\"type\":\"object\"}}},\"description\":\"Bad Request — invalid IP address format\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Tor exit node detection result for the given IP address\",\"properties\":{\"ip\":{\"description\":\"The IP address that was checked\",\"example\":\"185.220.101.50\",\"type\":\"string\"},\"is_tor\":{\"description\":\"Whether the IP is a known Tor exit node\",\"example\":true,\"type\":\"boolean\"},\"tor_node_count\":{\"description\":\"Total number of currently known Tor exit nodes in the database\",\"example\":1247,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"ip\",\"is_tor\",\"tor_node_count\"],\"type\":\"object\"}}},\"description\":\"Too Many Requests — rate limit exceeded\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/tor/{ip}","rename":{"param":{"ip":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"tor"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tor","name__orig":"tor","Name":"Tor","name_":"tor","name-":"tor","NAME":"TOR","index$":20}, {"active":true,"entity":"tor","key$":"BasicTorFlow","kind":"basic","name":"BasicTorFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"tor_ref01","srcdatavar":"tor_ref01_data","suffix":"_dt0"},"match":{"id":"tor01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tor_ref01"}}],"index$":0}]}, 'Tor')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tor_ref01_data = Object.values(setup.data.existing.tor)[0] as any

    // LOAD
    const tor_ref01_ent = client.Tor()
    const tor_ref01_match_dt0: any = {}
    tor_ref01_match_dt0.id = tor_ref01_data.id
    const tor_ref01_data_dt0 = (await tor_ref01_ent.load(tor_ref01_match_dt0)).data()
    assert(tor_ref01_data_dt0.id === tor_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tor/TorTestData.json')

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
    ['tor01','tor02','tor03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_TOR_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_TOR_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_TOR_ENTID']
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
  
