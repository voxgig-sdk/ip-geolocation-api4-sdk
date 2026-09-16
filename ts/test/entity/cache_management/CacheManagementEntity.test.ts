

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


describe('CacheManagementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.CacheManagement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cache_management.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"cache_management","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"domain","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /management/cache/domain-age/check/{domain}","json":"{\"operationId\":\"isDomainCached\",\"parameters\":[{\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"additionalProperties\":{},\"type\":\"object\"}}},\"description\":\"Cache status retrieved successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/management/cache/domain-age/check/{domain}","segments":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"check"},{"var":"domain"}],"select":{"exist":["domain"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /management/cache/domain-age/stats","json":"{\"operationId\":\"getDomainAgeCacheStats\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"additionalProperties\":{},\"type\":\"object\"}}},\"description\":\"Cache statistics retrieved successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/management/cache/domain-age/stats","segments":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"stats"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{},"contract":{"id":"DELETE /management/cache/domain-age","json":"{\"operationId\":\"clearDomainAgeCache\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"additionalProperties\":{\"type\":\"string\"},\"type\":\"object\"}}},\"description\":\"Cache cleared successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/management/cache/domain-age","segments":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"DELETE /management/cache/domain-age/all","json":"{\"operationId\":\"clearAllDomainAgeCaches\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"additionalProperties\":{\"type\":\"string\"},\"type\":\"object\"}}},\"description\":\"All caches cleared successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/management/cache/domain-age/all","segments":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"all"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["check"]]},"key$":"cache_management","name__orig":"cache_management","Name":"CacheManagement","name_":"cache_management","name-":"cache-management","NAME":"CACHE_MANAGEMENT","index$":6}, {"active":true,"entity":"cache_management","key$":"BasicCacheManagementFlow","kind":"basic","name":"BasicCacheManagementFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"cache_management_ref01","srcdatavar":"cache_management_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cache_management_ref01"}}],"index$":0}]}, 'CacheManagement')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cache_management_ref01_data = Object.values(setup.data.existing.cache_management)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const cache_management_ref01_ent = client.CacheManagement()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cache_management/CacheManagementTestData.json')

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
    ['cache_management01','cache_management02','cache_management03','check01','check02','check03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID']
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
  
