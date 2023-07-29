import  SongInterface  from "@/models/Song";

// "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/2f52943403d26d002be42fd77144f4023300377c3d223f666fb00fb8ae27a224_1.jpg"rock

// "https://cdn.awsli.com.br/600x450/149/149537/produto/31858492/a304d9b4bb.jpg" pagode

const musics: SongInterface[] = [
    {
        id: 1,
        name: 'heavy',
        author: 'Iann dior',
        album: 'on to better things',
        playlistId: 1, //simulando uma foreingKey
        image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640'
    },

    {
        id: 2,
        name: 'dark angel (interlude)',
        author: 'Iann dior',
        album: 'on to better things',
        playlistId: 1, //simulando uma foreingKey
        image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640'
    },

    {
        id: 3,
        name: 'obvious',
        author: 'Iann dior',
        album: 'on to better things',
        playlistId: 1, //simulando uma foreingKey
        image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjraySfBukbl8Xsf3xoiqL8wyAQ7OcncEPzTngXewbK3zgcb51SreEcX4xCAWNir2LKiSCQD9AzoLx5SxFXuXDYu6dnauLEbusm8bviERDrusUtbvssFjFWADg1xxJ23vQDe4-6mDAYlhVzAZ2SuZAQCaX_QObN0Ic5_YpsC2vIz549PLvwGY7OVm9w=w640-h640'
    },

    {
        id: 4,
        name: 'Welcome to the jungle',
        author: "Guns N' Roses",
        album: 'Appetite for Destruction',
        playlistId: 2, //simulando uma foreingKey
        image: 'https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c'
    }
]

export default musics