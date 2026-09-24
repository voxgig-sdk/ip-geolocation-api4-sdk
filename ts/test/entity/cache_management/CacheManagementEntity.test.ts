

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"cache_management","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /management/cache/domain-age/check/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"domain","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/management/cache/domain-age/check/{domain}","q":{"exist":["domain"]},"r":{},"s":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"check"},{"var":"domain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /management/cache/domain-age/stats","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/management/cache/domain-age/stats","q":{},"r":{},"s":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"stats"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /management/cache/domain-age","source":"openapi3","version":2},"g":{},"k":"http","m":"DELETE","o":"/management/cache/domain-age","q":{},"r":{},"s":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /management/cache/domain-age/all","source":"openapi3","version":2},"g":{},"k":"http","m":"DELETE","o":"/management/cache/domain-age/all","q":{},"r":{},"s":[{"lit":"management"},{"lit":"cache"},{"lit":"domain-age"},{"lit":"all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"cache_management","name__orig":"cache_management","Name":"CacheManagement","name_":"cache_management","name-":"cache-management","NAME":"CACHE_MANAGEMENT","index$":6}, {"active":true,"entity":"cache_management","key$":"BasicCacheManagementFlow","kind":"basic","name":"BasicCacheManagementFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"cache_management_ref01","srcdatavar":"cache_management_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cache_management_ref01"}}],"index$":0}]}, 'CacheManagement', {"GET /management/cache/domain-age/check/{domain}":{"protocol":"http","operationId":"isDomainCached","responses":{"200":{"description":"Cache status retrieved successfully","content":{"*/*":{"schema":{"type":"object","additionalProperties":{}}}}}},"parameters":[{"name":"domain","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /management/cache/domain-age/stats":{"protocol":"http","operationId":"getDomainAgeCacheStats","responses":{"200":{"description":"Cache statistics retrieved successfully","content":{"*/*":{"schema":{"type":"object","additionalProperties":{}}}}}},"parameters":[],"securitySource":"unspecified"},"DELETE /management/cache/domain-age":{"protocol":"http","operationId":"clearDomainAgeCache","responses":{"200":{"description":"Cache cleared successfully","content":{"*/*":{"schema":{"type":"object","additionalProperties":{"type":"string"}}}}}},"parameters":[],"securitySource":"unspecified"},"DELETE /management/cache/domain-age/all":{"protocol":"http","operationId":"clearAllDomainAgeCaches","responses":{"200":{"description":"All caches cleared successfully","content":{"*/*":{"schema":{"type":"object","additionalProperties":{"type":"string"}}}}}},"parameters":[],"securitySource":"unspecified"}})
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
    ['cache_management01','cache_management02','cache_management03'],
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
  
