import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    AdminLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    TranslateModule
  ]
})
export class LayoutModule { }
