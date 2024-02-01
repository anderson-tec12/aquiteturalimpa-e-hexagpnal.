import { UserCollection } from '../../../app/user/UserCollection';
import { UserInterface } from '../../../app/user/userInterface';
import { connection } from './connection';

export class KNEX_collectionUserDB implements UserCollection{
  async insert(user: any): Promise<void> {
    await connection.table('users').insert(user)
  }

  async searchUserWithMail(email: string): Promise<UserInterface | null> {
    return await connection.table('user').where('email', email).first()
  }
}
