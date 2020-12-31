import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6 py-4 md:sticky top-0 md:flex md:flex-col md:justify-between md:min-h-screen"
    >
      <div>
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
            <li class="sidebar__link transition hover:font-bold">Top Songs</li>
            <li class="sidebar__link transition hover:font-bold">Top Genres</li>
          </ul>
          <p class="uppercase font-bold mt-7 tracking-widest">Playlists</p>
          <ul></ul>
        </div>
      </div>

      <div>Github Link</div>
    </div>
  `,
})
export class SidebarComponent {
  constructor() {}
}
