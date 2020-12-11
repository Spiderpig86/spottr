import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6fg py-4 md:sticky top-0 md:flex md:flex-col md:justify-between md:min-h-screen"
    >
      <div>
        <div class="py-4 font-bold text-2xl">Spottr</div>
        <div>
          <ul>
            <li class="sidebar__link transition hover:font-bold">Home</li>
            <li class="sidebar__link transition hover:font-bold">
              Top Artists
            </li>
            <li class="sidebar__link transition hover:font-bold">Top Songs</li>
            <li class="sidebar__link transition hover:font-bold">Top Genres</li>
          </ul>
          <p class="uppercase font-bold mt-7">Playlists</p>
          <ul>

          </ul>
        </div>
      </div>

      <div>Github Link</div>
    </div>
  `,
})
export class SidebarComponent {
  constructor() {}
}
