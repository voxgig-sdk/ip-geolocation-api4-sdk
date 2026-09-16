

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"domains","req":true,"type":"`$ARRAY`","index$":0}],"name":"domain_analysi","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/v1/domain/age/batch","json":"{\"operationId\":\"getBatchDomainAge\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"domains\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"domains\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"results\":{\"additionalProperties\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"},\"type\":\"object\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"Domain age information retrieved successfully\"},\"400\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"results\":{\"additionalProperties\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"},\"type\":\"object\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"Invalid request format\"},\"500\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"results\":{\"additionalProperties\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"},\"type\":\"object\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/v1/domain/age/batch","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"domain"},{"lit":"age"},{"lit":"batch"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"google.com","kind":"param","name":"domain","orig":"domain","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/domain/age/{domain}","json":"{\"operationId\":\"getDomainAge\",\"parameters\":[{\"description\":\"Domain name to check (e.g., example.com)\",\"example\":\"google.com\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"}}},\"description\":\"Domain age information retrieved successfully\"},\"400\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"}}},\"description\":\"Invalid domain format\"},\"500\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"age_in_days\":{\"format\":\"int64\",\"type\":\"integer\"},\"age_in_years\":{\"format\":\"int32\",\"type\":\"integer\"},\"domain\":{\"type\":\"string\"},\"error\":{\"type\":[\"string\",\"null\"]},\"is_valid\":{\"type\":\"boolean\"},\"registration_date\":{\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"domain\",\"is_valid\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/domain/age/{domain}","segments":[{"lit":"api"},{"lit":"v1"},{"lit":"domain"},{"lit":"age"},{"var":"domain"}],"select":{"exist":["domain"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["age"]]},"key$":"domain_analysi","name__orig":"domain_analysi","Name":"DomainAnalysi","name_":"domain_analysi","name-":"domain-analysi","NAME":"DOMAIN_ANALYSI","index$":7}, {"active":true,"entity":"domain_analysi","key$":"BasicDomainAnalysiFlow","kind":"basic","name":"BasicDomainAnalysiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"domain_analysi_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"domain_analysi_ref01","srcdatavar":"domain_analysi_ref01_data","suffix":"_dt0"},"match":{"id":"domain_analysi01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_analysi_ref01"}}],"index$":1}]}, 'DomainAnalysi')
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
    ['domain_analysi01','domain_analysi02','domain_analysi03','age01','age02','age03'],
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
  
