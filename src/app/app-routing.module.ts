import { HomeComponent } from './pages/home/container/home/home.component';
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
    component: HomeComponent
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
