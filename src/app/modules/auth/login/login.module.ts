import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './containers/login/login.component';

export const LOGIN_ROUTES: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES), SharedModule],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
