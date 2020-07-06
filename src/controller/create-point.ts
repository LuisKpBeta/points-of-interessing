import { CreatePointOfInterest } from '../domain/use-case/create-point'
import { Request, Response } from 'express'
import Validation from '../validation/protocols/validation'
export default class CreateInterestPoint {
  constructor (
    private createPointOfInterest:CreatePointOfInterest,
    private validator: Validation
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const validationResponse = this.validator.validate(request.body)

      const { name, coordinateX, coordinateY }:
      {name:string, coordinateX:number, coordinateY: number} = request.body
      const coordenate = {
        x: coordinateX,
        y: coordinateY
      }
      if (validationResponse.error) {
        return response.status(400).json(`Invalid field ${validationResponse.field}`)
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
