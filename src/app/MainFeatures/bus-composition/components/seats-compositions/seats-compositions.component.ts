import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BusCompositionsService } from '../../Services/bus-compositions.service';
import { BusCompositionItem, IPlacesTypes } from '../../interfaces';

@Component({
  selector: 'app-seats-compositions',
  templateUrl: './seats-compositions.component.html',
  styleUrls: ['./seats-compositions.component.scss']
})
export class SeatsCompositionsComponent implements OnInit,OnChanges{
  @Input() BusConfigration!:BusCompositionItem;
  placesTypes:IPlacesTypes[]=[]
  constructor(private busService:BusCompositionsService){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.BusConfigration){
      this.drawInitGrid()
    }
   
  }
  ngOnInit(): void {
    this.busService.getPlacesTypes().subscribe((res)=>{
      this.placesTypes=res;
      console.log(res);
    })
  }
  onPlaceTypeSelect(type:IPlacesTypes){
    console.log(type);
  }
  drawInitGrid(){
    console.log("grid is drawing here ................");
  }

}
