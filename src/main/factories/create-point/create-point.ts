import CreateInterestPoint from '../../../controller/create-point'
import PointRepository from '../../../repositories/db-point-repository'
import CreatePointValidation from './create-point-validation'
export default function CreatePointofInterestFactory () {
  const validation = CreatePointValidation()
  const createPointRepository = new PointRepository()
  const createInterestPoint = new CreateInterestPoint(createPointRepository, validation)
  return createInterestPoint
}
