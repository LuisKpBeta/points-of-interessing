import FindPointsByDistance from '../factories/find-points-by-distance'
import { Request, Response } from 'express'
export default async function LoadPointsAdapter (req: Request, res:Response):Promise<Response> {
  const pointController = FindPointsByDistance()
  return await pointController.handle(req, res)
}
