import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

const PrimNGUsedModules= [
  InputTextModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PrimNGUsedModules
    
  ],
  exports:[
    ...PrimNGUsedModules
  ]
})
export class PrimNgModule { }
