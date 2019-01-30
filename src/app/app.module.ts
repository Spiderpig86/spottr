import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './pages/login/container/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { AcceptComponent } from './pages/accept/accept.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHeadphonesAlt, faMusic, faStar, faGenderless, faGripLines, faTh, faChartLine, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faChartBar } from '@fortawesome/free-regular-svg-icons';

/* Ant Design Lib */
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { SpottrService } from './services/spottr-service/spottr.service';
import { SpottrAuthService } from './services/spottr-service/spottr-auth.service';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { TopArtistsComponent } from './pages/dashboard/top-artists/top-artists.component';
import { TopTracksComponent } from './pages/dashboard/top-tracks/top-tracks.component';
import { ArtistTileComponent } from './pages/dashboard/components/artist-tile/artist-tile.component';
import { SongTileComponent } from './pages/dashboard/components/song-tile/song-tile.component';
import { RankingsComponent } from './pages/dashboard/rankings/rankings.component';
import { GenreComponent } from './pages/dashboard/genre/genre.component';

registerLocaleData(en);

// Loading library icons
library.add(faBars, faEdit, faHeadphonesAlt, faMusic, faStar, faGenderless, faChartBar, faGripLines, faTh, faChartLine, faFeatherAlt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceptComponent,
    HomeComponent,
    TopArtistsComponent,
    TopTracksComponent,
    ArtistTileComponent,
    SongTileComponent,
    RankingsComponent,
    GenreComponent,
  ],
  imports: [
    // Angular Specific
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // App Specific
    DashboardModule,
    FontAwesomeModule,
    NgZorroAntdModule
  ],
  providers: [SpottrService, SpottrAuthService, { provide: NZ_I18N, useValue: en_US } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
