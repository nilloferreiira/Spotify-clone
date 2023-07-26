import { useCallback, useEffect, useState } from "react";

export default function useVolume() {
    const [volume, setVolume] = useState(50);

  const handleDrag = useCallback( (event: any) => {
    const volumeNumber = Number(event.target.value);
    setVolume(volumeNumber);
  }, [volume]);

// get Item

  useEffect(() => {
    const getVolume =  window.localStorage.getItem('volume')
    if (getVolume !== null) setVolume(JSON.parse(getVolume))
  }, [])

// set Item
  useEffect(() => {
    window.localStorage.setItem('volume', JSON.stringify(volume));
  }, [volume])

  const mute = () => {
    if (volume < 2) {
      setVolume(100);
    } else {
      setVolume(0);
    }
  }

  return {
    volume,
    handleDrag,
    mute
  }
}