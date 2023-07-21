import Image from "next/image";
import Link from "next/link";


interface PlaylistCardProps {
    name: string,
    desc: string,
    img: string,
}

export function PlaylistCard(props: PlaylistCardProps) {
  return (
      <Link href={""}>
    <div className="flex flex-col gap-2 w-48 h-72 bg-zinc-900 p-4 hover:bg-zinc-800 rounded-md">
        <Image
        className="rounded-md"
          src={
            props.img
          }
          alt={"capa do album"}
          width={158}
          height={158}
        />

        <h3 className="font-bold">{props.name}</h3>
        <p className="text-zinc-400 text-sm">
        {props.desc}
        </p>
    </div>
      </Link>
  );
}
