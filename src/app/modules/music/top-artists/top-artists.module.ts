import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeRangeComponent } from '../shared/components/time-range.component';
import { TopArtistsViewComponent } from './components/top-artists-view/top-artists-view.component';
import { TopArtistsComponent } from './top-artists.component';

export const TOP_ARTISTS_ROUTES: Routes = [
  {
    path: '',
    component: TopArtistsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TOP_ARTISTS_ROUTES)],
  declarations: [
    TimeRangeComponent,
    TopArtistsViewComponent,
    TopArtistsComponent,
  ],
  providers: [],
})
export class TopArtistsModule {}
