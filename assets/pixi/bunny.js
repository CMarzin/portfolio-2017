// /* global PIXI */
// export default (x, y) => {
//   // create our little bunny friend..
//   var bunny = new PIXI.Sprite(texture)

//   // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
//   bunny.interactive = true

//   // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
//   bunny.buttonMode = true

//   // center the bunny's anchor point
//   bunny.anchor.set(0.5)

//   // make it a bit bigger, so it's easier to grab
//   bunny.scale.set(3)

//   // setup events for mouse + touch using
//   // the pointer events
//   bunny
//     .on('pointerdown', onDragStart)
//     .on('pointerup', onDragEnd)
//     .on('pointerupoutside', onDragEnd)
//     .on('pointermove', onDragMove)

//     // move the sprite to its designated position
//   bunny.x = x
//   bunny.y = y

//   // add it to the stage
//   stage.addChild(bunny)
// }
