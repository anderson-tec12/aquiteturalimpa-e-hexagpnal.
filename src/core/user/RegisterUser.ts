
import { UserCollection } from './UserCollection'
import { ProviderHash } from '../ports/providerHash'
import { UserInterface } from './userInterface'
import {ID} from '../shared/id'
export default class RegisterUser{


  constructor(
    private collection:UserCollection,
    private providerHash:ProviderHash
  ){}

  async runner(name:string, email:string, password:string):Promise<UserInterface>{
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
