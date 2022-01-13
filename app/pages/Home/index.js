import Page from 'components/Page'

import gsap, { Power4 } from 'gsap'
export default class extends Page {
  constructor () {
    super({
      classes: {
        active: 'home--active'
      },
      element: '.home',
      elements: {
        wrapper: '.home__content',
        galleryWrapper: '.home__gallery__wrapper',
        titlesWrapper: '.home__titles__wrapper'
      }
    })
  }

  /**
   * Animations.
   */
  async show (url) {
    this.element.classList.add(this.classes.active)

    gsap.from(this.elements.galleryWrapper, {
      left: -150 + 'vw',
      duration: 3,
      delay: 6,
      ease: Power4.easeOut
    })

    gsap.from(this.elements.titlesWrapper, {
      left: -4000,
      duration: 3,
      delay: 6,
      ease: Power4.easeOut
    })

    return super.show(url)
  }

  async hide (url) {
    this.element.classList.remove(this.classes.active)

    return super.hide(url)
  }
}
