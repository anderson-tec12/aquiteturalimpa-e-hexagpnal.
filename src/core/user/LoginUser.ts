
import { UserCollection } from './UserCollection'
import { ProviderHash } from '../ports/providerHash'
import { UserInterface } from './userInterface'
import {ID} from '../shared/id'
import UserCase from '../shared/userCase'

type entry = {
  email:string,
  password: string
}

type exitInterface = {
  user:UserInterface,
  token:string
}
export default class LoginUser implements UserCase<entry, exitInterface>{

  constructor(
    private collection:UserCollection,
    private providerHash:ProviderHash
  ){}

  async runner({email,password}:entry):Promise<exitInterface>{

    const user = await this.collection.searchUserWithMail(email)

     if(!user){
      throw new Error('Users is not exists in system')
     }

    const passDecript = this.providerHash.decript(password, user.pass!)


    if(!passDecript) {
      throw new Error('Password incorrect')
    }

    return {
      user:{
        ...user,
        pass:undefined
      },
      token:''
    }
  }
}
