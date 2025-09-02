"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSection = useCallback((sectionIndex: number) => {
    if (isTransitioning || sectionIndex === currentSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(sectionIndex);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning, currentSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      // Only trigger on significant scroll
      if (Math.abs(e.deltaY) < 30) return;
      
      const delta = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.max(0, Math.min(1, currentSection + delta));
      
      if (newSection !== currentSection) {
        e.preventDefault();
        goToSection(newSection);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToSection(Math.min(1, currentSection + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToSection(Math.max(0, currentSection - 1));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [currentSection, isTransitioning, goToSection]);

  return (
    <main className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated neon orbs with new color */}
        <motion.div
          className="absolute top-10 md:top-20 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#20A97B]/20 blur-xl shadow-[0_0_40px_rgba(12,83,82,0.3)]"
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
          className="absolute top-20 md:top-40 right-16 md:right-32 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#20A97B]/25 blur-lg shadow-[0_0_30px_rgba(12,83,82,0.4)]"
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
          className="absolute bottom-16 md:bottom-32 left-1/4 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#20A97B]/15 blur-2xl shadow-[0_0_60px_rgba(12,83,82,0.2)]"
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
          className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#20A97B]/20 blur-lg shadow-[0_0_35px_rgba(12,83,82,0.35)]"
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

        {/* Enhanced floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-[#20A97B] rounded-full shadow-lg shadow-[#20A97B]/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Enhanced grid pattern overlay with new color */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(12, 83, 82, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 83, 82, 0.15) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Additional ambient light effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#20A97B]/5 via-transparent to-transparent opacity-30" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="backdrop-blur-md bg-[#0a0f0d]/40 border border-[#20A97B]/20 rounded-3xl p-4 md:p-8 shadow-2xl shadow-[#20A97B]/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(12,83,82,0.5)]">
                Upcoming <span className="text-[#20A97B]">Events</span>
              </h1>
            </motion.div>

            <motion.div
              className="relative mx-auto mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#20A97B] to-transparent rounded-full mx-auto relative shadow-[0_0_25px_rgba(12,83,82,0.7)]"
                initial={{ width: 0, scaleX: 0 }}
                animate={{ width: "200px", scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#20A97B] rounded-full shadow-[0_0_35px_rgba(12,83,82,0.9)] blur-[1px]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "80px", opacity: 0.9 }}
                transition={{
                  duration: 1.0,
                  delay: 1.2,
                  ease: "easeOut",
                }}
              />
              {/* Enhanced glow layer */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 bg-[#20A97B]/40 rounded-full blur-md"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "150px", opacity: 0.5 }}
                transition={{
                  duration: 1.5,
                  delay: 1.0,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            <motion.p
              className="text-base md:text-xl text-[#e5e7eb] font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              Discover extraordinary experiences and connect with your community through our curated selection of
              premium events
            </motion.p>
          </div>

          <motion.div
            className="backdrop-blur-sm bg-[#0a0f0d]/20 border border-[#20A97B]/10 rounded-2xl p-4 md:p-6 shadow-xl shadow-[#20A97B]/5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            {/* Cultural Event Tabs Content */}
            <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden bg-transparent">
              {/* Subtle Background Elements */}
              <div className="absolute inset-0 overflow-hidden -z-10">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,83,82,0.1),transparent_70%)] animate-pulse-slow" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(12,83,82,0.05),transparent_70%)] animate-pulse-slower" style={{ animationDelay: '3s' }} />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(12,83,82,0.05),transparent_70%)] animate-pulse-slowest" style={{ animationDelay: '6s' }} />
                </div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>

                {/* Floating light orbs */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-[#20A97B]/10 backdrop-blur-md pointer-events-none"
                    style={{
                      width: `${Math.random() * 100 + 30}px`,
                      height: `${Math.random() * 100 + 30}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      filter: 'blur(15px)',
                      animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite alternate`,
                      animationDelay: `${Math.random() * 5}s`,
                      opacity: 0.15
                    }}
                  />
                ))}
              </div>

              {/* Sections Container */}
              <div className="relative h-full w-full flex overflow-hidden">
                {/* Cultural Heritage Section */}
                <section
                  className={`h-full w-full flex-shrink-0 absolute transition-all duration-700 ease-in-out ${
                    currentSection === 0
                      ? 'translate-x-0 opacity-100 z-10'
                      : '-translate-x-full opacity-0 z-0'
                  }`}
                >
                  <div className="h-full flex items-center justify-center px-2 sm:px-4 md:px-8">
                    <div className="max-w-6xl mx-auto w-full">
                      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
                          <div className={`overflow-hidden transform transition-all duration-700 ease-out ${
                            currentSection === 0 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                          }`} style={{ transitionDelay: '200ms' }}>
                            <p className="text-[#20A97B] text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] uppercase">
                              EXPLORE THE CULTURE
                            </p>
                            <div className="h-[1px] bg-gradient-to-r from-[#20A97B]/30 via-[#20A97B] to-[#20A97B]/30 w-full mt-2" />
                          </div>

                          <div className="space-y-2">
                            {['Cultural', 'Heritage'].map((word, i) => (
                              <h1
                                key={i}
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none bg-gradient-to-r from-white via-[#a6ffdc] to-[#20A97B] bg-clip-text text-transparent transform transition-all duration-700 ease-out ${
                                  currentSection === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${300 + i * 150}ms` }}
                              >
                                {word}
                              </h1>
                            ))}
                          </div>

                          <p className={`text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md transform transition-all duration-700 ease-out ${
                            currentSection === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`} style={{ transitionDelay: '600ms' }}>
                            Discover the rich traditions, art, and timeless stories of our heritage. 
                            Experience the beauty of culture passed through generations.
                          </p>

                          <div className={`relative w-fit transform transition-all duration-700 ease-out ${
                            currentSection === 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`} style={{ transitionDelay: '800ms' }}>
                            {/* <button className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#20A97B]/10 border border-[#20A97B]/30 text-[#20A97B] font-medium tracking-wide hover:bg-[#20A97B]/20 hover:text-white transition-all duration-300 group relative overflow-hidden">
                              <span className="relative z-10">Explore More</span>
                              <span className="absolute inset-0 bg-gradient-to-r from-[#20A97B]/20 to-[#20A97B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button> */}
                          </div>
                        </div>

                        {/* Image Cards */}
                        <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                          {[
                            { 
                              title: 'Traditional Dance', 
                              image: 'https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5D1Mxh8kQ57NPj9YlOJCumqw8S4bfTIih3gXv', 
                              desc: 'Experience ancient rhythms passed through generations',
                              rotation: '-1.5deg'
                            },
                            { 
                              title: 'Heritage Moves', 
                              image: 'https://5oehmt2w6r.ufs.sh/f/zuvITbjJ2vf4rO2SsNip4HtimLlc23C5Auz79oK01jGsEVJI', 
                              desc: 'Discover the grace of traditions preserved in motion',
                              rotation: '2deg'
                            }
                          ].map((card, index) => (
                            <div
                              key={index}
                              className={`group relative transform transition-all duration-700 ease-out hover:scale-[1.02] ${
                                currentSection === 0 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                              }`}
                              style={{ 
                                transitionDelay: `${500 + index * 200}ms`,
                                transform: `rotate(${card.rotation}) translateY(${index * 4}px)`
                              }}
                            >
                              <div className="relative overflow-hidden rounded-xl h-40 sm:h-44 md:h-48 lg:h-56 w-full border border-white/10 hover:border-[#20A97B]/50 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:shadow-[#20A97B]/20">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[#20A97B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                
                                {/* Background Image */}
                                <div 
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                                  style={{ backgroundImage: `url('${card.image}')` }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
                                
                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-5">
                                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#20A97B] transition-all duration-300">
                                    {card.title}
                                  </h3>
                                  <p className="text-white/80 text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-all duration-300">
                                    {card.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Comedy Shows Section */}
                <section
                  className={`h-full w-full flex-shrink-0 absolute transition-all duration-700 ease-in-out ${
                    currentSection === 1
                      ? 'translate-x-0 opacity-100 z-10'
                      : 'translate-x-full opacity-0 z-0'
                  }`}
                >
                  <div className="h-full flex items-center justify-center px-2 sm:px-4 md:px-8">
                    <div className="max-w-6xl mx-auto w-full">
                      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                        {/* Image Cards */}
                        <div className="space-y-4 md:space-y-6 order-1">
                          {[
                            { 
                              title: 'Stand-Up Comedy', 
                              image: 'https://5oehmt2w6r.ufs.sh/f/zuvITbjJ2vf4D4fDnFVo9hVdKR3MEmkcI1zWnBg2pqwFPO5x', 
                              desc: 'Laugh with the best comedians in town',
                              rotation: '2deg'
                            },
                            { 
                              title: 'Comedy Club', 
                              image: 'https://5oehmt2w6r.ufs.sh/f/zuvITbjJ2vf4GEWZgQAo2RuPrB34zxwiqymlj1XFnYcdabpU', 
                              desc: 'Best comedy experience with friends and family',
                              rotation: '-1.5deg'
                            }
                          ].map((card, index) => (
                            <div
                              key={index}
                              className={`group relative transform transition-all duration-700 ease-out hover:scale-[1.02] ${
                                currentSection === 1 ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                              }`}
                              style={{ 
                                transitionDelay: `${500 + index * 200}ms`,
                                transform: `rotate(${card.rotation}) translateY(${index * 4}px)`
                              }}
                            >
                              <div className="relative overflow-hidden rounded-xl h-40 sm:h-44 md:h-48 lg:h-56 w-full border border-white/10 hover:border-[#20A97B]/50 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:shadow-[#20A97B]/20">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[#20A97B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                
                                {/* Background Image */}
                                <div 
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                                  style={{ backgroundImage: `url('${card.image}')` }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
                                
                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-5">
                                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#20A97B] transition-all duration-300">
                                    {card.title}
                                  </h3>
                                  <p className="text-white/80 text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-all duration-300">
                                    {card.desc}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Text Content */}
                        <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2">
                          <div className={`overflow-hidden transform transition-all duration-700 ease-out ${
                            currentSection === 1 ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                          }`} style={{ transitionDelay: '200ms' }}>
                            <p className="text-[#20A97B] text-sm md:text-base lg:text-lg font-bold tracking-[0.3em] uppercase">
                              DISCOVER THE HUMOR
                            </p>
                            <div className="h-[1px] bg-gradient-to-r from-[#20A97B]/30 via-[#20A97B] to-[#20A97B]/30 w-full mt-2" />
                          </div>

                          <div className="space-y-2">
                            {['Comedy', 'Shows'].map((word, i) => (
                              <h1
                                key={i}
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none bg-gradient-to-r from-white via-[#a6ffdc] to-[#20A97B] bg-clip-text text-transparent transform transition-all duration-700 ease-out ${
                                  currentSection === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                                style={{ transitionDelay: `${300 + i * 150}ms` }}
                              >
                                {word}
                              </h1>
                            ))}
                          </div>

                          <p className={`text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md transform transition-all duration-700 ease-out ${
                            currentSection === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`} style={{ transitionDelay: '600ms' }}>
                            Enjoy laughter and unforgettable moments with top comedians. 
                            The best comedy experience for you and your friends!
                          </p>

                          <div className={`relative w-fit transform transition-all duration-700 ease-out ${
                            currentSection === 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`} style={{ transitionDelay: '800ms' }}>
                            {/* <button className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[#20A97B]/10 border border-[#20A97B]/30 text-[#20A97B] font-medium tracking-wide hover:bg-[#20A97B]/20 hover:text-white transition-all duration-300 group relative overflow-hidden">
                              <span className="relative z-10">Explore More</span>
                              <span className="absolute inset-0 bg-gradient-to-r from-[#20A97B]/20 to-[#20A97B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-[#20A97B] scale-125 shadow-lg shadow-[#20A97B]/40' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }

        .animate-pulse-slow {
          animation: pulse 15s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse 18s ease-in-out infinite;
        }
        
        .animate-pulse-slowest {
          animation: pulse 20s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
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
    </main>
  );
}