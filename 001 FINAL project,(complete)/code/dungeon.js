
let direction = [
    [1,0], // y x, north
    [-1,0], // south
    [0,-1], // west
    [0,1] // east
]


class Dungeon {

    constructor() {
        this.map = [];
        this.size = 9;
        this.origin = (this.size + 1) / 2;



        this.cnt = 0;
    }

    setup() {
        this.grid_ini();
        this.dfs(this.origin,this.origin,14);
    }

    dfs(y, x, step) {
        if (step === 0) return;

       
        else{
            
            this.map[y][x].visited = true;
                

               
              
        }


        this.random_walk(y, x, step);

    }

    
    grid_ini(){
        this.map.length = 0;
        for (let y = 0; y < this.size; ++y) {
            let temp = [];
            for (let x = 0; x < this.size; ++x) {
                temp.push(new Room());
            }
            this.map.push(temp);
        }
    }

    display(){
        this.cnt = 0;
        for(let y = 0; y < this.map.length; ++y){
            for(let x = 0; x < this.map[y].length; ++x){
                if(this.map[y][x].visited){
                    fill(0);
                    square(y * 20,x * 20, 20);
                    this.cnt++;
                }
            }
        }
        print(this.cnt);
    }

    random_walk(y,x,step){

        let neighborList = [];

        if(this.Valid(y+1,x)){//n
            neighborList.push([y+1,x]);
        }
        if(this.Valid(y,x-1)){//w
            neighborList.push([y,x-1]);
        }
        if(this.Valid(y-1,x)){// s
            neighborList.push([y-1,x]);
        }
        if(this.Valid(y,x+1)){//e
            neighborList.push([y,x+1]);
        }
        
    
        
        if(neighborList.length === 0 && y === this.origin && y === x) return;
        if(neighborList.length === 0) this.dfs(this.origin,this.origin,step);

        else{
            let temp = int(random(neighborList.length))
       
            let next_y =  neighborList[temp][0] , next_x =  neighborList[temp][1];
            //print(next_y,next_x);
    
            this.dfs(next_y ,next_x,step - 1)
        }
      
        


    }

    in_range(y,x){
        if(y < this.map.length && y >= 0 && x < this.map[y].length && x >= 0) return true;
        return false;
    }
    

    Valid(y,x){
        
        if(!this.in_range(y,x)) return false;

        if(!this.map[y][x].visited) return true;
        return false;
    }
}




class Room {
    constructor() {
        this.img;
        // room condition , n,w,e,s north,west,east,south
        this.condition = [false,false,false,false];
        this.visited = false;
        this.neighborNum = 0;
    }

  
}