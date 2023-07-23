import { HomeIcon, Library, Search } from "lucide-react";

export function Nav() {
  return (
    <nav className="flex flex-col gap-5 text-md bg-zinc-900 p-6 rounded-md">
      <a href="#" className="flex gap-4 hover:text-navHover">
        <HomeIcon /> Home
      </a>
      <a href="#" className="flex gap-4 hover:text-navHover">
        <Search /> Search
      </a>
      <a href="#" className="flex gap-4 hover:text-navHover">
        <Library />
        Your Library
      </a>
    </nav>
  );
}
