class Game {

  constructor() {
    this.bird = new Bird();
    this.obstacles = [];
  }

  setup() {
    this.bg = new Background();
    this.bg.setup();
    this.bird.setup();
    //const obstacleTop = loadImage("assets/obstacle_top.png");
    //const obstacleBottom = loadImage("assets/obstacle_bottom.png");
    
    //this.bird.setup();
    //console.log(this.bg);
    //this.obstacles.push({x: WIDTH/2, y: 0, img: obstacleTop}, {x: WIDTH/2, y: HEIGHT - obstacleBottom.height, img: obstacleBottom});

  }

  draw() {
    this.bg.draw();
    this.bird.draw();
  }

  drawBackground() {
    image(this.bg, 0, 0, WIDTH, HEIGHT);
    if (this.x <= -WIDTH) {
      this.x = WIDTH;
    }
    this.x -= this.bgSpeed;
  }

  drawStartScreen() {
    this.bird.bob();
  }

  addObstacles() {
    this.obstacles.forEach(obstacle => {
      image(obstacle.img, obstacle.x, obstacle.y);
    });
  }

  play() {
    this.bird.play();
  }
}