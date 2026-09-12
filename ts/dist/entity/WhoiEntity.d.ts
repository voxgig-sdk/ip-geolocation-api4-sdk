import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Whoi, WhoiLoadMatch } from '../IpGeolocationApi4Types';
declare class WhoiEntity extends IpGeolocationApi4EntityBase<Whoi> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: WhoiEntity): WhoiEntity;
    load(this: any, reqmatch?: WhoiLoadMatch, ctrl?: Control): Promise<WhoiEntity>;
}
export { WhoiEntity };
