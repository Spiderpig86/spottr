import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { NavComponent } from '../nav/nav.component';
import { AppRoutingModule } from '../../app-routing.module';
import { TestComponent } from '../../pages/test/container/test.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [DashboardComponent, NavComponent],
  exports: [NavComponent]
})
export class DashboardModule { }
