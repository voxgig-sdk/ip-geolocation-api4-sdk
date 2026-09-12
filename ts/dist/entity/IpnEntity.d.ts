import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Ipn, IpnLoadMatch } from '../IpGeolocationApi4Types';
declare class IpnEntity extends IpGeolocationApi4EntityBase<Ipn> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: IpnEntity): IpnEntity;
    load(this: any, reqmatch?: IpnLoadMatch, ctrl?: Control): Promise<IpnEntity>;
}
export { IpnEntity };
