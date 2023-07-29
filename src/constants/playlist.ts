import PlaylistInterface from "@/models/Playlist";

import musics from "./musics";

const musicas = musics.map((musica) => ({
  musica: musica.name,
}));

const playlists: PlaylistInterface[] = [
  {
    id: 1,
    playlistName: "Mix Iann Dior",
    playlistImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640",
  },

  {
    id: 2,
    playlistName: "Rock",
    playlistImage:
      "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
  },

  {
    id: 3,
    playlistName: "Pagode",
    playlistImage:
      "https://cdn.awsli.com.br/600x450/149/149537/produto/31858492/a304d9b4bb.jpg",
  },
  {
    id: 4,
    playlistName: "Mix 4",
    playlistImage:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/4/en/default",
  },

  {
    id: 5,
    playlistName: "Mix 5",
    playlistImage:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/5/en/default",
  },

  {
    id: 6,
    playlistName: "Mix 6",
    playlistImage:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/6/en/default",
  },

];

export default playlists;
