import { UserInterface } from '../user/userInterface';

export  interface UserCollection{
  insert(item:UserInterface): Promise<void>

  searchUserWithMail(email:string):Promise<UserInterface  | null>
}
