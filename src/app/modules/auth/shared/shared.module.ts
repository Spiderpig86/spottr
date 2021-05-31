import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AppSharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, AppSharedModule],
  declarations: [],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
