import { Component, Input } from '@angular/core';
import { TopArtist } from '../../../shared/models/top.model';

@Component({
    selector: 'dashboard-top-artist',
    styleUrls: ['./dashboard-top-artist.component.scss'],
    template: `
        <div class="p-4 text-center">
            <img class="rounded-full w-48 h-48 mb-5" [src]="topArtist.images[0].url" />
            <p>{{ topArtist.name }}</p> <!-- TODO Link to Artist page -->
        </div>
    `
})
export class DashboardTopArtistComponent {

    @Input() topArtist: TopArtist;
    
    constructor() {}
}