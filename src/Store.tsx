import create from 'zustand';
import {PageStatus, MusicStore} from './components/Interfaces';

export const useTTTTStore = create<MusicStore>((set, get) => ({
  social: {
    youtube: 'https://www.youtube.com/channel/UCom8vzwUhmIN41-NNmuTe7w',
    instagram: 'https://instagram.com/totalthunfisch',
    spotify:
      'https://open.spotify.com/artist/2IQOcPKKcpm55JT8c6hWlM?si=E91wv3fTS7-1-VA1DQHAZw',
    appleMusic:
      'https://music.apple.com/de/artist/total-thunfisch-terror-team/1462613216',
    email: 'info@totalthunfisch.de',
  },
  songs: [
    {
      name: 'Cuba Libre',
      img: '300x300 einkaufsliste',
      youtube: 'https://youtu.be/XOdGNjBscTs',
      spotify:
        'https://open.spotify.com/track/6jiRKBEnavihJt2qPCxafa?si=cca00c0d3c1b4cf0',
      apple:
        'https://music.apple.com/de/album/cuba-libre/1462804508?i=1462804513',
      wasSingle: false,
    },
    {
      name: 'Berliner Luft',
      img: '300x300 einkaufsliste',
      youtube: 'https://youtu.be/a2jPh4NP_Ok',
      spotify:
        'https://open.spotify.com/track/0JmIt8eTooLUO9JEoH6LSX?si=fda8ee3eaa68488a',
      apple:
        'https://music.apple.com/de/album/berliner-luft/1462804508?i=1462804514',
      wasSingle: false,
    },
    {
      name: 'Bier',
      img: '300x300 einkaufsliste',
      youtube: 'https://youtu.be/RKAJgzcTUNA',
      spotify:
        'https://open.spotify.com/track/311BULdYhv9lKKRp1j1gEv?si=94d851598fb342e1',
      apple: 'https://music.apple.com/de/album/bier/1462804508?i=1462804515',
      wasSingle: false,
    },
    {
      name: 'Jägermeister',
      img: '300x300 einkaufsliste',
      youtube: 'https://youtu.be/TzOMPiJ51hg',
      spotify:
        'https://open.spotify.com/track/3H4jKISqMiHqElOyL1R5le?si=6cc3aa7e8cf84fca',
      apple:
        'https://music.apple.com/de/album/j%C3%A4germeister/1462804508?i=1462804516',
      wasSingle: false,
    },
    {
      name: 'Intro',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/tb5UKatkGvg',
      spotify:
        'https://open.spotify.com/track/0DYizweR53yTseHfeIVBdI?si=d354ff23d31c4add',
      apple: 'https://music.apple.com/de/album/intro/1473774113?i=1473774115',
      wasSingle: false,
    },
    {
      name: 'TTTT',
      img: '300x300 tttt',
      youtube: 'https://www.youtube.com/watch?v=w9UWL5X-9U0',
      spotify:
        'https://open.spotify.com/track/26WFXCU57fHk2iapf1XtM8?si=0a57f99d44404975',
      apple: 'https://music.apple.com/de/album/tttt/1473774113?i=1473774416',
      wasSingle: true,
    },
    {
      name: 'Sucht',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/cMppwKtAoNk',
      spotify:
        'https://open.spotify.com/track/0oyiMRqraxxaVYVFDWxAGH?si=c3e13087393e4501',
      apple: 'https://music.apple.com/de/album/sucht/1473774113?i=1473774417',
      wasSingle: false,
    },
    {
      name: 'Gehirnreduktion',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/f41bo5MC8O0',
      spotify:
        'https://open.spotify.com/track/6Z8Ny6lLNlkR6SvkKvYC2l?si=377218a0280845a1',
      apple:
        'https://music.apple.com/de/album/gehirnreduktion/1473774113?i=1473774418',
      wasSingle: false,
    },
    {
      name: 'Fragwürdig',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/FEL8PaY2Chw',
      spotify:
        'https://open.spotify.com/track/39F2wFQGWjv8ynasIKTl3d?si=7dda93ac3c994b77',
      apple:
        'https://music.apple.com/de/album/fragw%C3%BCrdig/1473774113?i=1473774419',
      wasSingle: false,
    },
    {
      name: 'Der Trichter',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/e7qAxH-mS3Q',
      spotify:
        'https://open.spotify.com/track/1TxEvhpDm5t7rtUUcfSw3z?si=f6299c5408ce4c3d',
      apple:
        'https://music.apple.com/de/album/der-trichter/1473774113?i=1473774420',
      wasSingle: false,
    },
    {
      name: 'Der Tag danach',
      img: '300x300 ggt',
      youtube: 'https://youtu.be/-thJrHcHzQA',
      spotify:
        'https://open.spotify.com/track/34eEWgEKKNKppeRH6AAUsg?si=879f0bbcb8e14e14',
      apple:
        'https://music.apple.com/de/album/der-tag-danach/1473774113?i=1473774421',
      wasSingle: false,
    },
    {
      name: 'Ein Weihnachtshit',
      img: '300x300 weihnachtshit',
      spotify:
        'https://open.spotify.com/track/5bA684QGm6Nare0yRmoTFh?si=7ca25ee10dd74b24',
      apple:
        'https://music.apple.com/de/album/ein-weihnachtshit/1490456178?i=1490456184',
      wasSingle: true,
    },
    {
      name: 'Sambuca',
      img: '300x300 sambuca',
      youtube: 'https://youtu.be/RMx0mraSaiQ',
      spotify:
        'https://open.spotify.com/track/4cce0RxkPU61u2mHdvEohj?si=5f39ab5868734f04',
      apple: 'https://music.apple.com/de/album/sambuca-single/1494365679',
      wasSingle: true,
    },
    {
      name: 'Verliebt',
      img: '300x300 verliebt',
      youtube: 'https://www.youtube.com/watch?v=oWCl20JPJHw',
      spotify:
        'https://open.spotify.com/track/3exFq71M313jEvWUiCmr7U?si=4051b6713fcc43f6',
      apple: 'https://music.apple.com/de/album/verliebt-single/1495481403',
      wasSingle: true,
    },
    {
      name: 'Pommes',
      img: '300x300 pommes',
      youtube: 'https://www.youtube.com/watch?v=1lD4os7sNlY',
      spotify:
        'https://open.spotify.com/track/6ZrRLnM6aAUzA58ML326Yt?si=488aa6f4f5b2487e',
      apple: 'https://music.apple.com/de/album/pommes-single/1503653775',
      wasSingle: true,
    },
    {
      name: 'Kein Sauflied',
      img: '300x300 ks',
      youtube: 'https://www.youtube.com/watch?v=6Ox9k8dyXVg',
      spotify:
        'https://open.spotify.com/track/5Q5vYUSL0vsL3nOvlGxe3S?si=43f7bf1c8b4d4a94',
      apple: 'https://music.apple.com/de/album/kein-sauflied-single/1527860958',
      wasSingle: true,
    },
    {
      name: '30',
      img: '300x300 30',
      spotify:
        'https://open.spotify.com/track/0Gbxx71pbd5C8CFaF7juZF?si=1e56e253fd744259',
      apple: 'https://music.apple.com/de/album/30-single/1532586085',
      wasSingle: true,
    },
    {
      name: 'Arbeit Scheiße, Saufen Geil!',
      img: '300x300 assg',
      spotify:
        'https://open.spotify.com/track/7ADBNkMJNUT2jdmflvRFUh?si=e87035541e1640f3',
      apple:
        'https://music.apple.com/de/album/arbeit-schei%C3%9Fe-saufen-geil-single/1537473930',
      wasSingle: true,
    },
    {
      name: 'Fick Dich 2020',
      img: '300x300 fd2020',
      youtube: 'https://www.youtube.com/watch?v=Dxe1oLPpysk',
      spotify:
        'https://open.spotify.com/track/1kIbcMxi1rpGxxmynAX4z5?si=64962a3fdb5a4008',
      apple: 'https://music.apple.com/de/album/f-k-dich-2020-single/1543405688',
      wasSingle: true,
    },
    {
      name: 'Omasaufen',
      img: '300x300 omasaufen',
      youtube: 'https://www.youtube.com/watch?v=deFZHWHYz6Q',
      spotify:
        'https://open.spotify.com/track/6ykJC9iGTvRRTjbwkUAh0t?si=bd5d5c9053c5447e',
      apple: 'https://music.apple.com/de/album/omasaufen-single/1558312320',
      wasSingle: true,
    },
    {
      name: 'Keiner für alle',
      img: '300x300 kfa',
      youtube: 'https://www.youtube.com/watch?v=7jbxUprY0sc',
      spotify:
        'https://open.spotify.com/track/2X1DI2GRL3pSnC3ElWoLem?si=85ade2c4ac8246b6',
      apple:
        'https://music.apple.com/de/album/keiner-f%C3%BCr-alle-single/1584958871',
      wasSingle: true,
    },
  ],
  albums: [
    {
      name: 'Einkaufsliste',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 einkaufsliste',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple: 'https://music.apple.com/de/album/einkaufsliste-ep/1462804508',
    },
    {
      name: 'Ganz gewöhnliche Thunfische',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 ggt',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple:
        'https://music.apple.com/de/album/ganz-gew%C3%B6hnliche-thunfische/1473774113',
    },
    {
      name: 'Bierpferd',
      songs: ['Cuba Libre', 'Berliner Luft', 'Bier', 'Jägermeister'],
      release: '06.05.2019',
      img: '300x300 bierpferd',
      youtube:
        'https://youtube.com/playlist?list=OLAK5uy_lALULKTsQDK0QXH4CyOAfCEhkcUTkmU0E',
      spotify:
        'https://open.spotify.com/album/2dSIkpOenY8vpE2upKGpd4?si=Rlsuk7P5QSmnHUmnRGlEhQ',
      apple: 'https://music.apple.com/de/album/bierpferd/1504565678',
    },
  ],
}));

export const useSchranzStore = create<MusicStore>((set, get) => ({
  social: {
    youtube: 'https://www.youtube.com/c/drschranz',
    instagram: 'https://instagram.com/drschrnz',
    spotify:
      'https://open.spotify.com/artist/5vjaKwsMvnwiLJjSNxCUmZ?si=w9H2tsxDSfmZecpldc5TnQ',
    appleMusic: 'https://music.apple.com/de/artist/schranz/290568911',
    email: 'info@totalthunfisch.de',
  },
  songs: [
    {
      name: 'außer scheiße',
      img: '300x300 as',
      spotify:
        'https://open.spotify.com/track/1obDkTTSrX68Qb0xAiakwm?si=e3efb6010a3847bd',
      apple:
        'https://music.apple.com/de/album/au%C3%9Fer-schei%C3%9Fe-feat-diepk-jan-eurysma-single/1628383745',
      wasSingle: true,
    },
    {
      name: 'clubschlange',
      img: '300x300 clubschlange',
      spotify:
        'https://open.spotify.com/track/50TxwMhKA7qSldNdtlYdjA?si=e4cc9d7434024a7e',
      apple:
        'https://music.apple.com/de/album/clubschlange-feat-diepk/1621956814?i=1621956815',
      wasSingle: true,
    },
    {
      name: 'dawai dawai wipiwei',
      img: '300x300 ddw',
      spotify:
        'https://open.spotify.com/track/4c9ayAtiOihRkhmPahn7Co?si=f1564d909a48481f',
      apple:
        'https://music.apple.com/us/album/dawai-dawai-wipiwei-single/1617680942',
      wasSingle: true,
    },
    {
      name: 'stereosaufen',
      img: '300x300 stereosaufen',
      spotify:
        'https://open.spotify.com/track/3Zlsa2fPNIezVIyGxJQT00?si=6b5d9e31a530457d',
      apple:
        'https://music.apple.com/us/album/stereosaufen-feat-das-m-single/1613191245',
      wasSingle: true,
    },
  ],
  albums: [
    {
      name: '...oder gar nicht',
      songs: [
        'fa.ko',
        'stereosaufen',
        'clubschlange',
        'dawai dawai wipiwei',
        'sangria',
        'was machst du?',
      ],
      release: '03.06.2022',
      img: '300x300 ogn',
      spotify:
        'https://open.spotify.com/album/7ltoU6bOAJ6hUgn64AkL5n?si=VfT2M85vTHG2D6SIgNWRfA',
      apple: 'https://music.apple.com/de/album/oder-gar-nicht-ep/1621847445',
    },
  ],
}));

export const usePageStore = create<PageStatus>(set => ({
  value: 0,
  setValue: value => {
    set({value: value});
  },
}));
