class Character {

  constructor() {

  }

}




class SpecialCharacter {
  constructor(x, y, atk, hp, ani) {
    this.x = x;
    this.y = y;
    this.atk = atk;
    this.hp = hp;
    this.ani = ani;


    this.debug = true;


    this.skillActive = false;
    this.skilldemand = 'null';
    this.atkFreeze = 0;
    this.defFreeze = 0;
    this.magicFreeze = 0;
    this.shootFreeze = 0;

    this.direction = "down";
    this.condition = "run";
  }

  setup() {

  }


  display() {



    if (this.atkFreeze > 0) this.atkFreeze--;
    if (this.defFreeze > 0) this.defFreeze--;
    if (this.magicFreeze > 0) this.magicFreeze--;
    if (this.shootFreeze > 0) this.shootFreeze--;

    if (freezetime > 0) {
      this.atkFreeze = 0;
      this.defFreeze = 0;
      this.magicFreeze = 0;
      this.shootFreeze = 0;
      this.skilldemand = 'null';
      this.skillActive = false;
    }

    if (this.skilldemand === 'atk' && freezetime === 0) {
      this.condition = 'atk'
      if (this.ani.frame % 7 === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.atkFreeze = 40;
        this.skillActive = false;
      }
    }
    else if (this.skilldemand === 'def' && freezetime === 0) {
      this.condition = 'def'
      if (this.ani.frame % 5 === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.defFreeze = 220;
        this.skillActive = false;
      }
    }
    else if (this.skilldemand === 'magic' && freezetime === 0) {
      this.condition = 'magic'
      if (this.ani.frame % 12 === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.magicFreeze = 300;
        this.skillActive = false;
      }
    }
    else if (this.skilldemand === 'shoot' && freezetime === 0) {
      this.condition = 'shoot'
      if (this.ani.frame % 10 === 0) {
        this.ani.index++;
      }

      this.ani.frame++;
      if (this.ani.index === this.ani.aniarr[this.condition][this.direction].length) {
        // show the block;
        this.skilldemand = 'null';
        this.shootFreeze = 200;
        this.skillActive = false;
      }
    }

    if (this.condition === 'run') {
      if (frameCount % 4 === 0) this.ani.index++;
    }

    const animation = this.ani.aniarr[this.condition][this.direction];





    if (this.condition === 'idle') image(this.ani.aniarr['run'][this.direction][0], this.x, this.y)
    else if (this.condition !== 'idle') image(animation[this.ani.index % animation.length], this.x, this.y);


    print('current atkfrezze is', this.atkFreeze);
    print('index is at', this.ani.index);




    if (this.debug) {
      // -22,  rect with length 22,10

      rectMode(CENTER);
      // door detect
      rect(this.x, this.y + 22, 22, 10);


      if (mouseIsPressed) {
        rectMode(CORNER)
        // monster detecr
        rect(this.x - 16, this.y - 20, 32, 46)
      }

    }

  }


  action() {
    if (keyIsDown(87) && freezetime === 0) {
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[0] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.y === 12 && this.x < 330 && this.x > 308) {
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
        if (this.x === 28 && this.y < 154 && this.y > 138) {
          paning = 2;
          freezetime = 128;
        }
      }

      if (this.x > 28) this.x -= 4;
      this.direction = 'left';
      this.condition = 'run';
    }

    else if (keyIsDown(83) && freezetime === 0) {
      if (dungeon.map[dungeon.index[0]][dungeon.index[1]].noWall[2] && dungeon.map[dungeon.index[0]][dungeon.index[1]].played) {
        if (this.y === 276 && this.x < 330 && this.x > 308) {
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
        if (this.x === 612 && this.y < 154 && this.y > 138) {
          paning = 4;
          freezetime = 128;
        }
      }

      if (this.x < 612) this.x += 4;

      this.direction = 'right';
      this.condition = 'run';
    }
    else this.condition = 'idle';
  }

  skillAction() {
    if(this.skillActive === false &&  keyIsDown(76) && freezetime === 0 && this.defFreeze === 0) {
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
    else if(this.skillActive === false &&  keyIsDown(75) && freezetime === 0 && this.magicFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'magic';
      this.ani.index = 0;
      this.ani.frame = 0;
    }
    else if( this.skillActive === false &&  keyIsDown(85) && freezetime === 0 && this.shootFreeze === 0) {
      this.skillActive = true;
      this.skilldemand = 'shoot';
      this.ani.index = 0;
      this.ani.frame = 0;
    }
  }




}



