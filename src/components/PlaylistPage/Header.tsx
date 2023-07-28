import Image from "next/image";
import { Circle, DotsThree, HeartStraight, Play } from "phosphor-react";

interface HeaderProps {
  img: string;
  name: string;
  desc: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-col mt-28 gap-6 p-6 ">
      <div className="flex gap-6">
        <Image
        width={230}
        height={230}
        className="rounded-md"
        src={props.img}
        alt={"Capa da playlist"}
      />
      <div className="flex flex-col gap-5">
        <h3>PLAYLIST</h3>
        <h1 className="font-black text-5xl">{props.name}</h1>
        <p className="text-zinc-400">{props.desc}</p>

        {/* tornar dinamico  */}
        <div className="flex items-center gap-3 text-zinc-300">
          <p>860,305 likes</p>
          <Circle size={8} weight={"fill"} />
          <p>7 songs, 20min</p>
        </div>
      </div>
      </div>
      
      <div className="flex text-zinc-100 gap-3 items-center">
        <Play size={48} weight="fill" className="bg-spotifyGreen rounded-full p-2 cursor-pointer hover:bg-opacity-70 transition-all"/>
        <HeartStraight size={32} className="hover:text-zinc-400 cursor-pointer transition-all"/>
        <DotsThree size={32} className="hover:text-zinc-400 cursor-pointer transition-all"/>
      </div>
    </header>
  );
}
