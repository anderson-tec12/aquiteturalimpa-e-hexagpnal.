
import { Collection } from './collection'

export default class RegisterUser{


  constructor(private collection:Collection){}

  runner(name:string, email:string, password:string){
    const secretPassword = password.split('').reverse().join('')

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
