const beforeEnter = (el, store) => {
  const customCurrentClass = 'bonjour-' + store.state.projects[store.state.pathToCurrentProject].color
  const customClassBgNext = 'bonjour-' + store.state.projects[store.state.pathToNextProject].color

  /*******************************
  * LEFT
  ********************************/
  const leftVolet = el.querySelector('.container__left-prev-volet')
  const titleVolet = el.querySelector('.container__left-title-volet')
  const titleLeft = el.querySelector('.container__left-title h1')
  const desc = el.querySelector('.container__left-desc')

  titleVolet.classList.add(customCurrentClass)
  titleLeft.setAttribute('style', 'opacity: 1')

  leftVolet.setAttribute('style', `transform: scaleY(0)`)
  desc.setAttribute('style', 'opacity: 0')

  /*******************************
  * MIDDLE
  ********************************/
  const linkWebsiteVolet = el.querySelector('.container__middle-website-volet')
  const photoVolet = el.querySelector('.container__middle-photo-volet')

  photoVolet.classList.add(customClassBgNext)
  photoVolet.classList.remove('.container__middle-photo-base')
  linkWebsiteVolet.setAttribute('style', 'transform: scaleX(0)')

  /*******************************
  * RIGHT
  ********************************/
  const rightVolet = el.querySelector('.container__right-next-volet')

  rightVolet.setAttribute('style', 'transform: scaleY(0)')

  console.log('beforeEnter')
}

export default beforeEnter
