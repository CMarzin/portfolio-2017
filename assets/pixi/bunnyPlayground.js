// import Bump from 'bump.js'
/* global PIXI */
export default () => {
  // const b = new Bump(PIXI)

  var renderer = PIXI.autoDetectRenderer(800, 600, {
    antialias: true,
    backgroundColor: '0x86D0F2'
  })

  document.body.appendChild(renderer.view)

  var stage = new PIXI.Container()
  stage.interactive = true

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
      // playerVsPlatforms()
    }
  }

  // create a texture from an image path
  var texture = PIXI.Texture.fromImage('http://pixijs.io/examples/required/assets/bunny.png')

  // Scale mode for pixelation
  texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST

  createBunny(100, 100)

  createTriangle(
    Math.floor(Math.random() * renderer.width),
    Math.floor(Math.random() * renderer.height)
  )

  function createBunny (x, y) {
    var bunny = new PIXI.Sprite(texture)
    bunny.interactive = true
    bunny.buttonMode = true
    bunny.hitArea = stage.contains
    console.log(stage)
    bunny.anchor.set(0.5)

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

    // let playerVsPlatforms = b.hit(
    //   bunny,
    //   stage,
    //   true, false, false,
    //   function (collision, platform) {

    //     // `collision` tells you the side on player that the collision occurred on.
    //     // `platform` is the sprite from the `world.platforms` array
    //     // that the player is colliding with
    //   }
    // )
  }

  function createTriangle (x, y) {
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

    // setup events for mouse + touch using
    // the pointer events
    triangle
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove)

    // move the sprite to its designated position
    triangle.x = x
    triangle.y = y

    // add it to the stage
    stage.addChild(triangle)
  }

  // run the render loop
  animate()

  function animate () {
    renderer.render(stage)
    requestAnimationFrame(animate)
  }
}
