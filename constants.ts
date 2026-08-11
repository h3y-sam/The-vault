import {
  Gamepad2,
  Clapperboard,
  MonitorPlay,
  Laptop,
  BookOpen,
  Music,
  Flower2,
  Lock,
  ShieldAlert,
} from 'lucide-react';

import { CategoryItem } from './types';

export const CATEGORIES: CategoryItem[] = [
  // =========================================================
  // ALL IN ONE
  // =========================================================
  {
    id: 'all-in-one',
    title: 'ALL IN ONE',
    description:
      'Movies, TV shows, anime, live channels — everything in one place',
    icon: MonitorPlay,
    url: '#',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    links: [
      {
        title: 'Stremio | Streaming Platform',
        url: 'https://stremio.com/',
      },
      {
        title: 'Plex | Movies, TV & Streaming',
        url: 'https://plex.tv/',
      },
      {
        title: 'Pluto TV | Movies, Shows & Live TV',
        url: 'https://pluto.tv/',
      },
    ],
  },

  // =========================================================
  // GAMES
  // =========================================================
  {
    id: 'games',
    title: 'Games',
    description: 'Discover amazing games and gaming resources',
    icon: Gamepad2,
    url: '#',
    gradient: 'from-purple-500 to-indigo-500',
    links: [
      {
        title: 'Steam | PC Games',
        url: 'https://store.steampowered.com/',
      },
      {
        title: 'Epic Games Store | PC Games',
        url: 'https://store.epicgames.com/',
      },
      {
        title: 'GOG | DRM-Free Games',
        url: 'https://www.gog.com/',
      },
      {
        title: 'Game Jolt | Indie Games',
        url: 'https://gamejolt.com/',
      },
      {
        title: 'Itch.io | Indie Games',
        url: 'https://itch.io/',
      },

      {
        title: 'Trainers',
        url: '#',
        isHeader: true,
      },

      {
        title: 'WeMod | Trainers App',
        url: 'https://www.wemod.com/',
      },
      {
        title: 'FLiNG Trainer | Game Trainers',
        url: 'https://flingtrainer.com/',
      },
      {
        title: 'Fearless Revolution | Gaming Community',
        url: 'https://fearlessrevolution.com/',
      },
    ],
  },

  // =========================================================
  // MOVIES / SHOWS
  // =========================================================
  {
    id: 'movies',
    title: 'Movies/Shows',
    description: 'Stream your favorite movies and TV shows',
    icon: Clapperboard,
    url: '#',
    gradient: 'from-pink-500 to-rose-500',
    links: [
      // Existing legitimate additions
      {
        title: 'Filmzie | Free Movies & Shows',
        url: 'https://filmzie.com/',
      },
      {
        title: 'Pluto TV | Free Movies, Shows & Live TV',
        url: 'https://pluto.tv/',
      },
      {
        title: 'Tubi | Free Movies & TV',
        url: 'https://tubitv.com/',
      },
      {
        title: 'Crackle | Free Movies & TV',
        url: 'https://crackle.com/',
      },
      {
        title: 'Plex | Movies, TV & Streaming',
        url: 'https://plex.tv/',
      },
      {
        title: 'Popcornflix | Free Movies & TV',
        url: 'https://popcornflix.com/',
      },
      {
        title: 'Kanopy | Movies & Documentaries',
        url: 'https://kanopy.com/',
      },
      {
        title: 'Hoopla | Movies, TV & More',
        url: 'https://hoopladigital.com/',
      },
      {
        title: 'Stremio | Streaming Platform',
        url: 'https://stremio.com/',
      },

      // Useful sections
      {
        title: 'Documentaries',
        url: '#',
        isHeader: true,
      },
      {
        title: 'Documentary Area | Documentaries',
        url: 'https://www.documentaryarea.com/',
      },
      {
        title: 'DocPlus | Documentaries',
        url: 'https://www.docplus.com/',
      },
    ],
  },

  // =========================================================
  // STREAMING
  // =========================================================
  {
    id: 'streaming',
    title: 'Streaming',
    description: 'Live Sports & TV',
    icon: MonitorPlay,
    url: '#',
    gradient: 'from-blue-400 to-cyan-500',
    links: [
      {
        title: 'Pluto TV | Live TV',
        url: 'https://pluto.tv/',
      },
      {
        title: 'Plex | Live TV',
        url: 'https://plex.tv/',
      },
      {
        title: 'Tubi | Live TV & Movies',
        url: 'https://tubitv.com/',
      },
    ],
  },

  // =========================================================
  // SOFTWARE
  // =========================================================
  {
    id: 'software',
    title: 'Software',
    description: 'Essential software and development tools',
    icon: Laptop,
    url: '#',
    gradient: 'from-emerald-400 to-teal-500',
    links: [
      {
        title: 'Microsoft | Software & Tools',
        url: 'https://www.microsoft.com/',
      },
      {
        title: 'GitHub | Developer Platform',
        url: 'https://github.com/',
      },
      {
        title: 'Visual Studio Code | Code Editor',
        url: 'https://code.visualstudio.com/',
      },
      {
        title: 'Blender | 3D Creation',
        url: 'https://www.blender.org/',
      },
      {
        title: 'DaVinci Resolve | Video Editing',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve',
      },
    ],
  },

  // =========================================================
  // BOOKS
  // =========================================================
  {
    id: 'books',
    title: 'Books',
    description: 'Digital libraries and reading resources',
    icon: BookOpen,
    url: '#',
    gradient: 'from-orange-400 to-amber-500',
    links: [
      {
        title: 'WEBTOON | Webcomics & Manga',
        url: 'https://www.webtoons.com/',
      },
      {
        title: 'Project Gutenberg | Free E-books',
        url: 'https://www.gutenberg.org/',
      },
      {
        title: 'Internet Archive | Digital Library',
        url: 'https://archive.org/',
      },
      {
        title: 'Open Library | Online Books',
        url: 'https://openlibrary.org/',
      },
      {
        title: 'Google Books | Books & Research',
        url: 'https://books.google.com/',
      },
    ],
  },

  // =========================================================
  // MUSIC
  // =========================================================
  {
    id: 'music',
    title: 'Music',
    description: 'Music streaming and audio platforms',
    icon: Music,
    url: '#',
    gradient: 'from-violet-500 to-fuchsia-500',
    links: [
      {
        title: 'NCS | Non-Copyrighted Music',
        url: 'https://ncs.io/',
      },
      {
        title: 'Bandcamp | Music Platform',
        url: 'https://bandcamp.com/',
      },
      {
        title: 'SoundCloud | Music & Audio',
        url: 'https://soundcloud.com/',
      },
      {
        title: 'Spotify | Music Streaming',
        url: 'https://open.spotify.com/',
      },
      {
        title: 'YouTube Music | Music Streaming',
        url: 'https://music.youtube.com/',
      },
    ],
  },

  // =========================================================
  // ANIME
  // =========================================================
  {
    id: 'anime',
    title: 'Anime',
    description: 'Anime streaming and manga resources',
    icon: Flower2,
    url: '#',
    gradient: 'from-pink-400 to-red-400',
    links: [
      {
        title: 'Crunchyroll | Anime Streaming',
        url: 'https://www.crunchyroll.com/',
      },
      {
        title: 'Netflix | Anime & TV',
        url: 'https://www.netflix.com/',
      },
      {
        title: 'Hulu | Anime & TV',
        url: 'https://www.hulu.com/',
      },
      {
        title: 'WEBTOON | Anime & Webcomics',
        url: 'https://www.webtoons.com/',
      },
    ],
  },

  // =========================================================
  // VPN
  // =========================================================
  {
    id: 'vpn',
    title: 'VPN',
    description: 'Virtual private networks and security tools',
    icon: Lock,
    url: '#',
    gradient: 'from-yellow-400 to-orange-500',
    links: [
      {
        title: 'NordVPN | VPN',
        url: 'https://nordvpn.com/',
      },
      {
        title: 'ExpressVPN | VPN',
        url: 'https://www.expressvpn.com/',
      },
      {
        title: 'CyberGhost | VPN',
        url: 'https://www.cyberghostvpn.com/',
      },
      {
        title: 'Private Internet Access | VPN',
        url: 'https://www.privateinternetaccess.com/',
      },
      {
        title: 'Surfshark | VPN',
        url: 'https://surfshark.com/',
      },
    ],
  },

  // =========================================================
  // ADBLOCKERS
  // =========================================================
  {
    id: 'adblockers',
    title: 'AdBlockers',
    description: 'Ad blocking tools and privacy extensions',
    icon: ShieldAlert,
    url: '#',
    gradient: 'from-blue-500 to-indigo-600',
    links: [
      {
        title: 'AdGuard | AdBlocker',
        url: 'https://adguard.com/',
      },
      {
        title: 'Adblock Plus | AdBlocker',
        url: 'https://adblockplus.org/',
      },
      {
        title: 'uBlock Origin | Content Blocker',
        url: 'https://ublockorigin.com/',
      },
    ],
  },
];
