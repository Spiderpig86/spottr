import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSharedModule } from '../shared/shared.module';
import { ProfileSummaryComponent } from './components/profile-summary.component';
import { ProfileComponent } from './profile.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    component: null,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(PROFILE_ROUTES),
  ],
  declarations: [ProfileComponent, ProfileSummaryComponent],
  providers: [],
})
export class ProfileModule {}
