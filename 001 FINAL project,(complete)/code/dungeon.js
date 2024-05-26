
let direction = [
    [-1, 0], // y x, north
    [0, -1], // west
    [1, 0], // south
    [0, 1] // east
]


class Dungeon {

    constructor() {
        this.map = [];
        this.size = 5;
        this.origin = (this.size - 1) / 2;
        this.cell = [];
        this.oneWay = [];

        this.index = [this.origin,this.origin];
    }

    setup() {
        this.grid_ini();
        this.dfs(this.origin, this.origin, 12);
        this.bfs(this.origin, this.origin);
    }

    dfs(y, x, step) {
        if (step === 0) return;
        else {
            this.map[y][x].visited = true;
        }
        this.random_walk(y, x, step);
    }

    grid_ini() {
        this.map.length = 0;
        for (let y = 0; y < this.size; ++y) {
            let temp = [];
            for (let x = 0; x < this.size; ++x) {
                temp.push(new Room());
            }
            this.map.push(temp);
        }
    }

    display() {
        

        push();
        
        

        for (let y = 0; y < this.map.length; ++y) {
            for (let x = 0; x < this.map[y].length; ++x) {
                if (this.map[y][x].visited) {
                    fill(0);
                    if (y === x && x === this.origin) fill(0, 255, 0);
                    square(x * 16, y * 16, 16);
                    textSize(10);
                    text(this.map[y][x].step, x * 16 + 8, y * 16 + 8);
                }
            }
        }
        

        if(this.oneWay.length > 0){
            fill(0,0,255);
            let temp = this.oneWay[this.oneWay.length - 1];
            let x1 = temp[1],y1 = temp[0];
            square(x1 * 16, y1 * 16, 16);
            this.map[y1][x1].condition = `boss`
        }
        else{
            fill(0,0,255);
            let temp = this.cell[this.cell.length - 1];
            let x1 = temp[1],y1 = temp[0];
            square(x1 * 16, y1 * 16, 16);
        }
        print(this.cell.length)
        pop();
    }
    
    random_walk(y, x, step) {

        let neighborList = [];

        // push all available step into neighborlist
        for (let i = 0; i < direction.length; ++i) {
            let next_y = y + direction[i][0], next_x = x + direction[i][1];
            if (this.Valid(next_y, next_x)) neighborList.push([next_y, next_x]);
        }


        // special case
        if (neighborList.length === 0 && y === this.origin && y === x) return;

        if (neighborList.length === 0) this.dfs(this.origin, this.origin, step);
        // instead of stack for backtrap, i used origin to backtrap since the step will always be 12

        else {
            // random choose one for next recursion
            let temp = int(random(neighborList.length))

            let next_y = neighborList[temp][0], next_x = neighborList[temp][1];
            //print(next_y,next_x);

            this.dfs(next_y, next_x, step - 1)
        }

    }

    in_range(y, x) {
        // check bound
        if (y < this.map.length && y >= 0 && x < this.map[y].length && x >= 0) return true;
        return false;
    }


    Valid(y, x) {
        // test valid for dfs
        if (!this.in_range(y, x)) return false;
        if (!this.map[y][x].visited) return true;
        return false;
    }

    bfs(y, x) {
        // bfs to setup room 
        this.cell.length = 0;
        this.oneWay.length = 0;

        this.map[y][x].step = 0;
        let queue = [[y, x, this.map[y][x].step]];
        while (queue.length !== 0) {
            let curr = queue.shift();
            this.cell.push([curr[0], curr[1]]);// record all the room in the cell arr

            for (let i = 0; i < direction.length; ++i) {
                let next_y = curr[0] + direction[i][0];
                let next_x = curr[1] + direction[i][1];

                
                this.map[curr[0]][curr[1]].init();// init this img

                if (this.check(next_y, next_x)) {
                    this.map[curr[0]][curr[1]].neighborNum++;
                    this.map[curr[0]][curr[1]].wall[i] = true;
                }
                

                if (this.in_range(next_y, next_x) && this.map[next_y][next_x].visited && this.map[next_y][next_x].step === -1) {
                    this.map[next_y][next_x].step = this.map[curr[0]][curr[1]].step + 1;
                    queue.push([next_y, next_x, this.map[next_y][next_x].step]);
                }
            }

        }

        for(let i = 0; i < this.cell.length; ++i){
            let y1 = this.cell[i][0] ,x1 = this.cell[i][1];
            if(this.map[y1][x1].neighborNum === 1 && !(y1 === this.origin && x1 === this.origin))this.oneWay.push([y1,x1]);
        }

    }

    check(y, x) {
        // check for bfs
        if (this.in_range(y, x) && this.map[y][x].visited) return true;
        return false;
    }
}




class Room {
    constructor() {
        this.img;
        // room condition , n,w,s,e north,west,south,east
        this.wall = [false, false, false, false];
        this.visited = false;
        this.neighborNum = 0;
        this.step = -1;
        this.condition;
    }

    init() {
        switch(this.neighborNum){
            case 1: if(this.wall[0]){//n

            }
            else if(this.wall[1]){//w
                
            }
            else if(this.wall[2]){//s

            }
            else if(this.wall[3]){//e

            }
            break;

            case 2: if(this.wall[0] && this.wall[1]){// n w 

            }
            else if(this.wall[0] && this.wall[2]){ // n s
                
            }
            else if(this.wall[0] && this.wall[3]){// n e

            }
            else if(this.wall[1] && this.wall[2]){// w s

            }
            else if(this.wall[1] && this.wall[3]){// w e

            }
            else if(this.wall[2] && this.wall[3]){// s e

            }
            break;



            case 3:if(!this.wall[0]){//s w e
                
            }
            else if(!this.wall[1]){// n w e
                
            }
            else if(!this.wall[2]){// n s e

            }
            else if(!this.wall[3]){ // n w s

            }
            break;

            case 4: // n w s e
        }
    }


}









// enum  bfs
// if(this.check(curr[0]-1,curr[1])){//n
//     this.map[curr[0]][curr[1]].neighborNum ++;
//     this.map[curr[0]][curr[1]].wall[0] = true;
// }
// if(this.check(curr[0],curr[1]-1)){//w
//     this.map[curr[0]][curr[1]].neighborNum ++;
//     this.map[curr[0]][curr[1]].wall[1] = true;
// }
// if(this.check(curr[0]+1,curr[1])){//s
//     this.map[curr[0]][curr[1]].neighborNum ++;
//     this.map[curr[0]][curr[1]].wall[2] = true;
// }
// if(this.check(curr[0],curr[1]+1)){//e
//     this.map[curr[0]][curr[1]].neighborNum ++;
//     this.map[curr[0]][curr[1]].wall[3] = true;
// }


// enum dfs
// if(this.Valid(y-1,x)){//n
//     neighborList.push([y-1,x]);
// }
// if(this.Valid(y,x-1)){//w
//     neighborList.push([y,x-1]);
// }
// if(this.Valid(y+1,x)){// s
//     neighborList.push([y+1,x]);
// }
// if(this.Valid(y,x+1)){//e
//     neighborList.push([y,x+1]);
// }