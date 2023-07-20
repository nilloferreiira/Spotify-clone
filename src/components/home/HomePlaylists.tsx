import playlists from "@/contexts/playlist";
import Image from "next/image";

export function HomePlaylists() {
  
  return (
    <div>
      {playlists.map((playlist) => (
        <button
          key={playlist.id}
          className="flex items-center gap-1 p-1 hover:text-navHover overflow-hidden"
        >
          <Image
            src={playlist.playlistImage}
            alt={"Capa da playlist"}
            width={32}
            height={32}
            />
          <span className="flex flex-row justify-start px-1 w-48">{playlist.playlistName}</span>
        </button>
      ))}
    </div>
  );
  
  
  // estrutura para montar a visualizacao da playlist
  
  // <div>
  //     {musics.map((musica) => (
  //       <button
  //         key={musica.id}
  //         className="flex items-center gap-1 p-1 hover:text-navHover overflow-hidden"
  //       >
  //         <Image
  //           src={musica.image}
  //           alt={"Capa da playlist"}
  //           width={32}
  //           height={32}
  //         />
  //         <span className="flex flex-row justify-start px-1 w-48">{musica.name}</span>
  //       </button>
  //     ))}
  //   </div>

}
