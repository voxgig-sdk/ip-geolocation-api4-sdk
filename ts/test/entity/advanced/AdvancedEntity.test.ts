

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"disposable","req":true,"short":"Indicates whether the email is from a disposable/temporary email service.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"email","req":true,"short":"The email address that was analyzed, returned in the original format provided.","type":"`$STRING`","index$":1},{"active":true,"name":"free","req":true,"short":"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"gravatar","req":false,"type":"`$ANY`","index$":3},{"active":true,"name":"has_mx_records","req":true,"short":"Indicates whether the domain has valid MX (Mail Exchange) records configured.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"reachable","req":true,"short":"Overall reachability assessment.","type":"`$STRING`","index$":6},{"active":true,"name":"role_account","req":true,"short":"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).","type":"`$BOOLEAN`","index$":7},{"active":true,"name":"smtp","req":false,"type":"`$ANY`","index$":8},{"active":true,"name":"suggestion","req":true,"short":"Suggested correction for misspelled domains.","type":"`$STRING`","index$":9},{"active":true,"name":"syntax","req":true,"short":"Detailed syntax analysis of the email address components.","type":"`$OBJECT`","index$":10}],"id":{"field":"id","name":"id"},"name":"advanced","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"test@yandex.ru","kind":"param","name":"id","orig":"email","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v1/email/advanced/{email}","json":"{\"operationId\":\"getAdvancedEmailValidation\",\"parameters\":[{\"description\":\"Email address to validate with advanced analysis. Must be properly URL-encoded if containing special characters.\\n\\n**Supported Formats**:\\n- Standard emails: user@domain.com\\n- Plus addressing: user+tag@domain.com  \\n- Internationalized domains: user@münchen.de\\n- Complex local parts: \\\"user.name\\\"@domain.com\\n\\n**Size Limits**: Maximum 320 characters (64 for local part + 255 for domain)\\n**Encoding**: URL encoding required for special characters\\n\\n**Examples**:\\n- Business: john.doe@company.com\\n- Free provider: user@gmail.com\\n- International: user@exämple.com\\n- Complex: \\\"test+user\\\"@sub.domain.co.uk\\n\\n**Performance**: Advanced validation includes real-time SMTP checks which may take 500ms-2s\",\"example\":\"test@yandex.ru\",\"in\":\"path\",\"name\":\"email\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Advanced email validation response with comprehensive analysis including SMTP verification, \\ndisposable email detection, and deliverability assessment.\\n\\nProvides advanced validation information including real-time SMTP checks,\\nGravatar detection, and detailed deliverability analysis.\\n\\n**Use Cases**:\\n- Advanced email verification\\n- Marketing campaign optimization\\n- User registration validation with deliverability check\\n- Fraud prevention and security screening\",\"example\":{\"disposable\":false,\"email\":\"test@yandex.ru\",\"free\":true,\"gravatar\":{\"gravatar_url\":\"\",\"has_gravatar\":false},\"has_mx_records\":true,\"reachable\":\"no\",\"role_account\":true,\"smtp\":{\"catch_all\":false,\"deliverable\":false,\"disabled\":false,\"full_inbox\":false,\"host_exists\":true},\"suggestion\":\"\",\"syntax\":{\"domain\":\"yandex.ru\",\"username\":\"test\",\"valid\":true}},\"properties\":{\"disposable\":{\"description\":\"Indicates whether the email is from a disposable/temporary email service.\\n        \\n**Disposable Email Detection**:\\n- Checks against extensive database of known disposable providers\\n- Identifies temporary email services\\n- Detects throwaway email patterns\",\"example\":false,\"type\":\"boolean\"},\"email\":{\"description\":\"The email address that was analyzed, returned in the original format provided.\",\"example\":\"test@yandex.ru\",\"type\":\"string\"},\"free\":{\"description\":\"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\\n        \\n**Free Email Providers Include**:\\n- Gmail, Yahoo Mail, Hotmail/Outlook\\n- Regional free providers\\n- Educational institution emails\\n- Government email domains\",\"example\":true,\"type\":\"boolean\"},\"gravatar\":{\"oneOf\":[{\"description\":\"Gravatar availability information for the email address\",\"properties\":{\"gravatar_url\":{\"description\":\"URL to the Gravatar image. Empty string if no Gravatar available.\",\"type\":\"string\"},\"has_gravatar\":{\"description\":\"Whether the email has an associated Gravatar profile image\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"gravatar_url\",\"has_gravatar\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"has_mx_records\":{\"description\":\"Indicates whether the domain has valid MX (Mail Exchange) records configured.\\n        \\n**MX Record Verification**:\\n- Checks DNS for MX records\\n- Validates mail server configuration\\n- Essential for email deliverability\",\"example\":true,\"type\":\"boolean\"},\"reachable\":{\"description\":\"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\\n        \\n**Reachability Levels**:\\n- **yes**: Email is deliverable and reachable\\n- **no**: Email is not reachable or invalid\\n- **unknown**: Unable to determine reachability status\",\"enum\":[\"yes\",\"no\",\"unknown\"],\"example\":\"no\",\"type\":\"string\"},\"role_account\":{\"description\":\"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\\n        \\n**Role Account Types**:\\n- Administrative accounts (admin@, webmaster@)\\n- Support accounts (support@, help@, info@)\\n- No-reply accounts (noreply@, no-reply@)\\n- Generic business accounts (sales@, contact@)\",\"example\":true,\"type\":\"boolean\"},\"smtp\":{\"oneOf\":[{\"description\":\"SMTP server analysis and deliverability assessment\",\"properties\":{\"catch_all\":{\"description\":\"Whether the domain has a catch-all email configuration (accepts all emails)\",\"example\":false,\"type\":\"boolean\"},\"deliverable\":{\"description\":\"Whether emails can be successfully delivered to this address\",\"example\":false,\"type\":\"boolean\"},\"disabled\":{\"description\":\"Whether the email account is blocked or disabled by the provider\",\"example\":false,\"type\":\"boolean\"},\"full_inbox\":{\"description\":\"Whether the email account's inbox is full\",\"example\":false,\"type\":\"boolean\"},\"host_exists\":{\"description\":\"Whether the mail server host exists and is reachable\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"catch_all\",\"deliverable\",\"disabled\",\"full_inbox\",\"host_exists\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"suggestion\":{\"description\":\"Suggested correction for misspelled domains. Empty string if no suggestion available.\",\"type\":\"string\"},\"syntax\":{\"description\":\"Detailed syntax analysis of the email address components.\",\"properties\":{\"domain\":{\"description\":\"The domain part of the email address (after @)\",\"example\":\"yandex.ru\",\"type\":\"string\"},\"username\":{\"description\":\"The username/local part of the email address (before @)\",\"example\":\"test\",\"type\":\"string\"},\"valid\":{\"description\":\"Whether the email syntax is valid according to RFC standards\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"domain\",\"username\",\"valid\"],\"type\":\"object\"}},\"required\":[\"disposable\",\"email\",\"free\",\"has_mx_records\",\"reachable\",\"role_account\",\"suggestion\",\"syntax\"],\"type\":\"object\"}}},\"description\":\"Advanced email validation completed successfully with comprehensive analysis\"},\"400\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Advanced email validation response with comprehensive analysis including SMTP verification, \\ndisposable email detection, and deliverability assessment.\\n\\nProvides advanced validation information including real-time SMTP checks,\\nGravatar detection, and detailed deliverability analysis.\\n\\n**Use Cases**:\\n- Advanced email verification\\n- Marketing campaign optimization\\n- User registration validation with deliverability check\\n- Fraud prevention and security screening\",\"example\":{\"disposable\":false,\"email\":\"test@yandex.ru\",\"free\":true,\"gravatar\":{\"gravatar_url\":\"\",\"has_gravatar\":false},\"has_mx_records\":true,\"reachable\":\"no\",\"role_account\":true,\"smtp\":{\"catch_all\":false,\"deliverable\":false,\"disabled\":false,\"full_inbox\":false,\"host_exists\":true},\"suggestion\":\"\",\"syntax\":{\"domain\":\"yandex.ru\",\"username\":\"test\",\"valid\":true}},\"properties\":{\"disposable\":{\"description\":\"Indicates whether the email is from a disposable/temporary email service.\\n        \\n**Disposable Email Detection**:\\n- Checks against extensive database of known disposable providers\\n- Identifies temporary email services\\n- Detects throwaway email patterns\",\"example\":false,\"type\":\"boolean\"},\"email\":{\"description\":\"The email address that was analyzed, returned in the original format provided.\",\"example\":\"test@yandex.ru\",\"type\":\"string\"},\"free\":{\"description\":\"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\\n        \\n**Free Email Providers Include**:\\n- Gmail, Yahoo Mail, Hotmail/Outlook\\n- Regional free providers\\n- Educational institution emails\\n- Government email domains\",\"example\":true,\"type\":\"boolean\"},\"gravatar\":{\"oneOf\":[{\"description\":\"Gravatar availability information for the email address\",\"properties\":{\"gravatar_url\":{\"description\":\"URL to the Gravatar image. Empty string if no Gravatar available.\",\"type\":\"string\"},\"has_gravatar\":{\"description\":\"Whether the email has an associated Gravatar profile image\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"gravatar_url\",\"has_gravatar\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"has_mx_records\":{\"description\":\"Indicates whether the domain has valid MX (Mail Exchange) records configured.\\n        \\n**MX Record Verification**:\\n- Checks DNS for MX records\\n- Validates mail server configuration\\n- Essential for email deliverability\",\"example\":true,\"type\":\"boolean\"},\"reachable\":{\"description\":\"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\\n        \\n**Reachability Levels**:\\n- **yes**: Email is deliverable and reachable\\n- **no**: Email is not reachable or invalid\\n- **unknown**: Unable to determine reachability status\",\"enum\":[\"yes\",\"no\",\"unknown\"],\"example\":\"no\",\"type\":\"string\"},\"role_account\":{\"description\":\"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\\n        \\n**Role Account Types**:\\n- Administrative accounts (admin@, webmaster@)\\n- Support accounts (support@, help@, info@)\\n- No-reply accounts (noreply@, no-reply@)\\n- Generic business accounts (sales@, contact@)\",\"example\":true,\"type\":\"boolean\"},\"smtp\":{\"oneOf\":[{\"description\":\"SMTP server analysis and deliverability assessment\",\"properties\":{\"catch_all\":{\"description\":\"Whether the domain has a catch-all email configuration (accepts all emails)\",\"example\":false,\"type\":\"boolean\"},\"deliverable\":{\"description\":\"Whether emails can be successfully delivered to this address\",\"example\":false,\"type\":\"boolean\"},\"disabled\":{\"description\":\"Whether the email account is blocked or disabled by the provider\",\"example\":false,\"type\":\"boolean\"},\"full_inbox\":{\"description\":\"Whether the email account's inbox is full\",\"example\":false,\"type\":\"boolean\"},\"host_exists\":{\"description\":\"Whether the mail server host exists and is reachable\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"catch_all\",\"deliverable\",\"disabled\",\"full_inbox\",\"host_exists\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"suggestion\":{\"description\":\"Suggested correction for misspelled domains. Empty string if no suggestion available.\",\"type\":\"string\"},\"syntax\":{\"description\":\"Detailed syntax analysis of the email address components.\",\"properties\":{\"domain\":{\"description\":\"The domain part of the email address (after @)\",\"example\":\"yandex.ru\",\"type\":\"string\"},\"username\":{\"description\":\"The username/local part of the email address (before @)\",\"example\":\"test\",\"type\":\"string\"},\"valid\":{\"description\":\"Whether the email syntax is valid according to RFC standards\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"domain\",\"username\",\"valid\"],\"type\":\"object\"}},\"required\":[\"disposable\",\"email\",\"free\",\"has_mx_records\",\"reachable\",\"role_account\",\"suggestion\",\"syntax\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid email format or missing email parameter\"},\"500\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Advanced email validation response with comprehensive analysis including SMTP verification, \\ndisposable email detection, and deliverability assessment.\\n\\nProvides advanced validation information including real-time SMTP checks,\\nGravatar detection, and detailed deliverability analysis.\\n\\n**Use Cases**:\\n- Advanced email verification\\n- Marketing campaign optimization\\n- User registration validation with deliverability check\\n- Fraud prevention and security screening\",\"example\":{\"disposable\":false,\"email\":\"test@yandex.ru\",\"free\":true,\"gravatar\":{\"gravatar_url\":\"\",\"has_gravatar\":false},\"has_mx_records\":true,\"reachable\":\"no\",\"role_account\":true,\"smtp\":{\"catch_all\":false,\"deliverable\":false,\"disabled\":false,\"full_inbox\":false,\"host_exists\":true},\"suggestion\":\"\",\"syntax\":{\"domain\":\"yandex.ru\",\"username\":\"test\",\"valid\":true}},\"properties\":{\"disposable\":{\"description\":\"Indicates whether the email is from a disposable/temporary email service.\\n        \\n**Disposable Email Detection**:\\n- Checks against extensive database of known disposable providers\\n- Identifies temporary email services\\n- Detects throwaway email patterns\",\"example\":false,\"type\":\"boolean\"},\"email\":{\"description\":\"The email address that was analyzed, returned in the original format provided.\",\"example\":\"test@yandex.ru\",\"type\":\"string\"},\"free\":{\"description\":\"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\\n        \\n**Free Email Providers Include**:\\n- Gmail, Yahoo Mail, Hotmail/Outlook\\n- Regional free providers\\n- Educational institution emails\\n- Government email domains\",\"example\":true,\"type\":\"boolean\"},\"gravatar\":{\"oneOf\":[{\"description\":\"Gravatar availability information for the email address\",\"properties\":{\"gravatar_url\":{\"description\":\"URL to the Gravatar image. Empty string if no Gravatar available.\",\"type\":\"string\"},\"has_gravatar\":{\"description\":\"Whether the email has an associated Gravatar profile image\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"gravatar_url\",\"has_gravatar\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"has_mx_records\":{\"description\":\"Indicates whether the domain has valid MX (Mail Exchange) records configured.\\n        \\n**MX Record Verification**:\\n- Checks DNS for MX records\\n- Validates mail server configuration\\n- Essential for email deliverability\",\"example\":true,\"type\":\"boolean\"},\"reachable\":{\"description\":\"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\\n        \\n**Reachability Levels**:\\n- **yes**: Email is deliverable and reachable\\n- **no**: Email is not reachable or invalid\\n- **unknown**: Unable to determine reachability status\",\"enum\":[\"yes\",\"no\",\"unknown\"],\"example\":\"no\",\"type\":\"string\"},\"role_account\":{\"description\":\"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\\n        \\n**Role Account Types**:\\n- Administrative accounts (admin@, webmaster@)\\n- Support accounts (support@, help@, info@)\\n- No-reply accounts (noreply@, no-reply@)\\n- Generic business accounts (sales@, contact@)\",\"example\":true,\"type\":\"boolean\"},\"smtp\":{\"oneOf\":[{\"description\":\"SMTP server analysis and deliverability assessment\",\"properties\":{\"catch_all\":{\"description\":\"Whether the domain has a catch-all email configuration (accepts all emails)\",\"example\":false,\"type\":\"boolean\"},\"deliverable\":{\"description\":\"Whether emails can be successfully delivered to this address\",\"example\":false,\"type\":\"boolean\"},\"disabled\":{\"description\":\"Whether the email account is blocked or disabled by the provider\",\"example\":false,\"type\":\"boolean\"},\"full_inbox\":{\"description\":\"Whether the email account's inbox is full\",\"example\":false,\"type\":\"boolean\"},\"host_exists\":{\"description\":\"Whether the mail server host exists and is reachable\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"catch_all\",\"deliverable\",\"disabled\",\"full_inbox\",\"host_exists\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"suggestion\":{\"description\":\"Suggested correction for misspelled domains. Empty string if no suggestion available.\",\"type\":\"string\"},\"syntax\":{\"description\":\"Detailed syntax analysis of the email address components.\",\"properties\":{\"domain\":{\"description\":\"The domain part of the email address (after @)\",\"example\":\"yandex.ru\",\"type\":\"string\"},\"username\":{\"description\":\"The username/local part of the email address (before @)\",\"example\":\"test\",\"type\":\"string\"},\"valid\":{\"description\":\"Whether the email syntax is valid according to RFC standards\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"domain\",\"username\",\"valid\"],\"type\":\"object\"}},\"required\":[\"disposable\",\"email\",\"free\",\"has_mx_records\",\"reachable\",\"role_account\",\"suggestion\",\"syntax\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error - Advanced email validation service temporarily unavailable\"},\"503\":{\"content\":{\"*/*\":{\"schema\":{\"description\":\"Advanced email validation response with comprehensive analysis including SMTP verification, \\ndisposable email detection, and deliverability assessment.\\n\\nProvides advanced validation information including real-time SMTP checks,\\nGravatar detection, and detailed deliverability analysis.\\n\\n**Use Cases**:\\n- Advanced email verification\\n- Marketing campaign optimization\\n- User registration validation with deliverability check\\n- Fraud prevention and security screening\",\"example\":{\"disposable\":false,\"email\":\"test@yandex.ru\",\"free\":true,\"gravatar\":{\"gravatar_url\":\"\",\"has_gravatar\":false},\"has_mx_records\":true,\"reachable\":\"no\",\"role_account\":true,\"smtp\":{\"catch_all\":false,\"deliverable\":false,\"disabled\":false,\"full_inbox\":false,\"host_exists\":true},\"suggestion\":\"\",\"syntax\":{\"domain\":\"yandex.ru\",\"username\":\"test\",\"valid\":true}},\"properties\":{\"disposable\":{\"description\":\"Indicates whether the email is from a disposable/temporary email service.\\n        \\n**Disposable Email Detection**:\\n- Checks against extensive database of known disposable providers\\n- Identifies temporary email services\\n- Detects throwaway email patterns\",\"example\":false,\"type\":\"boolean\"},\"email\":{\"description\":\"The email address that was analyzed, returned in the original format provided.\",\"example\":\"test@yandex.ru\",\"type\":\"string\"},\"free\":{\"description\":\"Indicates whether the email domain is a free email provider (Gmail, Yahoo, Hotmail, etc.).\\n        \\n**Free Email Providers Include**:\\n- Gmail, Yahoo Mail, Hotmail/Outlook\\n- Regional free providers\\n- Educational institution emails\\n- Government email domains\",\"example\":true,\"type\":\"boolean\"},\"gravatar\":{\"oneOf\":[{\"description\":\"Gravatar availability information for the email address\",\"properties\":{\"gravatar_url\":{\"description\":\"URL to the Gravatar image. Empty string if no Gravatar available.\",\"type\":\"string\"},\"has_gravatar\":{\"description\":\"Whether the email has an associated Gravatar profile image\",\"example\":false,\"type\":\"boolean\"}},\"required\":[\"gravatar_url\",\"has_gravatar\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"has_mx_records\":{\"description\":\"Indicates whether the domain has valid MX (Mail Exchange) records configured.\\n        \\n**MX Record Verification**:\\n- Checks DNS for MX records\\n- Validates mail server configuration\\n- Essential for email deliverability\",\"example\":true,\"type\":\"boolean\"},\"reachable\":{\"description\":\"Overall reachability assessment. Values: 'yes', 'no', 'unknown'.\\n        \\n**Reachability Levels**:\\n- **yes**: Email is deliverable and reachable\\n- **no**: Email is not reachable or invalid\\n- **unknown**: Unable to determine reachability status\",\"enum\":[\"yes\",\"no\",\"unknown\"],\"example\":\"no\",\"type\":\"string\"},\"role_account\":{\"description\":\"Indicates whether this is a role-based email account (admin@, support@, noreply@, etc.).\\n        \\n**Role Account Types**:\\n- Administrative accounts (admin@, webmaster@)\\n- Support accounts (support@, help@, info@)\\n- No-reply accounts (noreply@, no-reply@)\\n- Generic business accounts (sales@, contact@)\",\"example\":true,\"type\":\"boolean\"},\"smtp\":{\"oneOf\":[{\"description\":\"SMTP server analysis and deliverability assessment\",\"properties\":{\"catch_all\":{\"description\":\"Whether the domain has a catch-all email configuration (accepts all emails)\",\"example\":false,\"type\":\"boolean\"},\"deliverable\":{\"description\":\"Whether emails can be successfully delivered to this address\",\"example\":false,\"type\":\"boolean\"},\"disabled\":{\"description\":\"Whether the email account is blocked or disabled by the provider\",\"example\":false,\"type\":\"boolean\"},\"full_inbox\":{\"description\":\"Whether the email account's inbox is full\",\"example\":false,\"type\":\"boolean\"},\"host_exists\":{\"description\":\"Whether the mail server host exists and is reachable\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"catch_all\",\"deliverable\",\"disabled\",\"full_inbox\",\"host_exists\"],\"type\":\"object\"},{\"type\":\"null\"}]},\"suggestion\":{\"description\":\"Suggested correction for misspelled domains. Empty string if no suggestion available.\",\"type\":\"string\"},\"syntax\":{\"description\":\"Detailed syntax analysis of the email address components.\",\"properties\":{\"domain\":{\"description\":\"The domain part of the email address (after @)\",\"example\":\"yandex.ru\",\"type\":\"string\"},\"username\":{\"description\":\"The username/local part of the email address (before @)\",\"example\":\"test\",\"type\":\"string\"},\"valid\":{\"description\":\"Whether the email syntax is valid according to RFC standards\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"domain\",\"username\",\"valid\"],\"type\":\"object\"}},\"required\":[\"disposable\",\"email\",\"free\",\"has_mx_records\",\"reachable\",\"role_account\",\"suggestion\",\"syntax\"],\"type\":\"object\"}}},\"description\":\"Service Unavailable - Advanced email validation service is disabled or unreachable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/v1/email/advanced/{email}","rename":{"param":{"email":"id"}},"segments":[{"lit":"api"},{"lit":"v1"},{"lit":"email"},{"lit":"advanced"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"advanced","name__orig":"advanced","Name":"Advanced","name_":"advanced","name-":"advanced","NAME":"ADVANCED","index$":0}, {"active":true,"entity":"advanced","key$":"BasicAdvancedFlow","kind":"basic","name":"BasicAdvancedFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"advanced_ref01","srcdatavar":"advanced_ref01_data","suffix":"_dt0"},"match":{"id":"advanced01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-advanced_ref01"}}],"index$":0}]}, 'Advanced')
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
  
