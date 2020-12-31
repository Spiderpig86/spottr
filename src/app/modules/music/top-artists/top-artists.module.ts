import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSharedModule } from '../shared/shared.module';
import { TopArtistsViewComponent } from './components/top-artists-view/top-artists-view.component';
import { TopArtistsComponent } from './top-artists.component';

export const TOP_ARTISTS_ROUTES: Routes = [
  {
    path: '',
    component: TopArtistsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(TOP_ARTISTS_ROUTES),
  ],
  declarations: [
    TopArtistsViewComponent,
    TopArtistsComponent,
  ],
  providers: [],
})
export class TopArtistsModule {}
