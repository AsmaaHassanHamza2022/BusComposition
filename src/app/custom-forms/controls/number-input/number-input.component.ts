import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInputDirective } from '../../directives/custom-input.directive';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => NumberInputComponent),
            multi: true     
    }  
  ]
})
export class NumberInputComponent extends CustomInputDirective implements ControlValueAccessor{
  constructor(){
    super();
  }

  

}
