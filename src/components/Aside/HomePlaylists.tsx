"use client";

import playlists from "@/constants/playlist";
import Image from "next/image";
import Link from "next/link";
import { usePlaylist } from "@/hooks/usePlaylist";

const playlistId = playlists.map((playlist) => playlist.id);
export default playlistId;

export function HomePlaylists() {
  
  
  const playlistSave = usePlaylist();
  
  
  return (
    <div id="playlist">
      {playlists.map((playlist) => (
        <Link
          key={playlist.id}
          className="flex items-center gap-1 hover:text-navHover overflow-hidden mt-4"
          href={`/playlist`} // href={`/playlist/${playlist.id}`} pegar esse id na pagina da playlist
        >
          <Image
            className="rounded-md"
            src={playlist.playlistImage}
            alt={"Capa da playlist"}
            width={48}
            height={48}
          />
          <span className="flex flex-row justify-start px-1 w-48">
            {playlist.playlistName}
          </span>
        </Link>
      ))}
    </div>
  );
}
