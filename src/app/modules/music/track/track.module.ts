import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const TOP_TRACK_ROUTES: Routes = [
    {
      path: '',
      component: null,
    },
  ];
  

@NgModule({
    imports: [CommonModule,],
    declarations: [],
    providers: []
})
export class TrackModule {}