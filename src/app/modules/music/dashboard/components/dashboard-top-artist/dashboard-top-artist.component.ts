import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/shared.model';

@Component({
  selector: 'dashboard-top-artist',
  styleUrls: ['./dashboard-top-artist.component.scss'],
  template: `
    <div class="flex items-center justify-center flex-col my-4">
      <a class="relative block" [routerLink]="['/music/artist/', topArtist.id]">
        <img
          class="rounded-full mx-auto w-32 h-32 mb-4 md:w-48 md:h-48"
          [src]="topArtist.images[0].url"
        />
        <span
          class="artist__hover flex w-full h-full items-center justify-center absolute rounded-full text-white transition-all duration-200 top-0"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="2rem"
            height="2rem"
            viewBox="0 0 45.999 45.999"
            fill="#fff"
            xml:space="preserve"
          >
            <path
              d="M39.264,6.736c-8.982-8.981-23.545-8.982-32.528,0c-8.982,8.982-8.981,23.545,0,32.528c8.982,8.98,23.545,8.981,32.528,0 C48.245,30.281,48.244,15.719,39.264,6.736z M25.999,33c0,1.657-1.343,3-3,3s-3-1.343-3-3V21c0-1.657,1.343-3,3-3s3,1.343,3,3V33z M22.946,15.872c-1.728,0-2.88-1.224-2.844-2.735c-0.036-1.584,1.116-2.771,2.879-2.771c1.764,0,2.88,1.188,2.917,2.771 C25.897,14.648,24.746,15.872,22.946,15.872z"
            ></path>
          </svg>
        </span>
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
