


class gameMap {

    constructor(){
        let first = new Room(true);
        this.map = [[first],[first]];
        this.originX = 0;
        this.originY = 0;
    }

    setup(){
        this.bfs(0,0,5);
    }   

    bfs(x,y,layer){
        if(layer < 0) return;

        else{
            let curr_x = x;
            let curr_y = y;

            if(this.check(curr_y,curr_x)){
                if(curr_x > this.map[curr_y].length){
                    this.map[curr_y].push(new Room(true));
                }
                else if(curr_x < 0){
                    this.originX ++;
                    this.map[curr_y].unshift(new Room(true));
                }
    
                if(curr_y > this.map.length){
                    let temp = [];
                    for(let _ = 0; _ < this.map[curr_y-1].length; ++_){
                        temp.push(new Room(false));
                        if(_ = curr_x){
                            temp[_].exist = true;
                        }
                    }
                    this.map.push(temp);
                }
                else if(curr_y < 0){
                    this.originY ++;
                    let temp = [];
                    for(let _ = 0; _ < this.map[curr_y+1].length; ++_){
                        temp.push(new Room(false));
                        if(_ = curr_x){
                            temp[_].exist = true;
                        }
                    }
                    this.map.unshift(temp);
                }
            }
        }


        this.bfs(x,y+1,layer-1);//south
        this.bfs(x,y-1,layer -1);//north
        this.bfs(x-1,y,layer-1);//west
        this.bfs(x+1,y,layer-1);//east

    }


    check(y,x){
       
        let state; // 0 for horizontal, 1 for vertical
        

        print(this.map[y][x]);
        if(this.map[y][x] === undefined && (this.map[y][x-1] !== undefined ||  this.map[y][x+1] !== undefined )) state = 0;
        if(this.map[y][x] === undefined && (this.map[y-1][x] !== undefined ||  this.map[y+1][x] !== undefined )) state = 1;

        if( state === 0){
            if(x > this.map[y].length){
                this.map[y].push(new Room(true));
            }
    
            else if(x < 0){
                this.unshift[y].push(new Room(true));
            }
        }
       
        else if(state === 1){
            if(y > this.map.length){
                let temp = [];
                for(let _ = 0; _ < this.map[curr_y-1].length; ++_){
                temp.push(new Room(false));
                }
                temp[x].exist = true
                this.map.push(temp);
            }
    
            else if( y < 0){
                this.originY ++;
                let temp = [];
                for(let _ = 0; _ < this.map[curr_y+1].length; ++_)temp.push(new Room(false));
                temp[x].exist = true;
                this.map.unshift(temp);
            }    
        }
   

        
        
        
        if(!this.map[y][x].visited)
        {
            this.map[y][x].visited = true;
            return true
        }
        return false
    }
}




class Room{
    constructor(exist){
        this.img;
        
        // room condition , n,w,e,s north,west,east,south
        this.condition;
        this.visited = false;
        this.exist = exist;


    }
}