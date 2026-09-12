import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { RateLimitInfoDto, RateLimitInfoDtoLoadMatch } from '../IpGeolocationApi4Types';
declare class RateLimitInfoDtoEntity extends IpGeolocationApi4EntityBase<RateLimitInfoDto> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: RateLimitInfoDtoEntity): RateLimitInfoDtoEntity;
    load(this: any, reqmatch?: RateLimitInfoDtoLoadMatch, ctrl?: Control): Promise<RateLimitInfoDtoEntity>;
}
export { RateLimitInfoDtoEntity };
