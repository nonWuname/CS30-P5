let musicList = [];
let musicIndex = 0;

function music_shuffle() {
    if (musicList[musicIndex].isPlaying()) musicList[musicIndex].stop();
    musicIndex += int(random(1, musicList.length));
    musicIndex %= musicList.length;
}

function check_and_play_music() {
    if(!musicList[musicIndex].isPlaying()){
        musicList[musicIndex].play();
        musicList[musicIndex].setVolume(0.3);
    } 
    

}