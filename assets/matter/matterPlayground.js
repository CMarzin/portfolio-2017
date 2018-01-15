import Matter from 'matter-js'
export default () => {
  // module aliases
  let Engine = Matter.Engine
  let Render = Matter.Render
  let World = Matter.World
  let Bodies = Matter.Bodies

  const canvas = document.querySelector('.container__all')

  // create an engine
  const engine = Engine.create()

  const responsiveWidth = window.innerWidth
  const responsiveHeight = window.innerHeight

  // reponsive Height canvas
  const widthCanvas = window.innerWidth - window.innerWidth / 6
  const heightCanvas = window.innerHeight - window.innerHeight / 6

  // create a renderer
  const render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      width: widthCanvas,
      height: heightCanvas,
      background: 'transparent',
      wireframes: false,
      showAngleIndicator: false
    }
  })

  // create two boxes and a ground
  const boxA = Bodies.rectangle(400, 200, 80, 80, {
    render: {
      fillStyle: 'red',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  const boxB = Bodies.rectangle(450, 50, 80, 80, {
    render: {
      fillStyle: 'blue',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  const triangle = Bodies.polygon(400, 150, 3, 45, {
    render: {
      fillStyle: '#F5C316',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  const rectangleA = Bodies.rectangle(450, 50, 400, 30, {
    render: {
      fillStyle: 'red',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  const rectangleB = Bodies.rectangle(450, 50, 50, 300, {
    render: {
      fillStyle: '#F5C316',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  /*
  *********
  * Make the box static
  *********
  */

  console.log('taille', responsiveWidth)
  console.log('taille H', responsiveHeight)
  console.log('canvas width', widthCanvas)
  console.log('height canvas', heightCanvas)

  const ground = Bodies.rectangle(widthCanvas / 2, heightCanvas + 10, widthCanvas, 20, {
    isStatic: true,
    render: {
      fillStyle: 'black'
    }
  })

  const top = Bodies.rectangle(400, -80, 810, 80, {
    isStatic: true,
    render: {
      fillStyle: 'black'
    }
  })

  const left = Bodies.rectangle(0, 400, 60, 810, {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
    }
  })

  const right = Bodies.rectangle(widthCanvas + 5, heightCanvas / 2, 20, heightCanvas, {
    isStatic: true,
    render: {
      fillStyle: 'black'
    }
  })

  const mouseConstraint = Matter.MouseConstraint.create(engine, { // Create Constraint
    element: canvas,
    constraint: {
      render: {
        visible: true
      },
      stiffness: 1
    }
  })

  const ball = Matter.Bodies.circle(250, 250, 50, {
    density: 0.04,
    friction: 0.01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      fillStyle: '#F5C316',
      strokeStyle: 'black',
      lineWidth: 5
    }
  })

  mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
  mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, triangle, rectangleA, rectangleB, ground, top, left, right, mouseConstraint, ball])

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(render)
}
