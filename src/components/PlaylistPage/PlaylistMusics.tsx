import musics from "@/constants/musics";
import { Title } from "./Title";
import { useGetId } from "@/hooks/useGetId";
import { Musicas } from "./Musicas";
export function PlaylistMusics() {
  // get id
  const { id } = useGetId();
  const musica = musics.filter((musica) => musica.playlistId == id); 
  
  return (
    <div className="flex flex-col w-full">
      <Title />
      <div className="border-t border-zinc-700 my-2 rounded-full"></div>
      <div>
        {musica.length ? (
          <Musicas musicas={musica} />
        ) : (
          <div className="flex text-zinc-300 text-xl p-2">Playlist vázia...</div>
        )}
      </div>
    </div>
  );
}
