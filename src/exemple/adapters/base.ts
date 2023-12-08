
import { UserCollection } from '../app/user/UserCollection'
import { UserInterface } from '../app/user/userInterface'


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
