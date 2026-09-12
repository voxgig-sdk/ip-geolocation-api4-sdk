import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { ApiUsageStatsModel, ApiUsageStatsModelLoadMatch } from '../IpGeolocationApi4Types';
declare class ApiUsageStatsModelEntity extends IpGeolocationApi4EntityBase<ApiUsageStatsModel> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: ApiUsageStatsModelEntity): ApiUsageStatsModelEntity;
    load(this: any, reqmatch?: ApiUsageStatsModelLoadMatch, ctrl?: Control): Promise<ApiUsageStatsModelEntity>;
}
export { ApiUsageStatsModelEntity };
