import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { BtnTypes } from 'src/app/Shared/components/custom-btn/enums';
import { BtnConfig } from 'src/app/Shared/components/interfaces';
import { BusCompositionItem } from '../../interfaces';

@Component({
  selector: 'app-bus-composition-form',
  templateUrl: './bus-composition-form.component.html',
  styleUrls: ['./bus-composition-form.component.scss'],
  providers: [ConfirmationService]
})
export class BusCompositionFormComponent implements OnInit{
  @Output() OnCompeletBusData=new EventEmitter<BusCompositionItem>();
  saveBtnConfig:BtnConfig = {
    action:($event)=>{this.showConfiramationdialog($event)},
    type: BtnTypes.Confirmation,
  };
  busCompositionForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private confirmationService: ConfirmationService,){

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
  showConfiramationdialog(event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.OnCompeletBusData.emit(this.busCompositionForm.value);
        console.log("Accepted")
      },
      reject: () => {
      console.log("Rejected")

      }
  });
  }

}
