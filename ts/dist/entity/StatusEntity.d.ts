import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Status, StatusLoadMatch } from '../IpGeolocationApi4Types';
declare class StatusEntity extends IpGeolocationApi4EntityBase<Status> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: StatusEntity): StatusEntity;
    load(this: any, reqmatch?: StatusLoadMatch, ctrl?: Control): Promise<StatusEntity>;
}
export { StatusEntity };
