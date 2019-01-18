import { Component, OnInit } from '@angular/core';
import { SpottrService } from '../../../services/spottr-service/spottr.service';
import { TopTracks } from '../../../models/topsongs';
import { TopArtists } from '../../../models/topartist';
import { SpottrAuthService } from '../../../services/spottr-service/spottr-auth.service';
import { SpottrAppConstants } from '../../../services/spottr-service/spottr-service.config';
import { User } from '../../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public topWeeklyTracks: TopTracks;
  public topWeeklyArtists: TopArtists;
  public profile: User;

  constructor(private api: SpottrService, private auth: SpottrAuthService) { }

  ngOnInit() {
    this.api.getShortTermTracks(this.auth.getToken(), '5').subscribe(res => {
      this.topWeeklyTracks = res;
    });

    this.api.getTopArtists(this.auth.getToken(), SpottrAppConstants.TOP_SHORT, '5').subscribe(res => {
      this.topWeeklyArtists = res;
    });

    this.api.getProfile(this.auth.getToken()).subscribe(res => {
      this.profile = res;
    });
  }

}
