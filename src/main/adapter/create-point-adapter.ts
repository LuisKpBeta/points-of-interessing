import CreatePointofInterestFactory from '../factories/create-point/create-point'
import { Request, Response } from 'express'
export default async function CreatePointAdapter (req: Request, res:Response):Promise<Response> {
  const pointController = CreatePointofInterestFactory()
  return await pointController.handle(req, res)
}
