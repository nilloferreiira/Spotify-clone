import Image from "next/image";
import musics from "@/constants/musics";
import { Clock } from "phosphor-react";
export function PlaylistMusics() {
  return (
    // pegar as musicas de acordo com a playlist
    // !!! desse jeito ta pegando todas as musicas cadastradas

    <div className="flex flex-col w-full">
      <div className="grid items-center grid-cols-4 text-zinc-400 text-sm uppercase w-full">
        <span className="flex justify-start"># TITLE</span>
        <span className="flex justify-center">album</span>
        <span className="flex justify-center">DATE ADDED</span>
        <span className="flex justify-end">
          <Clock size={16} />
        </span>
      </div>
      <div className="border-t border-zinc-700 my-2 rounded-full"></div>
      <div>
        {musics.map((musica, index) => {
          return (
            <div
              key={musica.id}
              className="grid grid-cols-4 items-center w-full p-2"
            >
              <div className="flex gap-1">
                <div className="flex items-center p-1">{index + 1}</div>
                <div>
                  <Image
                    src={musica.image}
                    alt={"Capa da playlist"}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </div>

                <div className="flex flex-col">
                  {musica.name} <p className="text-zinc-400 text-xs">{musica.author}</p>
                </div>
              </div>

              <span className="flex justify-center">{musica.album}</span>

              <span className="flex justify-center">27/07/23</span>

              <span className="flex justify-end">2:03</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
