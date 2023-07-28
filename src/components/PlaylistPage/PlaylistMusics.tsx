import Image from "next/image";
import musics from "@/constants/musics";
import { Clock } from "phosphor-react";

export function PlaylistMusics() {
  return (
    // pegar as musicas de acordo com a playlist

    // !!! desse jeito ta pegando todas as musicas cadastradas

    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between text-zinc-400 uppercase w-full">
        <span># TITLE</span>
        <span>album</span>
        <span>DATE ADDED</span>
        <span>
          <Clock />
        </span>
      </div>
      <div>
        {musics.map((musica) => (
          
            <button
              key={musica.id}
              className="flex items-center justify-between gap-1 p-1 hover:text-navHover overflow-hidden"
            >

              <div className="flex gap-1">
              <Image
                src={musica.image}
                alt={"Capa da playlist"}
                width={32}
                height={32}
              />
                <div className="flex flex-col">
                <span>
                  {musica.name}
                </span>
                </div>

              </div>
              
              
                <span>
                  {musica.album}
                </span>
                <span>
                  27/07/23
                </span>
                <span>
                  2:03
                </span>

              
            </button>
        ))}
      </div>
    </div>
  );
}
