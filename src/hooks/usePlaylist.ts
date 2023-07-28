import playlists from "@/constants/playlist";
import { useEffect } from "react";
import playlistId from "@/components/Aside/HomePlaylists";



export function usePlaylist() {
   const saveId = () => {
    // window.localStorage.setItem('id', id)
    
    
    
    console.log(playlistId)
   }

   useEffect(() => {
       const button: any = document.getElementById('playlist');
       button.addEventListener('click', saveId)

   }, [])
   
}