let button30
let button60

let cube
let velX = 10

function setup () {
  createCanvas(800, 200)
  frameRate(60)
  fill(255)
  noStroke()

  createElement('br')
  button30 = createButton('30 FPS')
  button60 = createButton('60 FPS')

  button30.mousePressed(() => {
    frameRate(30)
    cube.velX = velX * 2
  })

  button60.mousePressed(() => {
    frameRate(60)
    cube.velX = velX
  })

  cube = new Cube()
}

function draw () {
  background('#555555')

  textSize(20)
  text(600 / cube.velX + ' FPS', width - 70, 20)

  cube.update()
  cube.show()
}

class Cube {
  constructor () {
    this.w = 50
    this.h = this.w
    this.x = 0
    this.y = height / 2 - this.h / 2
    this.velX = velX
    this.dirX = 1
  }

  update () {
    if (this.x <= 0) {
      this.dirX = 1
    }

    if (this.x >= width - this.w) {
      this.dirX = -1
    }

    this.x += this.velX * this.dirX
  }

  show () {
    rect(this.x, this.y, this.w, this.h)
  }
}
