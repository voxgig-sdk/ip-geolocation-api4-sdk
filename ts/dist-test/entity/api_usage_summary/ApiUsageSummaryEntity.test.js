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
(0, node_test_1.describe)('ApiUsageSummaryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.ApiUsageSummary();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_usage_summary.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "apiKey": { "a": true, "h": "Api Key", "n": "apiKey", "r": true, "t": "`$STRING`", "key$": "apiKey", "index$": 0 }, "apiType": { "a": true, "h": "Api Type", "n": "apiType", "r": true, "t": "`$STRING`", "key$": "apiType", "index$": 1 }, "avgRequestDurationMs": { "a": true, "fo": "double", "h": "Avg Request Duration Ms", "n": "avgRequestDurationMs", "r": false, "t": ["`$ONE`", ["`$NUMBER`", "`$NULL`"]], "key$": "avgRequestDurationMs", "index$": 2 }, "batchOperations": { "a": true, "fo": "int64", "h": "Batch Operations", "n": "batchOperations", "r": true, "t": "`$INTEGER`", "key$": "batchOperations", "index$": 3 }, "periodEnd": { "a": true, "fo": "date-time", "h": "Period End", "n": "periodEnd", "r": true, "t": "`$STRING`", "key$": "periodEnd", "index$": 4 }, "periodStart": { "a": true, "fo": "date-time", "h": "Period Start", "n": "periodStart", "r": true, "t": "`$STRING`", "key$": "periodStart", "index$": 5 }, "quotaConsumed": { "a": true, "fo": "int64", "h": "Quota Consumed", "n": "quotaConsumed", "r": true, "t": "`$INTEGER`", "key$": "quotaConsumed", "index$": 6 }, "rateLimitedRequests": { "a": true, "fo": "int64", "h": "Rate Limited Requests", "n": "rateLimitedRequests", "r": true, "t": "`$INTEGER`", "key$": "rateLimitedRequests", "index$": 7 }, "successfulRequests": { "a": true, "fo": "int64", "h": "Successful Requests", "n": "successfulRequests", "r": true, "t": "`$INTEGER`", "key$": "successfulRequests", "index$": 8 }, "totalRequests": { "a": true, "fo": "int64", "h": "Total Requests", "n": "totalRequests", "r": true, "t": "`$INTEGER`", "key$": "totalRequests", "index$": 9 } }, "name": "api_usage_summary", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/usage/summary", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "your-api-key-here", "k": "query", "n": "api_key", "or": "api_key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "IP", "k": "query", "n": "api_type", "or": "api_type", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "2025-11-04T00:00:00Z", "k": "query", "n": "end_date", "or": "end_date", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "2025-11-01T00:00:00Z", "k": "query", "n": "start_date", "or": "start_date", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v1/usage/summary", "q": { "exist": ["api_key", "api_type", "end_date", "start_date"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "usage" }, { "lit": "summary" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api_usage_summary", "name__orig": "api_usage_summary", "Name": "ApiUsageSummary", "name_": "api_usage_summary", "name-": "api-usage-summary", "NAME": "API_USAGE_SUMMARY", "index$": 2 }, { "active": true, "entity": "api_usage_summary", "key$": "BasicApiUsageSummaryFlow", "kind": "basic", "name": "BasicApiUsageSummaryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_usage_summary_ref01", "srcdatavar": "api_usage_summary_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_usage_summary_ref01" } }], "index$": 0 }] }, 'ApiUsageSummary', { "GET /api/v1/usage/summary": { "protocol": "http", "operationId": "getUsageSummary", "responses": { "200": { "description": "Successfully retrieved usage summary", "content": { "application/json": { "schema": { "type": "object", "properties": { "apiKey": { "key$": "apiKey", "type": "string" }, "apiType": { "key$": "apiType", "type": "string" }, "periodStart": { "format": "date-time", "key$": "periodStart", "type": "string" }, "periodEnd": { "format": "date-time", "key$": "periodEnd", "type": "string" }, "totalRequests": { "format": "int64", "key$": "totalRequests", "type": "integer" }, "successfulRequests": { "format": "int64", "key$": "successfulRequests", "type": "integer" }, "rateLimitedRequests": { "format": "int64", "key$": "rateLimitedRequests", "type": "integer" }, "quotaConsumed": { "format": "int64", "key$": "quotaConsumed", "type": "integer" }, "batchOperations": { "format": "int64", "key$": "batchOperations", "type": "integer" }, "avgRequestDurationMs": { "format": "double", "key$": "avgRequestDurationMs", "type": ["number", "null"] } }, "required": ["apiKey", "apiType", "batchOperations", "periodEnd", "periodStart", "quotaConsumed", "rateLimitedRequests", "successfulRequests", "totalRequests"], "x-ref": "#/components/schemas/ApiUsageSummary", "index$": 0 } } } }, "401": { "description": "Invalid or missing API key", "content": { "*/*": { "schema": { "type": "object" } } } }, "404": { "description": "No usage data found for this period", "content": { "*/*": { "schema": { "type": "object" } } } } }, "parameters": [{ "name": "api_key", "in": "query", "description": "Your API key", "required": true, "schema": { "type": "string" }, "example": "your-api-key-here", "index$": 0 }, { "name": "start_date", "in": "query", "description": "Start date in ISO 8601 format (inclusive)", "required": true, "schema": { "type": "string", "format": "date-time" }, "example": "2025-11-01T00:00:00Z", "index$": 1 }, { "name": "end_date", "in": "query", "description": "End date in ISO 8601 format (exclusive)", "required": true, "schema": { "type": "string", "format": "date-time" }, "example": "2025-11-04T00:00:00Z", "index$": 2 }, { "name": "api_type", "in": "query", "description": "Filter by API type (optional)", "required": false, "schema": { "type": "string", "enum": ["IP", "ADVANCED_EMAIL_VALIDATION"] }, "example": "IP", "index$": 3 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_usage_summary_ref01_data = Object.values(setup.data.existing.api_usage_summary)[0];
        // LOAD
        const api_usage_summary_ref01_ent = client.ApiUsageSummary();
        const api_usage_summary_ref01_match_dt0 = {};
        const api_usage_summary_ref01_data_dt0 = (await api_usage_summary_ref01_ent.load(api_usage_summary_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != api_usage_summary_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_usage_summary/ApiUsageSummaryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_usage_summary01', 'api_usage_summary02', 'api_usage_summary03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_API_USAGE_SUMMARY_ENTID'];
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
//# sourceMappingURL=ApiUsageSummaryEntity.test.js.map