

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


describe('IpInfoV0Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.IpInfoV0()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ip_info_v0.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"ip_info_v0","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/json/{ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"ip","or":"ip","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/json/{ip}","q":{"exist":["ip"]},"r":{},"s":[{"lit":"api"},{"lit":"json"},{"var":"ip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /json/{ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"ip","or":"ip","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/json/{ip}","q":{"exist":["ip"]},"r":{},"s":[{"lit":"json"},{"var":"ip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/json","q":{},"r":{},"s":[{"lit":"api"},{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/json/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/json/","q":{},"r":{},"s":[{"lit":"api"},{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/json","q":{},"r":{},"s":[{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /json/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/json/","q":{},"r":{},"s":[{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ip_info_v0","name__orig":"ip_info_v0","Name":"IpInfoV0","name_":"ip_info_v0","name-":"ip-info-v0","NAME":"IP_INFO_V0","index$":11}, {"active":true,"entity":"ip_info_v0","key$":"BasicIpInfoV0Flow","kind":"basic","name":"BasicIpInfoV0Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ip_info_v0_ref01","srcdatavar":"ip_info_v0_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ip_info_v0_ref01"}}],"index$":0}]}, 'IpInfoV0', {"GET /api/json/{ip}":{"protocol":"http","operationId":"getIpInfoNoVersion","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[{"name":"ip","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /json/{ip}":{"protocol":"http","operationId":"getIpInfoNoApiPrefixAndVersion","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[{"name":"ip","in":"path","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"},"GET /api/json":{"protocol":"http","operationId":"getIpInfoNoIp_3","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /api/json/":{"protocol":"http","operationId":"getIpInfoNoIp_2","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /json":{"protocol":"http","operationId":"getIpInfoNoIp_4","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[],"securitySource":"unspecified"},"GET /json/":{"protocol":"http","operationId":"getIpInfoNoIp_1","responses":{"200":{"description":"OK","content":{"*/*":{"schema":{"type":"object","properties":{"ip":{"type":"string"},"countryCode":{"type":"string"},"country_code":{"type":"string"},"countryName":{"type":"string"},"country_name":{"type":"string"},"isInEuropeanUnion":{"type":"boolean"},"is_in_european_union":{"type":"boolean"},"regionName":{"type":"string"},"region_name":{"type":"string"},"regionCode":{"type":"string"},"region_code":{"type":"string"},"city":{"type":"string"},"zipCode":{"type":"string"},"zip_code":{"type":"string"},"timeZone":{"type":"string"},"time_zone":{"type":"string"},"latitude":{"type":"number","format":"double"},"longitude":{"type":"number","format":"double"},"metroCode":{"type":"integer","format":"int32"},"metro_code":{"type":"integer","format":"int32"},"organisation":{"type":"string"},"flagUrl":{"type":"string"},"emojiFlag":{"type":"string"},"currencySymbol":{"type":"string"},"currency":{"type":"string"},"callingCode":{"type":"string"},"countryCapital":{"type":"string"},"suspiciousFactors":{"type":"object","properties":{"isProxy":{"type":"boolean"},"isTorNode":{"type":"boolean"},"isSpam":{"type":"boolean"},"isSuspicious":{"type":"boolean"}},"required":["isProxy","isSpam","isSuspicious","isTorNode"],"x-ref":"#/components/schemas/FactorsV0Dto"}},"required":["callingCode","city","countryCapital","countryCode","countryName","country_code","country_name","currency","currencySymbol","emojiFlag","flagUrl","ip","isInEuropeanUnion","is_in_european_union","latitude","longitude","metroCode","metro_code","organisation","regionCode","regionName","region_code","region_name","suspiciousFactors","timeZone","time_zone","zipCode","zip_code"],"x-ref":"#/components/schemas/IpInfoV0Dto"}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ip_info_v0_ref01_data = Object.values(setup.data.existing.ip_info_v0)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const ip_info_v0_ref01_ent = client.IpInfoV0()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ip_info_v0/IpInfoV0TestData.json')

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
    ['ip_info_v001','ip_info_v002','ip_info_v003'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID']
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
  
