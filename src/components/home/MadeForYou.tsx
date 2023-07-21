import { PlaylistCard } from "./PlaylistCard";

export function MadeForYou() {
  return (
    <div className="flex flex-col gap-5 p-6 mt-2">
      {/* header */}
      <div className="flex justify-between">
        <h1 className="text-xl font-black">Made for you</h1>
        <button className="text-zinc-400 font-bold hover:text-zinc-300 transition-all">
          show all
        </button>
      </div>

      {/* playlistCard */}
      <div className="flex flex-row gap-5">
          <PlaylistCard
            name={"Daily mix 1"}
            desc={"2pac, kayne west, Eminem and more"}
            img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/1/en/default"
            }
          />
        <PlaylistCard
          name={"Daily mix 2"}
          desc={"2pac, kayne west, Eminem and more"}
          img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/2/en/default"
            }
        />
        <PlaylistCard
          name={"Daily mix 3"}
          desc={"2pac, kayne west, Eminem and more"}
          img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/3/en/default"
            }
        />
        <PlaylistCard
          name={"Daily mix 4"}
          desc={"2pac, kayne west, Eminem and more"}
          img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/4/en/default"
            }
        />
        <PlaylistCard
          name={"Daily mix 5"}
          desc={"2pac, kayne west, Eminem and more"}
          img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/5/en/default"
            }
        />
        <PlaylistCard
          name={"Daily mix 6"}
          desc={"2pac, kayne west, Eminem and more"}
          img={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb7f5cc432c9c109248ebec1ac/6/en/default"
            }
        />
            <PlaylistCard
              name={"This is iann dior"}
              desc={"Iann dior"}
              img={
                "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3TymCH-default.jpg"
              }
            />
      </div>
    </div>
  );
}
