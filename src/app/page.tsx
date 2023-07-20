import { HomePlaylists } from "@/components/home/HomePlaylists";
import { Nav } from "@/components/home/Nav";
import { NavButton } from "@/components/home/NavButtons";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          {/* nav */}
          <Nav />

          {/* playlists */}
          <div className="mt-6 p-6 bg-zinc-900 rounded-md flex-1 space-y-2">
            <h1 className="uppercase text-zinc-300 font-black text-sm">
              Playlist
            </h1>

            {/* botoes de criar playlists e fav */}

            <NavButton />

            {/* borda para as playlists  */}
            <div className="border-t border-zinc-700 my-2"></div>

            <HomePlaylists />
          </div>
        </aside>

        {/* main */}

        <main className="flex p-6">
          main
          {/* bg-gradient-to-b from-emerald-950 ... */}
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-600 p-6">
        play bar
      </footer>
    </div>
  );
}
