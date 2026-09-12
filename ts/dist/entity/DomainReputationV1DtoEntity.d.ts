import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { DomainReputationV1Dto, DomainReputationV1DtoLoadMatch } from '../IpGeolocationApi4Types';
declare class DomainReputationV1DtoEntity extends IpGeolocationApi4EntityBase<DomainReputationV1Dto> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: DomainReputationV1DtoEntity): DomainReputationV1DtoEntity;
    load(this: any, reqmatch?: DomainReputationV1DtoLoadMatch, ctrl?: Control): Promise<DomainReputationV1DtoEntity>;
}
export { DomainReputationV1DtoEntity };
