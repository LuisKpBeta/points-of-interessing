import ListPointOfInterest from '../../controller/list-points'
import PointRepository from '../../repositories/db-point-repository'

export default function LoadPointofInterestFactory () {
  const loadPointsRepository = new PointRepository()
  const loadInterestPoints = new ListPointOfInterest(loadPointsRepository)
  return loadInterestPoints
}
