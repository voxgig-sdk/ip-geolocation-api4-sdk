import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { BatchEmailValidationResponseDto, BatchEmailValidationResponseDtoCreateData } from '../IpGeolocationApi4Types';
declare class BatchEmailValidationResponseDtoEntity extends IpGeolocationApi4EntityBase<BatchEmailValidationResponseDto> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: BatchEmailValidationResponseDtoEntity): BatchEmailValidationResponseDtoEntity;
    create(this: any, reqdata?: BatchEmailValidationResponseDtoCreateData, ctrl?: Control): Promise<BatchEmailValidationResponseDtoEntity>;
}
export { BatchEmailValidationResponseDtoEntity };
