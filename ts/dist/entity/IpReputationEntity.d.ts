import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { IpReputation, IpReputationLoadMatch } from '../IpGeolocationApi4Types';
declare class IpReputationEntity extends IpGeolocationApi4EntityBase<IpReputation> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: IpReputationEntity): IpReputationEntity;
    load(this: any, reqmatch?: IpReputationLoadMatch, ctrl?: Control): Promise<IpReputationEntity>;
}
export { IpReputationEntity };
