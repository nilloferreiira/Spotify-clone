import PlaylistInterface from "@/models/Playlist";

// ""rock

// "" pagode

import musics from "./musics";

const musicas = musics.map((musica) => ({
  musica: musica.name,
}));

const playlists: PlaylistInterface[] = [
  {
    id: 1,
    playlistName: "Mix Iann Dior",
    musica: musicas,
    playlistImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640",
  },

  {
    id: 2,
    playlistName: "Rock",
    musica: musicas,
    playlistImage:
      "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
  },

  {
    id: 3,
    playlistName: "Pagode",
    musica: musicas,
    playlistImage:
      "https://cdn.awsli.com.br/600x450/149/149537/produto/31858492/a304d9b4bb.jpg",
  },
  {
    id: 4,
    playlistName: "Mix Iann Dior",
    musica: musicas,
    playlistImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640",
  },

  {
    id: 5,
    playlistName: "Rock",
    musica: musicas,
    playlistImage:
      "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
  },

  {
    id: 6,
    playlistName: "Pagode",
    musica: musicas,
    playlistImage:
      "https://cdn.awsli.com.br/600x450/149/149537/produto/31858492/a304d9b4bb.jpg",
  },

  {
    id: 7,
    playlistName: "Mix Iann Dior",
    musica: musicas,
    playlistImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640",
  },

  {
    id: 8,
    playlistName: "Rock",
    musica: musicas,
    playlistImage:
      "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
  },
];

export default playlists;
