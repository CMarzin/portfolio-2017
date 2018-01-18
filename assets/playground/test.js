/* global PIXI */
import Matter from 'matter-js'
/* eslint-disable */
export default () => {
  /**
 * Click on the canvas to drop a ball onto the ground.
 *
 **/

  const rendererOptions = {
    backgroundColor: 0x00213C,
    autoResize: true,
    resolution: window.devicePixelRatio
  }

  const app = new PIXI.Application(0, 0, rendererOptions)
  app.renderer.autoResize = true
  // app.renderer.view.style.position = 'absolute'
  // app.renderer.view.style.display = 'block'

  const GAME_WIDTH = 500
  const GAME_HEIGHT = 500

  app.renderer.resize(GAME_WIDTH, GAME_HEIGHT)

  document.body.appendChild(app.renderer.view)

  app.stage.interactive = true
  app.stage.hitArea = app.screen

  const { Bodies, Body, Composite, Engine, Events, World, Render } = Matter

  let engine
  let boxes = []
  let movableObjects = new PIXI.Container()

  function addBody (...bodies) {
    World.add(engine.world, ...bodies)
  }

  function addCircle ({x = 0, y = 0, r = 10, options = {}} = {}) {
    let body = Bodies.circle(x, y, r, options)
    body.width = r * 2
    body.height = r * 2
    addBody(body)
    return body
  }

  function addBoundary ({x = 0, y = 0, w = 50, h = 50, options = {}} = {}) {
    let body = Bodies.rectangle(x, y, w, h, options)
    body.width = w
    body.height = h
    addBody(body)
    return body
  }

  function addSprite (object) {
    const c = document.createElement('canvas')
    c.width = object.width
    c.height = object.height

    const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'white', 'aqua']

    // chose a number between 0 and 9
    let randomNumber = Math.floor(Math.random() * colors.length)

    const ctx = c.getContext('2d')
    ctx.fillStyle = colors[randomNumber]
    ctx.beginPath()
    ctx.arc(object.circleRadius, object.circleRadius, object.circleRadius, 0, Math.PI * 2)
    ctx.fill()

    const sprite = PIXI.Sprite.from(c)
    sprite.anchor.set(0.5)
    sprite.position.set(object.position.x, object.position.y)
    return sprite
  }

  function mouseDownHandler (event) {
    const {x, y} = event.data.global
    const options = {
      friction: 0.1,
      restitution: 0.7
    }
    const box = addCircle({
      x, y, r: 25, options
    })
    boxes.push(box)

    const sprite = addSprite(box)
    movableObjects.addChild(sprite)
  }

  // var triangle = new PIXI.Graphics()
  // triangle.interactive = true
  // triangle.buttonMode = true
  // triangle.lineStyle(5)
  // triangle.beginFill(0x4A5FB4, 1)
  // triangle.moveTo(20, 300)
  // triangle.lineTo(100, 380)
  // triangle.lineTo(20, 380)
  // triangle.lineTo(20, 300)
  // triangle.endFill()

  // app.stage.addChild(triangle)

  window.onload = function () {
    engine = Engine.create()

    app.stage.addChild(movableObjects)
    app.stage.mousedown = mouseDownHandler

    const options = {
      friction: 0.1,
      restitution: 0.7,
      isStatic: true
    }
    const boundary = addBoundary({
      x: 0, y: GAME_HEIGHT - 60, w: GAME_WIDTH * 2, h: 1, options
    })

    const g = new PIXI.Graphics()
    g.beginFill(0xAAACCB)
    g.lineStyle(5)
    g.drawRect(0, 0, boundary.width, 60)
    g.endFill()

    const t = app.renderer.generateTexture(g)
    const b_sprite = PIXI.Sprite.from(t)
    b_sprite.position.set(boundary.position.x, boundary.position.y)

    app.stage.addChild(b_sprite)

    const leftBound = addBoundary({
      x: 0, y: 0, w: 1, h: GAME_HEIGHT * 2, options
    })

    const rightBound = addBoundary({
      x: GAME_WIDTH, y: 0, w: 1, h: GAME_HEIGHT * 2, options
    })
  }

  function play (delta) {
    Engine.update(engine, delta)
    for (let i = 0; i < movableObjects.children.length; i++) {
      const sp = movableObjects.children[i]
      sp.position.set(boxes[i].position.x, boxes[i].position.y)
    }
  }

  app.ticker.add(function (delta) {
    play(delta * (1000 / 60))
  })
}
