import { Component, Input } from '@angular/core';
import { TopArtist } from '../../../shared/models/top.model';

@Component({
    selector: 'dashboard-top-artist',
    styleUrls: ['./dashboard-top-artist.component.scss'],
    template: `
        <div class="px-2 py-4 text-center w-64 mx-auto">
            <img class="rounded-full mx-auto w-32 h-32 mb-5 md:w-48 md:h-48" [src]="topArtist.images[0].url" />
            <p>{{ topArtist.name }}</p> <!-- TODO Link to Artist page -->
        </div>
    `
})
export class DashboardTopArtistComponent {

    @Input() topArtist: TopArtist;
    
    constructor() {}
}