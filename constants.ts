import { 
  Gamepad2, 
  Clapperboard, 
  MonitorPlay, 
  Laptop, 
  BookOpen, 
  Music, 
  Flower2, 
  Lock, 
  ShieldAlert 
} from 'lucide-react';
import { CategoryItem } from './types';

export const CATEGORIES: CategoryItem[] = [
  {
  id: 'all-in-one',
  title: 'ALL IN ONE',
  description: 'Movies, TV shows, anime, live channels — everything in one place',
  icon: MonitorPlay,
  url: '#',
  gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  links: [
    { 
      title: 'TMOVIE | Movies, TV Shows, Anime & Live TV', 
      url: 'https://tmovie.tv/' 
    }
  ]
},
  {
    id: 'games',
    title: 'Games',
    description: 'Discover amazing games and gaming resources',
    icon: Gamepad2,
    url: '#', 
    gradient: 'from-purple-500 to-indigo-500',
    links: [
        { title: 'Fitgirl Repacks | Popular Repacks', url: 'https://fitgirl-repacks.site/' },
        { title: 'GOGgames | Free GOG Games', url: 'https://gog-games.to/' },
        { title: 'Dodi Repacks | Repacks', url: 'https://dodi-repacks.download/' },
        { title: 'AnkerGames | Wide selection of Games', url: 'https://ankergames.net/' },
        { title: 'SteamGG | *Free* Preinstalled Steam Games', url: 'https://steamgg.net/' },
        { title: 'SteamRip | *Free* Preinstalled Steam Games', url: 'https://steamrip.com/' },
        { title: 'M4ckdoge Repacks | Repacks', url: 'https://m4ckd0ge-repacks.site/' },
        { title: 'Elamigos | *Juegos Españoles*', url: 'https://elamigos.site/' },
        { title: 'Online-Fix | Online for Cracked Games', url: 'https://online-fix.me/' },
        { title: 'Emulator Roms', url: '#', isHeader: true },
        { title: 'CDRomance *Registration Required*', url: 'https://retrogametalk.com/repository/' },
        { title: 'Emuparadise', url: 'https://www.emuparadise.me/' },
        { title: 'Trainers', url: '#', isHeader: true },
        { title: 'WeMod | Trainers App', url: 'https://www.wemod.com/' },
        { title: 'FearlessRevolution | Tables & Trainers', url: 'https://fearlessrevolution.com/' },
        { title: 'FLiNGTrainer | Seperate Trainers', url: 'https://flingtrainer.com/' },
    ]
  },
  {
    id: 'movies',
    title: 'Movies/Shows',
    description: 'Stream your favorite movies and TV shows',
    icon: Clapperboard,
    url: '#',
    gradient: 'from-pink-500 to-rose-500',
    links: [
      { title: 'Netmirror | Best Netflix Mirror', url: 'https://net20.cc/home' },
      { title: 'Flixer | Most Popular *NO ADS*', url: 'https://flixer.su/' },
      { title: 'Cineby | *Netflix UI*', url: 'https://www.cineby.app/' },
      { title: 'BitCine | *Netflix UI*', url: 'https://www.bitcine.app/' },
      { title: 'VeloraTV | *Netflix UI*', url: 'https://veloratv.ru/' },
      { title: 'XPrime Tv | *Netflix UI*', url: 'https://xprime.tv/' },
      { title: 'Fmovies | Movies & TV', url: 'https://www.fmovies.gd/' },
      { title: 'MKV Cinemas | Bollywood & Hollywood', url: 'https://mkvcinemas.kiwi/' },
      { title: '1337x | *Torrents*', url: 'https://1337x.to/home/' },
      { title: 'Docplus | *Documentaries*', url: 'https://www.docplus.com/' },
      { title: 'Documentary Area | *Documentaries*', url: 'https://www.documentaryarea.com/' },
      { title: '↓ TUTORIAL | PStream (4K) Setup ↓', url: 'https://vimeo.com/1059834885/c3ab398d42' },
      { title: '↑ PStream | *Watch Tutorial for 4K* ↑', url: 'https://pstream.mov/' },
    ]
  },
  {
    id: 'streaming',
    title: 'Streaming',
    description: 'Live Sports & TV',
    icon: MonitorPlay,
    url: '#',
    gradient: 'from-blue-400 to-cyan-500',
    links: [
        { title: 'StreamEast *All Mirrors*', url: 'https://gostreameast.link/' },
        { title: 'Sportsurge | Live Sports', url: 'https://v3.sportsurge.to/home39' },
        { title: 'WatchSports | *10 Sports*', url: 'https://watchsports.to/' },
        { title: 'Streamed | Live Sports', url: 'https://streamed.su/' },
        { title: 'TVPass | *USA*', url: 'https://tvpass.org/' },
        { title: 'RiveLive', url: 'https://rivestream.org/livesports' },
        { title: 'LiveHDTV', url: 'https://www.livehdtv.com/' },
        { title: 'EasyWebTV *All Countries*', url: 'https://zhangboheng.github.io/Easy-Web-TV-M3u8/routes/countries.html' },
        { title: 'RGShows *International Live TV*', url: 'https://www.rgshows.me/livetv/' },
    ]
  },
  {
    id: 'software',
    title: 'Software',
    description: 'Essential software and development tools',
    icon: Laptop,
    url: '#',
    gradient: 'from-emerald-400 to-teal-500',
    links: [
        { title: 'Appdoze | *Latest Softwares*', url: 'https://appdoze.net/' },
        { title: 'Scloud | Windows Software', url: 'https://scloud.ws/' },
        { title: 'DownloadPirate | VFX + Much More', url: 'https://www.downloadpirate.com/' },
        { title: 'AeDownload | Premiere & After Effects Plugins', url: 'https://aedownload.com/' },
        { title: 'Audioz | Music Production Software', url: 'https://audioz.download/' },
        { title: 'DAIKOV | *Russian*', url: 'https://diakov.net/' },
        { title: 'DownloadHa | *Persian*', url: 'https://www.downloadha.com/' },
    ]
  },
  {
    id: 'books',
    title: 'Books',
    description: 'Digital libraries and reading resources',
    icon: BookOpen,
    url: '#',
    gradient: 'from-orange-400 to-amber-500',
    links: [
        { title: 'Z-Lib | E-books', url: 'https://z-lib.gd/' },
        { title: 'RiveManga | Manga', url: 'https://rivestream.org/manga' },
        { title: 'Libgen | E-books', url: 'https://libgen.li/' },
        { title: "Anna's Archive | E-books & Reasearch papers", url: 'https://annas-archive.org/' },
        { title: 'Liber3 | E-books', url: 'https://liber3.eth.limo/' },
        { title: 'Audiobookbay | Audiobooks', url: 'https://audiobookbay.lu/' },
        { title: 'Full Length Audiobooks | *No Account Required*', url: 'https://fulllengthaudiobooks.net/' },
        { title: 'Tokybook | Audiobooks *Smaller Catalog*', url: 'https://tokybook.com/' },
    ]
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Music streaming and audio platforms',
    icon: Music,
    url: '#',
    gradient: 'from-violet-500 to-fuchsia-500',
    links: [
        { title: 'Racoon | Multi Media Downloader', url: 'https://shailen.dedyn.io/racoon/' },
        { title: 'AZMP3 | Youtube to MP3', url: 'https://azmp3.cc/' },
        { title: 'Ezmp3 | Youtube to MP3', url: 'https://ezmp3.io/h520' },
        { title: 'Cobalt | YT, IG, Twitch etc... *Downloader*', url: 'https://cobalt.tools/' },
        { title: 'Lucida | HiFi Music Downloader', url: 'https://lucida.to/' },
        { title: 'DoubleDouble | Download *HiFi* Music', url: 'https://doubledouble.top/' },
        { title: 'NCS | Non-Copyrighted Music', url: 'https://ncs.io/' },
        { title: 'Music School | Bandcamp to MP3', url: 'https://downloadmusicschool.com/bandcamp/' },
        { title: 'CnvMP3 | Media Downloader', url: 'https://cnvmp3.com/' },
        { title: 'Megathread | Everything Music Related', url: 'https://github.com/MoonWalker440/Music-Megathread/' },
    ]
  },
  {
    id: 'anime',
    title: 'Anime',
    description: 'Anime streaming and manga resources',
    icon: Flower2,
    url: '#',
    gradient: 'from-pink-400 to-red-400',
    links: [
        { title: 'AnimeKai | Hard-sub Anime', url: 'https://animekai.to/' },
        { title: 'XPrime TV | Anime, Movies & TV', url: 'https://xprime.tv/' },
        { title: 'KickAssAnime | Anime', url: 'https://kaa.mx/' },
        { title: 'HiAnime | Anime Dub & Sub', url: 'https://hianimez.to/' },
        { title: 'AnimeNoSub | Anime', url: 'https://animenosub.to/' },
        { title: 'RiveStream | Anime, Movies & Live TV', url: 'https://rivestream.org/' },
    ]
  },
  {
    id: 'vpn',
    title: 'VPN',
    description: 'Virtual private networks and security tools',
    icon: Lock,
    url: '#',
    gradient: 'from-yellow-400 to-orange-500',
    links: [
        { title: 'NordVPN', url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=124563' },
        { title: 'ExpressVPN', url: 'https://go.expressvpn.com/c/4281306/1462856/16063' },
        { title: 'CyberGhost', url: 'https://safe.cyberghostvpn.com/flash-devices?utm_medium=affiliate&lp=flash-devices&coupon=2Y2Mb' },
        { title: 'Private Internet Access', url: 'https://privateinternetaccess.com/cj/bestus?coupon=2Y2M' },
        { title: 'Surfshark', url: 'https://www.tkqlhce.com/click-101452304-15438547' },
    ]
  },
  {
    id: 'adblockers',
    title: 'AdBlockers',
    description: 'Ad blocking tools and privacy extensions',
    icon: ShieldAlert,
    url: '#',
    gradient: 'from-blue-500 to-indigo-600',
    links: [
        { title: 'AdGuard | AdBlocker', url: 'https://adguard.com?aid=135720' },
        { title: 'Adblock Plus | AdBlocker', url: 'https://adblockplus.org/' },
        { title: 'UBlockOrigin | Content Blocker *Ads & more*', url: 'https://ublockorigin.com/' },
    ]
  },
];
