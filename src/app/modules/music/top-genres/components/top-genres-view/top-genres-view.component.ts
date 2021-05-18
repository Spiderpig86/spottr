import { Component, Input, SimpleChanges } from '@angular/core';
import { Artist } from '../../../shared/models/shared.model';
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
        [artists]="genre[1]"
        [total]="this.total"
      ></top-genres-item>
    </div>
  `,
})
export class TopGenresViewComponent {
  @Input() topArtists: TopArtistsResponse;
  topGenresMap: Map<string, Artist[]>;
  total: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.topGenresMap = this.aggregateGenres(changes.topArtists.currentValue);
    this.total = Array<Artist[]>(...this.topGenresMap.values()).reduce(
      (a, list) => a + list.length,
      0
    );
  }

  private aggregateGenres(topArtists: TopArtistsResponse): Map<string, Artist[]> {
    let aggregatedGenres: Map<string, Artist[]> = new Map();
    const artists = topArtists.items;

    for (const artist of artists) {
      artist.genres.forEach((genre) => {
        if (!aggregatedGenres.get(genre)) {
          aggregatedGenres.set(genre, []);
        }
        aggregatedGenres.get(genre).push(artist);
      });
    }
    // Sort by most frequent genre
    aggregatedGenres = new Map(
      [...aggregatedGenres.entries()].sort((a, b) => b[1].length - a[1].length)
    );

    return aggregatedGenres;
  }
}
