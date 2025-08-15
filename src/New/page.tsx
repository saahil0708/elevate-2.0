"use client"

import React from "react"
import EventTabs from "@/New/Cultural"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 p-8 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated neon orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#1cb683]/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 rounded-full bg-cyan-400/20 blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-[#1cb683]/15 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-purple-400/20 blur-lg"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#1cb683] rounded-full shadow-lg shadow-[#1cb683]/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(28, 182, 131, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28, 182, 131, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 shadow-2xl shadow-[#1cb683]/5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-2 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Upcoming
              </h1> */}
              <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-[#1cb683] to-cyan-300 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(28,182,131,0.5)]">
                Upcoming Events
              </h1>
            </motion.div>

            <motion.div
              className="relative mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="h-1.5 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent rounded-full mx-auto relative shadow-[0_0_20px_rgba(28,182,131,0.6)]"
                initial={{ width: 0, scaleX: 0 }}
                animate={{ width: "300px", scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1.5 bg-[#1cb683] rounded-full shadow-[0_0_30px_rgba(28,182,131,0.8)] blur-[1px]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "120px", opacity: 0.8 }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  ease: "easeOut",
                }}
              />
              {/* Additional glow layer */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-3 bg-[#1cb683]/30 rounded-full blur-md"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 0.4 }}
                transition={{
                  duration: 1.5,
                  delay: 1.0,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Discover extraordinary experiences and connect with your community through our curated selection of
              premium events
            </motion.p>
          </div>

          <motion.div
            className="backdrop-blur-sm bg-white/[0.01] border border-white/5 rounded-2xl p-6 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <EventTabs />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
