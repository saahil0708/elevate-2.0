"use client"
import { motion } from "framer-motion"

const CurtainSection = ({ isOpen }) => {
  return (
    <div 
      className="fixed inset-0 z-50"
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "-100%" : 0 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#20283d] flex items-center justify-center shadow-2xl border-r border-[#1cb683]/20"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="text-white text-center">
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-6xl mb-4 filter drop-shadow-lg"
          ></motion.div>
          <motion.h3
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold tracking-wider text-[#1cb683]"
          ></motion.h3>
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? "100%" : 0 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#20283d] flex items-center justify-center shadow-2xl border-l border-[#1cb683]/20"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="text-white text-center">
          <motion.div
            animate={{
              rotate: isOpen ? -180 : 0,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-6xl mb-4 filter drop-shadow-lg"
          ></motion.div>
          <motion.h3
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold tracking-wider text-[#1cb683]"
          ></motion.h3>
        </div>
      </motion.div>

      {/* Simple Curtain Rod */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[#1cb683] shadow-lg"></div>
      <div className="absolute top-4 left-0 w-full h-1 bg-[#1cb683]/60"></div>
    </div>
  )
}

export default CurtainSection