
import { Collection } from '../ports/collection'
import { ProviderHash } from '../ports/providerHash'
import { UserInterface } from './userInterface'

export default class RegisterUser{


  constructor(
    private collection:Collection,
    private providerHash:ProviderHash
  ){}

  runner(name:string, email:string, password:string):UserInterface{
    const secretPassword = this.providerHash.cript(password)

    const user:UserInterface = {
      id: new Date().getTime().toString(),
      name,
      mail:email,
      pass:secretPassword
    }


    this.collection.insert(user)

    return user
  }
}
