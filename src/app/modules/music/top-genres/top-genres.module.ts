import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSharedModule } from '../shared/shared.module';
import { TopGenreProgressBarComponent } from './components/top-genre-progress-bar/top-genre-progress-bar.component';
import { TopGenresItemComponent } from './components/top-genres-item/top-genres-item.component';
import { TopGenresViewComponent } from './components/top-genres-view/top-genres-view.component';
import { TopGenresComponent } from './top-genres.component';

export const TOP_GENRES_ROUTES: Routes = [
  {
    path: '',
    component: TopGenresComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(TOP_GENRES_ROUTES),
  ],
  declarations: [
    TopGenresComponent,
    TopGenresViewComponent,
    TopGenresItemComponent,
    TopGenreProgressBarComponent,
  ],
  providers: [],
})
export class TopGenresModule {}
