function shallowClone(obj) {
    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = obj[key];
        }
    }
    return clonedObj;
}


class Enemy extends SpecialCharacter {
    constructor(x, y, atk, hp, ani, type) {

        super(x, y, atk, hp, ani);

        this.type = type;
        if (this.type === 'shielder') {
            this.atk = 4;
            this.hp = 100;
            this.hpMax = this.hp;
            this.speed = 1;
            this.framelimit.atk = 6;
            this.framelimit.run = 8;
            this.framelimit.die = 11;
            this.height = 46;
            this.selfcollider = new Collider(this.x, this.y, this.width, this.height, 'rect', 0, 'null', 'null', true);

            this.lastmethod = 0;
            this.currmethod = 0;

            this.force = 1;
            this.defForce = 1;

            this.changeMethod = int(random(30, 150));
            this.ani = shallowClone(skeleton_shielder_ani);
        }
        this.debug = false;

        this.atkFreezeMax = 30;

    }
    Enemy_action() {

        this.update();
        this.CheckEdge();        
        super.display();
        this.hp_bar();
        this.atkAction();


    }

    update() {



        if (!(hero.condition === 'die' || hero.condition === 'null') && hero.hp > 0 && this.hp > 0) {
            this.Change_method();
            this.Enemy_walk_method();
        }
        else this.condition = 'idle';




        if (this.type === 'shielder') {
            this.SetCollider(this.x, this.y, this.width, this.height);
        }
    }

    atkAction() {
        if (this.type !== 'archer') {
            if (Math.abs(this.x - hero.x) < this.width + this.atkwidth + 5 &&
                Math.abs(this.y - hero.y) < this.height + this.atkheight + 5
            ) {
                if (this.skillActive === false && this.atkFreeze === 0 && hero.hp > 0 && this.hp > 0 && hero.immuneFreeze === 0) {
                    this.skillActive = true;
                    this.skilldemand = 'atk';
                    this.ani.index = 0;
                    this.ani.frame = 0;
                }
            }


            if (this.Skillcollider.CheckCollision(hero.selfcollider) && hero.immuneFreeze === 0) {
                this.applyForce('hero');
                hero.hp -= this.atk;
                hero.immuneFreeze = 60;
                hero.CheckEdge();
            }
            else if (hero.Skillcollider.CheckCollision(this.selfcollider) && this.immuneFreeze === 0) {
                this.applyForce('self');
                this.Shield_reduce_damage(hero.Skillcollider.damageDirection);
                this.immuneFreeze = 20;
                this.CheckEdge();

            }
            // print(this.x,this.y)
        }

    }

    applyForce(to_Who) {
        if (to_Who === 'self') {
            this.x = this.x + (this.x - hero.x) * this.defForce;
            this.y = this.y + (this.y - hero.y) * this.defForce;
        }
        else {
            hero.x = hero.x + (hero.x - this.x) * this.force;
            hero.y = hero.y + (hero.y - this.y) * this.force;
        }
    }
    CheckEdge() {
        if (this.x > EDGE.xend) this.x = EDGE.xend;
        if (this.x < EDGE.xstart) this.x = EDGE.xstart;
        if (this.y < EDGE.ystart) this.y = EDGE.ystart;
        if (this.y > EDGE.yend) this.y = EDGE.yend;
    }

    SetCollider(x, y, width, height, damage) {
        this.Skillcollider.x = x;
        this.Skillcollider.y = y;
        this.Skillcollider.width = width;
        this.Skillcollider.height = height;
        this.Skillcollider.damage = damage;
    }


    Enemy_walk_method() {
        this.condition = 'run';

        if (this.currmethod === 0) {
            if (this.x < hero.x) {
                this.direction = 'right';
                this.x += this.speed;

            }

            else if (this.x > hero.x) {
                this.direction = 'left';
                this.x -= this.speed;

            }

            else if (this.y > hero.y) {
                this.direction = 'up';
                this.y -= this.speed;

            }

            else if (this.y < hero.y) {
                this.direction = 'down';
                this.y += this.speed;
            }
        }
        else if (this.currmethod === 1) {
            if (this.y > hero.y) {
                this.direction = 'up';
                this.y -= this.speed;

            }

            else if (this.y < hero.y) {
                this.direction = 'down';
                this.y += this.speed;
            }
            else if (this.x < hero.x) {
                this.direction = 'right';
                this.x += this.speed;

            }

            else if (this.x > hero.x) {
                this.direction = 'left';
                this.x -= this.speed;

            }

        }
    }

    Change_method() {
        if (frameCount % this.changeMethod === 0) {
            if (this.lastmethod === this.currmethod) {
                if (this.currmethod === 1) {
                    this.currmethod = 0;
                    this.lastmethod = 0;
                }
                else if (this.currmethod === 0) {
                    this.currmethod = 1;
                    this.lastmethod = 1;
                }
            }
        }
    }




    hp_bar() {
        if (this.hp !== this.hpMax) {
            rectMode(CORNER);
            fill(255, 0, 0);
            rect(this.x - this.width / 2, this.y - this.height / 2 - 12, this.width, 12);
            fill(0, 255, 0);
            rect(this.x - this.width / 2, this.y - this.height / 2 - 12, map(this.hp, 0, this.hpMax, 0, this.width), 12);
        }

    }



    Shield_reduce_damage(direction , coefficient){
        if(this.type === 'shielder') coefficient = 0.75
        
        if(this.direction === direction){
            this.hp = this.hp - (hero.Skillcollider.damage * (1 + coefficient))
            print('increditble')
        }
        else if((direction === 'right' && this.direction === 'left')
        || (direction === 'left' && this.direction === 'right')
        || (direction === 'up' && this.direction === 'down')
        ||(direction === 'down' && this.direction === 'up')
        ){
            this.hp = this.hp - (hero.Skillcollider.damage * (1-coefficient))
        }
        else {
            this.hp-= hero.Skillcollider.damage;
            print('nice')
        }
    }




}