import { Component, Input } from '@angular/core';

@Component({
  selector: 'track-card',
  styleUrls: ['./track-card.component.scss'],
  template: `
    <div
      class="rounded-lg bg-gray-900 px-8 py-4 cursor-pointer duration-200 transition-all hover:bg-gray-800"
    >
      <div class="flex items-center">
        <div>
          <p class="uppercase font-light tracking-widest text-gray-500 text-sm">
            {{ title }}
          </p>
          <p class="capitalize font-bold text-2xl">{{ text }}</p>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class TrackCardComponent {
  @Input() title: string;
  @Input() text: string;

  constructor() {}
}
