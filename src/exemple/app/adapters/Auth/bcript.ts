import {genSaltSync, hashSync, compareSync} from 'bcrypt';

import { ProviderHash } from '../../ports/providerHash';

export class BCRYPT_ADAPTER implements ProviderHash{
  cript(pass: string): string {
    const salt = genSaltSync(10)
    return hashSync(pass, salt)
  }
  decript(pass: string, passCript: string): boolean {
    return compareSync(pass, passCript)
  }

}
