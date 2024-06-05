class FourWayAni {

  constructor() {
    this.down = [];
    this.left = [];
    this.right = [];
    this.up = [];
  }
}





class SpecialAni {
  constructor() {
    this.index = 0;
    this.frame = 0;
    this.aniarr = {
      idle: [],
      run: new FourWayAni(),
      die: [],
      atk: new FourWayAni(),
      def: new FourWayAni(),
      shoot: new FourWayAni(),
      magic: new FourWayAni(),
    };
  }

  loadAni(condition, direction, location, size) {
    const animation = this.aniarr[condition][direction];
        for (let i = 0; i < size; ++i) {
            animation.push(loadImage(location + i + '.png'));
    }

  }


}



















// bad version 
    // this.aniarr = {
    //   idle: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },
    //   run: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },
    //   die: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },
    //   atk: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },
    //   def: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },

    //   shoot: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   },

    //   magic: {
    //     down: [],
    //     left: [],
    //     right: [],
    //     up: [],
    //   }
    // };