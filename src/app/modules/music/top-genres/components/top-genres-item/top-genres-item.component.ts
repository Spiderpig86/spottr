import { Component, Input } from '@angular/core';

@Component({
  selector: 'top-genres-item',
  styleUrls: ['./top-genres-item.component.scss'],
  template: `
    <div
      class="grid grid-span gap-4 items-center mb-2 p-1 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-gray-900 md:p-4"
    >
      <p class="font-bold text-xl">{{ rank }}</p>
      <div class="grid grid-stretch gap-4">
        <div class="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">
          <p>{{ genre }}</p>
        </div>
        <div class="hidden overflow-hidden overflow-ellipsis whitespace-nowrap pr-1 sm:block">
          <progress-bar [percent]="this.percent"></progress-bar>
        </div>
        <div
          class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-600"
        >
          <p>{{ count }} tracks</p>
        </div>
      </div>
    </div>
  `,
})
export class TopGenresItemComponent {
  @Input() rank: number;
  @Input() genre: string;
  @Input() count: number;
  @Input() percent: number;

  constructor() {}
}
