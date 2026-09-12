import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Tor, TorLoadMatch } from '../IpGeolocationApi4Types';
declare class TorEntity extends IpGeolocationApi4EntityBase<Tor> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: TorEntity): TorEntity;
    load(this: any, reqmatch?: TorLoadMatch, ctrl?: Control): Promise<TorEntity>;
}
export { TorEntity };
