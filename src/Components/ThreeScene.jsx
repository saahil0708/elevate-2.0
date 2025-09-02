"use client"

import { useEffect, useState } from "react"

const coaches = [
  {
    id: "bubba",
    name: "AMAN GUPTA",
    designation: "CEO, BOAT",
    image: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5oczgnl4PeMihumzLlUbvjISDBp9sdwO5XFrc",
    title: "Celebrity Key Note by Aman Gupta",
    description:
      "An inspiring keynote on entrepreneurship, resilience, and innovation, sharing real-life lessons and strategies to overcome challenges and achieve success.",
    day: 1,
  },
  {
    id: "sarah",
    name: "ANAND KUMAR",
    designation: "MATHEMATICIAN, SUPER 30 FAME",
    image: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5rRLCLqf8BWI64UPVzZcp0EidljyDOusNoxLG",
    title: "Keynote Address by Shree Anand Kumar",
    description:
      "An inspiring keynote on grit, determination, and purposeful success, offering valuable insights on turning challenges into opportunities and staying committed to goals.",
    day: 2,
  },
]

export default function SpeakersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute top-10 left-10 w-2 h-2 bg-[#20A97B]/30 rounded-full blur-sm"></div>
        <div className="animate-float-slow absolute top-32 right-20 w-1 h-1 bg-white/20 rounded-full blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="animate-float-slow absolute bottom-40 left-32 w-1.5 h-1.5 bg-[#20A97B]/20 rounded-full blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="animate-float-slow absolute bottom-20 right-16 w-1 h-1 bg-white/10 rounded-full blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Background image with enhanced overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-1000 animate-subtle-zoom"
          style={{
            backgroundImage:
              "url('/images/Image (43).png')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#20A97B]/5" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header with enhanced animations */}
        <header className="container mx-auto px-6 md:px-8 py-16 text-center">
          <div className="animate-title-reveal">
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
              CELEBRITY{" "}
              <span className="bg-gradient-to-r from-[#20A97B] via-[#25c58a] to-[#20A97B] bg-clip-text text-transparent animate-gradient-x">
                SPEAKERS
              </span>
            </h1>
          </div>
          <div className="animate-subtitle-reveal">
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide mb-4">
              World-class coaching from industry leaders
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#20A97B] to-transparent mx-auto animate-line-expand"></div>
          </div>
        </header>

        {/* Speakers grid with enhanced animations */}
        <section className="container mx-auto px-6 md:px-8 pb-16 flex-1 flex items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            {coaches.map((coach, index) => (
              <article
                key={coach.id}
                aria-labelledby={`${coach.id}-name`}
                className={[
                  "relative transition-all duration-1000 group cursor-pointer",
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95",
                ].join(" ")}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transformStyle: "preserve-3d"
                }}
                onMouseEnter={() => setHoveredCard(coach.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with 3D effects */}
                <div
                  tabIndex={0}
                  className={[
                    "w-full h-96 md:h-[30rem] relative rounded-2xl overflow-hidden transition-all duration-700",
                    "ring-1 ring-white/10 hover:ring-[#20A97B]/60 focus-visible:ring-2 focus-visible:ring-[#20A97B]",
                    "shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]",
                    "transform hover:-translate-y-1 hover:rotate-1",
                    "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
                  ].join(" ")}
                >
                  {/* Animated day badge */}
                  <div
                    className={[
                      "absolute top-5 left-5 z-30 transition-all duration-500",
                      "bg-gradient-to-br from-[#20A97B] via-[#25c58a] to-[#1a8a67]",
                      "rounded-full w-20 h-20 flex items-center justify-center",
                      "shadow-lg border-2 border-white/30 backdrop-blur-sm",
                      "transform hover:scale-110 hover:rotate-12",
                      hoveredCard === coach.id ? "animate-pulse-soft" : ""
                    ].join(" ")}
                    aria-label={`Day ${coach.day}`}
                  >
                    <div className="text-center leading-tight transform transition-transform duration-300 group-hover:scale-110">
                      <div className="text-sm font-bold text-black/80 tracking-widest">DAY</div>
                      <div className="text-2xl font-black text-black drop-shadow-sm">{coach.day}</div>
                    </div>
                  </div>

                  {/* Speaker image with parallax effect */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={coach.image || "/placeholder.svg?height=384&width=640&query=Speaker%20photo"}
                      alt={`${coach.name} — ${coach.designation}`}
                      className="w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#20A97B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Content overlay without blur */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500">
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
                      <h2 
                        id={`${coach.id}-name`} 
                        className="text-2xl md:text-3xl font-black tracking-wide text-white mb-2 drop-shadow-lg"
                      >
                        {coach.name}
                      </h2>
                      <p className="text-sm md:text-base text-gray-200 tracking-[0.2em] font-medium">
                        {coach.designation}
                      </p>
                      
                      {/* Animated underline */}
                      <div className="mt-4 mx-auto overflow-hidden">
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#20A97B] to-[#25c58a] transition-all duration-700 group-hover:w-20 group-hover:shadow-[0_0_10px_#20A97B]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect - removed */}
                </div>

                {/* Details with staggered animation */}
                <div className="mt-8 text-center space-y-4 transform transition-all duration-700 group-hover:translate-y-[-5px]">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-[#20A97B] to-[#25c58a] bg-clip-text text-transparent">
                    {coach.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                    {coach.description}
                  </p>
                </div>

                {/* Floating elements */}
                {hoveredCard === coach.id && (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#20A97B]/30 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes subtitleReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes lineExpand {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes subtleZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes pulseSoft {
          0%, 100% { box-shadow: 0 0 20px rgba(32, 169, 123, 0.3); }
          50% { box-shadow: 0 0 30px rgba(32, 169, 123, 0.6); }
        }
        
        @keyframes pulseGentle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-title-reveal {
          animation: titleReveal 1.2s ease-out forwards;
        }
        
        .animate-subtitle-reveal {
          animation: subtitleReveal 1s ease-out forwards 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-line-expand {
          animation: lineExpand 1.5s ease-out forwards 0.8s;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s ease infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        
        .animate-subtle-zoom {
          animation: subtleZoom 20s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
