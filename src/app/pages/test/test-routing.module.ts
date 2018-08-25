import { RouterModule, Routes } from '../../../../node_modules/@angular/router';
import { TestComponent } from './container/test.component';
import { NgModule } from '../../../../node_modules/@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // This is a child route
  exports: [RouterModule],
  providers: []
})
export class TestRoutingModule {

}
