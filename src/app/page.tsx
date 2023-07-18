import { Home as HomeIcon, Search, Library, Plus, Heart } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          {/* nav */}
          <nav className="flex flex-col gap-5 text-md bg-zinc-900 p-6 rounded-md">
            <a href="#" className="flex gap-4">
              <HomeIcon /> Home
            </a>
            <a href="#" className="flex gap-4">
              <Search /> Search
            </a>
            <a href="#" className="flex gap-4">
              <Library />
              Your Library
            </a>
          </nav>

          {/* playlists */} 
          {/* space-y-2 talvez seja bom colocar */}
          <div className="mt-6 p-6 bg-zinc-900 rounded-md ">
            <h1 className="uppercase text-zinc-300 font-black text-sm">
              Playlist
            </h1>

            {/* botoes de criar playlists e fav */}

            <div className="p-2 space-y-3 mt-3">
              <button className="flex items-center justify-center gap-3">
                <div className="bg-zinc-400 w-8 h-8 text-black font-black flex items-center justify-center">
                  <Plus />
                </div>
                Create Playlist
              </button>
              <button className="flex items-center justify-center gap-3">
                <div className="bg-gradient-to-br from-indigo-800 to-cyan-300 w-8 h-8 text-black font-black flex items-center justify-center">
                  <Heart className="text-white" />
                </div>
                Liked songs
              </button>
            </div>

            {/* bordar para as playlists  */}
            <div className="border-t border-zinc-700 my-2"></div>

            <div className="flex items-center gap-3 p-1">
              <Image
                src={
                  "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/2f52943403d26d002be42fd77144f4023300377c3d223f666fb00fb8ae27a224_1.jpg"
                }
                alt={"rock"}
                width={32}
                height={32}
              />
              <span>Rock</span>
            </div>
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
