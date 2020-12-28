import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/music/shared/models/user.model';

@Component({
  selector: 'profile-button',
  styleUrls: ['./profile-button.component.scss'],
  template: `
    <button
      class="flex items-center bg-transparent m-2 px-4 py-2 rounded-xl text-sm transition-all duration-200 shadow-2xl text-white hover:text-gray-300 hover:underline hover:bg-gray-900"
    >
      <img [src]="user?.images[0].url" class="rounded-full w-8 h-8 mr-3" />
      {{ user?.display_name }}
    </button>
  `,
})
export class ProfileButton {
  @Input() user: User;
  constructor() {}
}
