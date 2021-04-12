class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.002
        }
        
        this.body = Bodies.circle(x,y,5,options);
        World.add(world, this.body);
        
    }

    display(){
        var pos = this.body.position;
        fill("lightblue");
        ellipseMode(RADIUS);
        circle(pos.x, pos.y,5);
    }

    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(-10,0)});
        }
    }
}