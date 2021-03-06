class SlingShot{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly() { 
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            fill("white");
            strokeWeight(1);            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}