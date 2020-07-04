import { CreatePointOfInterest } from '../domain/use-case/create-point'
import { Request, Response } from 'express'
export default class CreateInterestPoint {
  constructor (private createPointOfInterest:CreatePointOfInterest) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const name:string = request.body.name
      const coordinateX:number = request.body.coordinateX
      const coordinateY:number = request.body.coordinateY
      const coordenate = {
        x: coordinateX,
        y: coordinateY
      }
      const createdPoint = await this.createPointOfInterest.add({ name, coordenate })
      response.status(200)
      return response.json({ createdPoint })
    } catch (error) {
      console.log(error.stack)
      return response.status(500).json('Interval Server Error')
    }
  }
}
