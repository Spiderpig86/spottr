export const ENDPOINTS = new Map([
  ['top', `https://api.spotify.com/v1/me/top/`],
  ['profile', `https://api.spotify.com/v1/me/`],
  ['profile_following', `https://api.spotify.com/v1/me/following?type=artist`],
  ['playlists', `https://api.spotify.com/v1/me/playlists/`],
  ['playlist_details', `https://api.spotify.com/v1/playlists/`],
  ['artist', `https://api.spotify.com/v1/artists/`],
  ['artist_related', `https://api.spotify.com/v1/artists/{id}/related-artists`],
  [
    'artist_top_tracks',
    `https://api.spotify.com/v1/artists/{id}/top-tracks?market=US`,
  ],
  ['track', `https://api.spotify.com/v1/tracks/`],
  ['track_features', `https://api.spotify.com/v1/audio-features/{id}`],
  ['track_analysis', `https://api.spotify.com/v1/audio-analysis/{id}`],
  ['recommendations', `https://api.spotify.com/v1/recommendations`],
  ['create_playlist', `https://api.spotify.com/v1/users/{user_id}/playlists`],
  ['add_songs_to_playlist', `https://api.spotify.com/v1/playlists/{playlist_id}/tracks`]
]);
