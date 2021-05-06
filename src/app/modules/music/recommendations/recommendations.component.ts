import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import {
  PlaylistDetailsResponse,
  PlaylistTrack,
} from '../shared/models/playlist.model';
import { RecommendationsResponse } from '../shared/models/recommendations.model';
import { User } from '../shared/models/user.model';
import {
  SAMPLE_ARTIST_COUNT,
  SAMPLE_TRACK_COUNT,
} from '../shared/music.constants';
import { PlaylistsService } from '../shared/services/playlists.service';
import { ProfileService } from '../shared/services/profile.service';
import { RecommendationsService } from '../shared/services/recommendations.service';

@Component({
  selector: 'recommendations',
  styleUrls: ['./recommendations.component.scss'],
  template: `
    <page>
      <recommendations-view
        [playlist]="playlistDetails$ | async"
        [recommendedTracks]="playlistRecommendations$ | async"
        (savePlaylistEvent)="savePlaylist()"
      ></recommendations-view>
    </page>
  `,
})
export class RecommendationsComponent implements OnInit {
  playlistDetails$: Observable<PlaylistDetailsResponse>;
  playlistRecommendations$: Observable<RecommendationsResponse>;
  user$: Observable<User>;
  playlistId: string;
  playlistName: string;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private playlistsService: PlaylistsService,
    private recommendationsService: RecommendationsService,
    private playlistService: PlaylistsService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        this.playlistId = params['id'];
        this.playlistDetails$ = this.playlistsService.getPlaylistDetails(
          this.playlistId
        );
        this.playlistDetails$.subscribe((playlistDetails) => {
          const sampleTracks = this.getSampleTracks(playlistDetails);
          const sampleArtists = this.getSampleArtists(playlistDetails);
          this.playlistRecommendations$ = this.recommendationsService.getRecommendations(
            sampleTracks,
            sampleArtists
          );
          this.playlistName = playlistDetails.name;
        });
      }
    });

    this.user$ = this.profileService.getProfile();
  }

  getSampleTracks(playlistDetails: PlaylistDetailsResponse): string[] {
    const sampleTracks: PlaylistTrack[] = [];
    for (let i = 0; i < SAMPLE_TRACK_COUNT; i++) {
      sampleTracks.push(
        this.sample<PlaylistTrack>(playlistDetails.tracks.items)
      );
    }

    return sampleTracks.map(
      (playlistTrack: PlaylistTrack) => playlistTrack.track.id
    );
  }

  getSampleArtists(playlistDetails: PlaylistDetailsResponse): string[] {
    const sampleTracks: PlaylistTrack[] = [];
    for (let i = 0; i < SAMPLE_ARTIST_COUNT; i++) {
      sampleTracks.push(
        this.sample<PlaylistTrack>(playlistDetails.tracks.items)
      );
    }

    const artistIds = sampleTracks
      .reduce(
        (accumulator, playlistTrack: PlaylistTrack) =>
          accumulator.concat(
            playlistTrack.track.artists.map((artist) => artist.id)
          ),
        []
      )
      .slice(0, SAMPLE_TRACK_COUNT);
    return artistIds.slice(0, SAMPLE_ARTIST_COUNT);
  }

  async savePlaylist(): Promise<void> {
    // Create playlist
    const user = await this.user$.toPromise();
    const createPlaylistResponse = await this.playlistService
      .putCreatePlaylist(
        user.id,
        `${this.playlistName} Recommendations`,
        `Similar playlist to '${this.playlistName}' created by Spottr.`
      )
      .toPromise();

    // Add all songs
    const recommendationResponse = await this.playlistRecommendations$.toPromise();
    const uris = recommendationResponse.tracks.map((track) => track.uri);
    await this.playlistService
      .putSongsToPlaylist(createPlaylistResponse.id, 0, uris)
      .toPromise();
  }

  sample<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }
}
