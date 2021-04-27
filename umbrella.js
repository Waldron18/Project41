class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image = loadImage("WalkingFrame/walking_1.png","WalkingFrame/walking_2.png","WalkingFrame/walking_3.png","WalkingFrame/walking_4.png",
        "WalkingFrame/walking_5.png","WalkingFrame/walking_6.png","WalkingFrame/walking_7.png","WalkingFrame/walking_8.png");
        World.add(world,this.body)
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y+50,300,300);
    }
}