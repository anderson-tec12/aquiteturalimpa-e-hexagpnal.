export interface ProviderHash{
  cript(pass:string): string
  decript(pass:string, passCript:string):boolean
}
