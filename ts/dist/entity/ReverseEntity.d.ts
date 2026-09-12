import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Reverse, ReverseLoadMatch } from '../IpGeolocationApi4Types';
declare class ReverseEntity extends IpGeolocationApi4EntityBase<Reverse> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: ReverseEntity): ReverseEntity;
    load(this: any, reqmatch?: ReverseLoadMatch, ctrl?: Control): Promise<ReverseEntity>;
}
export { ReverseEntity };
