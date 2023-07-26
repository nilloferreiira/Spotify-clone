import { GridPlaylist } from "@/components/Hero/Main/GridPlaylist";
import { MadeForYou } from "@/components/Hero/Main/MadeForYou";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <div className="p-6 rounded-md bg-gradient-to-b from-zinc-800 to-zinc-950 m-6">
        {/* hello */}
        <div className="text-2xl font-black  p-6 rounded-t-md">
          Good Afternoon
        </div>
        {/* grid playlist */}
        <GridPlaylist />

        {/* made for you  */}

        <MadeForYou />
      </div>
    </div>
  );
}
