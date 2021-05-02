import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InfoOverlayComponent } from 'src/app/components/info-overlay/info-overlay.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { ScriptService } from './script.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    InfoOverlayComponent,
    ProgressBarComponent,
  ],
  providers: [ScriptService],
  exports: [
    ButtonComponent,
    InfoOverlayComponent,
    ProgressBarComponent,
  ],
})
export class AppSharedModule {}
