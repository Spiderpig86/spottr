import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { SpottrService } from '../../../services/spottr-service/spottr.service';
import { SpottrAuthService } from '../../../services/spottr-service/spottr-auth.service';
import { SpottrAppConstants } from '../../../services/spottr-service/spottr-service.config';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {

  public shortTermArtists: TopArtists;
  public mediumTermArtists: TopArtists;
  public longTermArtists: TopArtists;

  constructor(private api: SpottrService, private auth: SpottrAuthService) { }

  ngOnInit() {
  }



}
