"use client"
import { TextHoverEffect } from "@/Components/ui/text-hover-effect"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HomePage() {
  const containerRef = useRef(null)
  const linesRef = useRef(null)
  const yearRef = useRef(null)
  const particlesRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const lines = linesRef.current
    const year = yearRef.current
    const particles = particlesRef.current
    const glow = glowRef.current

    if (!container || !lines || !year || !particles || !glow) return

    const tl = gsap.timeline()

    // Initial states
    gsap.set(container, { opacity: 0 })
    gsap.set(lines.children, { opacity: 0, scale: 0, rotation: 0 })
    gsap.set(year, { opacity: 0, scale: 0.8, y: 30 })
    gsap.set(particles.children, { opacity: 0, scale: 0 })
    gsap.set(glow, { opacity: 0, scale: 0.8 })

    tl.to(container, { opacity: 1, duration: 1, ease: "power2.out" })
      .to(glow, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, "-=0.8")
      .to(
        lines.children,
        {
          opacity: 1,
          scale: 1,
          rotation: (i, target) => gsap.getProperty(target, "rotation"),
          duration: 1.2,
          stagger: 0.15,
          ease: "elastic.out(1, 0.6)",
        },
        "-=1.5",
      )
      .to(
        particles.children,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=1",
      )
      .to(
        year,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "+=0.2",
      )

    // Continuous floating animation for particles
    gsap.to(particles.children, {
      y: "random(-15, 15)",
      x: "random(-8, 8)",
      rotation: "random(-90, 90)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    })

    // Continuous glow pulse
    gsap.to(glow, {
      scale: 1.05,
      opacity: 0.9,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(28, 182, 131, 0.08) 0%, transparent 70%)`,
          filter: "blur(50px)",
        }}
      />

      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "#1cb683",
              boxShadow: `0 0 8px #1cb683, 0 0 16px #1cb683`,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      <div ref={linesRef} className="absolute inset-0">
        {[
          { top: "25%", left: "15%", width: "50px", rotation: "45deg" },
          { top: "40%", right: "25%", width: "40px", rotation: "-15deg" },
          { top: "60%", left: "30%", width: "60px", rotation: "60deg" },
          { bottom: "30%", right: "20%", width: "45px", rotation: "30deg" },
          { bottom: "45%", left: "25%", width: "35px", rotation: "-25deg" },
        ].map((line, i) => (
          <div
            key={i}
            className="absolute h-px hidden sm:block"
            style={{
              ...line,
              width: line.width,
              transform: `rotate(${line.rotation})`,
              background: `linear-gradient(90deg, transparent, #1cb683, transparent)`,
              boxShadow: `0 0 8px #1cb683, 0 0 16px rgba(28, 182, 131, 0.4)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full max-w-full h-24 sm:h-32 md:h-40 lg:h-80 relative top-10">
          <TextHoverEffect text="ELEVATE 2.0" duration={0.3} />
        </div>

        <div className="relative mt-4 sm:mt-6 lg:mt-0">

          <p
            ref={yearRef}
            className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl max-w-3xl mb-8 sm:mb-12 font-bold tracking-[0.2em] px-6 sm:px-8 lg:px-12 py-3 sm:py-6"
            style={{
              background: `linear-gradient(135deg, #1cb683 0%, #0d9488 50%, #1cb683 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 8px rgba(28, 182, 131, 0.3))",
            }}
          >
            2025
          </p>
        </div>
      </div>
    </div>
  )
}

// import React from "react";
// import { TextHoverEffect } from "@/Components/ui/text-hover-effect";

// export default function TextHoverEffectDemo() {
//   return (
//     <div className="h-[20rem] flex items-center justify-center">
//       <TextHoverEffect text="ELEVATE 2.0" />
//     </div>
//   );
// }
