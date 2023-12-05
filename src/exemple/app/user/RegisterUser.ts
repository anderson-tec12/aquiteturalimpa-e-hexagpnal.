
import { Collection } from '../ports/collection'
import { ProviderHash } from '../ports/providerHash'

export default class RegisterUser{


  constructor(
    private collection:Collection,
    private providerHash:ProviderHash
  ){}

  runner(name:string, email:string, password:string){
    const secretPassword = this.providerHash.cript(password)

    const user = {
      id: new Date().getTime(),
      name,
      email,
      password:secretPassword
    }


    this.collection.insert(user)

    return user
  }
}
