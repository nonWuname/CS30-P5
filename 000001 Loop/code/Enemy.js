class Enemy extends SpecialCharacter{
    constructor(x, y,atk,hp,ani,type) {
        
        super(x,y,atk,hp,ani);
        this.ani.index = 0;
        this.type = type;
        if(this.type === 'shielder'){
            this.atk = 10;
            this.hp = 100; 
            this.speed = 1;
            this.framelimit.atk = 7;
            this.framelimit.run = 100;
            this.height = 46;
            this.selfcollider =  new Collider(this.x,this.y,this.width,this.height,'rect',0,'null','null',true);
            this.Skillcollider = this.selfcollider;
        }
        this.debug = false;
        
    }
    display(){
        this.update();
        super.display();
        if(this.type === 'shielder'){
            this.Skillcollider = this.selfcollider;
        }
        this.atkAction();
    }

    update(){
        if(this.x < hero.x && this.x !== hero.x){
            this.direction = 'right';
            this.x += this.speed ;
        }
        else if(this.x > hero.x && this.x !== hero.x){
            this.direction = 'left';
            this.x-= this.speed;
        }
        else if(this.y > hero.y && this.y !== hero.y){
            this.direction = 'up';
            this.y-= this.speed;
        }

        else if(this.y < hero.y && this.y !== hero.y){
            this.direction = 'down';
            this.y+= this.speed;
        }
    }

    atkAction(){
        if(this.type === 'shielder'){
            this.Skillcollider.active = true;

            if(this.Skillcollider.CheckCollision(hero.selfcollider)){
                this.applyForce('sda');
            }
            else if(hero.Skillcollider.CheckCollision(this.selfcollider)){
                print(this.x,hero.x)
                print(this.y,hero.y)
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


    
}