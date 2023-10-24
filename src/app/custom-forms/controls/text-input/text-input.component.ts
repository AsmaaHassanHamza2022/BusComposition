import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInputDirective } from '../../directives/custom-input.directive';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => TextInputComponent),
            multi: true     
    }  
  ]
})
export class TextInputComponent extends CustomInputDirective implements ControlValueAccessor {
  constructor(){
    super();
  }
}
