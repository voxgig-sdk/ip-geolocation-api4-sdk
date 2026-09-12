import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Mxn, MxnLoadMatch } from '../IpGeolocationApi4Types';
declare class MxnEntity extends IpGeolocationApi4EntityBase<Mxn> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: MxnEntity): MxnEntity;
    load(this: any, reqmatch?: MxnLoadMatch, ctrl?: Control): Promise<MxnEntity>;
}
export { MxnEntity };
