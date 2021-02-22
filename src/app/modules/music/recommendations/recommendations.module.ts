import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsService } from '../shared/services/recommendations.service';
import { MusicSharedModule } from '../shared/shared.module';
import { RecommendationsViewComponent } from './components/similar-view/recommendations-view.component';
import { RecommendationsComponent } from './recommendations.component';

export const RECOMMENDATIONS_ROUTES: Routes = [
  {
    path: ':id',
    component: RecommendationsComponent,
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
    MusicSharedModule,
    RouterModule.forChild(RECOMMENDATIONS_ROUTES),
  ],
  declarations: [RecommendationsComponent, RecommendationsViewComponent],
  providers: [RecommendationsService],
})
export class RecommendationsModule {}
