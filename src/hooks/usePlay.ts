import { useCallback, useState } from "react";

export default function usePlay() {
    const [time, setTime] = useState(50);
    const maxtime = 100; // substituir pelo tempo da musica
  
    const [playing, setPlaying] = useState<boolean>(false);
    
    
    const handlePlay = useCallback( () => {
      setPlaying(!playing);
    }, [playing])


    const handleDrag = useCallback((event: any) => {
      const timeController = event.target.value;
      setTime(timeController);
    },[]); // pensar no array de dependencias/ adicionar ao localstorage
  
    // terminar o play com o useEffect

    return {
        time,
        maxtime,
        handleDrag,
        playing,
        handlePlay,
    }
}