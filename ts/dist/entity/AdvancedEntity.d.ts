import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Advanced, AdvancedLoadMatch } from '../IpGeolocationApi4Types';
declare class AdvancedEntity extends IpGeolocationApi4EntityBase<Advanced> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: AdvancedEntity): AdvancedEntity;
    load(this: any, reqmatch?: AdvancedLoadMatch, ctrl?: Control): Promise<AdvancedEntity>;
}
export { AdvancedEntity };
