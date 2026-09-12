import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { ApiUsageSummary, ApiUsageSummaryLoadMatch } from '../IpGeolocationApi4Types';
declare class ApiUsageSummaryEntity extends IpGeolocationApi4EntityBase<ApiUsageSummary> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: ApiUsageSummaryEntity): ApiUsageSummaryEntity;
    load(this: any, reqmatch?: ApiUsageSummaryLoadMatch, ctrl?: Control): Promise<ApiUsageSummaryEntity>;
}
export { ApiUsageSummaryEntity };
