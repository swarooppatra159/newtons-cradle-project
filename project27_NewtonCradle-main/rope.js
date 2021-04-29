class Rope{
    constructor(body1,body2,xOffset){
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xOffset,y:0},

           // pointA:{x:10,y:0}
        }
        this.rope = Constraint.create(options);
        this.xOffset = xOffset;

       // this.xOffsetforbob = 10;

        World.add(world,this.rope)
    }

    display(){
        stroke("white");
        strokeWeight(3);
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y);

       // line(pointA.x+10,pointA.y,pointB.x+this.xOffset,pointB.y);
    }
}