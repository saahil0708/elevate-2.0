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

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      setInitialHeight(window.innerHeight)
    }

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

    const animate = () => {
      requestAnimationFrame(animate)
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
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate when this component comes into view (after Hero + CombinedAbout)
  // Assuming Hero is ~100vh and CombinedAbout is ~100vh, adjust as needed  
  const componentOffset = typeof window !== 'undefined' ? window.innerHeight * 2 : 0
  const componentScrollY = Math.max(scrollY - componentOffset, 0)

  const featuredTextVisible = true
  const featuredTextOpacity =
    componentScrollY < initialHeight * 0.5
      ? Math.min(componentScrollY / (initialHeight * 0.3), 1)
      : componentScrollY < initialHeight * 1.0
        ? 1
        : Math.max(1 - (componentScrollY - initialHeight * 1.0) / (initialHeight * 0.3), 0)

  const featuredTextScale = 1 + Math.min(componentScrollY / (initialHeight * 8.0), 0.2)

  // Aman Gupta shows first and stays visible longer
  const firstSpeakerActive = componentScrollY >= 0 && componentScrollY < initialHeight * 1.8
  const firstSpeakerProgress = firstSpeakerActive
    ? Math.min(Math.max(componentScrollY / (initialHeight * 0.4), 0), 1)
    : componentScrollY >= initialHeight * 1.8 ? 1 : 0

  // Anand Kumar appears later
  const secondSpeakerActive = componentScrollY > initialHeight * 1.2
  const secondSpeakerProgress = secondSpeakerActive
    ? Math.min(Math.max((componentScrollY - initialHeight * 1.2) / (initialHeight * 0.6), 0), 1)
    : 0

  // Transition timing
  const transitionProgress =
    componentScrollY > initialHeight * 1.5 ? Math.min((componentScrollY - initialHeight * 1.5) / (initialHeight * 0.5), 1) : 0

  // Image calculations
  const firstImageScale = 0.4 + firstSpeakerProgress * 0.6
  const firstImageOpacity = firstSpeakerProgress * Math.max(1 - transitionProgress * 2, 0)

  const secondImageScale = 0.4 + secondSpeakerProgress * 0.6
  const secondImageOpacity = secondSpeakerProgress * Math.min(transitionProgress * 2, 1)

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
      opacity *= Math.max(1 - exitProgress * 1.5, 0)
      translateX += exitProgress * -200
      scale = Math.max(1 - exitProgress * 0.5, 0.5)
    }

    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale})`,
      transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    }
  }

  const getImageExitStyle = (isFirst = true) => {
    if (!isFirst) return {}
    
    const imageExitDelay = 0.2
    const delayedTransition = Math.max(transitionProgress - imageExitDelay, 0) / (1 - imageExitDelay)

    return {
      transform: `translateX(${delayedTransition * -100}vw) scale(${Math.max(1 - delayedTransition * 0.3, 0.7)})`,
      transition: "transform 1s ease-out",
    }
  }

  const getSecondTextAnimationStyle = (index, totalItems) => {
    const textDelay = 0.2
    const adjustedProgress = secondSpeakerProgress * Math.min(transitionProgress * 2, 1)
    const textProgress = Math.max((adjustedProgress - textDelay) / (1 - textDelay), 0)
    const itemDelay = (index / totalItems) * 0.2
    const itemProgress = Math.max((textProgress - itemDelay) / 0.8, 0)

    return {
      opacity: Math.min(itemProgress * 2, 1),
      transform: `translateX(${Math.max((1 - itemProgress) * -100, 0)}px) scale(${0.8 + itemProgress * 0.2})`,
      transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
    }
  }

  const getSecondImageEnterStyle = () => {
    const imageEnterDelay = 0.3
    const delayedTransition = Math.max(transitionProgress - imageEnterDelay, 0) / (1 - imageEnterDelay)

    return {
      transform: `translateX(${Math.max((1 - delayedTransition) * 100, 0)}vw) scale(${0.7 + delayedTransition * 0.3})`,
      transition: "transform 1s ease-out",
    }
  }

  if (!isMounted) return null

  return (
    <div className="relative h-auto">
      {/* Optimized Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(28,182,131,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(28,182,131,0.08) 0%, transparent 50%)
          `,
          backgroundSize: "cover, cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      />
      <div ref={mountRef} className="absolute inset-0 z-10 pointer-events-none" />
      <div className="relative z-20">
        {featuredTextVisible && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
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

        {/* Aman Gupta - First Speaker */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: firstSpeakerActive ? Math.max(1 - transitionProgress, 0) : 0,
            pointerEvents: firstSpeakerActive && transitionProgress < 0.8 ? "auto" : "none",
            transition: "opacity 0.8s ease-out",
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
                  transition: "opacity 0.8s ease-out, transform 0.3s ease-out",
                  ...getImageExitStyle(true),
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
                    className="text-sm tracking-widest italic text-white font-light"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    "Visionary entrepreneur steering India's sound revolution."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anand Kumar - Second Speaker */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: secondSpeakerActive ? Math.min(transitionProgress * 1.5, 1) : 0,
            pointerEvents: secondSpeakerActive && transitionProgress > 0.2 ? "auto" : "none",
            transition: "opacity 0.8s ease-out",
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
                    className="text-sm tracking-widest italic text-white font-light"
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
                  transition: "opacity 0.8s ease-out, transform 0.3s ease-out",
                  ...getSecondImageEnterStyle(),
                }}
              >
                <img src="/ANAND.png" alt="Anand Kumar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[300vh] pointer-events-none" />
      </div>
    </div>
  )
}

export default EnhancedSpeakerReveal