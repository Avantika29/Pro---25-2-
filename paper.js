class Paper {
  constructor(x, y, diameter) {
    var options = {
        'isStatic' : false,
        'restitution':0.3,
        'friction':0.2,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,diameter, options);
    this.diameter = diameter;

    this.image = loadImage("images/paper.png");
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
  // translate(this.body.position.x,this.body.position.y);
    //rectMode(CENTER);
    fill("pink");

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
        
   // circle(pos.x,pos.y,this.diameter);

    
    pop();
  }
};
