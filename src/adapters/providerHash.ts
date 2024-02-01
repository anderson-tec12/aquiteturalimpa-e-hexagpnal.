import { ProviderHash } from '../core/ports/providerHash'


export class HashProvider implements ProviderHash{
  decript(pass: string, passCript: string): boolean {
    const passCurrent = this.cript(pass)

    return passCurrent === passCript

  }

  cript(pass: string): string {
      return pass.split('').reverse().join('')
  }
}
