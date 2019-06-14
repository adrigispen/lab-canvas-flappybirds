const game = new Game();
let playing = false;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  game.setup();
  
}

function draw() {
  clear();
  game.draw();
  // game.drawBackground();
  // if (playing) {
  //   game.addObstacles();
  //   game.play();
  // } else {
  //   game.drawStartScreen();
  // }  
}

function mousePressed() {
  game.bird.jump();
  //playing = true;
}

function keyPressed() {
  if (keyCode == 32) game.bird.jump();
}
