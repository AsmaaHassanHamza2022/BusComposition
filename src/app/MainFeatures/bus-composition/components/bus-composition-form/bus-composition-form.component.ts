import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BtnTypes } from 'src/app/Shared/components/custom-btn/enums';
import { BtnConfig } from 'src/app/Shared/components/interfaces';

@Component({
  selector: 'app-bus-composition-form',
  templateUrl: './bus-composition-form.component.html',
  styleUrls: ['./bus-composition-form.component.scss']
})
export class BusCompositionFormComponent implements OnInit{
  saveBtnConfig:BtnConfig = {
    action:()=>{},
    type: BtnTypes.Confirmation,
  };
  busCompositionForm!:FormGroup;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(){
    this.busCompositionForm=this.formBuilder.group({
      busTypeAr:['',],
      busTypeEn:['',],
      rowsCount:['',],
      columnCount:['',],
      seatsCount:[''],
      levelCount:['',],
    })
  }

}
