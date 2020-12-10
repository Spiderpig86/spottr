import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div class="sidebar md:flex md:flex-col md:justify-between md:min-h-screen p-4">
      <div>
        <div class="py-4">Logo</div>
        <ul>
          <li class="sidebar__link transition hover:font-bold">Home</li>
          <li class="sidebar__link transition hover:font-bold">Top Artists</li>
          <li class="sidebar__link transition hover:font-bold">Top Songs</li>
          <li class="sidebar__link transition hover:font-bold">Top Genres</li>
          <li class="sidebar__link transition hover:font-bold">Playlists</li>
        </ul>
      </div>

      <div>Github Link</div>
    </div>
  `,
})
export class SidebarComponent {
  constructor() {}
}
