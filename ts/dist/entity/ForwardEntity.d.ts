import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Forward, ForwardLoadMatch } from '../IpGeolocationApi4Types';
declare class ForwardEntity extends IpGeolocationApi4EntityBase<Forward> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: ForwardEntity): ForwardEntity;
    load(this: any, reqmatch?: ForwardLoadMatch, ctrl?: Control): Promise<ForwardEntity>;
}
export { ForwardEntity };
