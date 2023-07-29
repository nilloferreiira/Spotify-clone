import Image from 'next/image'

interface MusicasProps {
  musicas: Array<any>;
}

export function Musicas(props: MusicasProps) {
  return (
    <div>
        {props.musicas.map((musica, index) => (
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
        ))}
    </div>
  );
}
