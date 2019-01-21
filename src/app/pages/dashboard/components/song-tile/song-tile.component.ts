import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../../models/topsongs';

@Component({
  selector: 'song-tile',
  templateUrl: './song-tile.component.html',
  styleUrls: ['./song-tile.component.scss']
})
export class SongTileComponent implements OnInit {

  @Input()
  public songData: Track;

  @Input()
  public rank: number;

  public artists: String;

  constructor() { }

  ngOnInit() {
    this.artists = this.songData.artists.map(artist => artist.name).reduce((a, b) => a + ', ' + b);
  }

}
