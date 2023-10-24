import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnConfig } from '../interfaces';
import { BtnTypes } from './enums';

@Component({
  selector: 'app-custom-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss']
})
export class CustomBtnComponent {

  @Input() btnConfig!:BtnConfig;

  private getBtnType():string{
    let type='';
    switch(this.btnConfig?.type){
      case BtnTypes.Confirmation:
        type ='Confirmation'
        break;
        case BtnTypes.Cancelation:
        type ='Cancelation'
        break;
        case BtnTypes.Saving:
        type ='saving'
        break;
        case BtnTypes.Adding:
          type ='Adding'
          break
    }
    return type;
  }
  get btnClass(){
    return this.getBtnType()
  }

  
}
