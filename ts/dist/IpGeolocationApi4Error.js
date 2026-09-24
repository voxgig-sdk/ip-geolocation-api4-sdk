"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpGeolocationApi4Error = void 0;
class IpGeolocationApi4Error extends Error {
    isIpGeolocationApi4Error = true;
    sdk = 'IpGeolocationApi4';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IpGeolocationApi4Error = IpGeolocationApi4Error;
//# sourceMappingURL=IpGeolocationApi4Error.js.map