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

            this.changeMethod = int(random(30, 150));
        }
        this.debug = false;

        this.atkFreezeMax = 10;

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
        if (this.type === 'shielder') {
            if (Math.abs(this.x - hero.x) < this.width + this.atkwidth + 5 &&
                Math.abs(this.y - hero.y) < this.height + this.atkheight + 5
            ) {
                if (this.skillActive === false && this.atkFreeze === 0 && hero.hp > 0 && this.hp > 0) {
                    this.skillActive = true;
                    this.skilldemand = 'atk';
                    this.ani.index = 0;
                    this.ani.frame = 0;
                }
            }


            if (this.Skillcollider.CheckCollision(hero.selfcollider)) {
                this.applyForce('hero');
                this.textTimer = this.textTime;
                hero.hp -= 12;
                hero.CheckEdge();
            }
            else if (hero.Skillcollider.CheckCollision(this.selfcollider)) {
                this.applyForce('self');
                this.hp -= 20;
                this.CheckEdge();

            }
            // print(this.x,this.y)
        }


        if(this.textTimer > 0)text(12,this.x + 48,this.y + 48);
    }

    applyForce(to_Who) {
        if (to_Who === 'self') {
            this.x = this.x + (this.x - hero.x);
            this.y = this.y + (this.y - hero.y);
        }
        else {
            hero.x = hero.x + (hero.x - this.x);
            hero.y = hero.y + (hero.y - this.y);
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








}