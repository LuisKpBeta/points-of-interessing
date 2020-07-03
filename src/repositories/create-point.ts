import { CreatePointOfInterest, CreatePointOfInterestModel } from '../domain/use-case/create-point'
import PointOfInterrest from '../domain/model/point'
import { MongoHelper } from './mongo-helper'
export class CreatePointRepository implements CreatePointOfInterest {
  async add (point: CreatePointOfInterestModel): Promise<PointOfInterrest> {
    const pointCollection = await MongoHelper.getCollection('points')
    const result = await pointCollection.insertOne(point)
    return MongoHelper.map(result.ops[0])
  }
}
