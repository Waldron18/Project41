class Drops{
    constructor(x,y){
        var options ={
            restitution: 1,
            friction: 0.1
        }   
        this.body = Bodies.circle(x,y,2,options);
        this.radius = 2;
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y > height){
           Body.setPosition(this.body,{x:random(0,500),y:random(0,600)})
        }
    }

    display(){
        var pos = this.body.position;
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
