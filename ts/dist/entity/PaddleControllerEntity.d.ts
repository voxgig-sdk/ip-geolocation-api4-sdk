import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { PaddleController, PaddleControllerLoadMatch, PaddleControllerCreateData } from '../IpGeolocationApi4Types';
declare class PaddleControllerEntity extends IpGeolocationApi4EntityBase<PaddleController> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: PaddleControllerEntity): PaddleControllerEntity;
    load(this: any, reqmatch?: PaddleControllerLoadMatch, ctrl?: Control): Promise<PaddleControllerEntity>;
    create(this: any, reqdata?: PaddleControllerCreateData, ctrl?: Control): Promise<PaddleControllerEntity>;
}
export { PaddleControllerEntity };
