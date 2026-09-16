

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


describe('PaddleControllerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.PaddleController()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'paddle_controller.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"paddle_controller","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"http_entity","orig":"http_entity","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /month-sub","json":"{\"operationId\":\"handleSubscription\",\"parameters\":[{\"in\":\"query\",\"name\":\"httpEntity\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/month-sub","segments":[{"lit":"month-sub"}],"select":{"exist":["http_entity"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /month-sub","json":"{\"operationId\":\"healthCheck\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/month-sub","segments":[{"lit":"month-sub"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"paddle_controller","name__orig":"paddle_controller","Name":"PaddleController","name_":"paddle_controller","name-":"paddle-controller","NAME":"PADDLE_CONTROLLER","index$":15}, {"active":true,"entity":"paddle_controller","key$":"BasicPaddleControllerFlow","kind":"basic","name":"BasicPaddleControllerFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"paddle_controller_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"paddle_controller_ref01","srcdatavar":"paddle_controller_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-paddle_controller_ref01"}}],"index$":1}]}, 'PaddleController')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const paddle_controller_ref01_ent = client.PaddleController()
    let paddle_controller_ref01_data = setup.data.new.paddle_controller['paddle_controller_ref01']

    paddle_controller_ref01_data = (await paddle_controller_ref01_ent.create(paddle_controller_ref01_data)).data()
    assert(null != paddle_controller_ref01_data)


    // LOAD
    const paddle_controller_ref01_match_dt0: any = {}
    const paddle_controller_ref01_data_dt0 = (await paddle_controller_ref01_ent.load(paddle_controller_ref01_match_dt0)).data()
    assert(null != paddle_controller_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/paddle_controller/PaddleControllerTestData.json')

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
    ['paddle_controller01','paddle_controller02','paddle_controller03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_PADDLE_CONTROLLER_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_PADDLE_CONTROLLER_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_PADDLE_CONTROLLER_ENTID']
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
  
