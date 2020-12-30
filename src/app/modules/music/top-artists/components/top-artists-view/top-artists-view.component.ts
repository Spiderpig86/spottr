import { Component, Input, OnInit } from '@angular/core';
import { TopArtistsResponse } from '../../../shared/models/top.model';

@Component({
    selector: 'top-artists-view',
    styleUrls: ['./top-artists-view.component.scss'],
    template: `
        <div>
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