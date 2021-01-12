class Bob{
    constructor(x, y, width) {
        var options = {
            isStatic : false,
            'restitution':1.0,
            'friction':0.1
            
        }
        
        this.body =Matter.Bodies.circle(x,y,width,options);
        this.width = width;
       
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
       
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(pos.x,pos.y,this.width,this.width);
        pop();
      }
}