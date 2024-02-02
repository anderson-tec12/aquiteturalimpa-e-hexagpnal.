import LoginUser from '../core/user/LoginUser';
import {Express} from 'express'

export default class LoginUserController{
  constructor(
    private server:Express,
    private loginUser:LoginUser
  ){
    server.post('/userLogin', async (req, res) => {
      try{
       const user =  await  loginUser.runner(
          req.body.mail,
          req.body.pass
        )

        delete user.pass
        res.status(200).json(user)
      }catch(err:any){
        res.status(403).send('Email or pass incorrect')
      }
    })
  }
}
