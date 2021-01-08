class Bob {

    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8,
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world, this.body);

        console.log(this.body);

        this.image=loadImage("bob.png")
    
    }
    
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,85,85);
        pop();
    }
    
    }