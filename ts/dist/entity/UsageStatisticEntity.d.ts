import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { UsageStatistic, UsageStatisticLoadMatch } from '../IpGeolocationApi4Types';
declare class UsageStatisticEntity extends IpGeolocationApi4EntityBase<UsageStatistic> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: UsageStatisticEntity): UsageStatisticEntity;
    load(this: any, reqmatch?: UsageStatisticLoadMatch, ctrl?: Control): Promise<UsageStatisticEntity>;
}
export { UsageStatisticEntity };
