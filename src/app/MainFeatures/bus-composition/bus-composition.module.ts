import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusCompositionRoutingModule } from './bus-composition-routing.module';
import { BusCompositionComponent } from './components/bus-composition/bus-composition.component';
import { WorkingTabelComponent } from './components/working-tabel/working-tabel.component';
import { CustomBtnComponent } from 'src/app/Shared/components/custom-btn/custom-btn.component';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { BusCompositionsService } from './Services/bus-compositions.service';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { BusCompositionFormComponent } from './components/bus-composition-form/bus-composition-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'src/app/custom-forms/custom-forms.module';
import { InputValidationDirective } from 'src/app/Shared/directives/input-validation.directive';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SeatsCompositionsComponent } from './components/seats-compositions/seats-compositions.component';
import { HttpClientModule } from '@angular/common/http';
import { ValiationErrorMessagesComponent } from 'src/app/Shared/components/valiation-error-messages/valiation-error-messages.component';
import { GetLevelArrPipe } from './Pipes/get-level-arr.pipe';
@NgModule({
  declarations: [
    BusCompositionComponent,
    WorkingTabelComponent,
    BusCompositionFormComponent,
    SeatsCompositionsComponent,
    GetLevelArrPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusCompositionRoutingModule,
    CustomBtnComponent,
    TranslateModule,
    TableModule,
    DialogModule,
    CustomFormsModule,
    InputValidationDirective,
    ConfirmPopupModule,
    HttpClientModule,
    ValiationErrorMessagesComponent,
    ToastModule
    

  ],
  providers:[BusCompositionsService]
})
export class BusCompositionModule { }
