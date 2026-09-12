import { IpGeolocationApi4EntityBase } from '../IpGeolocationApi4EntityBase';
import type { IpGeolocationApi4SDK } from '../IpGeolocationApi4SDK';
import type { Control } from '../types';
import type { Email, EmailLoadMatch } from '../IpGeolocationApi4Types';
declare class EmailEntity extends IpGeolocationApi4EntityBase<Email> {
    constructor(client: IpGeolocationApi4SDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    load(this: any, reqmatch?: EmailLoadMatch, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
