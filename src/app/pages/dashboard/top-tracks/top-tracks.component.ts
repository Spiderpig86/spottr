import { Component, OnInit } from '@angular/core';
import { SpottrService } from '../../../services/spottr-service/spottr.service';
import { SpottrAuthService } from '../../../services/spottr-service/spottr-auth.service';
import { TopTracks } from '../../../models/topsongs';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {

  public shortTermTracks: TopTracks;
  public mediumTermTracks: TopTracks;
  public longTermTracks: TopTracks;

  constructor(private api: SpottrService, private auth: SpottrAuthService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const observables$: Observable<any>[] = [];
    observables$.push(this.api.getShortTermTracks(this.auth.getToken(), '50'));
    observables$.push(this.api.getMediumTermTracks(this.auth.getToken(), '50'));
    observables$.push(this.api.getLongTermTracks(this.auth.getToken(), '50'));

    forkJoin(observables$).subscribe(res => {
      for (const data of Object.values(res)) {
        if (!data) {
          // Unable to retrieve data, token may have expired, logout
          this.auth.logout();
          return;
        }
      }

      // Otherwise, populate data
      this.shortTermTracks = res[0];
      this.mediumTermTracks = res[1];
      this.longTermTracks = res[2];
    });
  }

}
