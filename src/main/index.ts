import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from './config/env'
import Mongo from 'mongodb'
import pointRouter from './routes/points'
import { MongoHelper } from '../repositories/mongo-helper'
const app:express.Application = express()

app.use(bodyParser.json())
app.use(cors())
app.use(pointRouter)
MongoHelper.connect(env.url).then(() => {
  app.listen(3000, () => {
    console.log('running')
  })
}).catch(err => {
  console.log(err)
})
