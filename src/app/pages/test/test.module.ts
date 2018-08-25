import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './container/test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }
