import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { MusicComponent } from './music.component';
import { CacheService } from './shared/services/cache.service';
import { CachedHttpService } from './shared/services/cached-http-client.service';
import { PlaylistsService } from './shared/services/playlists.service';
import { ProfileService } from './shared/services/profile.service';
import { TopService } from './shared/services/top.service';

export const MUSIC_ROUTES: Routes = [
  {
    path: '',
    component: MusicComponent,
    children: [
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
      {
        path: 'top-genres',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./top-genres/top-genres.module').then(
            (m) => m.TopGenresModule
          ),
      },
      {
        path: 'playlist',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./playlist/playlist.module').then(
            (m) => m.PlaylistModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MUSIC_ROUTES)],
  exports: [RouterModule],
  declarations: [MusicComponent, SidebarComponent],
  providers: [
    CacheService,
    CachedHttpService,
    ProfileService,
    TopService,
    PlaylistsService,
  ],
})
export class MusicModule {}
