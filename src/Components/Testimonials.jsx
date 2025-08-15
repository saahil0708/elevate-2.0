"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const GlowingCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "/professional-woman-diverse.png",
      text: "This product has completely transformed our workflow. The team productivity increased by 40% within the first month.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "/professional-man.png",
      text: "Outstanding customer service and incredible attention to detail. I couldn't be happier with the results we've achieved.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "CEO",
      company: "StartupHub",
      avatar: "/professional-woman-smiling.png",
      text: "The best investment we've made for our business. The ROI has exceeded all our expectations by far.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Operations Lead",
      company: "GrowthCo",
      avatar: "/professional-man-glasses.png",
      text: "Seamless integration and powerful features. This solution has streamlined our entire process beautifully.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Design Director",
      company: "CreativeStudio",
      avatar: "/professional-asian-woman.png",
      text: "Intuitive interface and robust functionality. Our team adopted it immediately without any learning curve.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalCards = testimonials.length

  const goToPrevious = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalCards - 1))
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, totalCards])

  const goToNext = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prev) => (prev < totalCards - 1 ? prev + 1 : 0))
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating, totalCards])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#1cb683]" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const getCardStyle = (index) => {
    const isActive = index === currentIndex

    // Calculate position based on distance from current active card
    const distance = (index - currentIndex + totalCards) % totalCards
    let positionIndex

    // Map distance to visual position (0 = far left, 4 = far right)
    if (distance === 0)
      positionIndex = 2 // center
    else if (distance === 1)
      positionIndex = 3 // right
    else if (distance === 2)
      positionIndex = 4 // far right
    else if (distance === 3)
      positionIndex = 0 // far left
    else if (distance === 4) positionIndex = 1 // left

    // Card positions from left to right
    const positions = [
      { left: "8%", scale: 0.6, opacity: 0.3, blur: 2 }, // Far left
      { left: "25%", scale: 0.75, opacity: 0.5, blur: 1 }, // Left
      { left: "50%", scale: 1, opacity: 1, blur: 0 }, // Center (active)
      { left: "75%", scale: 0.75, opacity: 0.5, blur: 1 }, // Right
      { left: "92%", scale: 0.6, opacity: 0.3, blur: 2 }, // Far right
    ]

    const pos = positions[positionIndex]

    return {
      position: "absolute",
      left: pos.left,
      top: "60%",
      transform: `translate(-50%, -50%) scale(${pos.scale})`,
      width: "320px",
      height: "420px",
      // backgroundColor: "#0f1419",
      border: isActive ? "2px solid #1cb683" : "1px solid #2a3441",
      borderRadius: "24px",
      opacity: pos.opacity,
      transition: isAnimating ? "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "all 0.3s ease-out",
      cursor: "pointer",
      zIndex: isActive ? 10 : 5,
      filter: `blur(${pos.blur}px) ${isAnimating && isActive ? "brightness(1.3) saturate(1.2)" : "brightness(1)"}`,
      boxShadow: isActive
        ? `
          0 0 12px #1cb683,
          0 0 30px rgba(28, 182, 131, 0.5),
          0 0 45px rgba(28, 182, 131, 0.3),
          0 0 80px rgba(28, 182, 131, 0.2),
          inset 0 0 50px rgba(28, 182, 131, 0.15)
        `
        : `
          0 0 20px rgba(28, 182, 131, 0.2),
          0 0 35px rgba(28, 182, 131, 0.1)
        `,
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-col py-1 items-center justify-center overflow-hidden relative"
      style={{
        background: "radial-gradient(ellipse at center, #0a1520 0%, #000000 70%)",
      }}
    >
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(28, 182, 131, 0.5); }
          50% { text-shadow: 0 0 30px rgba(28, 182, 131, 0.8), 0 0 40px rgba(28, 182, 131, 0.6); }
        }
      `}</style>

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-30">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#1cb683] mr-4"></div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white tracking-wide"
            style={{ animation: "glow 3s ease-in-out infinite" }}
          >
            TESTIMONIALS
          </h1>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#1cb683] ml-4"></div>
        </div>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Discover what our valued clients say about their transformative experiences with our innovative solutions
        </p>
      </div>

      {/* Card counter */}
      <div className="absolute top-8 right-8 text-[#1cb683] text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm border border-[#1cb683]/20">
        {currentIndex + 1} / {totalCards}
      </div>

      <button
        onClick={goToPrevious}
        disabled={isAnimating}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1cb683]/20 border border-[#1cb683]/40 flex items-center justify-center text-[#1cb683] hover:bg-[#1cb683]/30 hover:border-[#1cb683]/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1cb683]/20 border border-[#1cb683]/40 flex items-center justify-center text-[#1cb683] hover:bg-[#1cb683]/30 hover:border-[#1cb683]/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative w-full h-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            style={getCardStyle(index)}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 800)
              }
            }}
          >
            <div
              className="p-8 h-full flex flex-col justify-between transition-opacity duration-500 relative overflow-hidden"
              style={{
                opacity: index === currentIndex ? 1 : 0.7,
              }}
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote size={32} className="text-[#1cb683]" />
              </div>

              <div className="flex justify-center mb-6 relative z-10">
                <div className="flex space-x-1 px-4 py-2 rounded-full backdrop-blur-sm">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote
                className={`text-center leading-relaxed mb-8 transition-all duration-300 relative z-10 ${
                  index === currentIndex ? "text-white text-lg font-light italic" : "text-gray-400 text-base opacity-70"
                }`}
              >
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center justify-center relative z-10">
                <div className="relative mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={`w-14 h-14 rounded-full object-cover transition-all duration-300 ${
                      index === currentIndex
                        ? "ring-2 ring-[#1cb683] shadow-lg shadow-[#1cb683]/40"
                        : "ring-1 ring-gray-600"
                    }`}
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-[#1cb683]/20 animate-pulse"></div>
                  )}
                </div>
                <div className="text-left">
                  <div
                    className={`font-semibold transition-all duration-300 ${
                      index === currentIndex ? "text-white text-base" : "text-gray-300 text-sm"
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-[#1cb683] transition-all duration-300 font-medium ${
                      index === currentIndex ? "text-sm" : "text-xs"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                  <div className="text-gray-400 text-xs font-light">{testimonial.company}</div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlowingCarousel
