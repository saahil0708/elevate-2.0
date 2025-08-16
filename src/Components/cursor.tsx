"use client"

import React from "react"
import { useEffect, useState } from "react"

interface CursorPosition {
  x: number
  y: number
}

interface Particle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

export default function CursorEffect() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })

      // Create trailing particles
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: Math.random() * 0.5 + 0.5,
      }

      setParticles((prev) => [...prev.slice(-8), newParticle])
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("cursor-pointer")) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            opacity: particle.opacity - 0.1,
            scale: particle.scale * 0.95,
          }))
          .filter((particle) => particle.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className={`fixed w-6 h-6 rounded-full border-2 border-[#1cb683] transition-all duration-200 ease-out ${
          isHovering ? "scale-150 bg-[#1cb683]/20" : "scale-100"
        } ${isClicking ? "scale-75" : ""}`}
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
          boxShadow: isHovering ? "0 0 20px #1cb683, 0 0 40px #1cb683, 0 0 60px #1cb683" : "0 0 10px #1cb683",
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed w-2 h-2 bg-[#1cb683] rounded-full transition-all duration-100 ease-out"
        style={{
          left: cursorPosition.x - 4,
          top: cursorPosition.y - 4,
          transform: isClicking ? "scale(2)" : "scale(1)",
        }}
      />

      {/* Trailing particles */}
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-[#1cb683] rounded-full"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            boxShadow: `0 0 ${particle.opacity * 10}px #1cb683`,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}

      {/* Glow effect on hover */}
      {isHovering && (
        <div
          className="fixed w-20 h-20 rounded-full bg-[#1cb683]/10 animate-pulse"
          style={{
            left: cursorPosition.x - 40,
            top: cursorPosition.y - 40,
            background: `radial-gradient(circle, rgba(28, 182, 131, 0.2) 0%, rgba(28, 182, 131, 0.05) 50%, transparent 100%)`,
          }}
        />
      )}
    </div>
  )
}
