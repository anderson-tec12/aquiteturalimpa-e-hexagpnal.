
import { UserCollection } from '../core/user/UserCollection'
import { UserInterface } from '../core/user/userInterface'


export default class Base implements UserCollection{
  itens:UserInterface[] = []

 async insert(item:UserInterface){
    this.itens.push(item)
    // return item
  }

  async searchUserWithMail(mail: string) {
      const userExist = this.itens.find(u => u.mail === mail)

      if(!userExist) return null

      return userExist
  }
}
