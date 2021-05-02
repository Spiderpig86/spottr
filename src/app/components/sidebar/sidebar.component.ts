import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';
import { PlaylistsResponse } from 'src/app/modules/music/shared/models/playlist.model';

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div
      class="sidebar px-6 py-4 top-0 flex flex-col h-screen"
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
        <div class="sidebar__btn-container mt-3">
          <div class="flex justify-center w-full">
            <a
              class="sidebar__btn text-base rounded-r-none focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer border"
              (click)="openProfile()"
              href="#"
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
                  <polyline points="15 18 9 12 15 6"></polyline>
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
                  <polyline points="9 18 15 12 9 6"></polyline>
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

  constructor(private auth: AuthService, private router: Router) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  openProfile() {
    this.router.navigate(['/music/profile']);
  }

  onLogout() {
    this.auth.logout();
    console.log("test");
    
  }
}
