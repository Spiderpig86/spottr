import { Component, Input } from '@angular/core';
import { TopTracksResponse } from '../../../shared/models/top.model';

@Component({
    selector: 'top-tracks-view',
    styleUrls: ['./top-tracks-view.component.scss'],
    template: `
        <div *ngIf="topTracks" class="my-4">
            <top-tracks-item *ngFor="let track of topTracks.items" [topTrack]="track"></top-tracks-item>
        </div>
    `
})
export class TopTracksViewComponent {

    @Input() topTracks: TopTracksResponse;

    constructor() {}
}