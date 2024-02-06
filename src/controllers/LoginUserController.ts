import LoginUser from '../core/user/LoginUser';
import {Express} from 'express'

export default class LoginUserController{
  constructor(
    private server:Express,
    private loginUser:LoginUser
  ){
    server.post('/userLogin', async (req, res) => {
      try{
       const userLogin =  await  loginUser.runner(
          {
            email:req.body.mail,
            password:req.body.pass
          }
        )

        delete userLogin.user.pass
        res.status(200).json(userLogin)
      }catch(err:any){
        res.status(403).send('Email or pass incorrect')
      }
    })
  }
}
