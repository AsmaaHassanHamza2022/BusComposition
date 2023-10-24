import { BtnTypes } from "./custom-btn/enums"

export interface BtnConfig{
    title?:string,
    action:(data?:any)=>void
    type:BtnTypes
}