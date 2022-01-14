import Page from 'components/Page'

import gsap, { Expo } from 'gsap'

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
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

    Splitting()

    this.navSpans = document.querySelectorAll('.char')
    this.linkSpans = document.querySelectorAll('.word')
  }

  /**
   * Animations.
   */
  async show (url) {
    this.element.classList.add(this.classes.active)

    // nav animation
    const animateNav = gsap.timeline()

    animateNav.from(this.navSpans, {
      stagger: 0.1,
      opacity: 0,
      duration: 0.01,
      ease: Expo.easeOut
    })

    // gallery and text animation
    gsap.from(this.elements.galleryWrapper, {
      left: -150 + 'vw',
      duration: 2,
      delay: 3,
      ease: Expo.easeOut
    })

    gsap.from(this.elements.titlesWrapper, {
      left: -4000,
      duration: 2,
      delay: 3,
      ease: Expo.easeOut
    })

    return super.show(url)
  }

  async hide (url) {
    this.element.classList.remove(this.classes.active)

    return super.hide(url)
  }
}
