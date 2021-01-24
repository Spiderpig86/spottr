export const ENDPOINTS = new Map([
  ['top', `https://api.spotify.com/v1/me/top/`],
  ['profile', `https://api.spotify.com/v1/me/`],
  ['playlists', `https://api.spotify.com/v1/me/playlists/`],
  ['playlist_details', `https://api.spotify.com/v1/playlists/`],
  ['artist', `https://api.spotify.com/v1/artists/`],
  ['artist_related', `https://api.spotify.com/v1/artists/{id}/related-artists`],
  ['artist_top_tracks', `https://api.spotify.com/v1/artists/{id}/top-tracks?market=US`],
  ['track', `https://api.spotify.com/v1/tracks/`],
  ['track_features', `https://api.spotify.com/v1/audio-features/{id}`]
]);
