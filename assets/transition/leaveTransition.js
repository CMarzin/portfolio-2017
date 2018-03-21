import anime from 'animejs'

const leaveTransition = (el, store) => {
  console.log('leave')
  anime({
    targets: '.container__left-prev-volet',
    duration: 500,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['100% 0% 0', '100% 0% 0'],
    scaleY: 0
  })
  anime({
    targets: '.container__right-next-volet',
    duration: 500,
    easing: [0.25, 0.1, 0.24, 1.01],
    transformOrigin: ['50% 100% 0', '50% 100% 0'],
    scaleY: 0
  })
}

export default leaveTransition
