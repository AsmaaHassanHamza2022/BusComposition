import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'bus-composition',
        pathMatch: 'full',
      },
      {
        path: 'bus-composition',
        loadChildren: () =>
          import('../MainFeatures/bus-composition/bus-composition.module').then(
            (m) => m.BusCompositionModule
          ),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
  constructor() {}
}
