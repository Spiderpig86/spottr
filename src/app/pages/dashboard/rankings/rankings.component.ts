import { Component, OnInit } from '@angular/core';
import { SpottrService } from '../../../services/spottr-service/spottr.service';
import { SpottrAuthService } from '../../../services/spottr-service/spottr-auth.service';
import { TopTracks } from '../../../models/topsongs';
import { forkJoin, Observable } from 'rxjs';

interface RankedTrack {
  longRank: number;
  mediumRank: number;
  shortRank: number;
  name: string;
  artist: string;
  id: string;
  img: string;
}

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  public shortTermTracks: TopTracks;
  public mediumTermTracks: TopTracks;
  public longTermTracks: TopTracks;

  public rankedTracks: Map<string, RankedTrack> = new Map<string, RankedTrack>();
  public rankedTracksList: RankedTrack[] = [];

  public artists: Set<string> = new Set<string>();
  public names: Set<string> = new Set<string>();
  public artistsList = [];

  constructor(private api: SpottrService,  private auth: SpottrAuthService) { }

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

      let short: RankedTrack[] = this.toRankedTracks(this.shortTermTracks, 'short');
      let medium: RankedTrack[] = this.toRankedTracks(this.mediumTermTracks, 'medium');
      let long: RankedTrack[] = this.toRankedTracks(this.longTermTracks, 'long');

      // Populate name and artist data
      this.populateSets([long, medium, short]);

      // Insert tracks into map, update ranks accordingly if exists
      long.forEach(track => {
        this.rankedTracks.set(track.id, track);
      });
      medium.forEach(track => {
        if (this.rankedTracks.has(track.id)) {
          let t: RankedTrack = this.rankedTracks.get(track.id);
          t.mediumRank = track.mediumRank;
          this.rankedTracks.set(t.id, t);
        } else {
          this.rankedTracks.set(track.id, track);
        }
      });
      short.forEach(track => {
        if (this.rankedTracks.has(track.id)) {
          let t: RankedTrack = this.rankedTracks.get(track.id);
          t.shortRank = track.shortRank;
          this.rankedTracks.set(t.id, t);
        } else {
          this.rankedTracks.set(track.id, track);
        }
      });

      // Push to lists
      this.artists.forEach(artist => this.artistsList.push({ text: artist, value: artist }));
      this.rankedTracksList = [ ...this.rankedTracks.values() ];

      this.displayData = this.rankedTracksList;
    });
  }

  toRankedTracks(list: TopTracks, time: string): RankedTrack[] {
    const res: RankedTrack[] = [];
    list.items.forEach((track, i) => {
      res.push({
        ...time === 'short' && { shortRank: i + 1 },
        ...time === 'medium' && { mediumRank: i + 1 },
        ...time === 'long' && { longRank: i + 1 },
        name: track.name,
        artist: track.artists[0].name,
        id: track.id,
        img: track.album.images[0].url
      });
    });
    return res;
  }

  populateSets(trackLists: RankedTrack[][]): void {
    // Populate the set of artists and track names for filter
    for (let ranked of trackLists) {
      ranked.forEach(track => {
        this.names.add(track.name);
        this.artists.add(track.artist.split(',')[0]);
      });
    }
    console.log(this.artists);
  }

  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  public displayData = [];

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.rankedTracksList.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      if (!(['shortRank', 'mediumRank', 'longRank']).includes(this.sortName)) {
        this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
      } else {
        this.displayData = data.sort((a, b) => {
          let m = null;
          let n = null;
          switch (this.sortName) { // Alter null closure value to sort the tracks correctly
            case 'longRank':
              m = a.longRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
              n = b.longRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
              break;
            case 'mediumRank':
              m = a.mediumRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
              n = b.mediumRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
              break;
            default:
              m = a.shortRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
              n = b.shortRank || (this.sortValue === 'ascend' ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
          }

          return this.sortValue === 'ascend' ? m - n : n - m;
        });
      }
    } else {
      this.displayData = data;
    }
  }

}