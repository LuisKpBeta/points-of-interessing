import PointOfInterrest from '../model/point'

export interface CreatePointOfInterestModel{
  name:string
  coordenate:{
    x:number,
    y:number
  }
}
export interface CreatePointOfInterest{
 add(point: CreatePointOfInterestModel):Promise<PointOfInterrest>
}
