import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusCompositionComponent } from './components/bus-composition/bus-composition.component';
import { WorkingTabelComponent } from './components/working-tabel/working-tabel.component';

const routes: Routes = [
  {
    path:'',
    component:BusCompositionComponent,
    pathMatch:'full'
  },
  {
    path: 'working-table',
    component:WorkingTabelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusCompositionRoutingModule { }
