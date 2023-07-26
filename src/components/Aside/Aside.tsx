import { Nav } from "./Nav";
import { NavButton } from "./NavButtons";
import { HomePlaylists } from "./HomePlaylists";

export function Aside() {
  return (
    <aside className="w-80 bg-zinc-950 py-6 pl-6">
      {/* nav */}
      <Nav />

      {/* playlists */}
      <div className="mt-6 p-6 bg-zinc-900 rounded-md flex-1 space-y-2 max-h-[600px] overflow-y-auto">
        <h1 className="uppercase text-zinc-300 font-black text-sm">Playlist</h1>

        {/* botoes de criar playlists e fav */}

        <NavButton />

        {/* borda para as playlists  */}
        <div className="border-t border-zinc-700 my-2"></div>

        <HomePlaylists />
      </div>
    </aside>
  );
}
