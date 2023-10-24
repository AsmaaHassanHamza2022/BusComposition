import { BtnTypes } from "./custom-btn/enums"

export interface BtnConfig{
    title?:string,
    action:()=>void
    type:BtnTypes
}