"use client";
import {
  Queue,
  DesktopTower,
  SpeakerHigh,
  SpeakerSimpleX,
} from "phosphor-react";
import { useState } from "react";

export function RightFooter() {
  const [volume, setVolume] = useState(50);

  const handleDrag = (event: any) => {
    const volumeNumber = Number(event.target.value);
    setVolume(volumeNumber);
    console.log(volume);
  };

  const mute = (event: any) => {
    if (volume < 2) {
      setVolume(100);
    } else {
      setVolume(0);
    }
  }

  return (
    <div className="flex gap-5">
      <Queue size={24} className="hover:text-zinc-100 cursor-pointer" />
      <DesktopTower size={24} className="hover:text-zinc-100 cursor-pointer" />

      {volume < 2 ? (
        <SpeakerSimpleX
          size={24}
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
          onClick={mute}
        />
      ) : (
        <SpeakerHigh
          size={24}
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
          onClick={mute}
        />
      )}

      <div>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleDrag}
          className={`w-32 bg-gray-300 rounded-full accent-zinc-200 cursor-grab`}
        />
      </div>
    </div>
  );
}
