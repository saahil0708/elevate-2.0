"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const GlowingCarousel = () => {
  const testimonials = [
   {
    name: "Rohan Malhotra",
    role: "Startup Founder",
    text: "Elevate 1.0 was a game-changer! The networking opportunities and mentorship helped me scale my business faster than I imagined.",
  },
  {
    name: "Ananya Sharma",
    role: "Product Designer",
    text: "Listening to Ashneer Grover and other leaders was inspiring. The sessions gave me clarity on how to approach innovation with purpose.",
  },
  {
    name: "Karan Patel",
    role: "Tech Enthusiast",
    text: "The energy at Elevate was unmatched. From startups to culture, it felt like the start of something much bigger.",
  },
  {
    name: "Sneha Verma",
    role: "Marketing Professional",
    text: "Elevate 1.0 was more than just an event — it was a platform to connect with visionaries and learn from the best in the industry.",
  },
  {
    name: "Aditya Rao",
    role: "Student Innovator",
    text: "As a student, being part of Elevate gave me exposure to real-world innovation and the confidence to pursue my ideas.",
  },
];

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

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#20A97B]" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))

  const getCardStyle = (index) => {
    const isActive = index === currentIndex
    const distance = (index - currentIndex + totalCards) % totalCards
    let positionIndex

    if (distance === 0) positionIndex = 2
    else if (distance === 1) positionIndex = 3
    else if (distance === 2) positionIndex = 4
    else if (distance === 3) positionIndex = 0
    else if (distance === 4) positionIndex = 1

    const positions = [
      { left: "8%", scale: 0.6, opacity: 1, blur: 2 },
      { left: "25%", scale: 0.75, opacity: 0.5, blur: 1 },
      { left: "50%", scale: 1, opacity: 1, blur: 0 },
      { left: "75%", scale: 0.75, opacity: 0.5, blur: 1 },
      { left: "92%", scale: 0.6, opacity: 0.3, blur: 2 },
    ]

    const pos = positions[positionIndex]

    return {
      position: "absolute",
      left: pos.left,
      top: "50%",
      transform: `translate(-50%, -50%) scale(${pos.scale})`,
      width: "320px",
      maxWidth: "90vw",
      height: "420px",
      border: isActive ? "2px solid #20A97B" : "1px solid #2a3441",
      borderRadius: "24px",
      opacity: pos.opacity,
      transition: isAnimating
        ? "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "all 0.3s ease-out",
      cursor: "pointer",
      zIndex: isActive ? 10 : 5,
      filter: `blur(${pos.blur}px) ${
        isAnimating && isActive
          ? "brightness(1.3) saturate(1.2)"
          : "brightness(1)"
      }`,
      boxShadow: isActive
        ? `
          0 0 12px #20A97B,
          0 0 30px rgba(12, 83, 82, 0.5),
          0 0 45px rgba(12, 83, 82, 0.3),
          0 0 80px rgba(12, 83, 82, 0.2),
          inset 0 0 50px rgba(12, 83, 82, 0.15)
        `
        : `
          0 0 20px rgba(12, 83, 82, 0.2),
          0 0 35px rgba(12, 83, 82, 0.1)
        `,
    }
  }

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20"
      style={{
        background: "radial-gradient(ellipse at center, #0a1520 0%, #000000 70%)",
      }}
    >
      {/* Title + description */}
      <div className="text-center px-4 mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#20A97B] mr-2 md:mr-4"></div>
          <h1
            className="text-3xl md:text-5xl font-bold tracking-wide"
            style={{
              textShadow:
                "0 0 20px rgba(12, 83, 82, 0.5), 0 0 30px rgba(12, 83, 82, 0.6)",
            }}
          >
            TESTIMONIALS
          </h1>
          <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#20A97B] ml-2 md:ml-4"></div>
        </div>
        <p className="text-gray-300 text-base md:text-xl max-w-2xl leading-relaxed text-center mx-auto mt-4">
          Discover what our valued clients say about their transformative
          experiences with our innovative solutions
        </p>
      </div>

      {/* Card counter */}
      <div className="absolute top-6 right-4 md:right-12 text-[#20A97B] text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm border border-[#20A97B]/20">
        {currentIndex + 1} / {totalCards}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        disabled={isAnimating}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#20A97B]/20 border border-[#20A97B]/40 flex items-center justify-center text-[#20A97B] hover:bg-[#107372]/30 hover:border-[#107372]/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#20A97B]/20 border border-[#20A97B]/40 flex items-center justify-center text-[#20A97B] hover:bg-[#107372]/30 hover:border-[#107372]/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Cards */}
      <div className="relative w-full h-96 md:h-[500px] max-w-6xl">
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
              className={`p-6 md:p-8 h-full flex flex-col justify-between transition-opacity duration-500 relative overflow-hidden rounded-2xl 
                ${index === currentIndex ? "bg-[#0f1a25]" : "bg-[#0a0f14]/80"}`}
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote size={32} className="text-[#20A97B]" />
              </div>

              <div className="flex justify-center mb-6 relative z-10">
                <div className="flex space-x-1 px-4 py-2 rounded-full backdrop-blur-sm">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              <blockquote
                className={`text-center leading-relaxed mb-6 md:mb-8 transition-all duration-300 relative z-10 ${
                  index === currentIndex
                    ? "text-white text-base md:text-lg font-light italic"
                    : "text-gray-400 text-sm md:text-base opacity-70"
                }`}
              >
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center justify-center relative z-10">
                <div className="relative mr-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover transition-all duration-300 ${
                      index === currentIndex
                        ? "ring-2 ring-[#20A97B] shadow-lg shadow-[#20A97B]/40"
                        : "ring-1 ring-gray-600"
                    }`}
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-[#20A97B]/20 animate-pulse"></div>
                  )}
                </div>
                <div className="text-left">
                  <div
                    className={`font-semibold transition-all duration-300 ${
                      index === currentIndex
                        ? "text-white text-sm md:text-base"
                        : "text-gray-300 text-xs md:text-sm"
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-[#20A97B] transition-all duration-300 font-medium ${
                      index === currentIndex ? "text-xs md:text-sm" : "text-xs"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                  <div className="text-gray-400 text-xs font-light">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GlowingCarousel
