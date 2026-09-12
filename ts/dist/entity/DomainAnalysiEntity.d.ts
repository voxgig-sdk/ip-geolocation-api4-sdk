import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { DomainAnalysi, DomainAnalysiLoadMatch, DomainAnalysiCreateData } from '../IpGeolocationApi4Types';
declare class DomainAnalysiEntity extends IpGeolocationApi4EntityBase<DomainAnalysi> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: DomainAnalysiEntity): DomainAnalysiEntity;
    load(this: any, reqmatch?: DomainAnalysiLoadMatch, ctrl?: Control): Promise<DomainAnalysiEntity>;
    create(this: any, reqdata?: DomainAnalysiCreateData, ctrl?: Control): Promise<DomainAnalysiEntity>;
}
export { DomainAnalysiEntity };
