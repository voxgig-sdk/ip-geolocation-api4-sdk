import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { RiskScore, RiskScoreLoadMatch } from '../IpGeolocationApi4Types';
declare class RiskScoreEntity extends IpGeolocationApi4EntityBase<RiskScore> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: RiskScoreEntity): RiskScoreEntity;
    load(this: any, reqmatch?: RiskScoreLoadMatch, ctrl?: Control): Promise<RiskScoreEntity>;
}
export { RiskScoreEntity };
