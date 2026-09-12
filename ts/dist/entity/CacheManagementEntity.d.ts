import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { CacheManagement, CacheManagementLoadMatch, CacheManagementRemoveMatch } from '../IpGeolocationApi4Types';
declare class CacheManagementEntity extends IpGeolocationApi4EntityBase<CacheManagement> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: CacheManagementEntity): CacheManagementEntity;
    load(this: any, reqmatch?: CacheManagementLoadMatch, ctrl?: Control): Promise<CacheManagementEntity>;
    remove(this: any, reqmatch?: CacheManagementRemoveMatch, ctrl?: Control): Promise<CacheManagementEntity>;
}
export { CacheManagementEntity };
