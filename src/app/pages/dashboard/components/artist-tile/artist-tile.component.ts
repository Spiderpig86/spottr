import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../../models/topartist';

@Component({
  selector: 'artist-tile',
  templateUrl: './artist-tile.component.html',
  styleUrls: ['./artist-tile.component.scss']
})
export class ArtistTileComponent implements OnInit {

  @Input()
  public artistData: Artist;
  @Input()
  public rank: number;

  constructor() { }

  ngOnInit() {
  }

}
