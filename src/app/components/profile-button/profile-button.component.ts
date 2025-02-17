import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/modules/music/shared/models/user.model';

@Component({
  selector: 'profile-button',
  styleUrls: ['./profile-button.component.scss'],
  template: `
    <div class="dropdown inline-block relative">
      <button
        class="flex items-center bg-transparent m-2 px-4 py-2 rounded-xl text-sm transition-all duration-200 text-white hover:text-gray-300 hover:underline hover:bg-gray-900"
        (click)="openProfile()"
      >
        <img
          [src]="user?.images[0]?.url | avatar : user?.display_name"
          class="rounded-full w-8 h-8 mr-3"
        />
        {{ user?.display_name }}
        <svg
          class="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul
        class="dropdown-menu shadow-2xl absolute hidden text-gray-700 pt-1 w-full"
      >
        <li class="">
          <external-link
            classes="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
            href="https://github.com/Spiderpig86/spottr"
          >
            Github
          </external-link>
        </li>
        <li class="">
          <external-link
            classes="rounded-t bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
            href="https://www.paypal.com/donate/?cmd=_donations&business=5JW89TNNHB4JL&currency_code=USD&source=url"
          >
            Donate
          </external-link>
        </li>
        <li>
          <a
            class="rounded-b bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
            href="#"
            (click)="logoutUser()"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  `,
})
export class ProfileButton {
  @Input() user: User;
  @Output() profile = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();

  constructor() {}

  openProfile() {
    this.profile.emit();
  }

  logoutUser() {
    this.logout.emit();
  }
}
