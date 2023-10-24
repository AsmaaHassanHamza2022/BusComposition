export interface BusCompositionItem{
    BusTypeAr:string;
    BusTypeEn:string;
    seatsCount:number;
    rowCount:number;
    columnCount:number;
    levelCount:number;
}

export interface IPlacesTypes{
    attachment:string,
    created_at:string,
    id:number,
    is_seat:boolean,
    modified_at:string,
    placeType_an:string,
    placeType_ar:string
}