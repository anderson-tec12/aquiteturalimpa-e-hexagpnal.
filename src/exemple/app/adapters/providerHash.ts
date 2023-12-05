import { ProviderHash } from '../ports/providerHash';

export class HashProvider implements ProviderHash{
  cript(pass: string): string {
      return pass.split('').reverse().join('')
  }
}
