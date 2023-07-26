import { useCallback, useEffect, useState } from "react";

export default function usePlay() {
  // estado do tempo da musica
  const [time, setTime] = useState<number>(0);
  const maxtime = 100; // substituir pelo tempo da musica

  // estado do botão de play
  const [playing, setPlaying] = useState<boolean>(false);

  const handlePlay = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  // tempo da música
  const handleDrag = useCallback(
    (event: any) => {
      const timeController = event.target.value;
      setTime(timeController);
      setPlaying(true);
    },
    [playing]
  );

  // get Item
  useEffect(() => {
    const musicTime = window.localStorage.getItem("time");
    if (musicTime !== null) setTime(JSON.parse(musicTime));
  }, []);

  // set Item
  useEffect(() => {
    window.localStorage.setItem("time", JSON.stringify(time));
  }, [playing]);

  return {
    time,
    maxtime,
    handleDrag,
    playing,
    handlePlay,
  };
}
