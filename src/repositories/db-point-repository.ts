import { CreatePointOfInterest, CreatePointOfInterestModel, loa } from '../domain/use-case/create-point'
import { LoadPointOfInterest } from '../domain/use-case/list-points'
import PointOfInterrest from '../domain/model/point'
import { MongoHelper } from './mongo-helper'
export default class PointRepository implements CreatePointOfInterest, LoadPointOfInterest {
  async add (point: CreatePointOfInterestModel): Promise<PointOfInterrest> {
    const pointCollection = await MongoHelper.getCollection('points')
    const result = await pointCollection.insertOne(point)
    return MongoHelper.map(result.ops[0])
  }

  async load (): Promise<PointOfInterrest[]> {
    const pointCollection = await MongoHelper.getCollection('points')
    let result:PointOfInterrest[] = await pointCollection.find().toArray()
    result = result.map(item => {
      return MongoHelper.map(item)
    })
    return result
  }
}
