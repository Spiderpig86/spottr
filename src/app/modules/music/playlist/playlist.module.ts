import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSharedModule } from '../shared/shared.module';
import { PlaylistViewComponent } from './components/playlist-view/playlist-view.component';
import { PlaylistComponent } from './playlist.component';

export const PLAYLIST_ROUTES: Routes = [
  {
    path: ':id',
    component: PlaylistComponent,
  },
  {
    // TODO: 404 Component
    path: '**',
    component: null,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PLAYLIST_ROUTES),
    MusicSharedModule,
  ],
  declarations: [PlaylistComponent, PlaylistViewComponent],
  providers: [],
})
export class PlaylistModule {}
