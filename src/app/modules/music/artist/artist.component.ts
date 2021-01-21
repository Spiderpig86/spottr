import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { RelatedArtistResponse, TopTracksByArtistResponse } from '../shared/models/artists.model';
import { Artist } from '../shared/models/shared.model';
import { User } from '../shared/models/user.model';
import { ArtistService } from '../shared/services/artists.service';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'artist',
  styleUrls: ['./artist.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <artist-summary [artist]="artist$ | async"></artist-summary>
      <artist-top-tracks [topTracks]="topTracks$ | async"></artist-top-tracks>
      <artist-related [relatedArtists]="relatedArtists$ | async"></artist-related>
    </div>
  `,
})
export class AritstComponent implements OnInit {
  user$: Observable<User>;
  artist$: Observable<Artist>;
  relatedArtists$: Observable<RelatedArtistResponse>;
  topTracks$: Observable<TopTracksByArtistResponse>;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        const artistId = params['id'];
        this.artist$ = this.artistService.getArtist(artistId);
        this.relatedArtists$ = this.artistService.getRelatedArtists(artistId);
        this.topTracks$ = this.artistService.getTopTracksByArtist(artistId);
      }
    });

    this.user$ = this.profileService.getProfile();
  }
}
