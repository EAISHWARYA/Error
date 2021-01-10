class Ground {
  constructor(x, y, width) {
    var options = {
      isStatic: true,
      density: 20,
      friction: 7
    }
    this.body = Bodies.rectangle(x, y, width, 80, options)
    this.width = width
    this.height = 80

    //loading the image
    //this.image= loadImage('images/ground.png')

    World.add(world, this.body)

  }
  display() {
    var pos = this.body.position;
    // imageMode(CENTER)
    rectMode(CENTER)
    fill("blue");
    //image

    rect(pos.x, pos.y, this.width, 80);
  }
}