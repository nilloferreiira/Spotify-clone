import { useCallback, useState, useEffect } from "react";

export default function useActive() {
  const [shuffleActive, setShuffleActive] = useState<boolean>(false);
  const [repeatActive, setRepeatActive] = useState<boolean>(false);

  const handleShuffle = useCallback(() => {
    setShuffleActive(!shuffleActive);
  }, [shuffleActive]);

  const handleRepeat = useCallback(
    function () {
      setRepeatActive(!repeatActive);
    },
    [repeatActive]
  );

  // get item
  useEffect(() => {
    const shuffle = window.localStorage.getItem("shuffle");
    if (shuffle !== null) setShuffleActive(JSON.parse(shuffle));
  }, []);

  useEffect(() => {
    const repeat = window.localStorage.getItem("repeat");
    if (repeat !== null) setRepeatActive(JSON.parse(repeat));
  }, []);

  // set item
  useEffect(() => {
    window.localStorage.setItem("shuffle", JSON.stringify(shuffleActive));
  }, [handleShuffle]);

  useEffect(() => {
    window.localStorage.setItem("repeat", JSON.stringify(repeatActive));
  }, [handleRepeat]);

  return {
    shuffleActive,
    repeatActive,
    handleRepeat,
    handleShuffle,
  };
}
