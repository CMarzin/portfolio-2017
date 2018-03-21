import anime from 'animejs'

const enterTransition = (el, store) => {
  console.log('enter')
  anime({
    targets: '.container__left-prev-volet',
    duration: 500,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['100% 0% 0', '100% 0% 0'],
    scaleY: 1
  })

  anime({
    targets: '.container__middle-photo-volet',
    delay: 250,
    duration: 500,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['0% 100% 0', '0% 100% 0'],
    scaleY: 0
  })

  anime({
    targets: '.container__right-next-volet',
    duration: 500,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['50% 100% 0', '50% 100% 0'],
    scaleY: 1
  })

  anime({
    targets: '.container__left-title-volet',
    duration: 750,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['0% 100% 0', '0% 100% 0'],
    scaleX: 0
  })

  anime({
    targets: '.container__middle-website-volet',
    duration: 750,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['0% 100% 0', '0% 100% 0'],
    scaleX: 1
  })

  anime({
    targets: '.container__left-desc',
    easing: [0.25, 0.1, 0.24, 1.01],
    opacity: 1
  })
}

export default enterTransition
