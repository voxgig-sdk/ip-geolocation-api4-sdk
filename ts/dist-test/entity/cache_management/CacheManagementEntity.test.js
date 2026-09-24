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
(0, node_test_1.describe)('CacheManagementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.CacheManagement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cache_management.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "cache_management", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /management/cache/domain-age/check/{domain}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "domain", "or": "domain", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/management/cache/domain-age/check/{domain}", "q": { "exist": ["domain"] }, "r": {}, "s": [{ "lit": "management" }, { "lit": "cache" }, { "lit": "domain-age" }, { "lit": "check" }, { "var": "domain" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /management/cache/domain-age/stats", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/management/cache/domain-age/stats", "q": {}, "r": {}, "s": [{ "lit": "management" }, { "lit": "cache" }, { "lit": "domain-age" }, { "lit": "stats" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /management/cache/domain-age", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "DELETE", "o": "/management/cache/domain-age", "q": {}, "r": {}, "s": [{ "lit": "management" }, { "lit": "cache" }, { "lit": "domain-age" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /management/cache/domain-age/all", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "DELETE", "o": "/management/cache/domain-age/all", "q": {}, "r": {}, "s": [{ "lit": "management" }, { "lit": "cache" }, { "lit": "domain-age" }, { "lit": "all" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "cache_management", "name__orig": "cache_management", "Name": "CacheManagement", "name_": "cache_management", "name-": "cache-management", "NAME": "CACHE_MANAGEMENT", "index$": 6 }, { "active": true, "entity": "cache_management", "key$": "BasicCacheManagementFlow", "kind": "basic", "name": "BasicCacheManagementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cache_management_ref01", "srcdatavar": "cache_management_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cache_management_ref01" } }], "index$": 0 }] }, 'CacheManagement', { "GET /management/cache/domain-age/check/{domain}": { "protocol": "http", "operationId": "isDomainCached", "responses": { "200": { "description": "Cache status retrieved successfully", "content": { "*/*": { "schema": { "type": "object", "additionalProperties": {} } } } } }, "parameters": [{ "name": "domain", "in": "path", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" }, "GET /management/cache/domain-age/stats": { "protocol": "http", "operationId": "getDomainAgeCacheStats", "responses": { "200": { "description": "Cache statistics retrieved successfully", "content": { "*/*": { "schema": { "type": "object", "additionalProperties": {} } } } } }, "parameters": [], "securitySource": "unspecified" }, "DELETE /management/cache/domain-age": { "protocol": "http", "operationId": "clearDomainAgeCache", "responses": { "200": { "description": "Cache cleared successfully", "content": { "*/*": { "schema": { "type": "object", "additionalProperties": { "type": "string" } } } } } }, "parameters": [], "securitySource": "unspecified" }, "DELETE /management/cache/domain-age/all": { "protocol": "http", "operationId": "clearAllDomainAgeCaches", "responses": { "200": { "description": "All caches cleared successfully", "content": { "*/*": { "schema": { "type": "object", "additionalProperties": { "type": "string" } } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cache_management_ref01_data = Object.values(setup.data.existing.cache_management)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const cache_management_ref01_ent = client.CacheManagement();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cache_management/CacheManagementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cache_management01', 'cache_management02', 'cache_management03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_CACHE_MANAGEMENT_ENTID'];
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
//# sourceMappingURL=CacheManagementEntity.test.js.map