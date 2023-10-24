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
import { BusCompositionFormComponent } from './components/bus-composition-form/bus-composition-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'src/app/custom-forms/custom-forms.module';

@NgModule({
  declarations: [
    BusCompositionComponent,
    WorkingTabelComponent,
    BusCompositionFormComponent
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
    CustomFormsModule

  ],
  providers:[BusCompositionsService]
})
export class BusCompositionModule { }
