class Dustbin {
    constructor(x, y, w,h) {
      var options = {
          'isStatic' : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y,w, h,options);
      this.w = w;
      this.h = h;
  
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
      image(this.image,100,100,50,50);
          
     // circle(pos.x,pos.y,this.diameter);
  
      
      pop();
    }
  };
  