import { Component, Input, SimpleChanges } from '@angular/core';
import { TopArtistsResponse } from '../../../shared/models/top.model';

@Component({
  selector: 'top-genres-view',
  styleUrls: ['./top-genres-view.component.scss'],
  template: `
    <div *ngIf="topArtists" class="my-4">
      <top-genres-item
        *ngFor="let genre of topGenresMap.entries(); let i = index"
        [rank]="i + 1"
        [genre]="genre[0]"
        [count]="genre[1]"
        [percent]="(genre[1] / this.total) * 100"
      ></top-genres-item>
    </div>
  `,
})
export class TopGenresViewComponent {
  topGenresMap: Map<string, number>;
  total: number;
  @Input() topArtists: TopArtistsResponse;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.topGenresMap = this.aggregateGenres(changes.topArtists.currentValue);
    this.total = Array(...this.topGenresMap.values()).reduce(
      (a, b) => a + b,
      0
    );
  }

  private aggregateGenres(topArtists: TopArtistsResponse): Map<string, number> {
    let aggregatedGenres: Map<string, number> = new Map();
    const artists = topArtists.items;

    for (const artist of artists) {
      artist.genres.forEach((genre) => {
        if (!aggregatedGenres.get(genre)) {
          aggregatedGenres.set(genre, 0);
        }
        aggregatedGenres.set(genre, aggregatedGenres.get(genre) + 1);
      });
    }
    // Sort by most frequent genre
    aggregatedGenres = new Map(
      [...aggregatedGenres.entries()].sort((a, b) => b[1] - a[1])
    );

    return aggregatedGenres;
  }
}
