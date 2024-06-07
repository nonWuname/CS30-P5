class Music{
    constructor(){
        this.musicarr = [];
        this.index = 0;
    }

    play(){ 
       if(!this.musicarr[this.index].isPlaying()) this.musicarr[this.index].play();
       if(this.musicarr[this.index].isPlaying()) this.musicarr[this.index].time(300);
    }

    shuffle(){
        if (this.musicarr[this.index].isPlaying()) {
            this.musicarr[this.index].stop(); 
        }
        
        this.index ++;
        this.index = this.index %  this.musicarr.length;
        this.musicarr[this.index].play();
    }


}