import LoadPointofInterestFactory from '../factories/load-point'
import { Request, Response } from 'express'
export default async function LoadPointsAdapter (req: Request, res:Response):Promise<Response> {
  const pointController = LoadPointofInterestFactory()
  return await pointController.handle(req, res)
}
