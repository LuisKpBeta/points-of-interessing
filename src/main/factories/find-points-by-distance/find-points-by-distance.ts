import FindPointsByDistance from '../../../controller/find-points-by-distance'
import PointRepository from '../../../repositories/db-point-repository'

export default function LoadPointofInterestFactory () {
  const loadPointsRepository = new PointRepository()
  const findPointsByDistance = new FindPointsByDistance(loadPointsRepository)
  return findPointsByDistance
}
