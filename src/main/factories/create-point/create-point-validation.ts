import RequiredFieldsValidation from '../../../validation/required-fields'
import ValidationComposite from '../../../validation/validation-composite'
import Validation from '../../../validation/protocols/validation'
export default function CreatePointValidation () {
  const fields = ['name', 'coordinateX', 'coordinateY']
  const validations:Validation[] = []
  for (const field of fields) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
