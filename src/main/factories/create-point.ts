import CreateInterestPoint from '../../controller/create-point'
import { CreatePointRepository } from '../../repositories/create-point'

export default function CreatePointofInterestFactory () {
  const createPointRepository = new CreatePointRepository()
  const createInterestPoint = new CreateInterestPoint(createPointRepository)
  return createInterestPoint
}
