import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
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
      <artist-header [artist]="artist$ | async"></artist-header>
    </div>
  `,
})
export class AritstComponent implements OnInit {
  user$: Observable<User>;
  artist$: Observable<Artist>;

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
      }
    });

    this.user$ = this.profileService.getProfile();
  }
}
