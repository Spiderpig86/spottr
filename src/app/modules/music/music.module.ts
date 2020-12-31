import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { CacheService } from './shared/services/cache.service';
import { CachedHttpService } from './shared/services/cached-http-client.service';
import { ProfileService } from './shared/services/profile.service';
import { TopService } from './shared/services/top.service';
import { MusicSharedModule } from './shared/shared.module';

export const MUSIC_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'top-artists',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./top-artists/top-artists.module').then(
        (m) => m.TopArtistsModule
      ),
  },
  {
    path: 'top-tracks',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./top-tracks/top-tracks.module').then(
        (m) => m.TopTracksModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(MUSIC_ROUTES),
  ],
  declarations: [],
  providers: [CacheService, CachedHttpService, ProfileService, TopService],
})
export class MusicModule {}
