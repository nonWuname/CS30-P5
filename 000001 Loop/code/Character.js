

class SpecialCharacter {
  constructor(x, y, atk, hp, ani) {
    this.x = x;
    this.y = y;
    this.atk = atk;
    this.hp = hp;
    this.hpMax = hp;
    this.ani = ani;


    this.debug = false;


    this.skillActive = false;
    this.deathActive = false;
    this.skilldemand = 'null';

    this.atkFreeze = 0;
    this.atkFreezeMax = 18;
    this.defFreeze = 0;
    this.defFreezeMax = 36;
    this.magicFreeze = 0;
    this.magicFreezeMax = 300;
    this.shootFreeze = 0;
    this.shootFreezeMax = 200;
    this.immuneFreeze = 0;
    this.immuneFreezeMax = 120;
    this.dashFreeze = 0;
    this.dashFreezeMax = 120;


    this.direction = "down";
    this.condition = "run";


    this.atkwidth = 20;
    this.atkheight = 24;
    this.defwidth = 32;
    this.defheight = 16;
    this.width = 32;
    this.height = 32;

    this.Skillcollider = new Collider(0, 0, 0, 0, 'rect', 0, 'null', 'null', false);
    this.selfcollider = new Collider(this.x, this.y, this.width, this.height, 'rect', 0, 'null', 'null', true);

    this.type = 'hero';

    this.framelimit = {
      run: 5,
      atk: 7,
      def: 5,
      shoot: 10,
      magic: 12,
      die: 20,
    }



  }

  setup() {

  }

  all_in_one() {
    this.display();
    this.ColliderShow();


  }

  display() {

    this.selfcollider.x = this.x;
    this.selfcollider.y = this.y;

    if (this.hp < 0) this.hp = 0;

    this.Skillcollider.active = false;

    if (this.hp <= 0 && this.condition !== 'null') {
      this.selfcollider.active = false;
      this.condition = 'die';
      this.immuneFreeze = 0;
    }

    if (this.atkFreeze > 0) this.atkFreeze--;
    if (this.defFreeze > 0) this.defFreeze--;
    if (this.magicFreeze > 0) this.magicFreeze--;
    if (this.shootFreeze > 0) this.shootFreeze--;
    if(this.immuneFreeze > 0){

      this.immuneFreeze --;
      fill(192, 192, 192);
      circle(this.x,this.y,64);
    } 
    if(this.dashFreeze > 0) this.dashFreeze --;

    if (freezetime > 0) {
      this.atkFreeze = 0;
      this.defFreeze = 0;
      this.magicFreeze = 0;
      this.shootFreeze = 0;
      this.skilldemand = 'null';
      this.skillActive = false;
      this.dashFreeze = 0;
    }

    if (this.skilldemand === 'atk' && freezetime === 0 && this.hp > 0) {
      this.condition = 'atk';
      this.Skillcollider.active = true;
      if (this.ani.frame % this.framelimit.atk === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.atkFreeze = this.atkFreezeMax;
        this.skillActive = false;
        // print(this.skillActive,this.skilldemand)
      }
    }
    else if (this.skilldemand === 'def' && freezetime === 0 && this.hp > 0) {
      this.condition = 'def';
      this.Skillcollider.active = true;
      if (this.ani.frame % this.framelimit.def === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.defFreeze = this.defFreezeMax;
        this.skillActive = false;
      }
    }
    else if (this.skilldemand === 'magic' && freezetime === 0 && this.hp > 0) {
      this.condition = 'magic'
      if (this.ani.frame % this.framelimit.magic === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.magicFreeze = this.magicFreezeMax;
        this.skillActive = false;
      }
    }
    else if (this.skilldemand === 'shoot' && freezetime === 0 && this.hp > 0) {
      this.condition = 'shoot'
      if (this.ani.frame % this.framelimit.shoot === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.shootFreeze = this.shootFreezeMax;
        this.skillActive = false;
      }
    }

    if (this.condition === 'die') {

      if (!this.deathActive) {
        this.ani.index = 0;
        this.ani.frame = 0;
      }



      this.deathActive = true;

      if (this.ani.index <= this.ani.aniarr[this.condition].length - 3) {
        if (this.ani.frame % this.framelimit.die === 0) {
          this.ani.index++;
        }

      }
      else if (this.ani.index >= this.ani.aniarr[this.condition].length - 2 && this.ani.index <= this.ani.aniarr[this.condition].length - 1) {
        if (this.ani.frame % (this.framelimit.die * 6) === 0) {
          this.ani.index++;

        }
      }

      this.ani.frame++;



      if (this.ani.index === this.ani.aniarr[this.condition].length) {
        // show the block;
        this.condition = 'null';
      }

    }

    if (this.condition === 'run') {
      if (freezetime === 0 && frameCount % this.framelimit.run === 0) this.ani.index++;
      else if (freezetime > 0 && frameCount % 7 === 0) this.ani.index++;
    }

    let animation = null;

    if (this.condition !== 'die' && this.condition !== 'null') animation = this.ani.aniarr[this.condition][this.direction];
    else if (this.condition === 'die') animation = this.ani.aniarr[this.condition];





    if (this.condition === 'idle') image(this.ani.aniarr['run'][this.direction][0], this.x, this.y)
    else if (this.condition !== 'null') image(animation[this.ani.index % animation.length], this.x, this.y);


    // print('current atkfrezze is', this.atkFreeze);
    // print('index is at', this.ani.index);


    this.debugShow();


    



  }

  ColliderShow() {
    if (this.condition === 'atk') {
      rectMode(CENTER);
      fill(255);

      if (this.direction === 'up') {
        this.SetCollider(this.x, this.y + 3 - this.height / 2 - this.atkheight / 2,
          this.atkwidth, this.atkheight, this.atk * 1.2, this.direction);
        if (this.debug) this.Skillcollider.display();
      }
      else if (this.direction === 'left') {
        this.SetCollider(this.x - this.width / 2 - this.atkheight / 2, this.y + 10,
          this.atkheight, this.atkwidth, this.atk * 1.2, this.direction);
        if (this.debug) this.Skillcollider.display();
      }
      if (this.direction === 'down') {
        this.SetCollider(this.x, this.y + 3 + this.height / 2 + this.atkheight / 2,
          this.atkwidth, this.atkheight, this.atk * 1.2, this.direction);
        if (this.debug) this.Skillcollider.display();

      }
      else if (this.direction === 'right') {
        this.SetCollider(this.x + this.width / 2 + this.atkheight / 2, this.y + 10
          , this.atkheight, this.atkwidth, this.atk * 1.2, this.direction);
        if (this.debug) this.Skillcollider.display();
      }
    }
    else if (this.condition === 'def') {
      rectMode(CENTER);
      fill(255);
      if (this.direction === 'up') {
        this.SetCollider(this.x, this.y + 3 - this.height / 2 - this.defheight / 2,
          this.defwidth, this.defheight, this.atk * 0.3, this.direction);
        if (this.debug) this.Skillcollider.display();
      }
      else if (this.direction === 'left') {
        this.SetCollider(this.x - this.width / 2 - this.defheight / 2, this.y + 10,
          this.defheight, this.defwidth, this.atk * 0.3, this.direction);
        if (this.debug) this.Skillcollider.display();

      }
      if (this.direction === 'down') {
        this.SetCollider(this.x, this.y + 3 + this.height / 2 + this.defheight / 2,
          this.defwidth, this.defheight, this.atk * 0.3, this.direction);

        if (this.debug) this.Skillcollider.display();

      }
      else if (this.direction === 'right') {
        // 
        this.SetCollider(this.x + this.width / 2 + this.defheight / 2, this.y + 10,
          this.defheight, this.defwidth, this.atk * 0.3, this.direction);

        if (this.debug) this.Skillcollider.display();

      }
    }

  }


  action() {
    if (keyIsDown(87) && freezetime === 0) {
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[0] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.y >= EDGE.ystart - 3 && this.y <= EDGE.ystart + 3 && this.x < 330 && this.x > 308) {
          paning = 1;
          freezetime = 64;
        }
      }

      if (this.y > 12) this.y -= 4;
      this.direction = 'up';
      this.condition = 'run';
    }

    else if (keyIsDown(65) && freezetime === 0) {
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[1] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.x >= EDGE.xstart - 3 && this.x <= EDGE.xstart + 3 && this.y < 154 && this.y > 138) {
          paning = 2;
          freezetime = 64;
        }
      }

      if (this.x > 28) this.x -= 4;
      this.direction = 'left';
      this.condition = 'run';
    }

    else if (keyIsDown(83) && freezetime === 0) {
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[2] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.y <= EDGE.yend + 3 && this.y >= EDGE.yend - 3 && this.x < 330 && this.x > 308) {
          paning = 3;
          freezetime = 64;
        }
      }
      if (this.y < 276) this.y += 4;

      this.direction = 'down';
      this.condition = 'run';
    }
    else if (keyIsDown(68) && freezetime === 0) {

      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[3] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.x <= EDGE.xend + 3 && this.x >= EDGE.xend - 3 && this.y < 154 && this.y > 138) {
          paning = 4;
          freezetime = 64;
        }
      }

      if (this.x < 612) this.x += 4;

      this.direction = 'right';
      this.condition = 'run';
    }
    else if (this.hp <= 0) this.condition = 'die';
    else this.condition = 'idle';
  }

  skillAction() {
    if (this.skillActive === false && keyIsDown(75) && freezetime === 0 && this.defFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'def';
      this.ani.index = 0;
      this.ani.frame = 0;
    }
    else if (this.skillActive === false && keyIsDown(74) && freezetime === 0 && this.atkFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'atk';
      this.ani.index = 0;
      this.ani.frame = 0;

    }
    else if (this.skillActive === false && keyIsDown(85) && freezetime === 0 && this.magicFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'magic';
      this.ani.index = 0;
      this.ani.frame = 0;
    }
    else if (this.skillActive === false && keyIsDown(76) && freezetime === 0 && this.shootFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'shoot';
      this.ani.index = 0;
      this.ani.frame = 0;
    }

    if( keyIsDown(16) && freezetime === 0 && this.dashFreeze === 0){
      if(this.direction === 'right') this.x += 128;
      else if(this.direction === 'left') this.x -=128;
      else if(this.direction === 'up')this.y -=128;
      else this.y +=128;
      this.dashFreeze = this.dashFreezeMax;
      
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[0] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if ((this.y >= EDGE.ystart - 3 && this.y <= EDGE.ystart + 3) || this.y < EDGE.ystart && this.x < 330 && this.x > 308) {
          paning = 1;
          freezetime = 64;
        }
      }
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[1] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if ((this.x >= EDGE.xstart - 3 && this.x <= EDGE.xstart + 3) || this.x < EDGE.xstart && this.y < 154 && this.y > 138) {
          paning = 2;
          freezetime = 64;
        }
      }
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[2] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if ((this.y <= EDGE.yend + 3 && this.y >= EDGE.yend - 3) || this.y > EDGE.yend && this.x < 330 && this.x > 308) {
          paning = 3;
          freezetime = 64;
        }
      }
      
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[3] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if ((this.x <= EDGE.xend + 3 && this.x >= EDGE.xend - 3) || this.x > EDGE.xend && this.y < 154 && this.y > 138) {
          paning = 4;
          freezetime = 64;
        }
      }


      this.CheckEdge();
    }

  }

  debugShow() {

    if (mouseIsPressed) this.selfcollider.display();
    if (this.debug) {
      // -22,  rect with length 22,10

      // door detect
      // rect(this.x, this.y + 22, 22, 10);

      // monster detecr

      this.selfcollider.display();
    }
  }

  SetCollider(x, y, width, height, damage, damageDirection) {
    this.Skillcollider.x = x;
    this.Skillcollider.y = y;
    this.Skillcollider.width = width;
    this.Skillcollider.height = height;
    this.Skillcollider.damage = damage;
    this.Skillcollider.damageDirection = damageDirection;
  }

  CheckEdge() {
    if (this.x > EDGE.xend) this.x = EDGE.xend;
    if (this.x < EDGE.xstart) this.x = EDGE.xstart;
    if (this.y < EDGE.ystart) this.y = EDGE.ystart;
    if (this.y > EDGE.yend) this.y = EDGE.yend;
  }




  hp_bar() {
    rectMode(CORNER);
    fill(255, 0, 0);
    rect(0, 0, 200, 12);
    fill(0, 255, 0);
    rect(0, 0, map(this.hp, 0, this.hpMax, 0, 200), 12);
  }





}






