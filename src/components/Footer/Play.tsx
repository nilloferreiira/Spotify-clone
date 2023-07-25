"use client";
import {
  SkipBack,
  Play as PlayButton,
  SkipForward,
  Shuffle,
  Repeat,
} from "phosphor-react";
import { useState } from "react";

//mudar o state usando o status da api

export function Play() {
  const [time, setTime] = useState(50);
  const maxtime = 100 // substituir pelo tempo da musica
  
  const handleDrag = (event: any) => {
    const timeController = event.target.value
    setTime(timeController)
  }

    // criar o state | obs: talvez um state sirvar para o repeat e o shuffle
    const [shuffleActive, setShuffleActive] = useState<boolean>(false)


  return (
    <div className="flex flex-col items-center mt-2">
      <div className="flex flex-row items-center gap-5">
        <Shuffle size={20} className="cursor-pointer"/>

        <SkipBack
          size={20}
          weight="fill"
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />
        <div className="bg-zinc-100 rounded-full p-2 hover:bg-zinc-300 transition-all cursor-pointer">
          <PlayButton size={24} weight="fill" color="black"/>
        </div>

        <SkipForward
          size={20}
          weight="fill"
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />

        <Repeat size={20} className="cursor-pointer"/>
      </div>

      <div className="flex flex-row items-center justify-center">
        <span>{time}</span>
        <input
          type="range"
          min={0}
          max={maxtime}
          value={time}
          onChange={handleDrag}
          className={`w-[600px] bg-gray-300 rounded-full accent-zinc-200 cursor-grab`}
        />
        <span>{maxtime}</span>
      </div>
    </div>
  );
}
