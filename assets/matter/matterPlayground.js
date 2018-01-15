import Matter from 'matter-js'
export default () => {
  // module aliases
  let Engine = Matter.Engine
  let Render = Matter.Render
  let World = Matter.World
  let Bodies = Matter.Bodies

  const canvas = document.querySelector('.container_all')

  // create an engine
  const engine = Engine.create()

  // create a renderer
  const render = Render.create({
    element: canvas,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      background: 'transparent',
      wireframes: false,
      showAngleIndicator: false
    }
  })

  // create two boxes and a ground
  const boxA = Bodies.rectangle(400, 200, 80, 80)
  const boxB = Bodies.rectangle(450, 50, 80, 80)

  const rectangleA = Bodies.rectangle(450, 50, 500, 70)

  const rectangleB = Bodies.rectangle(450, 50, 70, 700)

  const ground = Bodies.rectangle(400, 610, 810, 60, {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
    }
  })

  const top = Bodies.rectangle(400, 0, 810, 60, {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
    }
  })

  const left = Bodies.rectangle(0, 400, 60, 810, {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
    }
  })

  const right = Bodies.rectangle(800, 400, 60, 810, {
    isStatic: true,
    render: {
      fillStyle: 'transparent'
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
  World.add(engine.world, [boxA, boxB, rectangleA, rectangleB, ground, top, left, right, mouseConstraint, ball])

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(render)
}
