/* global PIXI */
export default () => {
  var renderer = PIXI.autoDetectRenderer(800, 600, {
    antialias: true,
    backgroundColor: '0x86D0F2'
  })

  document.body.appendChild(renderer.view)

  var stage = new PIXI.Container()
  stage.interactive = true

  var graphics = new PIXI.Graphics()
  graphics.interactive = true
  graphics.buttonMode = true
  graphics.lineStyle(5)
  graphics.beginFill(0xFFFF0B, 0.5)
  graphics.drawCircle(0, 0, 60)
  graphics.endFill()
  graphics.x = 100
  graphics.y = 100

  stage.addChild(graphics)

  // 4d. Create a triangle
  var triangle = new PIXI.Graphics()
  triangle.interactive = true
  triangle.buttonMode = true
  triangle.lineStyle(5)
  triangle.beginFill(0x4A5FB4, 1)
  triangle.moveTo(20, 300)
  triangle.lineTo(100, 380)
  triangle.lineTo(20, 380)
  triangle.lineTo(20, 300)
  triangle.endFill()

  stage.addChild(triangle)

  // setup events
  // graphics
  //   .on('mousedown', onDragStart)
  //   .on('touchstart', onDragStart)
  //   .on('mouseup', onDragEnd)
  //   .on('mouseupoutside', onDragEnd)
  //   .on('touchend', onDragEnd)
  //   .on('touchendoutside', onDragEnd)
  //   .on('mousemove', onDragMove)
  //   .on('touchmove', onDragMove)

  // setup events
  triangle
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove)

  var drag = false
  createDragAndDropFor(graphics)

  function createDragAndDropFor (target) {
    target.interactive = true
    target.on('mousedown', function (e) {
      drag = target
    })
    target.on('mouseup', function (e) {
      drag = false
    })
    target.on('mousemove', function (e) {
      if (drag) {
        drag.position.x += e.data.originalEvent.movementX
        drag.position.y += e.data.originalEvent.movementY
      }
    })
  }

  function onDragStart (event) {
    console.log('event', event.data)
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data
    this.alpha = 0.5
    this.dragging = true
  }

  function onDragEnd () {
    this.alpha = 1

    this.dragging = false

    // set the interaction data to null
    this.data = null
  }

  function onDragMove () {
    if (this.dragging) {
      var newPosition = this.data.getLocalPosition(this.parent)
      this.position.x = newPosition.x
      this.position.y = newPosition.y
      console.log('X', this.position.x, 'New Position', newPosition.x)
      console.log('Y', this.position.y, 'New Position', newPosition.y)
    }
  }

  // create a texture from an image path
  var texture = PIXI.Texture.fromImage('http://pixijs.io/examples/required/assets/bunny.png')

  // Scale mode for pixelation
  texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST

  for (var i = 0; i < 10; i++) {
    createBunny(
      Math.floor(Math.random() * renderer.width),
      Math.floor(Math.random() * renderer.height)
    )
  }

  function createBunny (x, y) {
    // create our little bunny friend..
    var bunny = new PIXI.Sprite(texture)

    // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
    bunny.interactive = true

    // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    bunny.buttonMode = true

    // center the bunny's anchor point
    bunny.anchor.set(0.5)

    // make it a bit bigger, so it's easier to grab
    bunny.scale.set(3)

    // setup events for mouse + touch using
    // the pointer events
    bunny
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)

    // move the sprite to its designated position
    bunny.x = x
    bunny.y = y

    // add it to the stage
    stage.addChild(bunny)
  }

  // run the render loop
  animate()

  function animate () {
    renderer.render(stage)
    requestAnimationFrame(animate)
  }
}
