"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function EventTabs() {
  const tabsData = [
    {
      title: "Cultural Night",
      value: "cultural",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 text-white bg-gradient-to-br from-[#0a0f0d]/95 via-[#0a0f0d]/90 to-[#000000]/95 backdrop-blur-xl border border-[#1cb683]/40 shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb683]/20 via-[#1cb683]/10 to-[#1cb683]/20 rounded-xl sm:rounded-2xl blur-xl"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(rgba(28,182,131,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(28,182,131,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>

          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#0a0f0d]/80 to-[#0a0f0d] z-0 opacity-30"></div>
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/live-music-concert-stage-background_800563-6888.jpg?w=740')] bg-cover bg-center mix-blend-overlay opacity-100 z-0"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 2 === 0 ? "w-2 h-2 bg-[#1cb683]/40" : "w-1.5 h-1.5 bg-[#1cb683]/20"
                }`}
                animate={{
                  y: [0, -80, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 4) * 15}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-4 sm:space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex-1 space-y-3 sm:space-y-4">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1cb683] via-[#1cb683] to-white bg-clip-text text-transparent leading-tight drop-shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Cultural Night
                </motion.h2>
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#e5e7eb] leading-relaxed drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Join us for an amazing evening of cultural performances celebrating diversity and talent!
                </motion.h3>
              </div>
              <motion.div
                className="w-full sm:w-72 md:w-80 h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#1cb683]/60 shadow-2xl relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb683]/30 to-[#1cb683]/20 rounded-lg sm:rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-white font-medium text-sm">Traditional Dance Performance</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
              <motion.div
                className="space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gradient-to-r from-[#1cb683]/10 to-transparent rounded-lg sm:rounded-xl backdrop-blur-md border border-[#1cb683]/30 shadow-lg hover:shadow-[#1cb683]/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-[#1cb683] font-semibold text-base sm:text-lg mb-2 sm:mb-3 drop-shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1cb683] rounded-full"></span>
                  Performances
                </h4>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Traditional Dance Performances
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Live Music & Singing
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Art Exhibitions
                </p>
              </motion.div>
              <motion.div
                className="space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gradient-to-l from-[#1cb683]/10 to-transparent rounded-lg sm:rounded-xl backdrop-blur-md border border-[#1cb683]/30 shadow-lg hover:shadow-[#1cb683]/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-[#1cb683] font-semibold text-base sm:text-lg mb-2 sm:mb-3 drop-shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1cb683] rounded-full"></span>
                  Activities
                </h4>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Poetry Recitations
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Drama & Theater
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Cultural Competitions
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#0a0f0d]/50 via-[#1cb683]/10 to-[#0a0f0d]/50 rounded-lg sm:rounded-xl backdrop-blur-lg border border-[#1cb683]/30 shadow-2xl"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">📅</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Date:</span> Saturday, March 15th
                    </span>
                  </p>
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">⏰</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Time:</span> 6:00 PM - 10:00 PM
                    </span>
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">📍</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Location:</span> Main Auditorium
                    </span>
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1cb683] to-[#1cb683] bg-clip-text text-transparent">
                    ✨ FREE ENTRY ✨
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Comedy Night",
      value: "comedy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 text-white bg-gradient-to-br from-[#0a0f0d]/95 via-[#0a0f0d]/90 to-[#000000]/95 backdrop-blur-xl border border-[#1cb683]/40 shadow-2xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb683]/20 via-[#1cb683]/10 to-[#1cb683]/20 rounded-xl sm:rounded-2xl blur-xl"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(rgba(28,182,131,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(28,182,131,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
          </div>

          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#0a0f0d]/80 to-[#0a0f0d] z-0 opacity-30"></div>
            <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/photo-music-stage_931878-23981.jpg')] bg-cover bg-center mix-blend-overlay opacity-100 z-0"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 2 === 0 ? "w-2 h-2 bg-[#1cb683]/40" : "w-1.5 h-1.5 bg-[#1cb683]/20"
                }`}
                animate={{
                  y: [0, 80, 0],
                  x: [0, Math.cos(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
                style={{
                  right: `${15 + i * 12}%`,
                  top: `${20 + (i % 4) * 15}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-4 sm:space-y-6">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex-1 space-y-3 sm:space-y-4">
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1cb683] via-[#1cb683] to-white bg-clip-text text-transparent leading-tight drop-shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Comedy Night
                </motion.h2>
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#e5e7eb] leading-relaxed drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Get ready to laugh until your sides hurt with our hilarious lineup!
                </motion.h3>
              </div>
              <motion.div
                className="w-full sm:w-72 md:w-80 h-40 sm:h-48 rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#1cb683]/60 shadow-2xl relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb683]/30 to-[#1cb683]/20 rounded-lg sm:rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/live-music-concert-stage-background_800563-6888.jpg?w=740')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-white font-medium text-sm">Stand-up Comedy</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
              <motion.div
                className="space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gradient-to-r from-[#1cb683]/10 to-transparent rounded-lg sm:rounded-xl backdrop-blur-md border border-[#1cb683]/30 shadow-lg hover:shadow-[#1cb683]/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-[#1cb683] font-semibold text-base sm:text-lg mb-2 sm:mb-3 drop-shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1cb683] rounded-full"></span>
                  Comedy Shows
                </h4>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Stand-up Comedy
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Improv Performances
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Comedy Skits
                </p>
              </motion.div>
              <motion.div
                className="space-y-3 sm:space-y-4 p-3 sm:p-4 bg-gradient-to-l from-[#1cb683]/10 to-transparent rounded-lg sm:rounded-xl backdrop-blur-md border border-[#1cb683]/30 shadow-lg hover:shadow-[#1cb683]/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-[#1cb683] font-semibold text-base sm:text-lg mb-2 sm:mb-3 drop-shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#1cb683] rounded-full"></span>
                  Interactive Fun
                </h4>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Open Mic Sessions
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Comedy Competition
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-[#e5e7eb]">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50 flex-shrink-0"></span>
                  Interactive Games
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#0a0f0d]/50 via-[#1cb683]/10 to-[#0a0f0d]/50 rounded-lg sm:rounded-xl backdrop-blur-lg border border-[#1cb683]/30 shadow-2xl"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base md:text-lg">
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">📅</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Date:</span> Friday, March 22nd
                    </span>
                  </p>
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">⏰</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Time:</span> 7:00 PM - 10:00 PM
                    </span>
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#1cb683] font-bold text-lg sm:text-xl drop-shadow-lg">📍</span>
                    <span className="text-[#e5e7eb] text-xs sm:text-sm md:text-base">
                      <span className="text-[#1cb683] font-semibold">Location:</span> Student Center Hall
                    </span>
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1cb683] to-[#1cb683] bg-clip-text text-transparent">
                    ✨ FREE ENTRY ✨
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
  ]

  const [active, setActive] = useState(tabsData[0])
  const [tabs, setTabs] = useState(tabsData)
  const [direction, setDirection] = useState(0)

  const moveSelectedTabToTop = (idx) => {
    const currentIndex = tabsData.findIndex((tab) => tab.value === active.value)
    setDirection(idx > currentIndex ? 1 : -1)

    const newTabs = [...tabsData]
    const selectedTab = newTabs.splice(idx, 1)
    newTabs.unshift(selectedTab[0])
    setTabs(newTabs)
    setActive(newTabs[0])
  }

  const [hovering, setHovering] = useState(false)

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
        {tabsData.map((tab, idx) => (
          <motion.button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-2 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-lg border border-[#1cb683]/30 hover:scale-105 transform min-h-[48px] touch-manipulation"
            style={{
              transformStyle: "preserve-3d",
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-[#1cb683]/30 to-[#1cb683]/20 backdrop-blur-lg rounded-full border border-[#1cb683]/50 shadow-lg"
              />
            )}
            <span
              className={cn(
                "relative block transition-colors duration-300",
                active.value === tab.value
                  ? "bg-gradient-to-r from-[#1cb683] to-[#1cb683] bg-clip-text text-transparent font-bold"
                  : "text-[#e5e7eb]/70 hover:text-[#e5e7eb]",
              )}
            >
              {tab.title}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="relative w-full h-[600px] sm:h-[650px] md:h-[600px] overflow-hidden">
        <FadeInDiv tabs={tabs} active={active} hovering={hovering} direction={direction} />
      </div>
    </div>
  )
}

const FadeInDiv = ({ tabs, hovering, direction, className }) => {
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={tabs[0].value}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 40 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            {tabs[0].content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {tabs.slice(1).map((tab, idx) => (
        <motion.div
          key={`bg-${tab.value}`}
          style={{
            scale: 1 - (idx + 1) * 0.05,
            top: hovering ? (idx + 1) * -15 : 0,
            zIndex: -(idx + 1),
            opacity: idx < 2 ? 1 - (idx + 1) * 0.3 : 0,
          }}
          animate={{
            scale: hovering ? 1 - (idx + 1) * 0.03 : 1 - (idx + 1) * 0.05,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  )
}