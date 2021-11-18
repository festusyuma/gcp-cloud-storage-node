require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import Cors from 'cors'
import routes from './routes'
import {CustomRequest} from "./app/dto/request";

const app = express()

app.use(Cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

declare global {
  namespace Express {
    interface Request extends CustomRequest {}
  }
}

//routes
app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
