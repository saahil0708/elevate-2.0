import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/Components/card'
import { cn } from '@/lib/utils'

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  glowIntensity?: 'low' | 'medium' | 'high'
}

export default function GlowingCard({ 
  children, 
  className, 
  glowIntensity = 'medium' 
}: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const glowClasses = {
    low: 'shadow-[0_0_20px_rgba(28,182,131,0.3)]',
    medium: 'shadow-[0_0_30px_rgba(28,182,131,0.4)]',
    high: 'shadow-[0_0_50px_rgba(28,182,131,0.6)]'
  }

  // Generate random tilt for each card
  const [tilt] = useState(() => ({
    rotateX: Math.random() * 4 - 2, // -2 to 2 degrees
    rotateY: Math.random() * 6 - 3, // -3 to 3 degrees
    rotateZ: Math.random() * 3 - 1.5, // -1.5 to 1.5 degrees
  }))

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) rotateZ(${tilt.rotateZ}deg)`,
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ 
        rotateX: tilt.rotateX * 0.5,
        rotateY: tilt.rotateY * 0.5,
        rotateZ: tilt.rotateZ * 0.5,
        y: -8
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div 
        className={cn(
          "absolute -inset-1 rounded-2xl blur-xl transition-all duration-500",
          isHovered ? glowClasses[glowIntensity] : "shadow-none",
          "bg-gradient-to-r from-[#1cb683]/20 via-[#00ff94]/20 to-[#1cb683]/20"
        )}
      />
      <Card className={cn(
        "relative bg-black/40 backdrop-blur-xl border-white/10",
        "hover:border-[#1cb683]/50 transition-all duration-500",
        className
      )}>
        {children}
      </Card>
    </motion.div>
  )
}