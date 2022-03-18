import { Option } from "./option.model"

export interface Section{
    id:number
    required:boolean,
    name:string,
    type:number,
    maxOp:number,
    options:Option[]
}