import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { BtnTypes } from 'src/app/Shared/components/custom-btn/enums';
import { BtnConfig } from 'src/app/Shared/components/interfaces';
import { BusCompositionItem } from '../../interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bus-composition-form',
  templateUrl: './bus-composition-form.component.html',
  styleUrls: ['./bus-composition-form.component.scss'],
  providers: [ConfirmationService],
})
export class BusCompositionFormComponent implements OnInit {
  @Output() OnCompeletBusData = new EventEmitter<BusCompositionItem>();
  @Output() onCancleProcess = new EventEmitter<string>();
  saveBtnConfig: BtnConfig = {
    action: ($event) => {
      this.showConfiramationdialog($event);
    },
    type: BtnTypes.Confirmation,
  };
  cancleBtnConfig: BtnConfig = {
    action: () => this.hideDialog(),
    type: BtnTypes.Cancelation,
  };
  busCompositionForm!: FormGroup;
  showCancleBtn: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private tranalationService:TranslateService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.busCompositionForm = this.formBuilder.group({
      busTypeAr: ['bus ar', [Validators.required, Validators.maxLength(10)]],
      busTypeEn: ['bus en', [Validators.required, Validators.maxLength(10)]],
      rowCount: [3, [Validators.required ,Validators.max(5)]],
      columnCount: [4, [Validators.required, Validators.max(20)]],
      seatsCount: [7],
      levelCount: [1,Validators.max(3)],
    });

    this.f('rowCount').valueChanges.subscribe(()=>{
    this.addSeatCountValidators();
    })

    this.f('columnCount').valueChanges.subscribe(()=>{
      this.addSeatCountValidators();
      })
  }

  addSeatCountValidators(){
      this.f("seatsCount").setValue(this.SeatCount);
  }

  f(controlName: string): AbstractControl {
    return this.busCompositionForm.controls[controlName];
  }
  showConfiramationdialog(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message:this.tranalationService.instant('MainModules.BusComposition.confirmationMessage'),
      icon: 'pi pi-exclamation-triangle',
      acceptLabel:this.tranalationService.instant('shared.yes'),
      rejectLabel:this.tranalationService.instant('shared.no'),
      accept: () => {
        this.busCompositionForm.markAllAsTouched();
        if(this.busCompositionForm.invalid) return ;
        this.OnCompeletBusData.emit(this.busCompositionForm.value);
        this.showCancleBtn = false;
      },
      reject: () => {
        console.log('Rejected');
      },
    });
  }

  hideDialog() {
    this.onCancleProcess.emit('');
  }
  logForm() {
    console.log(this.busCompositionForm);
  }
  get SeatCount() {
    if(!! this.f('rowCount').value && !!  this.f('columnCount').value) return this.f('rowCount').value * this.f('columnCount').value - 5;
     return 0
  }
}
