import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlacesTypes } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BusCompositionsService {
  buses:any[]=[];
  busList$:BehaviorSubject<any>=new BehaviorSubject<any>([]);
  busList:Observable<any>=this.busList$.asObservable();
  constructor(private http:HttpClient) { }


  public getPlacesTypes():Observable<IPlacesTypes[]>{
    return this.http.get<IPlacesTypes[]>('assets/placeTypes.json')
  }

  // public addNewBus({busConfig:any,busPlaces:any}){
  //   this.buses.push(data);
  //   this.busList$.next(this.buses);

  // }

}
