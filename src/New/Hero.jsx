"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"


export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const audienceRef = useRef(null)

  useEffect(() => {
    // Title stroke animation
    gsap.fromTo(
      titleRef.current.children,
      { opacity: 0, scale: 0, rotation: 180, y: 100 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.8,
        stagger: 0.08,
        ease: "back.out(1.7)",
      }
    )

    // Subheading fade-in
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: "power3.out" }
    )
    
    // Audience image fade-in
    gsap.fromTo(
      audienceRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2, ease: "power3.out" }
    )
  }, [])

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-transparent">
      {/* Background Watermark */}
      <div className="absolute inset-0 w-full flex items-center justify-center overflow-hidden">
        <h1 className="text-[20vw] font-extrabold text-white/5 tracking-widest whitespace-nowrap animate-marquee">
          ELEVATE 2.0
        </h1>
      </div>

      {/* Main Title with Outline + Green Sweep */}
      <h1
        ref={titleRef}
        className="relative flex flex-wrap justify-center font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider"
      >
        {"ELEVATE 2.0".split("").map((char, i) => (
          <span
            key={i}
            className="inline-block px-1 relative text-transparent "
          >
            {char}
            {/* Green Gradient Sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent bg-[length:200%_100%] animate-sweep text-transparent bg-clip-text">
              {char}
            </span>
          </span>
        ))}
      </h1>

      {/* Subheading + Reflection */}
      <div className="relative mt-6">
        <p
          ref={subRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-200"
        >
          Igniting Innovation • Inspiring Leaders • Shaping Futures
        </p>
        <p
          className="absolute left-0 right-0 top-full text-lg sm:text-xl md:text-2xl text-gray-400 opacity-30 transform scale-y-[-1] blur-sm"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
          }}
        >
          Igniting Innovation • Inspiring Leaders • Shaping Futures
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-6">
        <button className="px-8 py-3 text-lg font-semibold text-white bg-[#1cb683] rounded-full shadow-lg hover:scale-110 transition-transform">
          🎟 Register Now
        </button>
        <button className="px-8 py-3 text-lg font-semibold text-white border border-[#1cb683] rounded-full hover:bg-[#1cb683]/20 transition">
          📅 View Schedule
        </button>
      </div>

      {/* Audience Image with Gradient Effect */}
      <div ref={audienceRef} className="absolute bottom-0 w-full h-1/3 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
        
        {/* Audience image */}
        <div 
          className="w-full h-full bg-cover bg-center mt-8"
          style={{
            backgroundImage: "url('/Audience-removebg-preview.png')"
          }}
        ></div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
        .animate-sweep {
          animation: sweep 3s linear infinite;
        }
        @keyframes sweep {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}