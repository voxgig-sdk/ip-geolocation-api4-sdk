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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AsnEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.Asn();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'asn.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "asn": { "a": true, "fo": "int64", "h": "Asn", "n": "asn", "r": false, "t": ["`$ONE`", ["`$INTEGER`", "`$NULL`"]], "key$": "asn", "index$": 0 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "country", "index$": 1 }, "country_code": { "a": true, "h": "Country Code", "n": "country_code", "r": false, "t": "`$STRING`", "key$": "country_code", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "ip": { "a": true, "h": "Ip", "n": "ip", "r": true, "t": "`$STRING`", "key$": "ip", "index$": 4 }, "is_datacenter": { "a": true, "h": "Is Datacenter", "n": "is_datacenter", "r": true, "t": "`$BOOLEAN`", "key$": "is_datacenter", "index$": 5 }, "network": { "a": true, "h": "Network", "n": "network", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "network", "index$": 6 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "organization", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "asn", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/asn/{ip}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "8.8.8.8", "k": "param", "n": "id", "or": "ip", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/asn/{ip}", "q": { "exist": ["id"] }, "r": { "param": { "ip": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "asn" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "asn", "name__orig": "asn", "Name": "Asn", "name_": "asn", "name-": "asn", "NAME": "ASN", "index$": 3 }, { "active": true, "entity": "asn", "key$": "BasicAsnFlow", "kind": "basic", "name": "BasicAsnFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "asn_ref01", "srcdatavar": "asn_ref01_data", "suffix": "_dt0" }, "m": { "id": "asn01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-asn_ref01" } }], "index$": 0 }] }, 'Asn', { "GET /api/v1/asn/{ip}": { "protocol": "http", "operationId": "getAsn", "responses": { "200": { "description": "ASN data retrieved successfully", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "type": "string", "key$": "ip" }, "asn": { "type": ["integer", "null"], "format": "int64", "key$": "asn" }, "organization": { "type": ["string", "null"], "key$": "organization" }, "network": { "type": ["string", "null"], "key$": "network" }, "is_datacenter": { "type": "boolean", "key$": "is_datacenter" }, "country": { "type": ["string", "null"], "key$": "country" }, "country_code": { "type": "string", "key$": "country_code" } }, "required": ["ip", "is_datacenter"], "x-ref": "#/components/schemas/AsnLookupResponse", "index$": 0 } } } }, "400": { "description": "Invalid IP address format", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "type": "string", "key$": "ip" }, "asn": { "type": ["integer", "null"], "format": "int64", "key$": "asn" }, "organization": { "type": ["string", "null"], "key$": "organization" }, "network": { "type": ["string", "null"], "key$": "network" }, "is_datacenter": { "type": "boolean", "key$": "is_datacenter" }, "country": { "type": ["string", "null"], "key$": "country" }, "country_code": { "type": "string", "key$": "country_code" } }, "required": ["ip", "is_datacenter"], "x-ref": "#/components/schemas/AsnLookupResponse" } } } }, "404": { "description": "No ASN data found for IP", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "type": "string", "key$": "ip" }, "asn": { "type": ["integer", "null"], "format": "int64", "key$": "asn" }, "organization": { "type": ["string", "null"], "key$": "organization" }, "network": { "type": ["string", "null"], "key$": "network" }, "is_datacenter": { "type": "boolean", "key$": "is_datacenter" }, "country": { "type": ["string", "null"], "key$": "country" }, "country_code": { "type": "string", "key$": "country_code" } }, "required": ["ip", "is_datacenter"], "x-ref": "#/components/schemas/AsnLookupResponse" } } } }, "429": { "description": "Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "type": "string", "key$": "ip" }, "asn": { "type": ["integer", "null"], "format": "int64", "key$": "asn" }, "organization": { "type": ["string", "null"], "key$": "organization" }, "network": { "type": ["string", "null"], "key$": "network" }, "is_datacenter": { "type": "boolean", "key$": "is_datacenter" }, "country": { "type": ["string", "null"], "key$": "country" }, "country_code": { "type": "string", "key$": "country_code" } }, "required": ["ip", "is_datacenter"], "x-ref": "#/components/schemas/AsnLookupResponse" } } } } }, "parameters": [{ "name": "ip", "in": "path", "description": "IPv4 or IPv6 address, e.g. 8.8.8.8", "required": true, "schema": { "type": "string" }, "example": "8.8.8.8", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let asn_ref01_data = Object.values(setup.data.existing.asn)[0];
        // LOAD
        const asn_ref01_ent = client.Asn();
        const asn_ref01_match_dt0 = {};
        asn_ref01_match_dt0.id = asn_ref01_data.id;
        const asn_ref01_data_dt0 = (await asn_ref01_ent.load(asn_ref01_match_dt0)).data();
        (0, node_assert_1.default)(asn_ref01_data_dt0.id === asn_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/asn/AsnTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['asn01', 'asn02', 'asn03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_ASN_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_ASN_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_ASN_ENTID'];
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
//# sourceMappingURL=AsnEntity.test.js.map