import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Batch, BatchCreateData } from '../IpGeolocationApi4Types';
declare class BatchEntity extends IpGeolocationApi4EntityBase<Batch> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: BatchEntity): BatchEntity;
    create(this: any, reqdata?: BatchCreateData, ctrl?: Control): Promise<BatchEntity>;
}
export { BatchEntity };
