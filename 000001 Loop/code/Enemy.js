class Enemy extends SpecialCharacter{
    constructor(x, y,atk,hp,ani,type) {
        
        super(x,y,atk,hp,ani);

        this.type = type;
        if(this.type === 'shielder'){
            this.atk = 10;
            this.hp = 100; 
            this.speed = 1.2;
            this.framelimit.atk = 14;
            this.framelimit.run = 100;
            this.height = 46;
            this.selfcollider =  new Collider(this.x,this.y,this.width,this.height,'rect',0,'null','null',true);
            this.atkwidth = 2;
            this.atkheight = 2;
        }
        this.debug = false;

        this.atkFreezeMax = 10;
        
    }
    display(){

        this.update();
        this.CheckEdge();
        this.atkAction();
        super.display();
        if(this.type === 'shielder'){

        }
        
        
    }

    update(){
        
        this.condition =  'run';

        let temp_walk = int(random(4));//0 1 2 3

        let flag = false;
        do{
            switch(temp_walk){
                case 0:
                    if(this.x < hero.x - this.speed / 2 ){
                        this.direction = 'right';
                        this.x += this.speed ;
                        
                    }
                    break;
                case 1:
                    if(this.x > hero.x + this.speed / 2){
                    this.direction = 'left';
                    this.x-= this.speed;
                    
                }
                break;
                case 2: 
                if(this.y > hero.y + this.speed / 2){
                    this.direction = 'up';
                    this.y-= this.speed;
                    
                }
                break;
                case 3:
                    if(this.y < hero.y + this.speed / 2 ){
                        this.direction = 'down';
                        this.y+= this.speed;
                        flag = false;    
                    }
                    
            }
        }while(!flag);
        

        
        if(this.type === 'shielder'){
            this.SetCollider(this.x,this.y,this.width,this.height);
        }
    }

    atkAction(){
        if(this.type === 'shielder'){
            if(Math.abs(this.x - hero.x) < this.width + this.atkwidth + 8 &&
            Math.abs(this.y - hero.y) < this.height + this.atkheight + 8
            )
            {
                if (this.skillActive === false && this.atkFreeze === 0) {
                    this.skillActive = true;
                    this.skilldemand = 'atk';
                    this.ani.index = 0;
                    this.ani.frame = 0;
                  }
            }


            if(this.Skillcollider.CheckCollision(hero.selfcollider)){
                this.applyForce('hero');
                hero.CheckEdge();
            }
            else if(hero.Skillcollider.CheckCollision(this.selfcollider)){
                this.applyForce('self');
                this.CheckEdge();

            }


            // print(this.x,this.y)
        }
    }

    applyForce(to_Who){
        if(to_Who === 'self'){
            this.x = this.x + (this.x - hero.x) ;
            this.y = this.y + (this.y - hero.y) ;
        }
        else{
            hero.x = hero.x + (hero.x - this.x) ;
            hero.y = hero.y + (hero.y - this.y) ;
        }
    }
    CheckEdge(){
        if(this.x > EDGE.xend)this.x = EDGE.xend;
        if(this.x < EDGE.xstart)this.x = EDGE.xstart;
        if(this.y < EDGE.ystart)this.y = EDGE.ystart;
        if(this.y > EDGE.yend) this.y = EDGE.yend;
    }

    SetCollider(x,y,width,height){
        this.Skillcollider.x = x;
        this.Skillcollider.y = y;
        this.Skillcollider.width = width;
        this.Skillcollider.height = height;
      }
    
}