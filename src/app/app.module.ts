import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpottrService } from './services/spottr-service/spottr.service';
import { SpottrAuthService } from './services/spottr-service/spottr-auth.service';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SpottrService, SpottrAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
