import { LoadPointOfInterest } from '../domain/use-case/list-points'
import { Request, Response } from 'express'
export default class FindPointsByDistance {
  constructor (private loadPointOfInterest: LoadPointOfInterest) {}
  async handle (request:Request, response: Response):Promise<Response> {
    try {
      const distance = parseFloat(request.query.distance.toString())
      const coordinateX = parseFloat(request.query.x.toString())
      const coordinateY = parseFloat(request.query.y.toString())
      const allPoints = await this.loadPointOfInterest.load()
      const filteredByDistance = allPoints.filter(point => {
        const distanceX = Math.pow((point.coordenate.x - coordinateX), 2)
        const distanceY = Math.pow((point.coordenate.y - coordinateY), 2)
        const distanceTotal = Math.sqrt(distanceX + distanceY)
        console.log(point.name, distanceTotal)
        return distanceTotal <= distance
      })
      return response.status(200).json(filteredByDistance)
    } catch (error) {
      return response.status(500).json('Interval Server Error')
    }
  }
}
