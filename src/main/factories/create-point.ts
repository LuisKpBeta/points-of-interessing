import CreateInterestPoint from '../../controller/create-point'
import PointRepository from '../../repositories/db-point-repository'

export default function CreatePointofInterestFactory () {
  const createPointRepository = new PointRepository()
  const createInterestPoint = new CreateInterestPoint(createPointRepository)
  return createInterestPoint
}
