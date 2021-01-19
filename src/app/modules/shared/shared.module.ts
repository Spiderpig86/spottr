import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { ScriptService } from './script.service';

@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent, ProgressBarComponent],
    providers: [ScriptService],
    exports: [ButtonComponent, ProgressBarComponent]
})
export class AppSharedModule {}