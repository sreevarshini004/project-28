class Launcher{
    constructor(bodyA , bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.004,
            length:10
        }
        this.pointB = pointB;
        this.launcher= Constraint.creater(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.bodyB.position;
        strokeWeight(3);
        Line(pointA.x , pointA.y , pointB.x , pointB,y);
    }

}
