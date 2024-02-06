import dotenv from 'dotenv';

dotenv.config()
import express from 'express';
import RegisterUserController from './controllers/RegisterUserController';
import RegisterUser from './core/user/RegisterUser';
import { KNEX_collectionUserDB } from './adapters/DB/knex/knexCollection';
import { HashProvider } from './adapters/providerHash';
import LoginUserController from './controllers/LoginUserController';
import LoginUser from './core/user/LoginUser';
import { JwtAdpter } from './adapters/Auth/jwToken';

const app = express()

app.use(express.json())

app.use(express.urlencoded({
  extended:true
}))

app.get('/test', (req, res) => {
  res.json({status:true})
} )

// Open routes ---------------------------

const providerToken = new JwtAdpter(process.env.SECRET!)
const userCollection = new KNEX_collectionUserDB()
const providerHash = new HashProvider()
const registerUser = new RegisterUser(userCollection, providerHash)
const loginUser = new LoginUser(userCollection, providerHash, providerToken)


new RegisterUserController(app, registerUser)
new LoginUserController(app,loginUser)

// Close routes -------------------------




// Server listen

const port = process.env.PORT ?? 3001
app.listen(port, () => {
  console.log(`API is running in ${port}`)
})
