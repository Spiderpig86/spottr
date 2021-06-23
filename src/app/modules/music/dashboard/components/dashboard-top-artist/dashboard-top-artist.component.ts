import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/shared.model';

@Component({
  selector: 'dashboard-top-artist',
  styleUrls: ['./dashboard-top-artist.component.scss'],
  template: `
    <div class="flex items-center justify-center flex-col my-4">
      <a class="relative block" [routerLink]="['/music/artist/', topArtist.id]">
        <img
          *ngIf="topArtist"
          class="rounded-full mx-auto w-32 h-32 mb-4 md:w-48 md:h-48"
          [src]="topArtist.images[0]?.url | avatar: topArtist.name"
        />
        <info-overlay></info-overlay>
      </a>

      <a class="relative block" [routerLink]="['/music/artist/', topArtist.id]">
        {{ topArtist.name }}
      </a>
    </div>
  `,
})
export class DashboardTopArtistComponent {
  @Input() topArtist: Artist;

  constructor() {}
}
