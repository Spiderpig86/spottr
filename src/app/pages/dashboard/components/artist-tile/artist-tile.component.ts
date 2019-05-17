import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../../models/topartist';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public getArtistUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`spotify:artist/${this.artistData.id}`);
  }

}
