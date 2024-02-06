export default interface TokenProvider {
  build(payload:string | object): string
  validation(token: string): string | object
}
