import { Component } from '@angular/core';

@Component({
  selector: 'music',
  template: `
    <div class="min-h-screen w-full md:flex">
      <sidebar></sidebar>
      <div class="w-full bg-black">

        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class MusicComponent {
  constructor() {}
}
