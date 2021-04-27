const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var thunder, thunder1, thunder2, thunder3, thunder4;


function preload(){
 thunder1 = loadImage("thunderbolt/1.png");
 thunder2 = loadImage("thunderbolt/2.png");
 thunder3 = loadImage("thunderbolt/3.png");
 thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
  createCanvas(500,700);
  
  engine = Engine.create();
  world = engine.world;

  umbrella = new Umbrella(200,500);

  for(var i = 0; i < maxDrops; i++){
      drops.push(new Drops(random(0,500),random(0,500)))
  }
    
}

function draw(){
    Engine.update(engine);
    background("black");

    rand = Math.round(random(1,4));
    if(frameCount % 20 === 0){
        
        switch(rand){
            case 1: image(thunder1, random(0,250),0,300,300);
            break;
            case 2: image(thunder2, random(0,250),0,300,300);
            break;
            case 3: image(thunder3, random(0,250),0,300,300);
            break;
            case 4: image(thunder4, random(0,250),0,300,300);
            break;
        }
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
}   

