import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ScriptService } from './script.service';

@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent],
    providers: [ScriptService],
    exports: [ButtonComponent]
})
export class AppSharedModule {}