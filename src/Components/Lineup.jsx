"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import CurtainSection from "./Community"
import SpeakerCard from "./Speaker"

const LineupSection = () => {
  const [currentSection, setCurrentSection] = useState(-1)

  // Simple scroll handling - slower for better animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      // Slightly slower: every 120vh is one section for smoother transitions
      const section = Math.floor(scrollY / (windowHeight * 1.2)) - 1
      
      if (section >= -1 && section <= 4) {
        setCurrentSection(section)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Speaker data
  const speakers = [
    {
      id: 1,
      name: "Aman Gupta",
      position: "CMO & cofounder boAt",
      image: "/amanGuptaS.jpg",
      social: {
        twitter: "https://x.com/DubeyVaish64217?t=IT7Qaex7jjuhhK-iPHOl7A&s=09",
        linkedin: "https://www.linkedin.com/in/vaishnavi-dubey-aa6350288",
        instagram: "https://www.instagram.com/vaishnavidubey_9?igsh=MTRsY3hqZmgwcm0wNA==",
      },
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      position: "Tech Innovation Director",
      image: "/background.jpg",
      social: {
        twitter: "https://x.com/DubeyVaish64217?t=IT7Qaex7jjuhhK-iPHOl7A&s=09",
        linkedin: "https://www.linkedin.com/in/vaishnavi-dubey-aa6350288",
        instagram: "https://www.instagram.com/vaishnavidubey_9?igsh=MTRsY3hqZmgwcm0wNA==",
      },
    },
    {
      id: 3,
      name: "Vaishnavi Dubey",
      position: "Web Developer",
      image: "/background.jpg",
      social: {
        twitter: "https://x.com/DubeyVaish64217?t=IT7Qaex7jjuhhK-iPHOl7A&s=09",
        linkedin: "https://www.linkedin.com/in/vaishnavi-dubey-aa6350288",
        instagram: "https://www.instagram.com/vaishnavidubey_9?igsh=MTRsY3hqZmgwcm0wNA==",
      },
    },
    {
      id: 4,
      name: "Mike Chen",
      position: "Startup Founder",
      image: "/background.jpg",
      social: {
        twitter: "https://x.com/DubeyVaish64217?t=IT7Qaex7jjuhhK-iPHOl7A&s=09",
        linkedin: "https://www.linkedin.com/in/vaishnavi-dubey-aa6350288",
        instagram: "https://www.instagram.com/vaishnavidubey_9?igsh=MTRsY3hqZmgwcm0wNA==",
      },
    },
  ]

  return (
    <div style={{ height: '720vh' }} className="relative bg-gradient-to-br from-[#1a1f35] via-[#20283d] to-[#1a1f35] overflow-hidden">
      
      {/* Global Floating Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        className="fixed top-10 right-10 w-3 h-3 bg-[#1cb683] rounded-full opacity-40 z-20"
        style={{
          boxShadow: '0 0 10px #1cb683, 0 0 20px #1cb683aa'
        }}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, delay: 5 }}
        className="fixed bottom-20 left-20 w-2 h-2 bg-emerald-400 rounded-full opacity-50 z-20"
        style={{
          boxShadow: '0 0 8px #34d399, 0 0 16px #34d39999'
        }}
      />
      <motion.div
        animate={{
          y: [0, -100, 0],
          rotate: [0, -360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, delay: 10 }}
        className="fixed top-1/2 left-1/2 w-4 h-4 bg-teal-300 rounded-full opacity-30 z-20"
        style={{
          boxShadow: '0 0 12px #5eead4, 0 0 24px #5eead499'
        }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          animate={{
            x: [Math.random() * 100, Math.random() * window.innerWidth, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * window.innerHeight, Math.random() * 100],
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
            ease: "linear"
          }}
          className="fixed w-1 h-1 bg-gradient-to-r from-[#1cb683] to-emerald-400 rounded-full z-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 6px currentColor'
          }}
        />
      ))}
      
      {/* Debug */}
      <div className="fixed top-4 left-4 z-50 text-white bg-black/70 p-3 rounded">
        Section: {currentSection}
      </div>

      {/* Curtain */}
      <CurtainSection isOpen={currentSection >= 0} />

      {/* Section 0: Intro */}
      {currentSection === 0 && (
        <div className="fixed inset-0 z-30 bg-gradient-to-br from-[#20283d] via-[#1a1f35] to-[#20283d]">
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-8">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] bg-clip-text text-transparent">
                Meet the Minds Behind the Magic
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Meet our incredible lineup of industry leaders, innovators, and visionaries
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Section 1: Speakers Set 1 - Slide from Left */}
      {currentSection === 1 && (
        <motion.div 
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-30 bg-gradient-to-br from-[#20283d] via-[#1a1f35] to-[#20283d] overflow-hidden"
        >
          {/* Interactive Background Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 right-20 w-40 h-40 bg-[#1cb683] opacity-10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-r from-[#1cb683] to-emerald-400 opacity-15 rounded-lg blur-xl"
          />
          <motion.div
            animate={{
              x: [-40, 40, -40],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/2 left-10 w-28 h-28 bg-emerald-300 opacity-20 rounded-full blur-lg"
          />
          
          <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] bg-clip-text text-transparent"
            >
              The Powerhouse Speakers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="transform-gpu"
                  style={{ minWidth: '300px' }}
                >
                  <SpeakerCard speaker={speaker} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Section 2: Speakers Set 2 - Slide from Right */}
      {currentSection === 2 && (
        <motion.div 
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-30 bg-gradient-to-br from-[#20283d] via-[#1a1f35] to-[#20283d] overflow-hidden"
        >
          {/* Interactive Background Elements */}
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.4, 1],
              y: [-20, 20, -20],
            }}
            transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-32 left-16 w-36 h-36 bg-gradient-to-br from-emerald-400 to-[#1cb683] opacity-12 rounded-lg blur-2xl"
          />
          <motion.div
            animate={{
              x: [40, -40, 40],
              rotate: [0, -180, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-24 right-32 w-44 h-44 bg-[#1cb683] opacity-8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [30, -30, 30],
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/2 right-10 w-32 h-32 bg-emerald-300 opacity-25 rounded-lg blur-lg rotate-45"
          />
          
          <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] bg-clip-text text-transparent"
            >
              Pioneers of the Industry
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id + 10}
                  initial={{ opacity: 0, x: 50, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="transform-gpu"
                  style={{ minWidth: '300px' }}
                >
                  <SpeakerCard speaker={{...speaker, id: speaker.id + 10}} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Section 3: Speakers Set 3 - Slide from Top */}
      {currentSection === 3 && (
        <motion.div 
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-30 bg-gradient-to-br from-[#20283d] via-[#1a1f35] to-[#20283d] overflow-hidden"
        >
          {/* Interactive Background Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.6, 1],
              x: [-30, 30, -30],
              y: [-20, 20, -20],
            }}
            transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-16 left-1/4 w-48 h-48 bg-gradient-to-br from-[#1cb683] to-emerald-300 opacity-8 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [-180, 180, -180],
              scale: [1, 1.3, 1],
              y: [40, -40, 40],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-20 right-1/4 w-40 h-40 bg-emerald-400 opacity-15 rounded-lg blur-2xl rotate-45"
          />
          <motion.div
            animate={{
              x: [-50, 50, -50],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/3 right-16 w-36 h-36 bg-[#1cb683] opacity-20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-25, 25, -25],
              rotate: [0, 120, 240, 360],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-1/3 left-16 w-28 h-28 bg-gradient-to-r from-emerald-300 to-[#1cb683] opacity-25 rounded-lg blur-lg"
          />
          
          <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] bg-clip-text text-transparent"
            >
              Technology Trailblazers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id + 20}
                  initial={{ opacity: 0, y: -80, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.8 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="transform-gpu"
                  style={{ minWidth: '300px' }}
                >
                  <SpeakerCard speaker={{...speaker, id: speaker.id + 20}} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Section 4: Speakers Set 4 - Enhanced with Shooting Stars */}
      {currentSection === 4 && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-30 bg-gradient-to-br from-[#20283d] via-[#1a1f35] to-[#20283d] overflow-hidden"
        >
          {/* Shooting Stars */}
          <motion.div
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [100, 50],
            }}
            transition={{ 
              duration: 3, 
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-[#1cb683] rounded-full"
            style={{
              boxShadow: '0 0 6px 2px #1cb683, 0 0 12px 4px #1cb683aa'
            }}
          />
          <motion.div
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [200, 150],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              ease: "linear",
              delay: 1
            }}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
            style={{
              boxShadow: '0 0 6px 2px #34d399, 0 0 12px 4px #34d39999'
            }}
          />
          <motion.div
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [300, 250],
            }}
            transition={{ 
              duration: 2.8, 
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
              ease: "linear",
              delay: 2
            }}
            className="absolute w-1 h-1 bg-teal-300 rounded-full"
            style={{
              boxShadow: '0 0 6px 2px #5eead4, 0 0 12px 4px #5eead499'
            }}
          />

          {/* Floating Cool Icons */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 left-16 text-[#1cb683] opacity-30"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{
              x: [30, -30, 30],
              rotate: [0, -180, -360],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-32 right-20 text-emerald-400 opacity-25"
          >
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </motion.div>

          <motion.div
            animate={{
              y: [40, -40, 40],
              x: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-32 left-1/4 text-[#1cb683] opacity-20"
          >
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-8zm2-7v2h4V4h2a1 1 0 000-2h-8a1 1 0 000 2h2z"/>
            </svg>
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-20 right-1/3 text-teal-300 opacity-30"
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.39 7.21h7.6l-6.15 4.47 2.35 7.21L12 16.42l-6.19 4.47 2.35-7.21-6.15-4.47h7.6L12 2z"/>
            </svg>
          </motion.div>

          {/* Interactive Background Elements */}
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.8, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/4 left-1/3 w-52 h-52 bg-gradient-to-br from-[#1cb683] to-emerald-300 opacity-10 rounded-full blur-3xl"
          />
          
          <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] bg-clip-text text-transparent"
            >
              Visionary Leaders
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id + 30}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="transform-gpu"
                  style={{ minWidth: '300px' }}
                >
                  <SpeakerCard speaker={{...speaker, id: speaker.id + 30}} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  )
}

export default LineupSection