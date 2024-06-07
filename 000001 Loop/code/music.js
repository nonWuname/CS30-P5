class Music{
    constructor(){
        this.musicarr = [];
        this.index = 0;
    }

    play(){ 
       if(!this.musicarr[this.index].isPlaying()) this.musicarr[this.index].play();

    }

    shuffle(index){
        if (this.musicarr[index].isPlaying()) {
            this.musicarr[index].stop(); 
        }
        
        index ++;
        index =  index %  this.musicarr.length;
        this.musicarr[index].play();
    }


}