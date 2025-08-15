import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type SmoothScrollOptions = {
  duration?: number
  easing?: (t: number) => number
  smoothTouch?: boolean
  touchMultiplier?: number
}

export class SmoothScroll {
  private lenis: Lenis
  private static instance: SmoothScroll

  private constructor(options?: SmoothScrollOptions) {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // Better mobile performance
      touchMultiplier: 1.5,
      ...options
    })

    this.initScrollTrigger()
    this.startRAF()
    this.setupResizeObserver()
  }

  public static init(options?: SmoothScrollOptions): SmoothScroll {
    if (!this.instance) {
      this.instance = new SmoothScroll(options)
    }
    return this.instance
  }

  public static destroy() {
    if (this.instance) {
      this.instance.cleanup()
      this.instance = null!
    }
  }

  private initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
    this.lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(() => ScrollTrigger.update())
    gsap.ticker.lagSmoothing(0)
  }

  private startRAF() {
    const raf = (time: number) => {
      this.lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  private setupResizeObserver() {
    const ro = new ResizeObserver(() => this.lenis.resize())
    ro.observe(document.body)
    return ro
  }

  private cleanup() {
    this.lenis.destroy()
    gsap.ticker.remove(ScrollTrigger.update)
  }

  public get scroll() {
    return this.lenis
  }
}