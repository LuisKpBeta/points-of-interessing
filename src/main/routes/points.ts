import { Router, Request, Response } from 'express'
import CreatePointAdapter from '../adapter/create-point-adapter'
import LoadPointAdapter from '../adapter/load-point-adapter'

const pointRouter = Router()

pointRouter.post('/point', CreatePointAdapter)
pointRouter.get('/point', LoadPointAdapter)

export default pointRouter
