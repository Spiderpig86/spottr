import { Component, Input } from '@angular/core';
import { Track } from '../../../shared/models/shared.model';

@Component({
  selector: 'dashboard-top-track',
  styleUrls: ['./dashboard-top-track.component.scss'],
  template: `
    <div class="px-2 py-4 text-center w-64 mx-auto">
      <a class="relative block" [routerLink]="['/music/track/', topTrack.id]">
        <img
          class="rounded-full mx-auto w-32 h-32 mb-5 md:w-48 md:h-48"
          [src]="topTrack.album.images[0]?.url"
        />
        <info-overlay></info-overlay>
      </a>
      <a class="relative block" [routerLink]="['/music/track/', topTrack.id]">
        <p>{{ topTrack.name }}</p>
        <!-- TODO Link to Track page -->
      </a>
    </div>
  `,
})
export class DashboardTopTrackComponent {
  @Input() topTrack: Track;

  constructor() {}
}
