"use client";

import { Plus } from "lucide-react";
import { HeartStraight } from "phosphor-react";

// Botao de favoritos criar uma lista com musicas favoritas usando o state e local storage

export function NavButton() {
  return (
    <div className="p-2 space-y-3 mt-3">
      <button className="flex items-center justify-center gap-3 hover:text-zinc-300 transition-all">
        <div className="bg-zinc-400 hover:bg-zinc-300 w-8 h-8 text-black font-black flex items-center justify-center rounded-md">
          <Plus />
        </div>
        Create Playlist
      </button>
      <button className="flex items-center justify-center gap-3 hover:text-zinc-300">
        <div className="bg-gradient-to-br from-indigo-800 to-cyan-300 w-8 h-8 text-black font-black flex items-center justify-center rounded-md">
          <HeartStraight size={20} color="white" weight="fill" />
        </div>
        Liked songs
      </button>
    </div>
  );
}
