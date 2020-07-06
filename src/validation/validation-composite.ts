import Validation from './protocols/validation'

export default class ValidationComposite implements Validation {
  constructor (private validators: Validation[]) {}
  validate (input:any):{error:boolean, field?:string} {
    for (const validation of this.validators) {
      const response = validation.validate(input)
      if (response.error) {
        return response
      }
    }
    return { error: false }
  }
}
