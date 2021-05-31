import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InfoOverlayComponent } from 'src/app/components/info-overlay/info-overlay.component';
import { ExternalLinkComponent } from 'src/app/components/link/link.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { LocalStorageService } from './local-storage.service';
import { ScriptService } from './script.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    InfoOverlayComponent,
    ProgressBarComponent,
    ExternalLinkComponent,
  ],
  providers: [ScriptService, LocalStorageService],
  exports: [
    ButtonComponent,
    InfoOverlayComponent,
    ProgressBarComponent,
    ExternalLinkComponent,
  ],
})
export class AppSharedModule {}
