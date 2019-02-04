import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../../../models/common';

@Component({
  selector: 'genre-tile',
  templateUrl: './genre-tile.component.html',
  styleUrls: ['./genre-tile.component.scss']
})
export class GenreTileComponent implements OnInit {

  @Input()
  public genreData: Genre;
  @Input()
  public rank: number;

  constructor() { }

  ngOnInit() {
  }

}
