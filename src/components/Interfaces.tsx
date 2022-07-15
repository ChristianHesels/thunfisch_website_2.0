interface PageStatus {
  value: number;
  setValue: (value: number) => void;
}

interface Song {
  name: string;
  img?: string;
  release?: string;
  youtube?: string;
  spotify?: string;
  apple?: string;
  wasSingle: boolean;
}

interface Album {
  name: string;
  songs: string[];
  release: string;
  img: string;
  youtube?: string;
  spotify?: string;
  apple?: string;
}
interface Social {
  youtube: string;
  instagram: string;
  spotify: string;
  appleMusic: string;
  email: string;
}

interface MusicStore {
  social: Social;
  albums: Album[];
  songs: Song[];
}

export type {PageStatus, Song, Album, Social, MusicStore};
