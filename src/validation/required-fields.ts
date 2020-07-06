import Validation from './protocols/validation'

export default class RequiredFieldsValidation implements Validation {
  constructor (private field: string) {}
  validate (input:any):{error:boolean, field?:string} {
    if (!input[this.field]) {
      return { error: true, field: this.field }
    }
    return { error: false }
  }
}
