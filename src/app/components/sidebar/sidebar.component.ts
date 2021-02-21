import { Component, Input } from '@angular/core';
import { PlaylistsResponse } from 'src/app/modules/music/shared/models/playlist.model';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6 py-4 top-0 flex flex-col h-screen md:sticky"
      [class.sidebar--open]="sidebarOpen"
    >
      <div class="sidebar__container h-full grid">
        <div class="pb-8 flex justify-between md:block">
          <a routerLink="/music/dashboard" class="font-bold text-2xl"
            >Spottr.</a
          >
          <button class="md:hidden" (click)="toggleSidebar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div>
          <ul>
            <li class="sidebar__link transition hover:font-bold">
              <a
                routerLink="/music/top-artists"
                routerLinkActive="sidebar__link--active"
                >Top Artists</a
              >
            </li>
            <li class="sidebar__link transition hover:font-bold">
              <a
                routerLink="/music/top-tracks"
                routerLinkActive="sidebar__link--active"
                >Top Tracks</a
              >
            </li>
            <li class="sidebar__link transition hover:font-bold">
              <a
                routerLink="/music/top-genres"
                routerLinkActive="sidebar__link--active"
                >Top Genres</a
              >
            </li>
          </ul>
        </div>
        <p class="uppercase font-bold my-4 tracking-widest">Playlists</p>
        <ul
          *ngIf="this.playlists"
          class="sidebar__playlists overflow-auto h-full"
        >
          <li
            *ngFor="let playlist of playlists.items"
            class="sidebar__playlist-item mb-1 transition hover:font-bold"
          >
            <a [routerLink]="['/music/playlist/', playlist.id]">{{
              playlist.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() playlists: PlaylistsResponse;
  sidebarOpen: boolean = false;

  constructor() {}

  toggleSidebar() {
    console.log('test');

    this.sidebarOpen = !this.sidebarOpen;
  }
}
