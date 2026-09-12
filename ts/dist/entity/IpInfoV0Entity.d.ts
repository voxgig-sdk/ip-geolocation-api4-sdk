import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { IpInfoV0, IpInfoV0LoadMatch } from '../IpGeolocationApi4Types';
declare class IpInfoV0Entity extends IpGeolocationApi4EntityBase<IpInfoV0> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: IpInfoV0Entity): IpInfoV0Entity;
    load(this: any, reqmatch?: IpInfoV0LoadMatch, ctrl?: Control): Promise<IpInfoV0Entity>;
}
export { IpInfoV0Entity };
