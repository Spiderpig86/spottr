import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/shared.model';

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
        <div
          class="hidden overflow-hidden overflow-ellipsis whitespace-nowrap pr-1 sm:block"
        >
          <progress-bar [percent]="this.getPercent()"></progress-bar>
        </div>
        <div
          class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-600"
        >
          <p>{{ artists.length }} artists</p>
        </div>
      </div>

      <div class="flex flex-wrap col-span-3">
        <div *ngFor="let artist of artists">
          <a
            class="relative block"
            [routerLink]="['/music/artist/', artist.id]"
          >
            <img
              class="rounded-full mx-auto w-8 h-8 mb-1 mr-1"
              [src]="artist.images[0].url"
            />
          </a>
        </div>
      </div>
    </div>
  `,
})
export class TopGenresItemComponent {
  @Input() rank: number;
  @Input() genre: string;
  @Input() artists: Artist[];
  @Input() total: number;

  constructor() {}

  getPercent(): number {
    return (this.artists.length / this.total) * 100;
  }
}
