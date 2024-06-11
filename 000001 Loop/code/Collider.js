class Collider{
    constructor(x,y,width,height,Shapemode,damage,damageType,damageDirection,active){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.Shapemode = Shapemode;
        this.damage = damage;
        this.damageType = damageType;
        this.damageDirection = damageDirection;
        this.active = active;
    }


    CheckCollision(Othercollider){
        if(this.Shapemode === 'rect' && Othercollider.Shapemode === 'rect' && this.active && Othercollider.active){



            if( this.x - this.width / 2 <  Othercollider.x + Othercollider.width /2 
                && this.x + this.width / 2 >  Othercollider.x - Othercollider.width /2
                && this.y  + this.height / 2 > Othercollider.y - Othercollider.height /2
                && this.y - this.height/2 < Othercollider.y + Othercollider.height / 2
                
             )
                return true;
             
        }
        return false;

    }

    display(){
        if(this.Shapemode === 'rect'){
            rectMode(CENTER);
            rect(this.x,this.y,this.width,this.height);
        }
    }
    

    
}


// this.x - this.width / 2;
// this.x + this.width / 2;
// this.y + this.height /2;
// this.y - this.height/2;

// Othercollider.x - Othercollider.width /2;
// Othercollider.x + Othercollider.width /2;
// Othercollider.y - Othercollider.height /2;
// Othercollider.y + Othercollider.height / 2;
