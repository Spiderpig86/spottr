import { Component, Input, OnInit } from '@angular/core';
import { TopArtistsResponse } from '../../../shared/models/top.model';

@Component({
    selector: 'top-artists-view',
    styleUrls: ['./top-artists-view.component.scss'],
    template: `
        <div *ngIf="topArtists" class="grid grid-cols-3 grid-gap-6 my-4">
            <dashboard-top-artist *ngFor="let artist of topArtists.items" [topArtist]="artist"></dashboard-top-artist>
        </div>
    `
})
export class TopArtistsViewComponent implements OnInit {
    
    @Input() topArtists: TopArtistsResponse;
    
    constructor() {}

    ngOnInit() {
        console.log(this.topArtists);
    }
}