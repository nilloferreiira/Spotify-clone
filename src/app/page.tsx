import { GridPlaylist } from "@/components/home/GridPlaylist";


export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <div className="p-6 w-full rounded-md bg-gradient-to-b from-zinc-800 to-zinc-950 m-6">
        {/* hello */}
        <div className="text-2xl font-black  p-6 rounded-t-md">
          Good Afternoon
        </div>
        {/* grid playlist */}
        <GridPlaylist />
        {/* bg-gradient-to-b from-emerald-950 ... */}
      </div>
    </div>
  );
}
