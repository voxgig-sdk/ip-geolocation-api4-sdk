"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('IpInfoV0Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.IpInfoV0();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ip_info_v0.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "ip_info_v0", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "ip", "orig": "ip", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/json/{ip}", "json": "{\"operationId\":\"getIpInfoNoVersion\",\"parameters\":[{\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/json/{ip}", "segments": [{ "lit": "api" }, { "lit": "json" }, { "var": "ip" }], "select": { "exist": ["ip"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "ip", "orig": "ip", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /json/{ip}", "json": "{\"operationId\":\"getIpInfoNoApiPrefixAndVersion\",\"parameters\":[{\"in\":\"path\",\"name\":\"ip\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json/{ip}", "segments": [{ "lit": "json" }, { "var": "ip" }], "select": { "exist": ["ip"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/json", "json": "{\"operationId\":\"getIpInfoNoIp_3\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/json", "segments": [{ "lit": "api" }, { "lit": "json" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "GET /api/json/", "json": "{\"operationId\":\"getIpInfoNoIp_2\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/json/", "segments": [{ "lit": "api" }, { "lit": "json" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": {}, "contract": { "id": "GET /json", "json": "{\"operationId\":\"getIpInfoNoIp_4\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json", "segments": [{ "lit": "json" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "active": true, "args": {}, "contract": { "id": "GET /json/", "json": "{\"operationId\":\"getIpInfoNoIp_1\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"*/*\":{\"schema\":{\"properties\":{\"callingCode\":{\"type\":\"string\"},\"city\":{\"type\":\"string\"},\"countryCapital\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"countryName\":{\"type\":\"string\"},\"country_code\":{\"type\":\"string\"},\"country_name\":{\"type\":\"string\"},\"currency\":{\"type\":\"string\"},\"currencySymbol\":{\"type\":\"string\"},\"emojiFlag\":{\"type\":\"string\"},\"flagUrl\":{\"type\":\"string\"},\"ip\":{\"type\":\"string\"},\"isInEuropeanUnion\":{\"type\":\"boolean\"},\"is_in_european_union\":{\"type\":\"boolean\"},\"latitude\":{\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"format\":\"double\",\"type\":\"number\"},\"metroCode\":{\"format\":\"int32\",\"type\":\"integer\"},\"metro_code\":{\"format\":\"int32\",\"type\":\"integer\"},\"organisation\":{\"type\":\"string\"},\"regionCode\":{\"type\":\"string\"},\"regionName\":{\"type\":\"string\"},\"region_code\":{\"type\":\"string\"},\"region_name\":{\"type\":\"string\"},\"suspiciousFactors\":{\"properties\":{\"isProxy\":{\"type\":\"boolean\"},\"isSpam\":{\"type\":\"boolean\"},\"isSuspicious\":{\"type\":\"boolean\"},\"isTorNode\":{\"type\":\"boolean\"}},\"required\":[\"isProxy\",\"isSpam\",\"isSuspicious\",\"isTorNode\"],\"type\":\"object\"},\"timeZone\":{\"type\":\"string\"},\"time_zone\":{\"type\":\"string\"},\"zipCode\":{\"type\":\"string\"},\"zip_code\":{\"type\":\"string\"}},\"required\":[\"callingCode\",\"city\",\"countryCapital\",\"countryCode\",\"countryName\",\"country_code\",\"country_name\",\"currency\",\"currencySymbol\",\"emojiFlag\",\"flagUrl\",\"ip\",\"isInEuropeanUnion\",\"is_in_european_union\",\"latitude\",\"longitude\",\"metroCode\",\"metro_code\",\"organisation\",\"regionCode\",\"regionName\",\"region_code\",\"region_name\",\"suspiciousFactors\",\"timeZone\",\"time_zone\",\"zipCode\",\"zip_code\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json/", "segments": [{ "lit": "json" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }], "key$": "load" } }, "relations": { "ancestors": [["json"]] }, "key$": "ip_info_v0", "name__orig": "ip_info_v0", "Name": "IpInfoV0", "name_": "ip_info_v0", "name-": "ip-info-v0", "NAME": "IP_INFO_V0", "index$": 11 }, { "active": true, "entity": "ip_info_v0", "key$": "BasicIpInfoV0Flow", "kind": "basic", "name": "BasicIpInfoV0Flow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ip_info_v0_ref01", "srcdatavar": "ip_info_v0_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_info_v0_ref01" } }], "index$": 0 }] }, 'IpInfoV0');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ip_info_v0_ref01_data = Object.values(setup.data.existing.ip_info_v0)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const ip_info_v0_ref01_ent = client.IpInfoV0();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ip_info_v0/IpInfoV0TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ip_info_v001', 'ip_info_v002', 'ip_info_v003', 'json01', 'json02', 'json03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_IP_INFO_V0_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IpGeolocationApi4SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=IpInfoV0Entity.test.js.map