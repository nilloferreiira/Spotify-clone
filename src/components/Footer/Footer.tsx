import { LeftFooter } from "./LeftFooter";
import { Play } from "./Play";
import musics from "@/contexts/musics";
import { RightFooter } from "./RightFooter";

export function Footer() {
  // constante momentanea enquanto nao estou usando uma API para pegar a musica atual
  const musica = musics[0]; //criar component

  return (
    <footer className="bg-zinc-800 border-t border-zinc-600 p-2 mx-auto">
      <div className="flex items-center justify-between">
        {/* LeftFooter  */}
        <div key={musica.id}>
          <LeftFooter
            image={musica.image}
            musica={musica.name}
            author={musica.author}
          />
        </div>

        {/* MiddleFooter */}

        <Play />

        {/* RightFooter  */}

        <RightFooter />
      </div>
    </footer>
  );
}
