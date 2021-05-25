import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';
import { PlaylistsResponse } from 'src/app/modules/music/shared/models/playlist.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6 py-3 top-0 flex flex-col h-screen md:py-4"
      [class.sidebar--open]="sidebarOpen"
    >
      <div class="sidebar__container h-full grid">
        <div class="pb-8 flex justify-between md:block">
          <a routerLink="/music/dashboard" class="font-bold text-2xl">
            <div class="flex align-middle">
              <img src="/assets/images/logo.png" />Spottr.
            </div></a
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
        <div class="sidebar__btn-container mt-3">
          <div class="flex justify-center w-full">
            <a
              class="sidebar__btn text-base rounded-r-none focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer border"
              (click)="openProfile()"
            >
              <div class="flex leading-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-left w-5 h-5"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                </svg>
                Profile
              </div>
            </a>
            <a
              class="sidebar__btn text-base rounded-l-none border-l-0 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer
        border"
              (click)="onLogout()"
              href="#"
            >
              <div class="flex leading-5">
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-chevron-right w-5 h-5 ml-1"
                >
                  <path
                    d="M17 16l4-4m0 0l-4-4 m4 4h-14m5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h3a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() playlists: PlaylistsResponse;
  sidebarOpen: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // On navigate event, close the sidebar
        this.sidebarOpen = false;
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  openProfile() {
    this.router.navigate(['/music/profile']);
  }

  onLogout() {
    this.auth.logout();
  }
}
