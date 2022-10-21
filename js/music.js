const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const musicTitle = document.querySelector("#music-title");

const audio = document.getElementById('audio');

const songs = [
    'Main Theme',
    'Divine Beast Observation Post',
    'Cave',
    'Great Plateau',
    'Lost Woods',
    'Memories of a Sacred Sword',
    'Lost Woods',
]

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song){
    musicTitle.innerText = song;
    audio.src = `music/${song}.mp3`;
}



function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector("i").classList.remove('fa-play');
    playBtn.querySelector("i").classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector("i").classList.add('fa-play');
    playBtn.querySelector("i").classList.remove('fa-pause');
    audio.pause();
}

function prevSong(){
    songIndex --;
    if (songIndex<0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong (){
    songIndex ++;

    if (songIndex > songs.length -1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

playBtn.addEventListener("click", function(){
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("ended", nextSong);

