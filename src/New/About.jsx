"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { Users, Award, Star, Zap, Globe, Mic, Code, Music, Target, ArrowRight } from "lucide-react"

export default function CombinedAbout() {
  const aboutRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const aboutElement = aboutRef.current
    if (!aboutElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll(".animate-on-scroll")
            animateElements.forEach((element, index) => {
              const animations = [
                "animate-fade-in-up",
                "animate-slide-in-left",
                "animate-slide-in-right",
                "animate-scale-in",
                "animate-rotate-in",
                "animate-bounce-in",
              ]

              let animationClass = animations[index % animations.length]

              if (element.classList.contains("hero-title")) animationClass = "animate-scale-in"
              if (element.classList.contains("hero-subtitle")) animationClass = "animate-slide-in-left"
              if (element.classList.contains("hero-tagline")) animationClass = "animate-slide-in-right"
              if (element.classList.contains("enhanced-card")) animationClass = "animate-bounce-in"

              setTimeout(() => {
                element.classList.add(animationClass)
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const sections = aboutElement.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    const cards = aboutElement.querySelectorAll(".enhanced-card")
    cards.forEach((card) => {
      const randomRotateY = Math.random() * 16 - 8
      const randomRotateX = Math.random() * 8 - 4
      const randomRotateZ = Math.random() * 6 - 3
      const randomY = Math.random() * 16 - 8
      const randomX = Math.random() * 12 - 6

      card.style.transform = `rotateY(${randomRotateY}deg) rotateX(${randomRotateX}deg) rotateZ(${randomRotateZ}deg) translateY(${randomY}px) translateX(${randomX}px)`
      card.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

      const handleMouseEnter = () => {
        setIsHovering(true)
        const newRotateY = Math.random() * 6 - 3
        const newRotateX = Math.random() * 4 - 2
        const newRotateZ = Math.random() * 4 - 2
        const newY = -12 + Math.random() * 6 - 3
        const newX = Math.random() * 8 - 4

        card.style.transform = `rotateY(${newRotateY}deg) rotateX(${newRotateX}deg) rotateZ(${newRotateZ}deg) translateY(${newY}px) translateX(${newX}px)`
        card.style.transition = "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        card.style.boxShadow = "0 25px 50px -12px rgba(28, 182, 131, 0.4), 0 0 40px rgba(28, 182, 131, 0.3)"

        const cardGlow = card.querySelector(".card-glow")
        const cardBehindGlow = card.querySelector(".card-behind-glow")

        if (cardGlow) {
          cardGlow.style.opacity = "0.8"
          cardGlow.style.transform = "scale(1.2)"
          cardGlow.style.transition = "all 0.3s ease-out"
        }
        if (cardBehindGlow) {
          cardBehindGlow.style.opacity = "0.6"
          cardBehindGlow.style.transform = "scale(1.5)"
          cardBehindGlow.style.transition = "all 0.3s ease-out"
        }
      }

      const handleMouseLeave = () => {
        setIsHovering(false)
        card.style.transform = `rotateY(${randomRotateY}deg) rotateX(${randomRotateX}deg) rotateZ(${randomRotateZ}deg) translateY(${randomY}px) translateX(${randomX}px)`
        card.style.transition = "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        card.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)"

        const cardGlow = card.querySelector(".card-glow")
        const cardBehindGlow = card.querySelector(".card-behind-glow")

        if (cardGlow) {
          cardGlow.style.opacity = "0"
          cardGlow.style.transform = "scale(1)"
          cardGlow.style.transition = "all 0.4s ease-out"
        }
        if (cardBehindGlow) {
          cardBehindGlow.style.opacity = "0"
          cardBehindGlow.style.transform = "scale(1)"
          cardBehindGlow.style.transition = "all 0.4s ease-out"
        }
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const stats = [
    { number: 1000, suffix: "+", label: "Attendees in 2024" },
    { number: 15, suffix: "+", label: "Distinguished Speakers" },
    { number: 3, suffix: "", label: "Immersive Days" },
    { number: 2025, suffix: "", label: "Next Edition" },
  ]

  const highlights = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Industry Visionaries",
      description: "Connect with renowned entrepreneurs and industry leaders who share their insights and experiences.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Hands-on Workshops",
      description:
        "Gain exposure to cutting-edge technologies and open-source communities through interactive sessions.",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Cultural Nights",
      description:
        "Experience the vibrant campus culture through performances, celebrations, and interactive activities.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Trends",
      description: "Stay ahead with insights into global industry trends and emerging technologies.",
    },
  ]

  return (
    <div ref={aboutRef} className="relative text-white overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px) rotateY(-15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px) rotateY(15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotateZ(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotateY(90deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotateY(0deg) scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-12px) translateX(8px) rotate(3deg); }
          50% { transform: translateY(-6px) translateX(-6px) rotate(-2deg); }
          75% { transform: translateY(-15px) translateX(4px) rotate(4deg); }
        }
        
        @keyframes countUp {
          from { 
            opacity: 0;
            transform: scale(0.5) rotateZ(180deg);
          }
          to { 
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-rotate-in {
          animation: rotateIn 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-count-up {
          animation: countUp 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        
        .hero-title {
          animation: scaleIn 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;
        }
        
        .hero-subtitle {
          animation: slideInLeft 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
        }
        
        .hero-tagline {
          animation: slideInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards;
        }
      `}</style>

      <div className="relative z-20">
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="absolute top-20 left-20 w-20 h-20 bg-[#1cb683]/10 rounded-full blur-xl animate-float" />
            <div
              className="absolute bottom-20 right-20 w-32 h-32 bg-[#1cb683]/5 rounded-full blur-2xl animate-float"
              style={{ animationDelay: "2s" }}
            />

            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight opacity-0">
              <span className="block bg-gradient-to-r from-white via-[#1cb683] to-white bg-clip-text text-transparent">
                Inside ELEVATE
              </span>
            </h1>
            <motion.div
              className="w-60 mt-5 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed opacity-0">
              Our college's flagship three-day induction program, designed to welcome, inspire, and empower the newest
              batch of students as they embark on their academic journey.
            </p>

            <p className="hero-tagline text-lg md:text-xl text-[#1cb683] font-semibold opacity-0">
              More than an orientation — it's a launchpad for the future.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1cb683]/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <Card
                    className="enhanced-card bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#1cb683]/50 transition-all duration-500 relative overflow-hidden h-full animate-on-scroll"
                    style={{
                      transformStyle: "preserve-3d",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="card-behind-glow absolute -inset-6 bg-[#1cb683]/40 rounded-3xl blur-3xl opacity-0 transition-all duration-500 -z-20" />
                    <div className="card-glow absolute inset-0 bg-[#1cb683]/20 rounded-lg blur-xl opacity-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,182,131,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-6 h-full flex flex-col justify-center relative z-10">
                      <div className="text-3xl md:text-4xl font-bold text-[#1cb683] mb-2 drop-shadow-[0_0_20px_rgba(28,182,131,0.5)]">
                        <span className="animate-count-up">{stat.number}</span>
                        {stat.suffix}
                      </div>
                      <div className="text-gray-400 font-medium text-sm md:text-base">{stat.label}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 md:px-6 lg:px-8 relative">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#1cb683]/5 rounded-full blur-3xl animate-float" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-8">
                  Born from a{" "}
                  <span className="text-[#1cb683] relative">
                    Vision
                    <div className="absolute -inset-1 bg-[#1cb683]/20 blur-xl rounded-lg -z-10" />
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p className="animate-on-scroll">
                    <span className="text-[#1cb683] font-semibold">Launched in 2024</span>, Elevate was born from a
                    vision: to go beyond conventional introductions and create a platform where learning, networking,
                    and creativity meet.
                  </p>
                  <p className="animate-on-scroll">
                    In its very first edition, Elevate saw{" "}
                    <span className="text-[#1cb683] font-semibold">3,000+ attendees</span>, featured{" "}
                    <span className="text-[#1cb683] font-semibold">25+ distinguished speakers</span>, and was headlined
                    by renowned entrepreneur <span className="text-[#1cb683] font-semibold">Ashneer Grover</span> —
                    setting the tone for an ambitious tradition.
                  </p>
                  <p className="animate-on-scroll">
                    At its heart, Elevate blends insightful talks, hands-on workshops, and unforgettable cultural
                    nights, creating an immersive experience that goes far beyond traditional orientation programs.
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll">
                <Card
                  className="enhanced-card bg-gradient-to-br from-[#1cb683]/20 to-[#1cb683]/5 backdrop-blur-xl border border-[#1cb683]/30 p-8 rounded-2xl relative overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="card-behind-glow absolute -inset-6 bg-[#1cb683]/40 rounded-3xl blur-3xl opacity-0 transition-all duration-500 -z-20" />
                  <div className="card-glow absolute inset-0 bg-[#1cb683]/20 rounded-2xl blur-xl opacity-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,182,131,0.2)_100%)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-0 relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-[#1cb683]/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(28,182,131,0.4)]">
                        <Award className="h-10 w-10 text-[#1cb683]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Flagship Program</h3>
                      <p className="text-gray-400">Setting new standards in student orientation</p>
                    </div>
                    <div className="rounded-lg p-6 border border-[#1cb683]/20">
                      <blockquote className="text-center italic text-gray-300">
                        "The start of college isn't just the start of classes — it's the start of shaping futures.
                        Elevate exists to make sure our students dream bigger, aim higher, and feel like they belong
                        from day one."
                      </blockquote>
                      <p className="text-center text-[#1cb683] font-semibold mt-4">— Founder, 2024</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(28,182,131,0.1),transparent_70%)]" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-20">
              <h2 className="animate-on-scroll text-4xl md:text-5xl font-bold mb-6">
                What Makes{" "}
                <span className="text-[#1cb683] relative">
                  Elevate
                  <div className="absolute -inset-2 bg-[#1cb683]/20 blur-xl rounded-lg -z-10" />
                </span>{" "}
                Special?
              </h2>
              <p className="animate-on-scroll text-xl text-gray-400 max-w-3xl mx-auto">
                A unique blend of industry insights, hands-on learning, and cultural experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="enhanced-card bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#1cb683]/50 transition-all duration-500 h-full relative overflow-hidden animate-on-scroll"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="card-behind-glow absolute -inset-6 bg-[#1cb683]/40 rounded-4xl blur-3xl opacity-0 transition-all duration-500 -z-20" />
                  <div className="card-glow absolute inset-0 bg-[#1cb683]/20 rounded-2xl blur-xl opacity-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,182,131,0.1)_100%)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center h-full flex flex-col relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1cb683]/20 text-[#1cb683] rounded-full mb-6 transition-all duration-300 shadow-[0_0_20px_rgba(28,182,131,0.3)]">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{highlight.title}</h3>
                    <p className="text-gray-400 flex-grow">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#1cb683]/10 rounded-full blur-2xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-60 h-60 bg-[#1cb683]/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="max-w-6xl mx-auto text-center relative">
            <div className="animate-on-scroll mb-16">
              <Badge
                variant="outline"
                className="border-[#1cb683] text-[#1cb683] bg-[#1cb683]/10 backdrop-blur-sm text-lg px-6 py-2 rounded-full mb-8 relative"
              >
                <div className="absolute inset-0 bg-[#1cb683]/10 rounded-full blur-xl" />
                <Star className="h-5 w-5 mr-2 relative z-10" />
                <span className="relative z-10">Looking Ahead</span>
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1cb683] relative">
                  Elevate 2025
                  <div className="absolute -inset-2 bg-[#1cb683]/30 blur-xl rounded-lg -z-10" />
                </span>{" "}
                Returns
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                In 2025, Elevate returns with even greater ambition — more speakers, more experiences, and more
                opportunities to inspire the leaders, innovators, and change-makers of tomorrow.
              </p>
            </div>

            <div className="animate-on-scroll grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Target, title: "Bigger Vision", description: "Expanding our reach and impact" },
                { icon: Users, title: "More Speakers", description: "Industry leaders and visionaries" },
                { icon: Zap, title: "Enhanced Experience", description: "Innovative formats and activities" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="enhanced-card bg-white/5 backdrop-blur-xl border border-[#1cb683]/30 p-8 rounded-2xl relative overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <div className="card-behind-glow absolute -inset-6 bg-[#1cb683]/40 rounded-4xl blur-3xl opacity-0 transition-all duration-500 -z-20" />
                  <div className="card-glow absolute inset-0 bg-[#1cb683]/20 rounded-2xl blur-xl opacity-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(28,182,131,0.1)_100%)] opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-0 text-center relative z-10">
                    {React.createElement(item.icon, { className: "h-12 w-12 text-[#1cb683] mx-auto mb-4" })}
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-32 px-4 md:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,182,131,0.15),transparent_50%)]" />
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">Ready to be part of Elevate 2.0?</h2>
            <p className="text-xl text-gray-300 mb-8 animate-on-scroll">
              Join us for an unforgettable experience that will kickstart your college journey.
            </p>
            <div className="animate-on-scroll">
              <Button
                className="bg-[#1cb683] hover:bg-[#1cb683]/90 text-white px-8 py-6 text-lg rounded-full relative overflow-hidden group transition-all duration-300"
                style={{
                  boxShadow: "0 0 0 0 rgba(28, 182, 131, 0.7)",
                  transition: "box-shadow 0.6s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 20px rgba(28, 182, 131, 0)"
                  e.currentTarget.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(28, 182, 131, 0.7)"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <span className="relative z-10">
                  Register Interest
                  <ArrowRight className="h-5 w-5 ml-2 inline transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#1cb683] to-[#1cb683]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  )
}
