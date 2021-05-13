import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { Store } from 'src/store';
import { AuthModule } from './modules/auth/auth.module';
import { AuthInterceptor } from './modules/shared/authinterceptor.interceptor';

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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [Store, {
    provide: HTTP_INTERCEPTORS,
    useFactory: (router: Router) => new AuthInterceptor(router),
    multi: true,
    deps: [Router]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
