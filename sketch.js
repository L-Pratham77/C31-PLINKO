//MADE by PRATHAM SHARMA
const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;
var GameState=0

var rowsHeight = 150;

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,600,1700,20);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,425))
  }
  for(var k = 15; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  
  background("black");
  if(GameState===1){ 
  if(frameCount % 30 === 0){
    particle = new Particle(random(120, 700), 0, 7, random(0, 360));
    particles.push(particle);
  }

  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
}
else{
  fill("blue");
  textSize (60);
  text ("PRESS SPACE TO START",100,300);
}

// rows.display();
ground.display();

  drawSprites();
}
function keyPressed(){
  if(keyCode === 32){
      GameState=1;
  }
}