"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/Components/button"
import { Card, CardContent } from "@/Components/card"
import { Badge } from "@/Components/badge"
import { Users, Award, Star, Zap, Globe, Mic, Code, Music, Target, ArrowRight, Sparkles, Trophy, Rocket } from "lucide-react"
import ParticleBackground from "@/Components/particle"
import ScrollProgressBar from "@/Components/progressbar"
import GlowingCard from "@/Components/glow"
import FloatingElements from "@/Components/float"
import { cn } from "@/lib/utils"
import { ElevateBentoDemo } from "@/New/BentoDemo"

export default function EnhancedElevateAbout() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { number: 1500, suffix: "+", label: "Attendees in 2024", icon: Users },
    { number: 15, suffix: "+", label: "Distinguished Speakers", icon: Mic },
    { number: 3, suffix: "", label: "Immersive Days", icon: Target },
    { number: 2025, suffix: "", label: "Next Edition", icon: Rocket },
  ]

  const highlights = [
    {
      icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Industry Visionaries",
      description: "Connect with renowned entrepreneurs and industry leaders who share their insights and experiences.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Hands-on Workshops",
      description: "Gain exposure to cutting-edge technologies and open-source communities through interactive sessions.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Music className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Cultural Nights",
      description: "Experience the vibrant campus culture through performances, celebrations, and interactive activities.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Global Trends",
      description: "Stay ahead with insights into global industry trends and emerging technologies.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen p-2 sm:p-4 md:p-6 lg:p-10 bg-black text-white overflow-hidden">
      <ScrollProgressBar />
      <ParticleBackground />
      <FloatingElements />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(28,182,131,0.15),rgba(28,182,131,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_80%,rgba(0,255,148,0.1),rgba(0,255,148,0))]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto text-center relative w-full"
            style={{ y, opacity }}
          >
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <Badge className="border-[#1cb683] text-[#1cb683] bg-[#1cb683]/10 backdrop-blur-sm text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 shadow-[0_0_30px_rgba(28,182,131,0.3)]">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                Welcome to the Future
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <span className="block bg-gradient-to-r from-white via-[#1cb683] via-[#00ff94] to-white bg-clip-text text-transparent animate-pulse">
                Inside ELEVATE
              </span>
              <motion.span 
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent font-light"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                2025
              </motion.span>
            </motion.h1>

            <motion.div
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#1cb683] via-[#00ff94] to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />

            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Our college's flagship three-day induction program, designed to welcome, inspire, 
              and empower the newest batch of students as they embark on their academic journey.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-[#1cb683] font-bold mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              More than an orientation — it's a launchpad for the future.
            </motion.p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 100, opacity: 0, rotateY: -90 }}
                  whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="transform hover:scale-105 transition-transform duration-300"
                  style={{ transform: `rotate(${[-2, -1, 1, 2][index]}deg)` }}
                >
                  <GlowingCard glowIntensity="high">
                    <CardContent className="p-4 sm:p-6 md:p-8 text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                      <div className="relative z-10">
                        <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#1cb683] mx-auto mb-2 sm:mb-3 md:mb-4" />
                        <motion.div 
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1cb683] mb-1 sm:mb-2 drop-shadow-[0_0_20px_rgba(28,182,131,0.5)]"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5, type: "spring", bounce: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {stat.number}{stat.suffix}
                        </motion.div>
                        <div className="text-gray-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </GlowingCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section - BentoGrid */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 px-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                Born from a{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#1cb683] to-[#00ff94] bg-clip-text text-transparent">
                    Vision
                  </span>
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#1cb683]/20 to-[#00ff94]/20 blur-xl rounded-lg -z-10" />
                </span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Discover the revolutionary approach that's transforming student orientation and setting new standards in educational experiences
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden"
            >
              <ElevateBentoDemo />
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="mt-8 sm:mt-10 md:mt-12 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <GlowingCard glowIntensity="medium" className="max-w-6xl mx-auto p-2 sm:p-4 md:p-8">
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="absolute inset-0" />
                  <div className="relative z-10">
                    <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#1cb683]/30 bg-black/40 backdrop-blur-sm">
                      <blockquote className="text-center italic text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        "The start of college isn't just the beginning of classes — it's the genesis of shaping futures.
                        Elevate exists to ensure our students dream bigger, aim higher, and feel empowered from day one."
                      </blockquote>
                      <p className="text-center text-[#1cb683] font-bold mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
                        — Elevate Founding Team, 2024
                      </p>
                    </div>
                  </div>
                </CardContent>
              </GlowingCard>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1cb683]/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 px-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                What Makes{" "}
                <span className="bg-gradient-to-r from-[#1cb683] to-[#00ff94] bg-clip-text text-transparent">
                  Elevate
                </span>{" "}
                Extraordinary?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto px-2 sm:px-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                A revolutionary fusion of industry insights, hands-on learning, and cultural experiences
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {highlights.map((highlight, index) => (
                <motion.div 
                  className="bg-gradient-to-b from-black to-gray-900 rounded-xl sm:rounded-2xl"
                  key={index}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlowingCard className="h-full group cursor-pointer rounded-xl sm:rounded-2xl">
                    <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col relative overflow-hidden">
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        highlight.gradient
                      )} />
                      <div className="relative z-10">
                        <motion.div 
                          className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-black/30 to-gray-900/30 text-[#1cb683] rounded-full mb-4 sm:mb-6 md:mb-8 shadow-[0_0_30px_rgba(28,182,131,0.3)] backdrop-blur-sm"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {highlight.icon}
                        </motion.div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-white group-hover:text-[#1cb683] transition-colors duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-400 flex-grow text-sm sm:text-base md:text-lg leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </CardContent>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <Badge className="border-[#1cb683] text-[#1cb683] bg-[#1cb683]/10 backdrop-blur-sm text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 md:mb-12 shadow-[0_0_40px_rgba(28,182,131,0.4)]">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2 sm:mr-3" />
                The Future Awaits
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 px-2">
                <span className="bg-gradient-to-r from-[#1cb683] to-[#00ff94] bg-clip-text text-transparent">
                  Elevate 2025
                </span>{" "}
                <span className="text-white">Returns</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
                In 2025, Elevate returns with unprecedented ambition — featuring more visionary speakers, 
                cutting-edge experiences, and infinite opportunities to inspire the leaders, innovators, 
                and change-makers of tomorrow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
              {[
                { icon: Target, title: "Bigger Vision", description: "Expanding our reach and global impact", color: "from-purple-500 to-pink-500" },
                { icon: Users, title: "More Speakers", description: "World-class industry leaders and visionaries", color: "from-blue-500 to-cyan-500" },
                { icon: Zap, title: "Enhanced Experience", description: "Revolutionary formats and immersive activities", color: "from-orange-500 to-red-500" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0, rotateY: -90 }}
                  whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="sm:col-span-1 md:col-span-1"
                >
                  <GlowingCard glowIntensity="high" className="p-6 sm:p-8 md:p-10 group cursor-pointer h-full">
                    <CardContent className="p-0 text-center relative overflow-hidden h-full flex flex-col justify-center">
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                        item.color
                      )} />
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="mb-4 sm:mb-6"
                        >
                          <item.icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[#1cb683] mx-auto" />
                        </motion.div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#1cb683] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}