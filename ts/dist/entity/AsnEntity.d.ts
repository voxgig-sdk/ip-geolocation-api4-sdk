import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Asn, AsnLoadMatch } from '../IpGeolocationApi4Types';
declare class AsnEntity extends IpGeolocationApi4EntityBase<Asn> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: AsnEntity): AsnEntity;
    load(this: any, reqmatch?: AsnLoadMatch, ctrl?: Control): Promise<AsnEntity>;
}
export { AsnEntity };
