
import { UserCollection } from './UserCollection'
import { ProviderHash } from '../ports/providerHash'
import { UserInterface } from './userInterface'
import {ID} from '../shared/id'
import UserCase from '../shared/userCase'

export type entryInterface = {
  name:string, email:string, password:string
}
export default class RegisterUser implements UserCase<entryInterface, UserInterface>{


  constructor(
    private collection:UserCollection,
    private providerHash:ProviderHash
  ){}

  async runner({email,name,password}:entryInterface):Promise<UserInterface>{
    const secretPassword = this.providerHash.cript(password)

    const userExist = await this.collection.searchUserWithMail(email)

    if(userExist){
      throw new Error('Users is exists')
    }

    const user:UserInterface = {
      id: ID.render(),
      name,
      mail:email,
      pass:secretPassword
    }


    this.collection.insert(user)

    return user
  }
}
