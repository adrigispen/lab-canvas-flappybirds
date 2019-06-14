class Bird {
  constructor() {
    // this.x = WIDTH/3 - BIRD_WIDTH/2;
    // this.y = HEIGHT/2 - BIRD_HEIGHT/2;
    // this.bobSpeed = .5;
    // this.gravity = 9;
    // this.speed = 1;
    this.x = WIDTH/4;
    this.y = HEIGHT/2;
    this.gravity = 0;
  }

  setup() {
    this.img = loadImage("assets/flappy.png");
  }


  draw() {
    image(this.img, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);

    this.gravity += 0.3;
    this.y += this.gravity;
  }

  jump() {
    console.log("hi");
    this.gravity = 0;
    this.gravity -= 5;
  }
}


//   play() {
//     image(this.img, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);
//     if (mouseIsPressed) {
//       this.jump();
//     } else {
//       this.update();
//     } 
//   }

//   jump() {
//     this.y -= 20;
//   }

//   fall() {
//     this.y = this.y + this.gravity;
//   }

//   bob() {
//     image(this.img, this.x, this.y, BIRD_WIDTH, BIRD_HEIGHT);

//     if (this.y <= HEIGHT/2 - BIRD_HEIGHT/2 - 20) {
//       this.y = HEIGHT/2 - BIRD_HEIGHT/2;
//     } 
//     if (this.y > HEIGHT/2 - BIRD_HEIGHT/2 + 20) {
//       this.y = HEIGHT/2 - BIRD_HEIGHT/2;
//     }
//     this.y = this.y - this.bobSpeed;
//     console.log("bobbing", this.y);
//   } 

//   update() {
//     this.y = this.y + this.speed; 
//     this.speed = this.speed + this.gravity; 

//     if (this.y > HEIGHT) { 
//         this.speed = 0;
//     } 
//   };
// }
