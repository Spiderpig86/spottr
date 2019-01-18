import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpottrService } from './services/spottr-service/spottr.service';
import { SpottrAuthService } from './services/spottr-service/spottr-auth.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './pages/login/container/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { AcceptComponent } from './pages/accept/accept.component';
import { HttpClientModule } from '@angular/common/http';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './pages/dashboard/home/container/home.component';
import { SongCardComponent } from './pages/dashboard/home/components/song-card/song-card.component';
import { ArtistCardComponent } from './pages/dashboard/home/components/artist-card/artist-card.component';

// Loading library icons
library.add(faFeatherAlt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceptComponent,
    HomeComponent,
    SongCardComponent,
    ArtistCardComponent,
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,

    // App Specific
    DashboardModule,
    FontAwesomeModule
  ],
  providers: [SpottrService, SpottrAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
