import { HomeComponent } from './pages/home/container/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { LoginComponent } from './pages/login/container/login/login.component';

/**
 * Routing module for the entire application
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
