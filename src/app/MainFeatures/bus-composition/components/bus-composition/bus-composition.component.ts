import { Component } from '@angular/core';
import { BtnTypes } from 'src/app/Shared/components/custom-btn/enums';
import { BtnConfig } from 'src/app/Shared/components/interfaces';
import { BusCompositionItem } from '../../interfaces';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-bus-composition',
  templateUrl: './bus-composition.component.html',
  styleUrls: ['./bus-composition.component.scss'],
  
})
export class BusCompositionComponent {
  showBusPlaces:boolean=false;
  busConfigration!:BusCompositionItem;
  newBusBtnConfig: BtnConfig = {
    action:()=>this.showDialog(),
    type: BtnTypes.Adding,
  };
  cancleBtnConfig: BtnConfig = {
    action:()=>this.hideDialog(),
    type: BtnTypes.Cancelation,
  };
  BusCompositions: BusCompositionItem[] = [];
  visible: boolean = false;

  constructor(){}
  showDialog() {
    this.visible = true;
  }
  hideDialog(){
    this.visible=false;
  }
  onOpenBusPlaces(data:BusCompositionItem){
    this.busConfigration=data;
    this.showBusPlaces=true;

  }
}
