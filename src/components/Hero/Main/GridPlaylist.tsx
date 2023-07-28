import playlists from "@/constants/playlist";
import Image from "next/image";
import Link from "next/link";

export function GridPlaylist() {
    return (
        <div className="grid grid-cols-4 gap-5">
          {playlists.map((playlist) => (
            <div>
              <Link href={"#"}>
                <div
                  key={playlist.id}
                  className="flex items-center bg-zinc-800 hover:bg-zinc-700 transition-all rounded-md overflow-hidden"
                >
                  <Image
                    src={playlist.playlistImage}
                    alt={"capa da playlist"}
                    width={84}
                    height={84}
                  />
                  <span className="font-bold p-6">{playlist.playlistName}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
    )
}