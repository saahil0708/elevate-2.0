"use client"
import { useRef, useEffect, useState } from "react"
import * as THREE from "three"

const EnhancedSpeakerReveal = () => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [initialHeight, setInitialHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [componentTop, setComponentTop] = useState(0)
  const componentRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
    setInitialHeight(window.innerHeight)

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x1cb683, 0.2)
    scene.add(ambientLight)

    // Add some floating particles for visual interest
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 100
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x1cb683,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    })
    
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate particles slowly
      if (particles) {
        particles.rotation.y += 0.001
        particles.rotation.x += 0.0005
      }
      
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false;
        });
        ticking = true;
      }
    }

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect()
          setComponentTop(window.scrollY + rect.top)
        }
      },
      { threshold: [0, 0.1, 0.5, 1] }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
      // Initial position calculation with a slight delay to ensure DOM is ready
      setTimeout(() => {
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect()
          setComponentTop(window.scrollY + rect.top)
        }
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [isMounted])

  const featuredTextVisible = true // Always visible - never disappears
  // GSAP Pin Style - Calculate progress based on scroll through component
  const componentHeight = initialHeight * 10 // Massive scroll distance to prevent overlap
  const scrollProgress = componentTop > 0 
    ? Math.max(0, Math.min(1, (scrollY - componentTop) / componentHeight))
    : Math.max(0, Math.min(1, (scrollY - initialHeight * 6) / componentHeight)) // Fallback
  
  // Convert progress to relative scroll for existing animations
  const relativeScroll = scrollProgress * componentHeight
  
  // Featured text timing - Super extended
  const featuredTextOpacity = relativeScroll < initialHeight * 1.0 
    ? Math.min(relativeScroll / (initialHeight * 1.0), 1) // Slow fade-in
    : relativeScroll < initialHeight * 2.5
    ? 1 // Stay fully visible until first speaker
    : relativeScroll < initialHeight * 3.2
    ? Math.max(1 - (relativeScroll - initialHeight * 2.5) / (initialHeight * 0.7), 0) // Fade out when Aman Gupta appears
    : 0 // Completely hidden after first speaker text appears
  
  const featuredTextScale = relativeScroll < initialHeight * 2.0
    ? 1 + relativeScroll / (initialHeight * 15.0) // Much slower scaling
    : 1.13 + ((relativeScroll - initialHeight * 2.0) / (initialHeight * 2.0)) * 0.08

  // First Speaker (Aman Gupta) - Massive time allocation
  const firstSpeakerActive = relativeScroll > initialHeight * 2.5 && relativeScroll < initialHeight * 5.5
  const firstSpeakerProgress = Math.min(Math.max((relativeScroll - initialHeight * 2.5) / (initialHeight * 3.0), 0), 1)

  // Second Speaker (Anand Kumar) - Huge gap and time
  const secondSpeakerStart = initialHeight * 5.5
  const secondSpeakerActive = relativeScroll > secondSpeakerStart && relativeScroll < initialHeight * 8.8
  const secondSpeakerProgress = Math.min(Math.max((relativeScroll - secondSpeakerStart) / (initialHeight * 3.3), 0), 1)

  // Transition between speakers - Large buffer
  const transitionStart = initialHeight * 5.0
  const transitionProgress = Math.min(Math.max((relativeScroll - transitionStart) / (initialHeight * 1.2), 0), 1)

  const firstImageScale = 0.4 + firstSpeakerProgress * 1.0 * (1 - transitionProgress)
  const firstImageOpacity = Math.min(firstSpeakerProgress * 1.2, 1) * (1 - transitionProgress)

  const secondImageScale = 0.3 + secondSpeakerProgress * 1.1
  const secondImageOpacity = Math.min(secondSpeakerProgress * 1.2, 1) * transitionProgress

  const getTextAnimationStyle = (progress, index, totalItems, isExiting = false) => {
    const textDelay = 0.3
    const textProgress = Math.max((progress - textDelay) / (1 - textDelay), 0)
    const itemDelay = (index / totalItems) * 0.3
    const itemProgress = Math.max((textProgress - itemDelay) / 0.7, 0)

    let opacity = Math.min(itemProgress * 2, 1)
    let translateX = Math.max((1 - itemProgress) * 100, 0)
    let scale = 1

    if (isExiting) {
      const exitProgress = transitionProgress
      opacity *= 1 - exitProgress
      translateX += exitProgress * -200 
      scale = 1 - exitProgress * 0.5 
    }

    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale})`,
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    }
  }

  const getImageExitStyle = () => {
    const imageExitDelay = 0.3
    const delayedTransition = Math.max(transitionProgress - imageExitDelay, 0) / (1 - imageExitDelay)

    return {
      transform: `translateX(${delayedTransition * -100}vw) scale(${1 - delayedTransition * 0.3})`,
      transition: "transform 0.8s ease-out",
    }
  }

  const getSecondTextAnimationStyle = (index, totalItems) => {
    const textDelay = 0.3
    const adjustedProgress = secondSpeakerProgress * transitionProgress
    const textProgress = Math.max((adjustedProgress - textDelay) / (1 - textDelay), 0)
    const itemDelay = (index / totalItems) * 0.3
    const itemProgress = Math.max((textProgress - itemDelay) / 0.7, 0)

    return {
      opacity: Math.min(itemProgress * 2, 1),
      transform: `translateX(${Math.max((1 - itemProgress) * -100, 0)}px)`,
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    }
  }

  if (!isMounted) return null

  return (
    <div ref={componentRef} className="relative h-[1000vh] bg-black overflow-hidden">
      {/* Fixed Background - No Heavy Effects */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(28,182,131,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(28,182,131,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(28,182,131,0.05) 0%, transparent 70%)
          `,
          backgroundSize: 'cover, cover, cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Fixed Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-300/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        />
      </div>
      
      {/* Fixed Three.js Canvas */}
      <div ref={mountRef} className="fixed inset-0 pointer-events-none" />
      
      {/* Fixed Content Container - GSAP Pin Style */}
      <div className="fixed inset-0">
        <div className="relative h-full w-full">
        {featuredTextVisible && featuredTextOpacity > 0 && (
          <div 
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: featuredTextOpacity,
              transition: "opacity 0.8s ease-out",
            }}
          >
            <div
              className="text-center"
              style={{
                transform: `scale(${featuredTextScale}) translateZ(0)`,
                transition: "transform 0.6s ease-out",
                willChange: "transform",
              }}
            >
              <h1
                className="text-8xl md:text-9xl font-bold tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  fontFamily: "outfit",
                  letterSpacing: "0.1em",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                }}
              >
                FEATURED
              </h1>
              <h2
                className="text-6xl md:text-7xl font-bold tracking-wider mt-2"
                style={{
                  background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  fontFamily: "outfit",
                  letterSpacing: "0.1em",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                }}
              >
                SPEAKERS
              </h2>
            </div>
          </div>
        )}

        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            opacity: firstSpeakerActive ? 1 : 0,
            pointerEvents: firstSpeakerActive ? "auto" : "none",
            transition: "opacity 0.6s ease-out",
          }}
        >
          <div className="container mx-auto px-8 flex items-center h-full relative">
            <div className="w-3/5 h-full flex items-center justify-center pr-16">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "min(90vw, 1000px)",
                  height: "min(85vh, 1100px)",
                  opacity: firstImageOpacity,
                  transform: `scale(${firstImageScale}) translateZ(0)`,
                  filter: `contrast(${1.1 + firstSpeakerProgress * 0.1}) brightness(${1.05 + firstSpeakerProgress * 0.05})`,
                  willChange: "transform",
                  borderRadius: "15px",
                  boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(28,182,131,${firstImageOpacity * 0.2})`,
                  transition: "transform 0.3s ease-out",
                  ...getImageExitStyle(),
                }}
              >
                <img src="/amanGuptaS.jpg" alt="Aman Gupta" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="w-2/5 pl-16">
              <div className="space-y-8">
                <div style={getTextAnimationStyle(firstSpeakerProgress, 0, 6, true)}>
                  <h3
                    className="text-3xl font-light tracking-wider mb-2"
                    style={{
                      fontFamily: "outfit",
                      background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                      letterSpacing: 0,
                    }}
                  >
                    Aman
                  </h3>
                  <h3
                    className="text-8xl font-bold tracking-wider"
                    style={{
                      fontFamily: "outfit",
                      background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                      fontWeight: 1100,
                      letterSpacing: 0,
                    }}
                  >
                    Gupta
                  </h3>
                </div>

                <div style={getTextAnimationStyle(firstSpeakerProgress, 1, 6, true)}>
                  <p
                    className="text-sm tracking-widest italic white font-[100]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    "Visionary entrepreneur steering India's sound revolution."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            opacity: secondSpeakerActive ? 1 : 0,
            pointerEvents: secondSpeakerActive ? "auto" : "none",
            transition: "opacity 0.6s ease-out",
          }}
        >
          <div className="container mx-auto px-8 flex items-center h-full relative">
            <div className="w-2/5 pr-16">
              <div className="space-y-8">
                <div style={getSecondTextAnimationStyle(0, 6)}>
                  <h3
                    className="text-3xl font-light tracking-wider mb-2"
                    style={{
                      fontFamily: "outfit",
                      background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                      letterSpacing: 0,
                    }}
                  >
                    Anand
                  </h3>
                  <h3
                    className="text-8xl font-bold tracking-wider"
                    style={{
                      fontFamily: "outfit",
                      background: "linear-gradient(135deg, #e5e7eb, #9ca3af, #d1d5db, #6b7280, #e5e7eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))",
                      fontWeight: 1100,
                      letterSpacing: 0,
                    }}
                  >
                    Kumar
                  </h3>
                </div>

                <div style={getSecondTextAnimationStyle(1, 6)}>
                  <p
                    className="text-sm tracking-widest italic white font-[100]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    "Architect of Super 30 — empowering brilliance against all odds."
                  </p>
                </div>
              </div>
            </div>

            <div className="w-3/5 h-full flex items-center justify-center pl-16">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "min(90vw, 900px)",
                  height: "min(85vh, 1000px)",
                  opacity: secondImageOpacity,
                  transform: `scale(${secondImageScale}) translateZ(0)`,
                  filter: `contrast(${1.1 + secondSpeakerProgress * 0.1}) brightness(${1.05 + secondSpeakerProgress * 0.05})`,
                  willChange: "transform",
                  borderRadius: "15px",
                  boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(28,182,131,${secondImageOpacity * 0.2})`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img src="/ANAND.png" alt="Anand Kumar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedSpeakerReveal