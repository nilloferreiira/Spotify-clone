import { Heart, Plus } from "lucide-react";

export function NavButton() {
  return (
    <div className="p-2 space-y-3 mt-3">
      <button className="flex items-center justify-center gap-3 hover:text-zinc-300">
        <div className="bg-zinc-400 w-8 h-8 text-black font-black flex items-center justify-center">
          <Plus />
        </div>
        Create Playlist
      </button>
      <button className="flex items-center justify-center gap-3 hover:text-zinc-300">
        <div className="bg-gradient-to-br from-indigo-800 to-cyan-300 w-8 h-8 text-black font-black flex items-center justify-center">
          <Heart className="text-navHover" />
        </div>
        Liked songs
      </button>
    </div>
  );
}
