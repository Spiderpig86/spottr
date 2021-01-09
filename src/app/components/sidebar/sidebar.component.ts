import { Component, Input } from '@angular/core';
import { PlaylistsResponse } from 'src/app/modules/music/shared/models/playlist.model';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6 py-4 md:sticky top-0 md:flex md:flex-col md:h-screen"
    >
      <div class="sidebar__container h-full grid">
        <div class="pb-8">
          <a routerLink="/music/dashboard" class="py-4 font-bold text-2xl"
            >Spottr.</a
          >
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
        <p class="uppercase font-bold mt-4 tracking-widest">Playlists</p>
        <ul *ngIf="this.playlists" class="overflow-auto h-full">
          <li
            *ngFor="let playlist of playlists.items"
            class="sidebar__link mb-1 transition hover:font-bold"
          >
            <a routerLink="/music/top-artists">{{ playlist.name }}</a>
          </li>
        </ul>

        <div>Github Link</div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() playlists: PlaylistsResponse;

  constructor() {}
}
