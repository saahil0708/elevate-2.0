"use client"

import React from "react"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  id: string
  title: string
  image: string | any
  category: string
  description: string
}

export default function IdeaJamSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects: Project[] = [
    {
      id: "01",
      title: "Strategy & Planning",
      image: 'https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoCr05WyAL9bA5fCoOuXd1wjKlz3tY8qhMUnrD',
      category: "Blueprint & Vision",
      description: "We work with you to define your vision, set clear objectives, and create a strategic roadmap for success."
    },
    {
      id: "02",
      title: "Design & Development",
      image: 'https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoAZNbVhQNqzFRTHvKjZQDXed6oGiaI5k8wbAm',
      category: "Build & Create",
      description: "Our team brings ideas to life with cutting-edge design and robust development methodologies."
    },
    {
      id: "03",
      title: "Launch & Growth",
      image: 'https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoMYi0z5A4Uw25N4fTzahjckFBGCIL87WbEDes',
      category: "Scale & Impact",
      description: "We ensure successful deployment and implement growth strategies to maximize your project's impact."
    },
    {
      id: "04",
      title: "Ongoing Support",
      image: 'https://67uzoom719.ufs.sh/f/YNNjoMX3eGAo2zPjbimYH1gV0osUNMIXYr2niz3mB7wCv4qx',
      category: "Sustain & Evolve",
      description: "Continuous improvement, maintenance, and evolution of your solution to keep it relevant and effective."
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [projects.length])

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index)
  }

  const supportsCSS3D = () => {
    if (typeof window === "undefined") return false
    const testElement = document.createElement("div")
    const transforms = ["transform", "WebkitTransform", "MozTransform", "msTransform"]

    for (const transform of transforms) {
      if (testElement.style[transform] !== undefined) {
        testElement.style[transform] = "translate3d(0,0,0)"
        if (testElement.style[transform] !== "") {
          return true
        }
      }
    }
    return false
  }

  const has3DSupport = supportsCSS3D()

  return (
    <section id="ideajam" className="relative min-h-screen  text-white py-12 md:py-20 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-8 md:mb-12 relative">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(12,83,82,0.5)]">
                Ideajam <span className="text-[#20A97B]"> 2025</span>
              </h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-[#20A97B] to-transparent mx-auto mb-6 md:mb-10"
            initial={{ width: 0 }}
            animate={{ width: isMobile ? "120px" : "200px" }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mx-auto leading-relaxed mb-4 md:mb-6 px-2">
            Where Bold Ideas Transform Into{" "}
            <span className="font-semibold text-[#20A97B]">Breakthrough Solutions</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Join the most innovative minds in technology, design, and entrepreneurship. A 48-hour intensive where
            creativity meets execution.
          </p>
        </div>

        <div className="mb-6 md:mb-8">
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] mb-4 md:mb-6">
            <div
              className="absolute inset-0 mx-auto w-[95%] sm:w-[90%] h-full rounded-2xl md:rounded-3xl border border-white/10 shadow-xl md:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                zIndex: 0,
              }}
            />

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                perspective: has3DSupport && !isMobile ? "2000px" : "none",
                perspectiveOrigin: "center center",
                zIndex: 10,
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {projects.map((project, index) => {
                  if (isMobile) {
                    // Mobile view - simple carousel with fade effect
                    return (
                      <div
                        key={project.id}
                        className={`absolute transition-all duration-500 ease-out cursor-pointer w-[280px] ${
                          index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <div 
                          className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200/30"
                          onMouseEnter={() => setHoveredCard(project.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <Image
                            src={typeof project.image === "string" ? project.image : project.image?.src || project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none" />
                          
                          {/* Hover overlay for mobile */}
                          <div className={`absolute inset-0 bg-black/70 flex items-center justify-center p-4 transition-opacity duration-300 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-white text-sm text-center">{project.description}</p>
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <div className="text-[#20A97B] font-bold text-base mb-1">Phase {project.id}</div>
                          <div className="text-white font-semibold text-sm mb-1">{project.title}</div>
                          <div className="text-gray-400 font-medium text-xs">{project.category}</div>
                        </div>
                      </div>
                    )
                  }

                  // Desktop view - 3D carousel
                  const totalCards = projects.length
                  const cardIndex = index
                  const centerIndex = (totalCards - 1) / 2
                  const offset = cardIndex - centerIndex

                  const horizontalSpacing = 280
                  const x = offset * horizontalSpacing
                  const z = Math.abs(offset) * -150
                  const rotateY = offset * 15

                  const scale = 1 - Math.abs(offset) * 0.15
                  const opacity = 1 - Math.abs(offset) * 0.2

                  const transformStyle = has3DSupport
                    ? `translate3d(${x}px, 0px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`
                    : `translateX(${x}px) scale(${scale})`

                  return (
                    <div
                      key={project.id}
                      className="absolute transition-all duration-700 ease-out cursor-pointer"
                      style={{
                        transform: transformStyle,
                        opacity: Math.abs(offset) > 2 ? 0 : opacity,
                        zIndex: 10 - Math.abs(offset),
                        transformStyle: has3DSupport ? "preserve-3d" : "flat",
                        WebkitTransformStyle: has3DSupport ? "preserve-3d" : "flat",
                        willChange: "transform, opacity",
                      }}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <div 
                        className="relative w-64 md:w-72 h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl bg-white border border-gray-200/30"
                        onMouseEnter={() => setHoveredCard(project.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Image
                          src={typeof project.image === "string" ? project.image : project.image?.src || project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 256px, 288px"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-white/20 pointer-events-none" />
                        
                        {/* Hover overlay for desktop */}
                        <div className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 transition-all duration-500 ${hoveredCard === project.id ? 'opacity-100' : 'opacity-0'}`}>
                          <h3 className="text-[#20A97B] font-bold text-lg mb-3">Phase {project.id}</h3>
                          <p className="text-white text-sm text-center leading-relaxed">{project.description}</p>
                          <button className="mt-4 px-4 py-2 bg-[#20A97B] text-white text-xs font-semibold rounded-full transition-all hover:bg-[#1a9369]">
                            Learn More
                          </button>
                        </div>
                        
                        <div
                          className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl pointer-events-none"
                          style={{ zIndex: -10 }}
                        />
                      </div>

                      <div className="mt-4 md:mt-6 text-center">
                        <div className="text-[#20A97B] font-bold text-base md:text-lg mb-1">Phase {project.id}</div>
                        <div className="text-white font-semibold text-sm md:text-base mb-1">{project.title}</div>
                        <div className="text-gray-400 font-medium text-xs md:text-sm">{project.category}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile dots indicator */}
          {isMobile && (
            <div className="flex justify-center gap-2 mb-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[#20A97B] w-4' : 'bg-gray-600'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="text-center mb-2 md:mb-4">
            <p className="text-gray-300 text-base md:text-lg mb-1 md:mb-2">Ready to transform your ideas?</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-[#20A97B] rounded-full"></div>
                <span>48 Hours</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-[#20A97B] rounded-full"></div>
                <span>Expert Mentors</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-[#20A97B] rounded-full"></div>
                <span>Real Prizes</span>
              </div>
            </div>
          </div>

          <a
            href="https://ideajam.vercel.app"
            target="_blank"
            rel="noopener noreferrer"

            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 sm:px-12 py-2 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 border border-emerald-500/30 inline-flex items-center group shadow-lg sm:shadow-xl cursor-pointer shadow-emerald-500/20"

          >
            <span>Know More</span>
            <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="text-gray-500 text-xs sm:text-sm">Limited spots available • Early bird pricing ends soon</p>
        </div>
      </div>
    </section>
  )
}