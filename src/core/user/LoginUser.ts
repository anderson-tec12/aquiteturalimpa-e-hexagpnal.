
import { UserCollection } from './UserCollection'
import { ProviderHash } from '../ports/providerHash'
import { UserInterface } from './userInterface'
import {ID} from '../shared/id'

export default class LoginUser{

  constructor(
    private collection:UserCollection,
    private providerHash:ProviderHash
  ){}

  async runner(email:string, password:string):Promise<UserInterface>{

    const user = await this.collection.searchUserWithMail(email)

     if(!user){
      throw new Error('Users is not exists in system')
     }

    const passDecript = this.providerHash.decript(password, user.pass!)


    if(!passDecript) {
      throw new Error('Password incorrect')
    }

    return {
      ...user,
      pass:undefined
    }
  }
}
