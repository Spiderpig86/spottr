import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Store } from 'src/store';
import { AuthModule } from './modules/auth/auth.module';
import { MusicModule } from './modules/music/music.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileButton } from './components/profile-button/profile-button.component';
import { NavBarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'music',
    loadChildren: () =>
      import('./modules/music/music.module').then((m) => m.MusicModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileButton,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule,
    MusicModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
