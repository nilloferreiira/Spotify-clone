import { HomeIcon, Library, Search } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex flex-col gap-5 text-md bg-zinc-900 p-6 rounded-md">
      <Link href="/" className="flex gap-4 hover:text-navHover">
        <HomeIcon /> Home
      </Link>
      <Link href="#" className="flex gap-4 hover:text-navHover">
        <Search /> Search
      </Link>
      <Link href="#" className="flex gap-4 hover:text-navHover">
        <Library />
        Your Library
      </Link>
    </nav>
  );
}
