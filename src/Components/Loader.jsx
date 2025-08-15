"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { Cpu, Brain, Globe, Sparkles } from "lucide-react"

const EnhancedCleanLoading = () => {
  const [progress, setProgress] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showElevate, setShowElevate] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const loaderRef = useRef(null)
  const progressBarRef = useRef(null)
  const elevateRef = useRef(null)
  const detailsRef = useRef(null)
  const typewriterIntervalRef = useRef(null)

  const loadingTexts = [
    "Initializing quantum matrix...",
    "Loading neural pathways...",
    "Syncing dimensional cores...",
    "Activating holographic interface...",
    "Preparing for elevation...",
  ]

  // Status items with lucide icons
  const statusItems = [
    { name: "CORE", icon: Cpu, threshold: 25 },
    { name: "AI", icon: Brain, threshold: 50 },
    { name: "NET", icon: Globe, threshold: 75 },
    { name: "UI", icon: Sparkles, threshold: 100 },
  ]

  // Clean Typewriter Effect
  const typewriterEffect = useCallback(() => {
    const text = loadingTexts[currentTextIndex]

    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current)
    }

    setCurrentChar(0)
    setDisplayText("")

    typewriterIntervalRef.current = setInterval(() => {
      setCurrentChar((prevChar) => {
        const nextChar = prevChar + 1

        if (nextChar <= text.length) {
          setDisplayText(text.substring(0, nextChar))
          return nextChar
        } else {
          clearInterval(typewriterIntervalRef.current)
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length)
          }, 1200)
          return prevChar
        }
      })
    }, 50)
  }, [currentTextIndex, loadingTexts])

  // Progress Animation
  useEffect(() => {
    if (!hasMounted) return

    const progressTween = gsap.to(
      { value: 0 },
      {
        value: 100,
        duration: 5,
        ease: "power2.out",
        onUpdate: function () {
          const newProgress = Math.round(this.targets()[0].value)
          setProgress(newProgress)

          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, {
              width: `${newProgress}%`,
            })
          }
        },
        onComplete: () => {
          setTimeout(() => {
            setIsComplete(true)

            if (loaderRef.current) {
              gsap.to(loaderRef.current, {
                opacity: 0,
                scale: 0.9,
                y: -30,
                duration: 1,
                ease: "power2.in",
                onComplete: () => {
                  setShowElevate(true)
                },
              })
            }
          }, 800)
        },
      },
    )

    return () => {
      progressTween.kill()
    }
  }, [hasMounted])

  // Typewriter effect trigger
  useEffect(() => {
    if (hasMounted) {
      typewriterEffect()
    }

    return () => {
      if (typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current)
      }
    }
  }, [hasMounted, currentTextIndex, typewriterEffect])

  // Enhanced ELEVATE reveal animation
  useEffect(() => {
    if (showElevate && elevateRef.current) {
      // Main logo animation
      gsap.fromTo(
        elevateRef.current,
        {
          opacity: 0,
          scale: 0.5,
          y: 100,
          rotationX: -90,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          onComplete: () => {
            // Show details after logo animation
            setTimeout(() => {
              setShowDetails(true)
            }, 500)
          },
        },
      )

      // Continuous glow animation
      gsap.to(elevateRef.current, {
        filter: "drop-shadow(0 0 30px rgba(28,182,131,0.8)) drop-shadow(0 0 60px rgba(28,182,131,0.4))",
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      })
    }
  }, [showElevate])

  // Details animation
  useEffect(() => {
    if (showDetails && detailsRef.current) {
      const elements = detailsRef.current.children

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
      )
    }
  }, [showDetails])

  useEffect(() => {
    setHasMounted(true)

    return () => {
      if (typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current)
      }
    }
  }, [])

  if (!hasMounted) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cpath%20d%3D%22M0%200h60v60H0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22%20stroke%3D%22rgba(28,182,131,0.1)%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!showElevate && (
          <motion.div
            ref={loaderRef}
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/30 via-gray-900/20 to-slate-900/30 border border-emerald-500/30 rounded-2xl shadow-[0_0_40px_rgba(28,182,131,0.15)] p-12 w-full">
              {[
                "top-4 left-4 border-t-2 border-l-2",
                "top-4 right-4 border-t-2 border-r-2",
                "bottom-4 left-4 border-b-2 border-l-2",
                "bottom-4 right-4 border-b-2 border-r-2",
              ].map((classes, i) => (
                <div
                  key={i}
                  className={`absolute w-6 h-6 border-emerald-500/60 ${classes}`}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(28,182,131,0.4))",
                  }}
                />
              ))}

              <div className="h-16 mb-12 flex items-center justify-center">
                <p
                  className="text-2xl md:text-3xl lg:text-4xl text-emerald-400 font-semibold tracking-wide text-center"
                  style={{
                    textShadow: "0 0 15px rgba(28,182,131,0.6)",
                    minHeight: "1.2em",
                  }}
                >
                  {displayText}
                  <motion.span
                    className="inline-block w-0.5 h-8 ml-1 bg-emerald-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0 0 5px rgba(28,182,131,0.8))" }}
                  />
                </p>
              </div>

              <div className="w-full mb-16">
                <div className="flex justify-between text-lg md:text-xl text-emerald-300 font-medium mb-6">
                  <span>SYSTEM INITIALIZATION</span>
                  <span className="font-mono">{Math.round(progress)}%</span>
                </div>

                <div className="relative w-full h-3 bg-slate-800/50 backdrop-blur-sm rounded-full overflow-hidden border border-emerald-500/30">
                  <div
                    ref={progressBarRef}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-300"
                    style={{
                      width: "0%",
                      filter: "drop-shadow(0 0 10px rgba(28,182,131,0.5))",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Enhanced status indicators with lucide icons inside boxes */}
              <div className="grid grid-cols-4 gap-6 mb-12">
                {statusItems.map((item, i) => {
                  const isActive = progress >= item.threshold
                  const IconComponent = item.icon

                  return (
                    <div key={item.name} className="text-center">
                      <motion.div
                        className={`w-16 h-16 rounded-lg border-2 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 transition-all duration-500 relative overflow-hidden ${
                          isActive ? "border-emerald-500/80 bg-emerald-500/10" : "border-slate-600/40 bg-slate-800/20"
                        }`}
                        style={{
                          filter: isActive ? "drop-shadow(0 0 15px rgba(28,182,131,0.4))" : "none",
                        }}
                        animate={{
                          boxShadow: isActive
                            ? [
                                "0 0 20px rgba(28,182,131,0.3)",
                                "0 0 30px rgba(28,182,131,0.6)",
                                "0 0 20px rgba(28,182,131,0.3)",
                              ]
                            : "0 0 0px rgba(28,182,131,0)",
                        }}
                        transition={{
                          boxShadow: {
                            duration: 2,
                            repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Glowing background effect when active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-emerald-400/30 to-emerald-500/20 rounded-lg"
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        {/* Lucide Icon */}
                        <motion.div
                          className="relative z-10"
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            scale: {
                              duration: 1.5,
                              repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          <IconComponent
                            size={24}
                            className={`transition-all duration-500 ${
                              isActive ? "text-emerald-300" : "text-slate-500"
                            }`}
                            style={{
                              filter: isActive ? "drop-shadow(0 0 8px rgba(28,182,131,0.8))" : "none",
                            }}
                          />
                        </motion.div>

                        {/* Pulse effect when activating */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 border-2 border-emerald-400/50 rounded-lg"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeOut",
                            }}
                          />
                        )}
                      </motion.div>

                      <p
                        className={`text-sm font-medium tracking-wider transition-colors duration-500 ${
                          isActive ? "text-emerald-300" : "text-slate-500"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="text-center text-slate-300">
                <h2 className="text-2xl md:text-3xl mb-4 font-bold text-emerald-400">Experience Loading</h2>
                <p className="text-lg opacity-80">Preparing an immersive journey with cutting-edge technology...</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Enhanced ELEVATE reveal with details */}
        {showElevate && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-8">
            {/* Main ELEVATE logo */}
            <div ref={elevateRef} className="text-center mb-12" style={{ opacity: 0 }}>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-300 mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundSize: "200% 200%",
                  textShadow: "0 0 40px rgba(28,182,131,0.4)",
                }}
              >
                ELEVATE
              </motion.h1>

              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20"></div>
                <p className="text-3xl md:text-4xl lg:text-5xl text-slate-200 tracking-[0.3em] font-light">2025</p>
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-20"></div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnhancedCleanLoading
