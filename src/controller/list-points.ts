import { LoadPointOfInterest } from '../domain/use-case/list-points'
import { Request, Response } from 'express'
export default class ListPointOfInterest {
  constructor (private loadPointOfInterest: LoadPointOfInterest) {}
  async handle (request:Request, response: Response):Promise<Response> {
    try {
      const points = await this.loadPointOfInterest.load()
      return response.status(200).json(points)
    } catch (error) {
      return response.status(500).json('Interval Server Error')
    }
  }
}
