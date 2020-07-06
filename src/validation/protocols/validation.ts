export default interface Validation {
  validate(field:any):{error:boolean, field?:string}
}
