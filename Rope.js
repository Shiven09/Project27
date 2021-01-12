class Rope
{
constructor(bodyA,bodyB)
{
var options ={
bodyA : bodyA,
bodyB : bodyB,
length : 10
}
this.rope = Constraint.create(options);
World.add(world,this.rope);
}
display()
{
var posA = this.rope.bodyA.position;
var posB = this.rope.bodyB.position;
push();
line(posA.x,posA.y,posB.x,posB.y)
pop();

}
}