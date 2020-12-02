import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadChildren: './login/login.module.ts#LoginModule',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AuthModule {}
