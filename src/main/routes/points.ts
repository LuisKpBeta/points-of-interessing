import { Router, Request, Response } from 'express'
import CreatePointAdapter from '../adapter/create-point-adapter'
import LoadPointAdapter from '../adapter/load-point-adapter'
import FindPointsByDistance from '../adapter/find-points-by-distance'

const pointRouter = Router()

pointRouter.post('/point', CreatePointAdapter)
pointRouter.get('/point', LoadPointAdapter)
pointRouter.get('/find-point', FindPointsByDistance)

export default pointRouter
