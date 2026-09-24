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
(0, node_test_1.describe)('TorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.Tor();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tor.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "ip": { "a": true, "h": "Ip", "n": "ip", "r": true, "sh": "The IP address that was checked", "t": "`$STRING`", "key$": "ip", "index$": 1 }, "is_tor": { "a": true, "h": "Is Tor", "n": "is_tor", "r": true, "sh": "Whether the IP is a known Tor exit node", "t": "`$BOOLEAN`", "key$": "is_tor", "index$": 2 }, "tor_node_count": { "a": true, "fo": "int32", "h": "Tor Node Count", "n": "tor_node_count", "r": true, "sh": "Total number of currently known Tor exit nodes in the database", "t": "`$INTEGER`", "key$": "tor_node_count", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "tor", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/tor/{ip}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "185.220.101.50", "k": "param", "n": "id", "or": "ip", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/tor/{ip}", "q": { "exist": ["id"] }, "r": { "param": { "ip": "id" } }, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "tor" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tor", "name__orig": "tor", "Name": "Tor", "name_": "tor", "name-": "tor", "NAME": "TOR", "index$": 20 }, { "active": true, "entity": "tor", "key$": "BasicTorFlow", "kind": "basic", "name": "BasicTorFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tor_ref01", "srcdatavar": "tor_ref01_data", "suffix": "_dt0" }, "m": { "id": "tor01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tor_ref01" } }], "index$": 0 }] }, 'Tor', { "GET /api/v1/tor/{ip}": { "protocol": "http", "operationId": "checkTorNode", "responses": { "200": { "description": "Tor detection result returned successfully", "content": { "application/json": { "schema": { "type": "object", "description": "Tor exit node detection result for the given IP address", "properties": { "ip": { "type": "string", "description": "The IP address that was checked", "example": "185.220.101.50", "key$": "ip" }, "is_tor": { "type": "boolean", "description": "Whether the IP is a known Tor exit node", "example": true, "key$": "is_tor" }, "tor_node_count": { "type": "integer", "format": "int32", "description": "Total number of currently known Tor exit nodes in the database", "example": 1247, "key$": "tor_node_count" } }, "required": ["ip", "is_tor", "tor_node_count"], "x-ref": "#/components/schemas/TorDetectionV1Dto", "index$": 0 } } } }, "400": { "description": "Bad Request — invalid IP address format", "content": { "application/json": { "schema": { "type": "object", "description": "Tor exit node detection result for the given IP address", "properties": { "ip": { "type": "string", "description": "The IP address that was checked", "example": "185.220.101.50", "key$": "ip" }, "is_tor": { "type": "boolean", "description": "Whether the IP is a known Tor exit node", "example": true, "key$": "is_tor" }, "tor_node_count": { "type": "integer", "format": "int32", "description": "Total number of currently known Tor exit nodes in the database", "example": 1247, "key$": "tor_node_count" } }, "required": ["ip", "is_tor", "tor_node_count"], "x-ref": "#/components/schemas/TorDetectionV1Dto" } } } }, "429": { "description": "Too Many Requests — rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "description": "Tor exit node detection result for the given IP address", "properties": { "ip": { "type": "string", "description": "The IP address that was checked", "example": "185.220.101.50", "key$": "ip" }, "is_tor": { "type": "boolean", "description": "Whether the IP is a known Tor exit node", "example": true, "key$": "is_tor" }, "tor_node_count": { "type": "integer", "format": "int32", "description": "Total number of currently known Tor exit nodes in the database", "example": 1247, "key$": "tor_node_count" } }, "required": ["ip", "is_tor", "tor_node_count"], "x-ref": "#/components/schemas/TorDetectionV1Dto" } } } } }, "parameters": [{ "name": "ip", "in": "path", "description": "IPv4 or IPv6 address to check against the Tor exit node list", "required": true, "schema": { "type": "string" }, "example": "185.220.101.50", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tor_ref01_data = Object.values(setup.data.existing.tor)[0];
        // LOAD
        const tor_ref01_ent = client.Tor();
        const tor_ref01_match_dt0 = {};
        tor_ref01_match_dt0.id = tor_ref01_data.id;
        const tor_ref01_data_dt0 = (await tor_ref01_ent.load(tor_ref01_match_dt0)).data();
        (0, node_assert_1.default)(tor_ref01_data_dt0.id === tor_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tor/TorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tor01', 'tor02', 'tor03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_TOR_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_TOR_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_TOR_ENTID'];
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
//# sourceMappingURL=TorEntity.test.js.map