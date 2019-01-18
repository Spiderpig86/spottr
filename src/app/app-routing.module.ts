import { HomeComponent } from './pages/dashboard/home/container/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/container/login/login.component';
import { DashboardComponent } from './layouts/dashboard/container/dashboard/dashboard.component';
import { AcceptComponent } from './pages/accept/accept.component';

/**
 * Routing module for the entire application
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'accept',
    component: AcceptComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'test',
        loadChildren: './pages/test/test.module#TestModule'
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}