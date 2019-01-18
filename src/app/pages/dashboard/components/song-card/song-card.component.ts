import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../../models/topsongs';

@Component({
  selector: 'song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  @Input()
  public songData: Track;

  constructor() { }

  ngOnInit() {
  }

}
