export type StringObject = { [id: string]: string };

export interface Image {
  height: string;
  url: string;
  width: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Album {
  images: Image[];
  name: string;
  [x: string]: any;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: StringObject;
  external_urls: StringObject;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface TrackFeatures {
  danceability: number;
  energy: number;
  key: number; // TODO: Build converter to actual musical key
  mode: number;
  speechiness: number;
  acousticness: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
  type: string;
  id: string;
  uri: string;
  track_href: string;
  analysis_url: string;
  duration_ms: number;
  time_signature: number; // TODO: Build converter to actual time signature
  tempo: number;
}

export interface TrackAudioAnalysis {
  meta: StringObject;
  bars: any[];
  beats: any[];
  sections: any[];
  segments: any[];
  track: {
    num_samples: number;
    duration: number;
    sample_md5: string;
    offset_seconds: number;
    window_seconds: number;
    loudness: number;
    temp: number;
    time_signature: number;
    key: number;
    mode: number;
  }
}

export interface Artist {
  external_urls: StringObject;
  followers: {
      href: string | null;
      total: string;
  },
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}