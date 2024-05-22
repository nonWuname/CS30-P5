
class Dungeon {

    constructor() {
        this.map = [];
        this.size = 9;
        this.origin = (this.size + 1) / 2;
    }

    setup() {
        this.grid_ini();
        this.dfs(this.origin,this.origin,20);
    }

    dfs(y, x, step) {
        if (step === 0) return;

        else {
          

            if(this.check(y,x)){
                if(!this.map[y][x].visited){
                    this.map[y][x].visited = true;
                }
               
                else step ++;

            } 
            else step++;
            
            
           
        }

        this.random_walk(y, x, step);
 

    }


    check(y, x) {
        if(y < this.map.length && y >= 0){
            if(x < this.map[y].length && x >= 0){
                return true;
        }
        return false;       
       }
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
        for(let y = 0; y < this.map.length; ++y){
            for(let x = 0; x < this.map[y].length; ++x){
                if(this.map[y][x].visited){
                    fill(0);
                    square(y * 20,x * 20, 20);
                }
            }
        }
    }

    random_walk(y,x,step){
        
        
        let direction = [
            [0,1], // [y,x] , east
            [-1,0], //  south
            [0,-1], // west
            [1,0] // north
        ]
            
        let curr_y,curr_x;


        
        
        do{
            let temp = int(random(4));
            curr_y = direction[temp][0];
            curr_x = direction[temp][1];

        }while(this.check(curr_y,curr_x))

        
        switch(temp){
            case 0:      
                this.dfs(y + 1, x, step - 1); // north
                break;
            case 1:
                this.dfs(y - 1, x, step - 1); // south
                break;
            case 2:
                this.dfs(y, x - 1, step - 1); // west
                break;
            case 3:
                this.dfs(y, x + 1, step - 1); // east
                break;
        }

        
    
    
    
    }
}




class Room {
    constructor() {
        this.img = 0;
        // room condition , n,w,e,s north,west,east,south
        this.condition = -1;
        this.visited = false;

    }
}