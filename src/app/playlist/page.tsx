"use client";
import { Header } from "@/components/PlaylistPage/Header";
import { PlaylistMusics } from "@/components/PlaylistPage/PlaylistMusics";
import playlists from "@/constants/playlist";

export default function PlaylistPage() {
  let id = 1;

  const playlist = playlists.find((playlist) => playlist.id === id);
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <div className="rounded-md bg-gradient-to-b from-zinc-800 to-zinc-900 m-6">
        {playlist && (
          <Header
            key={playlist.id}
            img={playlist.playlistImage}
            name={playlist.playlistName}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus"
            }
          />
        )}

        <main className="bg-gradient-to-b from-zinc-900 to-zinc-950 w-full p-6">
  
          
          {/* <PlaylistMusics /> */}
       
       
        </main>
      </div>
    </div>
  );
}
