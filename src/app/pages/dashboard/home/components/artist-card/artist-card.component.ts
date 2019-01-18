import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../../../../models/topartist';

@Component({
  selector: 'artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input()
  public artistData: Artist;

  constructor() { }

  ngOnInit() {
  }

}
