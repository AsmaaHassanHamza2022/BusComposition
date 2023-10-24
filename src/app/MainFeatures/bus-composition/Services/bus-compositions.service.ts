import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlacesTypes } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class BusCompositionsService {
  constructor(private http:HttpClient) { }


  public getPlacesTypes():Observable<IPlacesTypes[]>{
    return this.http.get<IPlacesTypes[]>('assets/placeTypes.json')

  }

}
