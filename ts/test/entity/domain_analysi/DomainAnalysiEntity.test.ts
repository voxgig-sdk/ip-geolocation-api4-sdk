

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


describe('DomainAnalysiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.DomainAnalysi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_analysi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"domains":{"a":true,"h":"Domains","n":"domains","r":true,"t":"`$ARRAY`","key$":"domains","index$":0}},"name":"domain_analysi","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/domain/age/batch","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v1/domain/age/batch","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"domain"},{"lit":"age"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/domain/age/{domain}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"google.com","k":"param","n":"domain","or":"domain","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/domain/age/{domain}","q":{"exist":["domain"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"domain"},{"lit":"age"},{"var":"domain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"domain_analysi","name__orig":"domain_analysi","Name":"DomainAnalysi","name_":"domain_analysi","name-":"domain-analysi","NAME":"DOMAIN_ANALYSI","index$":7}, {"active":true,"entity":"domain_analysi","key$":"BasicDomainAnalysiFlow","kind":"basic","name":"BasicDomainAnalysiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_analysi_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"domain_analysi_ref01","srcdatavar":"domain_analysi_ref01_data","suffix":"_dt0"},"m":{"id":"domain_analysi01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_analysi_ref01"}}],"index$":1}]}, 'DomainAnalysi', {"POST /api/v1/domain/age/batch":{"protocol":"http","operationId":"getBatchDomainAge","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"domains":{"type":"array","items":{"type":"string"},"key$":"domains"}},"required":["domains"],"x-ref":"#/components/schemas/BatchDomainRequest","index$":1}}},"required":true},"responses":{"200":{"description":"Domain age information retrieved successfully","content":{"*/*":{"schema":{"type":"object","properties":{"results":{"type":"object","additionalProperties":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}},"required":["results"],"x-ref":"#/components/schemas/BatchDomainResponse"}}}},"400":{"description":"Invalid request format","content":{"*/*":{"schema":{"type":"object","properties":{"results":{"type":"object","additionalProperties":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}},"required":["results"],"x-ref":"#/components/schemas/BatchDomainResponse"}}}},"500":{"description":"Internal server error","content":{"*/*":{"schema":{"type":"object","properties":{"results":{"type":"object","additionalProperties":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}},"required":["results"],"x-ref":"#/components/schemas/BatchDomainResponse"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /api/v1/domain/age/{domain}":{"protocol":"http","operationId":"getDomainAge","responses":{"200":{"description":"Domain age information retrieved successfully","content":{"*/*":{"schema":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}}},"400":{"description":"Invalid domain format","content":{"*/*":{"schema":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}}},"500":{"description":"Internal server error","content":{"*/*":{"schema":{"type":"object","properties":{"domain":{"type":"string"},"is_valid":{"type":"boolean"},"registration_date":{"type":"string","format":"date"},"age_in_years":{"type":"integer","format":"int32"},"age_in_days":{"type":"integer","format":"int64"},"error":{"type":["string","null"]}},"required":["domain","is_valid"],"x-ref":"#/components/schemas/DomainAgeResponse"}}}}},"parameters":[{"name":"domain","in":"path","description":"Domain name to check (e.g., example.com)","required":true,"schema":{"type":"string"},"example":"google.com","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_analysi_ref01_ent = client.DomainAnalysi()
    let domain_analysi_ref01_data = setup.data.new.domain_analysi['domain_analysi_ref01']

    domain_analysi_ref01_data = (await domain_analysi_ref01_ent.create(domain_analysi_ref01_data)).data()
    assert(null != domain_analysi_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain_analysi/DomainAnalysiTestData.json')

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
    ['domain_analysi01','domain_analysi02','domain_analysi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_DOMAIN_ANALYSI_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_DOMAIN_ANALYSI_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_DOMAIN_ANALYSI_ENTID']
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
  
