const musicContainer = document.querySelector(".music");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".fa-forward");

const musicTitle = document.querySelector(".music h3");

const songs = [
    'Divine Beast Observation Post',
    'Game Start',
    'Great Plateau',
    'Lost Woods',
    'Main Theme',
    'Memories of a Sacred Sword',
    'Opening',
    'Lost Woods',
]

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song){
    musicTitle.innerText = song;
    audio.src = `music/${song}.mp3`;
}


audio.play();

// function playSong(){
//     musicContainer.classList.add('play');
//     playBtn.querySelector(".music__play-pause").classList.remove('fa-play');
//     playBtn.querySelector(".music__play-pause").classList.add('fa-pause');
//     audio.play();
// }

// function pauseSong(){
//     musicContainer.classList.remove('play');
//     playBtn.querySelector(".music__play-pause").classList.add('fa-play');
//     playBtn.querySelector(".music__play-pause").classList.remove('fa-pause');
//     audio.pause();
// }

// playBtn.addEventListener("click", function(){
//     const isPlaying = musicContainer.classList.contains('play');
//     if (isPlaying){
//         pauseSong();
//     } else {
//         playSong();
//     }
// })

