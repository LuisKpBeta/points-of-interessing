import { Router, Request, Response } from 'express'
import CreatePointAdapter from '../adapter/create-point-adapter'

const pointRouter = Router()

pointRouter.post('/point', CreatePointAdapter)

export default pointRouter
