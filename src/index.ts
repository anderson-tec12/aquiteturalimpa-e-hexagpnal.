import dotenv from 'dotenv';

dotenv.config()
import express from 'express';

const app = express()

app.use(express.json())

app.use(express.urlencoded({
  extended:true
}))

app.get('/', (req, res) => {
  res.json({status:true})
} )
const port = process.env.PORT ?? 3001
app.listen(port, () => {
  console.log(`API is running in ${port}`)
})
