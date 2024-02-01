import dotenv from 'dotenv';

dotenv.config()
import express from 'express';
import RegisterUserController from './controllers/RegisterUserController';
import RegisterUser from './core/user/RegisterUser';
import { KNEX_collectionUserDB } from './adapters/DB/knex/knexCollection';
import { HashProvider } from './adapters/providerHash';

const app = express()

app.use(express.json())

app.use(express.urlencoded({
  extended:true
}))

app.get('/test', (req, res) => {
  res.json({status:true})
} )

const userCollection = new KNEX_collectionUserDB()
const providerHash = new HashProvider()
const registerUser = new RegisterUser(userCollection, providerHash)

new RegisterUserController(app, registerUser)

const port = process.env.PORT ?? 3001
app.listen(port, () => {
  console.log(`API is running in ${port}`)
})
