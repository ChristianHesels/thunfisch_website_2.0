import create from 'zustand';

interface Song {
  name: string;
  img?: string;
  release?: string;
  youtube: string;
  spotify: string;
  apple: string;
  wasSingle: boolean;
}

interface Album {
  name: string;
  songs: string[];
  release: string;
  img: string;
  youtube: string;
  spotify: string;
  apple: string;
}

interface TTTTStore {
  albums: Album[];
  songs: Song[];
  getAlbums: () => Album[];
  getSongs: () => Song[];
}

export const useTTTTStore = create<TTTTStore>((set, get) => ({
  songs: [
    {
      name: 'Cuba Libre',
      img: '300x300 einkaufsliste.jpg',
      youtube: 'https://youtu.be/XOdGNjBscTs',
      spotify:
        'https://open.spotify.com/track/6jiRKBEnavihJt2qPCxafa?si=cca00c0d3c1b4cf0',
      apple: '',
      wasSingle: false,
    },
    {
      name: 'Berliner Luft',
      img: '300x300 einkaufsliste.jpg',
      youtube: 'https://youtu.be/a2jPh4NP_Ok',
      spotify:
        'https://open.spotify.com/track/0JmIt8eTooLUO9JEoH6LSX?si=fda8ee3eaa68488a',
      apple: '',
      wasSingle: false,
    },
    {
      name: 'Bier',
      img: '300x300 einkaufsliste.jpg',
      youtube: 'https://youtu.be/RKAJgzcTUNA',
      spotify:
        'https://open.spotify.com/track/311BULdYhv9lKKRp1j1gEv?si=94d851598fb342e1',
      apple: '',
      wasSingle: false,
    },
    {
      name: 'Jägermeister',
      img: '300x300 einkaufsliste.jpg',
      youtube: 'https://youtu.be/TzOMPiJ51hg',
      spotify:
        'https://open.spotify.com/track/3H4jKISqMiHqElOyL1R5le?si=6cc3aa7e8cf84fca',
      apple: '',
      wasSingle: false,
    },
  ],
  albums: [
    {
      name: 'Einkaufsliste',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 einkaufsliste.jpg',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple: '',
    },
    {
      name: 'Ganz gewöhnliche Thunfische',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 ggt.jpg',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple: '',
    },
    {
      name: 'Bierpferd',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 bierpferd.jpg',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple: '',
    },
  ],
  getAlbums: () => {
    return get().albums;
  },
  getSongs: () => {
    return get().songs;
  },
}));
