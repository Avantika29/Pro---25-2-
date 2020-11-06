class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image  = loadImage("images/dustbin.png");
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
     
      push();
      imageMode(CENTER);
      fill(255);
      
      image(this.image,550,600, 120, 120);
      pop();
    }
  }
  