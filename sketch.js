var wall, thickness;
var bullet, speed, weight;
var damage 
function setup() {
  createCanvas(1600,400);
  thickness= random (22, 83)
  bullet = createSprite( 50, 200, 20, 10);
  
  wall = createSprite( 1200, 200, thickness, height/2);
  speed= random(223,321)
  weight= random(30,52)
  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  
  if (bullet.collide(wall)) {
    bullet.velocityX=0;
    damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if (damage> 10) {
      wall.shapeColor="red"
    }
    else {wall.shapeColor="green"}
  }
  drawSprites();
}