class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      friction: 5,
      density: 10
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height

    var playerimage;

    playerimage = 'images/scientist.png'

    //loading the image
    this.image = loadImage(playerimage)

    World.add(world, this.body)

  }
  display() {
    var playerimage;


    var pos = this.body.position;
    // imageMode(CENTER)
    push()
    imageMode(CENTER)
    fill("blue");
    //image
    rotate(this.body.angle)
    translate(pos.x, pos.y)
    image(this.image, 0, 0, this.width, this.height);
    pop()
    if (keyIsDown(RIGHT_ARROW)) {
      playerimage = 'images/walkingright1.png'
      //pos.x=pos.x+1;
      //pos.y=pos.y;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      playerimage = 'images/walkingleft1.png'
      //pos.x=pos.x-1;
      //pos.y=pos.y;
    }
    else if (keyIsDown(UP_ARROW)) {
      playerimage = 'images/scientist.png'
      // pos.y=pos.y-1;
      //pos.y=pos.y;
    }
    else {
      playerimage = 'images/scientist.png'
    }

  }
}
