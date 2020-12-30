import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopArtist, TopArtistsResponse } from '../shared/models/top.model';
import { TopService, TopTimeRange } from '../shared/services/top.service';

@Component({
    selector: 'top-artists',
    styleUrls: ['./top-artists.component.scss'],
    template: `
        <div>
            <p class="text-lg font-bold">Top Artists</p>
            <time-range (valueChange)="setDateRange($event)"></time-range>
            <top-artists-view *ngIf="topArtists$" [topArtists]="topArtists$ | async"></top-artists-view>
        </div>
    `
})
export class TopArtistsComponent implements OnInit {

    topArtists$: Observable<TopArtistsResponse>;
    timeRange: TopTimeRange;

    constructor(private topService: TopService) {}

    ngOnInit() {
        console.log('TYES')
        this.timeRange = TopTimeRange.LONG_TERM;
        this.topArtists$ = this.topService.getTopArtists(TopTimeRange.LONG_TERM);
    }

    setDateRange(timeRange: TopTimeRange) {
        this.timeRange = timeRange;
        this.topArtists$ = this.topService.getTopArtists(timeRange);
    }
}