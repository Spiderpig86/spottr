import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../../models/topartist';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  public artistData: Artist;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public getArtistUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`spotify:artist/${this.artistData.id}`);
  }


}
