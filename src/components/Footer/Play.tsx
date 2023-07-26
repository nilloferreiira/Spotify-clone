"use client";
import {
  SkipBack,
  Play as PlayButton,
  SkipForward,
  Shuffle,
  Repeat,
  Pause,
} from "phosphor-react";

import useActive from "@/hooks/useActive";
import usePlay from "@/hooks/usePlay";

export function Play() {
  // hook
  const { handleRepeat, handleShuffle, repeatActive, shuffleActive } =
    useActive();
  const { handleDrag, maxtime, time, handlePlay, playing } = usePlay();

  return (
    <div className="flex flex-col items-center mt-2">
      <div className="flex flex-row items-center gap-5">
        <Shuffle
          size={20}
          className={`cursor-pointer ${
            shuffleActive ? `text-spotifyGreen` : `text-zinc-300`
          }`}
          onClick={handleShuffle}
        />

        <SkipBack
          size={20}
          weight="fill"
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />
        <button
          className="bg-zinc-100 rounded-full p-2 hover:bg-zinc-300 transition-all"
          onClick={handlePlay}
        >
          {playing ? (
            <Pause size={24} weight="fill" color="black" />
          ) : (
            <PlayButton size={24} weight="fill" color="black" />
          )}
        </button>

        <SkipForward
          size={20}
          weight="fill"
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />

        <Repeat
          size={20}
          className={`cursor-pointer ${
            repeatActive ? `text-spotifyGreen` : `text-zinc-300`
          }`}
          onClick={handleRepeat}
        />
      </div>

      <div className="flex flex-row items-center justify-center p-2">
        <span className="select-none mr-2 text-zinc-400">{time}</span>
        <input
          type="range"
          min={0}
          max={maxtime}
          value={time}
          onChange={handleDrag}
          className={`w-[600px] bg-gray-300 rounded-full accent-zinc-200 cursor-grab`}
        />
        <span className="select-none ml-2 text-zinc-400">{maxtime}</span>
      </div>
    </div>
  );
}
