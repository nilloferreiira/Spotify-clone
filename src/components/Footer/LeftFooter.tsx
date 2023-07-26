"use client";
import Image from "next/image";
import { HeartStraight, PictureInPicture } from "phosphor-react";

interface LeftFooterProps {
  image: string;
  musica: string;
  author: string;
}

// state pra favoritar

export function LeftFooter(props: LeftFooterProps) {
  return (
    <div className="flex items-center justify-center gap-5 m-2">
      <Image
        src={props.image}
        width={60}
        height={60}
        alt={"musica atual"}
        className="rounded-md"
      />
      <div>
        <h4 className="font-bold">{props.musica}</h4>
        <p className="text-zinc-400">{props.author}</p>
      </div>

      <div className="flex items-center gap-3">
        <HeartStraight
          size={24}
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />
        <PictureInPicture
          size={24}
          className="text-zinc-300 hover:text-zinc-100 cursor-pointer"
        />
      </div>
    </div>
  );
}
