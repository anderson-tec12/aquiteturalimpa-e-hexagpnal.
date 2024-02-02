import RegisterUser from '../core/user/RegisterUser';
import {Express} from 'express'

export default class RegisterUserController{
  constructor(
    private server:Express,
    private registerUser:RegisterUser
  ){
    server.post('/user', async (req, res) => {
      try{
        await  registerUser.runner(
          req.body.name,
          req.body.mail,
          req.body.pass
        )

        res.status(201).send()
      }catch(err:any){
        res.status(400).send(err.message)
      }
    })
  }
}
