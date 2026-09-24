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
(0, node_test_1.describe)('RateLimitInfoDtoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API4_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API4_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi4SDK.test();
        const ent = testsdk.RateLimitInfoDto();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API4_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rate_limit_info_dto.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "email_api": { "a": true, "h": "Email Api", "n": "email_api", "r": true, "sh": "Email validation API rate limit information", "t": "`$OBJECT`", "key$": "email_api", "index$": 0 }, "interval_seconds": { "a": true, "fo": "int64", "h": "Interval Seconds", "n": "interval_seconds", "r": true, "sh": "Rate limit interval in seconds (time period for quota renewal)", "t": "`$INTEGER`", "key$": "interval_seconds", "index$": 1 }, "ip_api": { "a": true, "h": "Ip Api", "n": "ip_api", "r": true, "sh": "IP lookup API rate limit information", "t": "`$OBJECT`", "key$": "ip_api", "index$": 2 }, "next_renewal_date": { "a": true, "fo": "date", "h": "Next Renewal Date", "n": "next_renewal_date", "r": false, "sh": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)", "t": "`$STRING`", "key$": "next_renewal_date", "index$": 3 }, "plan_id": { "a": true, "h": "Plan Id", "n": "plan_id", "r": true, "sh": "Subscription plan ID or 'default' for free tier users", "t": "`$STRING`", "key$": "plan_id", "index$": 4 }, "plan_name": { "a": true, "h": "Plan Name", "n": "plan_name", "r": false, "sh": "Human-readable plan name (if available)", "t": "`$STRING`", "key$": "plan_name", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Subscription status (active, past_due, cancelled, etc.)", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "status", "index$": 6 } }, "name": "rate_limit_info_dto", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v1/ratelimit", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "abcdef1234567890abcdef1234567890", "k": "query", "n": "api_key", "or": "api_key", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v1/ratelimit", "q": { "exist": ["api_key"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v1" }, { "lit": "ratelimit" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "rate_limit_info_dto", "name__orig": "rate_limit_info_dto", "Name": "RateLimitInfoDto", "name_": "rate_limit_info_dto", "name-": "rate-limit-info-dto", "NAME": "RATE_LIMIT_INFO_DTO", "index$": 16 }, { "active": true, "entity": "rate_limit_info_dto", "key$": "BasicRateLimitInfoDtoFlow", "kind": "basic", "name": "BasicRateLimitInfoDtoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "rate_limit_info_dto_ref01", "srcdatavar": "rate_limit_info_dto_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rate_limit_info_dto_ref01" } }], "index$": 0 }] }, 'RateLimitInfoDto', { "GET /api/v1/ratelimit": { "protocol": "http", "operationId": "getRateLimitInfo", "responses": { "200": { "description": "Rate limit information retrieved successfully", "content": { "application/json": { "schema": { "type": "object", "description": "Rate limit information for the authenticated user, including current usage, limits, and renewal date", "properties": { "plan_id": { "description": "Subscription plan ID or 'default' for free tier users", "example": "550712", "key$": "plan_id", "type": "string" }, "plan_name": { "description": "Human-readable plan name (if available)", "example": "Professional Monthly", "key$": "plan_name", "type": "string" }, "ip_api": { "description": "IP lookup API rate limit information", "key$": "ip_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "email_api": { "description": "Email validation API rate limit information", "key$": "email_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "interval_seconds": { "description": "Rate limit interval in seconds (time period for quota renewal)", "example": 2678400, "format": "int64", "key$": "interval_seconds", "type": "integer" }, "next_renewal_date": { "description": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)", "example": "2025-11-26", "format": "date", "key$": "next_renewal_date", "type": "string" }, "status": { "description": "Subscription status (active, past_due, cancelled, etc.)", "example": "active", "key$": "status", "type": ["string", "null"] } }, "required": ["email_api", "interval_seconds", "ip_api", "plan_id"], "x-ref": "#/components/schemas/RateLimitInfoDto", "index$": 0 } } } }, "400": { "description": "Bad Request - API key is required", "content": { "*/*": { "schema": { "type": "object", "description": "Rate limit information for the authenticated user, including current usage, limits, and renewal date", "properties": { "plan_id": { "description": "Subscription plan ID or 'default' for free tier users", "example": "550712", "key$": "plan_id", "type": "string" }, "plan_name": { "description": "Human-readable plan name (if available)", "example": "Professional Monthly", "key$": "plan_name", "type": "string" }, "ip_api": { "description": "IP lookup API rate limit information", "key$": "ip_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "email_api": { "description": "Email validation API rate limit information", "key$": "email_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "interval_seconds": { "description": "Rate limit interval in seconds (time period for quota renewal)", "example": 2678400, "format": "int64", "key$": "interval_seconds", "type": "integer" }, "next_renewal_date": { "description": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)", "example": "2025-11-26", "format": "date", "key$": "next_renewal_date", "type": "string" }, "status": { "description": "Subscription status (active, past_due, cancelled, etc.)", "example": "active", "key$": "status", "type": ["string", "null"] } }, "required": ["email_api", "interval_seconds", "ip_api", "plan_id"], "x-ref": "#/components/schemas/RateLimitInfoDto" } } } }, "404": { "description": "Not Found - API key does not exist in the system", "content": { "*/*": { "schema": { "type": "object", "description": "Rate limit information for the authenticated user, including current usage, limits, and renewal date", "properties": { "plan_id": { "description": "Subscription plan ID or 'default' for free tier users", "example": "550712", "key$": "plan_id", "type": "string" }, "plan_name": { "description": "Human-readable plan name (if available)", "example": "Professional Monthly", "key$": "plan_name", "type": "string" }, "ip_api": { "description": "IP lookup API rate limit information", "key$": "ip_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "email_api": { "description": "Email validation API rate limit information", "key$": "email_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "interval_seconds": { "description": "Rate limit interval in seconds (time period for quota renewal)", "example": 2678400, "format": "int64", "key$": "interval_seconds", "type": "integer" }, "next_renewal_date": { "description": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)", "example": "2025-11-26", "format": "date", "key$": "next_renewal_date", "type": "string" }, "status": { "description": "Subscription status (active, past_due, cancelled, etc.)", "example": "active", "key$": "status", "type": ["string", "null"] } }, "required": ["email_api", "interval_seconds", "ip_api", "plan_id"], "x-ref": "#/components/schemas/RateLimitInfoDto" } } } }, "500": { "description": "Internal Server Error - Unable to retrieve rate limit information", "content": { "*/*": { "schema": { "type": "object", "description": "Rate limit information for the authenticated user, including current usage, limits, and renewal date", "properties": { "plan_id": { "description": "Subscription plan ID or 'default' for free tier users", "example": "550712", "key$": "plan_id", "type": "string" }, "plan_name": { "description": "Human-readable plan name (if available)", "example": "Professional Monthly", "key$": "plan_name", "type": "string" }, "ip_api": { "description": "IP lookup API rate limit information", "key$": "ip_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "email_api": { "description": "Email validation API rate limit information", "key$": "email_api", "properties": { "limit": { "description": "Maximum number of requests allowed in the rate limit interval", "example": 100000, "format": "int64", "type": "integer" }, "remaining": { "description": "Remaining requests available in the current interval", "example": 87532, "format": "int64", "type": "integer" }, "usage_percent": { "description": "Percentage of quota utilized (0-100)", "example": 12.47, "format": "double", "type": "number" }, "used": { "description": "Number of requests consumed in the current interval", "example": 12468, "format": "int64", "type": "integer" } }, "required": ["limit", "remaining", "usage_percent", "used"], "type": "object", "x-ref": "#/components/schemas/ApiLimitInfo" }, "interval_seconds": { "description": "Rate limit interval in seconds (time period for quota renewal)", "example": 2678400, "format": "int64", "key$": "interval_seconds", "type": "integer" }, "next_renewal_date": { "description": "Next billing/renewal date when the quota will be reset (ISO 8601 date format)", "example": "2025-11-26", "format": "date", "key$": "next_renewal_date", "type": "string" }, "status": { "description": "Subscription status (active, past_due, cancelled, etc.)", "example": "active", "key$": "status", "type": ["string", "null"] } }, "required": ["email_api", "interval_seconds", "ip_api", "plan_id"], "x-ref": "#/components/schemas/RateLimitInfoDto" } } } } }, "parameters": [{ "name": "api_key", "in": "query", "description": "API key for authentication (required).\n\n**API Key Format**: 32-character alphanumeric string\n**Required**: This parameter is mandatory for accessing rate limit information\n**Note**: Works with both active and expired API keys\n\n**Example**: `?api_key=your_api_key_here`", "required": true, "schema": { "type": "string" }, "example": "abcdef1234567890abcdef1234567890", "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rate_limit_info_dto_ref01_data = Object.values(setup.data.existing.rate_limit_info_dto)[0];
        // LOAD
        const rate_limit_info_dto_ref01_ent = client.RateLimitInfoDto();
        const rate_limit_info_dto_ref01_match_dt0 = {};
        const rate_limit_info_dto_ref01_data_dt0 = (await rate_limit_info_dto_ref01_ent.load(rate_limit_info_dto_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != rate_limit_info_dto_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rate_limit_info_dto/RateLimitInfoDtoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi4SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rate_limit_info_dto01', 'rate_limit_info_dto02', 'rate_limit_info_dto03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID': idmap,
        'IP_GEOLOCATION_API4_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API4_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API4_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API4_TEST_RATE_LIMIT_INFO_DTO_ENTID'];
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
//# sourceMappingURL=RateLimitInfoDtoEntity.test.js.map