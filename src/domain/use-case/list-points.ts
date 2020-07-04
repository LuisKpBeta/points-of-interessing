import PointOfInterrest from '../model/point'

export interface LoadPointOfInterest{
 load():Promise<PointOfInterrest[]>
}
