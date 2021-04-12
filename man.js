class Man{
    constructor(){
        var options = {
            isStatic:true
        }
        
        this.body = Bodies.circle(100,300,50,options);
        World.add(world, this.body);        
    }
    display(){
        var pos =  this.body.position;
        image (umbrella_man, pos.x, pos.y, 200,200);
    }
}