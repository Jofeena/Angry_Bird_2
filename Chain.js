class Chain {
    constructor (bodyA, bodyB) {
        var Chainoption = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.02,
            length:10
        }       
            this.Chain = Constraint.create (Chainoption)
            World.add (world,this.Chain)
    }
        display () {
            var JoA = this.Chain.bodyA.position;
            var JoB = this.Chain.bodyB.position;
            strokeWeight(5)
            line (JoA.x,JoA.y,JoB.x,JoB.y)
        }


}