

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


describe('AdvancedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
  afterEach(liveDelay('IP_GEOLOCATION_API4_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IpGeolocationApi4SDK.test()
    const ent = testsdk.Advanced()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'advanced.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"disposable":{"a":true,"h":"Disposable","n":"disposable","r":true,"sh":"Indicates whether the email is from a disposable/temporary email service.","t":"`$BOOLEAN`","key$":"disposable","index$":0},"email":{"a":true,"h":"Email","n":"email","r":true,"sh":"The email address that was analyzed, returned in the original format provided.","t":"`$STRING`","key$":"email","index$":1},"free":{"a":true,"h":"Free","n":"free","r":true,"sh":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).","t":"`$BOOLEAN`","key$":"free","index$":2},"gravatar":{"a":true,"h":"Gravatar","n":"gravatar","r":false,"t":"`$ANY`","key$":"gravatar","index$":3},"has_mx_records":{"a":true,"h":"Has Mx Records","n":"has_mx_records","r":true,"sh":"Indicates whether the domain has valid MX (Mail Exchange) records configured.","t":"`$BOOLEAN`","key$":"has_mx_records","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"reachable":{"a":true,"h":"Reachable","n":"reachable","r":true,"sh":"Overall reachability assessment.","t":"`$STRING`","key$":"reachable","index$":6},"role_account":{"a":true,"h":"Role Account","n":"role_account","r":true,"sh":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).","t":"`$BOOLEAN`","key$":"role_account","index$":7},"smtp":{"a":true,"h":"Smtp","n":"smtp","r":false,"t":"`$ANY`","key$":"smtp","index$":8},"suggestion":{"a":true,"h":"Suggestion","n":"suggestion","r":true,"sh":"Suggested correction for misspelled domains.","t":"`$STRING`","key$":"suggestion","index$":9},"syntax":{"a":true,"h":"Syntax","n":"syntax","r":true,"sh":"Detailed syntax analysis of the email address components.","t":"`$OBJECT`","key$":"syntax","index$":10}},"id":{"field":"id","name":"id"},"name":"advanced","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/email/advanced/{email}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"test@yandex.ru","k":"param","n":"id","or":"email","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/email/advanced/{email}","q":{"exist":["id"]},"r":{"param":{"email":"id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"email"},{"lit":"advanced"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"advanced","name__orig":"advanced","Name":"Advanced","name_":"advanced","name-":"advanced","NAME":"ADVANCED","index$":0}, {"active":true,"entity":"advanced","key$":"BasicAdvancedFlow","kind":"basic","name":"BasicAdvancedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"advanced_ref01","srcdatavar":"advanced_ref01_data","suffix":"_dt0"},"m":{"id":"advanced01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-advanced_ref01"}}],"index$":0}]}, 'Advanced', {"GET /api/v1/email/advanced/{email}":{"protocol":"http","operationId":"getAdvancedEmailValidation","responses":{"200":{"description":"Advanced email validation completed successfully with comprehensive analysis","content":{"application/json":{"schema":{"type":"object","description":"Advanced email validation response with comprehensive analysis including SMTP verification, \ndisposable email detection, and deliverability assessment.\n\nProvides advanced validation information including real-time SMTP checks,\nGravatar detection, and detailed deliverability analysis.\n\n**Use Cases**:\n- Advanced email verification\n- Marketing campaign optimization\n- User registration validation with deliverability check\n- Fraud prevention and security screening","example":{"email":"test@yandex.ru","reachable":"no","syntax":{"username":"test","domain":"yandex.ru","valid":true},"smtp":{"host_exists":true,"full_inbox":false,"catch_all":false,"deliverable":false,"disabled":false},"gravatar":{"has_gravatar":false,"gravatar_url":""},"suggestion":"","disposable":false,"role_account":true,"free":true,"has_mx_records":true},"properties":{"email":{"type":"string","description":"The email address that was analyzed, returned in the original format provided.","example":"test@yandex.ru","key$":"email"},"reachable":{"type":"string","description":"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\n        \n**Reachability Levels**:\n- **yes**: Email is deliverable and reachable\n- **no**: Email is not reachable or invalid\n- **unknown**: Unable to determine reachability status","enum":["yes","no","unknown"],"example":"no","key$":"reachable"},"syntax":{"type":"object","description":"Detailed syntax analysis of the email address components.","properties":{"username":{"type":"string","description":"The username/local part of the email address (before @)","example":"test"},"domain":{"type":"string","description":"The domain part of the email address (after @)","example":"yandex.ru"},"valid":{"type":"boolean","description":"Whether the email syntax is valid according to RFC standards","example":true}},"required":["domain","username","valid"],"x-ref":"#/components/schemas/AdvancedSyntaxDto","key$":"syntax"},"smtp":{"oneOf":[{"type":"object","description":"SMTP server analysis and deliverability assessment","properties":{"host_exists":{"type":"boolean","description":"Whether the mail server host exists and is reachable","example":true},"full_inbox":{"type":"boolean","description":"Whether the email account's inbox is full","example":false},"catch_all":{"type":"boolean","description":"Whether the domain has a catch-all email configuration (accepts all emails)","example":false},"deliverable":{"type":"boolean","description":"Whether emails can be successfully delivered to this address","example":false},"disabled":{"type":"boolean","description":"Whether the email account is blocked or disabled by the provider","example":false}},"required":["catch_all","deliverable","disabled","full_inbox","host_exists"],"x-ref":"#/components/schemas/AdvancedSmtpDto"},{"type":"null"}],"key$":"smtp"},"gravatar":{"oneOf":[{"type":"object","description":"Gravatar availability information for the email address","properties":{"has_gravatar":{"type":"boolean","description":"Whether the email has an associated Gravatar profile image","example":false},"gravatar_url":{"type":"string","description":"URL to the Gravatar image. Empty string if no Gravatar available."}},"required":["gravatar_url","has_gravatar"],"x-ref":"#/components/schemas/AdvancedGravatarDto"},{"type":"null"}],"key$":"gravatar"},"suggestion":{"type":"string","description":"Suggested correction for misspelled domains. Empty string if no suggestion available.","key$":"suggestion"},"disposable":{"type":"boolean","description":"Indicates whether the email is from a disposable/temporary email service.\n        \n**Disposable Email Detection**:\n- Checks against extensive database of known disposable providers\n- Identifies temporary email services\n- Detects throwaway email patterns","example":false,"key$":"disposable"},"role_account":{"type":"boolean","description":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\n        \n**Role Account Types**:\n- Administrative accounts (admin@, webmaster@)\n- Support accounts (support@, help@, info@)\n- No-reply accounts (noreply@, no-reply@)\n- Generic business accounts (sales@, contact@)","example":true,"key$":"role_account"},"free":{"type":"boolean","description":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\n        \n**Free Email Providers Include**:\n- Gmail, Yahoo Mail, Hotmail/Outlook\n- Regional free providers\n- Educational institution emails\n- Government email domains","example":true,"key$":"free"},"has_mx_records":{"type":"boolean","description":"Indicates whether the domain has valid MX (Mail Exchange) records configured.\n        \n**MX Record Verification**:\n- Checks DNS for MX records\n- Validates mail server configuration\n- Essential for email deliverability","example":true,"key$":"has_mx_records"}},"required":["disposable","email","free","has_mx_records","reachable","role_account","suggestion","syntax"],"x-ref":"#/components/schemas/AdvancedEmailValidationV1Dto","index$":0}}}},"400":{"description":"Bad Request - Invalid email format or missing email parameter","content":{"*/*":{"schema":{"type":"object","description":"Advanced email validation response with comprehensive analysis including SMTP verification, \ndisposable email detection, and deliverability assessment.\n\nProvides advanced validation information including real-time SMTP checks,\nGravatar detection, and detailed deliverability analysis.\n\n**Use Cases**:\n- Advanced email verification\n- Marketing campaign optimization\n- User registration validation with deliverability check\n- Fraud prevention and security screening","example":{"email":"test@yandex.ru","reachable":"no","syntax":{"username":"test","domain":"yandex.ru","valid":true},"smtp":{"host_exists":true,"full_inbox":false,"catch_all":false,"deliverable":false,"disabled":false},"gravatar":{"has_gravatar":false,"gravatar_url":""},"suggestion":"","disposable":false,"role_account":true,"free":true,"has_mx_records":true},"properties":{"email":{"type":"string","description":"The email address that was analyzed, returned in the original format provided.","example":"test@yandex.ru","key$":"email"},"reachable":{"type":"string","description":"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\n        \n**Reachability Levels**:\n- **yes**: Email is deliverable and reachable\n- **no**: Email is not reachable or invalid\n- **unknown**: Unable to determine reachability status","enum":["yes","no","unknown"],"example":"no","key$":"reachable"},"syntax":{"type":"object","description":"Detailed syntax analysis of the email address components.","properties":{"username":{"type":"string","description":"The username/local part of the email address (before @)","example":"test"},"domain":{"type":"string","description":"The domain part of the email address (after @)","example":"yandex.ru"},"valid":{"type":"boolean","description":"Whether the email syntax is valid according to RFC standards","example":true}},"required":["domain","username","valid"],"x-ref":"#/components/schemas/AdvancedSyntaxDto","key$":"syntax"},"smtp":{"oneOf":[{"type":"object","description":"SMTP server analysis and deliverability assessment","properties":{"host_exists":{"type":"boolean","description":"Whether the mail server host exists and is reachable","example":true},"full_inbox":{"type":"boolean","description":"Whether the email account's inbox is full","example":false},"catch_all":{"type":"boolean","description":"Whether the domain has a catch-all email configuration (accepts all emails)","example":false},"deliverable":{"type":"boolean","description":"Whether emails can be successfully delivered to this address","example":false},"disabled":{"type":"boolean","description":"Whether the email account is blocked or disabled by the provider","example":false}},"required":["catch_all","deliverable","disabled","full_inbox","host_exists"],"x-ref":"#/components/schemas/AdvancedSmtpDto"},{"type":"null"}],"key$":"smtp"},"gravatar":{"oneOf":[{"type":"object","description":"Gravatar availability information for the email address","properties":{"has_gravatar":{"type":"boolean","description":"Whether the email has an associated Gravatar profile image","example":false},"gravatar_url":{"type":"string","description":"URL to the Gravatar image. Empty string if no Gravatar available."}},"required":["gravatar_url","has_gravatar"],"x-ref":"#/components/schemas/AdvancedGravatarDto"},{"type":"null"}],"key$":"gravatar"},"suggestion":{"type":"string","description":"Suggested correction for misspelled domains. Empty string if no suggestion available.","key$":"suggestion"},"disposable":{"type":"boolean","description":"Indicates whether the email is from a disposable/temporary email service.\n        \n**Disposable Email Detection**:\n- Checks against extensive database of known disposable providers\n- Identifies temporary email services\n- Detects throwaway email patterns","example":false,"key$":"disposable"},"role_account":{"type":"boolean","description":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\n        \n**Role Account Types**:\n- Administrative accounts (admin@, webmaster@)\n- Support accounts (support@, help@, info@)\n- No-reply accounts (noreply@, no-reply@)\n- Generic business accounts (sales@, contact@)","example":true,"key$":"role_account"},"free":{"type":"boolean","description":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\n        \n**Free Email Providers Include**:\n- Gmail, Yahoo Mail, Hotmail/Outlook\n- Regional free providers\n- Educational institution emails\n- Government email domains","example":true,"key$":"free"},"has_mx_records":{"type":"boolean","description":"Indicates whether the domain has valid MX (Mail Exchange) records configured.\n        \n**MX Record Verification**:\n- Checks DNS for MX records\n- Validates mail server configuration\n- Essential for email deliverability","example":true,"key$":"has_mx_records"}},"required":["disposable","email","free","has_mx_records","reachable","role_account","suggestion","syntax"],"x-ref":"#/components/schemas/AdvancedEmailValidationV1Dto"}}}},"500":{"description":"Internal Server Error - Advanced email validation service temporarily unavailable","content":{"*/*":{"schema":{"type":"object","description":"Advanced email validation response with comprehensive analysis including SMTP verification, \ndisposable email detection, and deliverability assessment.\n\nProvides advanced validation information including real-time SMTP checks,\nGravatar detection, and detailed deliverability analysis.\n\n**Use Cases**:\n- Advanced email verification\n- Marketing campaign optimization\n- User registration validation with deliverability check\n- Fraud prevention and security screening","example":{"email":"test@yandex.ru","reachable":"no","syntax":{"username":"test","domain":"yandex.ru","valid":true},"smtp":{"host_exists":true,"full_inbox":false,"catch_all":false,"deliverable":false,"disabled":false},"gravatar":{"has_gravatar":false,"gravatar_url":""},"suggestion":"","disposable":false,"role_account":true,"free":true,"has_mx_records":true},"properties":{"email":{"type":"string","description":"The email address that was analyzed, returned in the original format provided.","example":"test@yandex.ru","key$":"email"},"reachable":{"type":"string","description":"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\n        \n**Reachability Levels**:\n- **yes**: Email is deliverable and reachable\n- **no**: Email is not reachable or invalid\n- **unknown**: Unable to determine reachability status","enum":["yes","no","unknown"],"example":"no","key$":"reachable"},"syntax":{"type":"object","description":"Detailed syntax analysis of the email address components.","properties":{"username":{"type":"string","description":"The username/local part of the email address (before @)","example":"test"},"domain":{"type":"string","description":"The domain part of the email address (after @)","example":"yandex.ru"},"valid":{"type":"boolean","description":"Whether the email syntax is valid according to RFC standards","example":true}},"required":["domain","username","valid"],"x-ref":"#/components/schemas/AdvancedSyntaxDto","key$":"syntax"},"smtp":{"oneOf":[{"type":"object","description":"SMTP server analysis and deliverability assessment","properties":{"host_exists":{"type":"boolean","description":"Whether the mail server host exists and is reachable","example":true},"full_inbox":{"type":"boolean","description":"Whether the email account's inbox is full","example":false},"catch_all":{"type":"boolean","description":"Whether the domain has a catch-all email configuration (accepts all emails)","example":false},"deliverable":{"type":"boolean","description":"Whether emails can be successfully delivered to this address","example":false},"disabled":{"type":"boolean","description":"Whether the email account is blocked or disabled by the provider","example":false}},"required":["catch_all","deliverable","disabled","full_inbox","host_exists"],"x-ref":"#/components/schemas/AdvancedSmtpDto"},{"type":"null"}],"key$":"smtp"},"gravatar":{"oneOf":[{"type":"object","description":"Gravatar availability information for the email address","properties":{"has_gravatar":{"type":"boolean","description":"Whether the email has an associated Gravatar profile image","example":false},"gravatar_url":{"type":"string","description":"URL to the Gravatar image. Empty string if no Gravatar available."}},"required":["gravatar_url","has_gravatar"],"x-ref":"#/components/schemas/AdvancedGravatarDto"},{"type":"null"}],"key$":"gravatar"},"suggestion":{"type":"string","description":"Suggested correction for misspelled domains. Empty string if no suggestion available.","key$":"suggestion"},"disposable":{"type":"boolean","description":"Indicates whether the email is from a disposable/temporary email service.\n        \n**Disposable Email Detection**:\n- Checks against extensive database of known disposable providers\n- Identifies temporary email services\n- Detects throwaway email patterns","example":false,"key$":"disposable"},"role_account":{"type":"boolean","description":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\n        \n**Role Account Types**:\n- Administrative accounts (admin@, webmaster@)\n- Support accounts (support@, help@, info@)\n- No-reply accounts (noreply@, no-reply@)\n- Generic business accounts (sales@, contact@)","example":true,"key$":"role_account"},"free":{"type":"boolean","description":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\n        \n**Free Email Providers Include**:\n- Gmail, Yahoo Mail, Hotmail/Outlook\n- Regional free providers\n- Educational institution emails\n- Government email domains","example":true,"key$":"free"},"has_mx_records":{"type":"boolean","description":"Indicates whether the domain has valid MX (Mail Exchange) records configured.\n        \n**MX Record Verification**:\n- Checks DNS for MX records\n- Validates mail server configuration\n- Essential for email deliverability","example":true,"key$":"has_mx_records"}},"required":["disposable","email","free","has_mx_records","reachable","role_account","suggestion","syntax"],"x-ref":"#/components/schemas/AdvancedEmailValidationV1Dto"}}}},"503":{"description":"Service Unavailable - Advanced email validation service is disabled or unreachable","content":{"*/*":{"schema":{"type":"object","description":"Advanced email validation response with comprehensive analysis including SMTP verification, \ndisposable email detection, and deliverability assessment.\n\nProvides advanced validation information including real-time SMTP checks,\nGravatar detection, and detailed deliverability analysis.\n\n**Use Cases**:\n- Advanced email verification\n- Marketing campaign optimization\n- User registration validation with deliverability check\n- Fraud prevention and security screening","example":{"email":"test@yandex.ru","reachable":"no","syntax":{"username":"test","domain":"yandex.ru","valid":true},"smtp":{"host_exists":true,"full_inbox":false,"catch_all":false,"deliverable":false,"disabled":false},"gravatar":{"has_gravatar":false,"gravatar_url":""},"suggestion":"","disposable":false,"role_account":true,"free":true,"has_mx_records":true},"properties":{"email":{"type":"string","description":"The email address that was analyzed, returned in the original format provided.","example":"test@yandex.ru","key$":"email"},"reachable":{"type":"string","description":"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\n        \n**Reachability Levels**:\n- **yes**: Email is deliverable and reachable\n- **no**: Email is not reachable or invalid\n- **unknown**: Unable to determine reachability status","enum":["yes","no","unknown"],"example":"no","key$":"reachable"},"syntax":{"type":"object","description":"Detailed syntax analysis of the email address components.","properties":{"username":{"type":"string","description":"The username/local part of the email address (before @)","example":"test"},"domain":{"type":"string","description":"The domain part of the email address (after @)","example":"yandex.ru"},"valid":{"type":"boolean","description":"Whether the email syntax is valid according to RFC standards","example":true}},"required":["domain","username","valid"],"x-ref":"#/components/schemas/AdvancedSyntaxDto","key$":"syntax"},"smtp":{"oneOf":[{"type":"object","description":"SMTP server analysis and deliverability assessment","properties":{"host_exists":{"type":"boolean","description":"Whether the mail server host exists and is reachable","example":true},"full_inbox":{"type":"boolean","description":"Whether the email account's inbox is full","example":false},"catch_all":{"type":"boolean","description":"Whether the domain has a catch-all email configuration (accepts all emails)","example":false},"deliverable":{"type":"boolean","description":"Whether emails can be successfully delivered to this address","example":false},"disabled":{"type":"boolean","description":"Whether the email account is blocked or disabled by the provider","example":false}},"required":["catch_all","deliverable","disabled","full_inbox","host_exists"],"x-ref":"#/components/schemas/AdvancedSmtpDto"},{"type":"null"}],"key$":"smtp"},"gravatar":{"oneOf":[{"type":"object","description":"Gravatar availability information for the email address","properties":{"has_gravatar":{"type":"boolean","description":"Whether the email has an associated Gravatar profile image","example":false},"gravatar_url":{"type":"string","description":"URL to the Gravatar image. Empty string if no Gravatar available."}},"required":["gravatar_url","has_gravatar"],"x-ref":"#/components/schemas/AdvancedGravatarDto"},{"type":"null"}],"key$":"gravatar"},"suggestion":{"type":"string","description":"Suggested correction for misspelled domains. Empty string if no suggestion available.","key$":"suggestion"},"disposable":{"type":"boolean","description":"Indicates whether the email is from a disposable/temporary email service.\n        \n**Disposable Email Detection**:\n- Checks against extensive database of known disposable providers\n- Identifies temporary email services\n- Detects throwaway email patterns","example":false,"key$":"disposable"},"role_account":{"type":"boolean","description":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\n        \n**Role Account Types**:\n- Administrative accounts (admin@, webmaster@)\n- Support accounts (support@, help@, info@)\n- No-reply accounts (noreply@, no-reply@)\n- Generic business accounts (sales@, contact@)","example":true,"key$":"role_account"},"free":{"type":"boolean","description":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\n        \n**Free Email Providers Include**:\n- Gmail, Yahoo Mail, Hotmail/Outlook\n- Regional free providers\n- Educational institution emails\n- Government email domains","example":true,"key$":"free"},"has_mx_records":{"type":"boolean","description":"Indicates whether the domain has valid MX (Mail Exchange) records configured.\n        \n**MX Record Verification**:\n- Checks DNS for MX records\n- Validates mail server configuration\n- Essential for email deliverability","example":true,"key$":"has_mx_records"}},"required":["disposable","email","free","has_mx_records","reachable","role_account","suggestion","syntax"],"x-ref":"#/components/schemas/AdvancedEmailValidationV1Dto"}}}}},"parameters":[{"name":"email","in":"path","description":"Email address to validate with advanced analysis. Must be properly URL-encoded if containing special characters.\n\n**Supported Formats**:\n- Standard emails: user@domain.com\n- Plus addressing: user+tag@domain.com  \n- Internationalized domains: user@münchen.de\n- Complex local parts: \"user.name\"@domain.com\n\n**Size Limits**: Maximum 320 characters (64 for local part + 255 for domain)\n**Encoding**: URL encoding required for special characters\n\n**Examples**:\n- Business: john.doe@company.com\n- Free provider: user@gmail.com\n- International: user@exämple.com\n- Complex: \"test+user\"@sub.domain.co.uk\n\n**Performance**: Advanced validation includes real-time SMTP checks which may take 500ms-2s","required":true,"schema":{"type":"string"},"example":"test@yandex.ru","index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let advanced_ref01_data = Object.values(setup.data.existing.advanced)[0] as any

    // LOAD
    const advanced_ref01_ent = client.Advanced()
    const advanced_ref01_match_dt0: any = {}
    advanced_ref01_match_dt0.id = advanced_ref01_data.id
    const advanced_ref01_data_dt0 = (await advanced_ref01_ent.load(advanced_ref01_match_dt0)).data()
    assert(advanced_ref01_data_dt0.id === advanced_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/advanced/AdvancedTestData.json')

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
    ['advanced01','advanced02','advanced03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'IP_GEOLOCATION_API4_TEST_ADVANCED_ENTID': idmap,
    'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
    'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['IP_GEOLOCATION_API4_TEST_ADVANCED_ENTID']

  const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['IP_GEOLOCATION_API4_TEST_ADVANCED_ENTID']
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
  
