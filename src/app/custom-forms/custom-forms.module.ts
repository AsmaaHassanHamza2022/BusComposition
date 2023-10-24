import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { NumberInputComponent } from './controls/number-input/number-input.component';
import { CustomInputDirective } from './directives/custom-input.directive';
import { TextInputComponent } from './controls/text-input/text-input.component';
import { FormsModule } from '@angular/forms';

const components=[
  TextInputComponent,
  NumberInputComponent,
]

@NgModule({
  declarations: [
    CustomInputDirective,
    ...components
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputNumberModule,
    FormsModule
  ],
  exports:[...components]
})
export class CustomFormsModule { }
