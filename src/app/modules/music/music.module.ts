import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/shared/guards/auth.guard';
import { CacheService } from './shared/services/cache.service';
import { CachedHttpService } from './shared/services/cached-http-client.service';
import { TopService } from './shared/services/top.service';

export const MUSIC_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MUSIC_ROUTES)],
  declarations: [],
  providers: [CacheService, CachedHttpService, TopService],
})
export class MusicModule {}
