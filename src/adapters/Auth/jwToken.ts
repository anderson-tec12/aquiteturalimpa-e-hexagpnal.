import TokenProvider from '../../core/user/Token';
import jwt from 'jsonwebtoken'

export class JwtAdpter implements  TokenProvider{

  constructor(private secret:string){}

  build(payload:string | object): string {
    return jwt.sign(payload, this.secret, {
      expiresIn:'1d'
    })
  }

  validation(token: string): string | object {
    return jwt.verify(token.replace('Bearer', ''), this.secret)
  }
}
