import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TopArtistsResponse, TopTracksResponse } from '../shared/models/top.model';
import { TimeRange, TopService } from '../shared/services/top.service';

@Component({
    selector: 'dashboard',
    styleUrls: ['./dashboard.component.scss'],
    template: `
        <div>
            <p>Dashboard</p>
            <button (click)="refresh()">Refresh</button>
            <p>{{ topArtists | async | json }}</p>
            <p>{{ topTracks | async | json }}</p>
        </div>
    `
})
export class DashboardComponent implements OnInit {

    topArtists: Observable<TopArtistsResponse>;
    topTracks: Observable<TopTracksResponse>;

    constructor(private topService: TopService) {}

    ngOnInit() {
        this.topArtists = this.topService.getTopArtists(TimeRange.LONG_TERM);
        this.topTracks = this.topService.getTopTracks(TimeRange.LONG_TERM);
    }

    refresh() {
       this.topService.getTopArtists(TimeRange.LONG_TERM).subscribe(response => {
           console.log('aaa', response);
       });
    }
}