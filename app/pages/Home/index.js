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

    // selectors for animations
    this.navSpans = document.querySelectorAll('.char')
    this.navLinks = document.querySelectorAll('.nav__link')
    this.storeLink = document.querySelector('.home__store__link')
    this.storeLinkBefore = document.querySelector('.home__store__stripe:nth-child(1)')
    this.storeLinkAfter = document.querySelector('.home__store__stripe:nth-child(3)')
  }

  /**
   * Animations.
   */
  async show (url) {
    this.element.classList.add(this.classes.active)

    // nav title animation
    const tl = gsap.timeline()

    tl.to(this.navSpans, {
      stagger: 0.1,
      opacity: 1,
      duration: 0.1,
      ease: Expo.easeOut
    })
    tl.from(this.navSpans, {
      stagger: 0.1,
      rotateX: -105 + 'deg',
      duration: 2,
      ease: Expo.easeOut
    }, '<')

    // gallery and text animation
    tl.from(this.elements.galleryWrapper, {
      left: -150 + 'vw',
      duration: 2,
      ease: Expo.easeOut
    })

    tl.from(this.elements.titlesWrapper, {
      left: -3000,
      duration: 2,
      ease: Expo.easeOut
    }, '<')

    // nav links animation
    tl.to(this.navLinks, {
      opacity: 1,
      duration: 0.5,
      ease: Expo.easeOut
    })

    // store cta link animation
    tl.from(this.storeLink, {
      opacity: 0,
      duration: 0.5,
      ease: Expo.easeOut
    }, '<')
    tl.from(this.storeLinkBefore, {
      width: 0,
      duration: 0.5,
      ease: Expo.easeOut
    })
    tl.from(this.storeLinkAfter, {
      width: 0,
      duration: 0.5,
      ease: Expo.easeOut
    }, '<')

    return super.show(url)
  }

  async hide (url) {
    this.element.classList.remove(this.classes.active)

    return super.hide(url)
  }
}
