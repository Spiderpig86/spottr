import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
