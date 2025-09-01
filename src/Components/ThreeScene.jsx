// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // SVG Icons (unchanged)
// const ChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
//     <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
//   </svg>
// );

// const ChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
//     <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
//   </svg>
// );

// // speakersData array (unchanged)
// const speakersData = [
//   {
//     id: 1,
//     name: "Akshay Kumar",
//     role: "Bollywood Actor",
//     bio: "Renowned actor with over 30 years in Indian cinema.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//     topic: "Journey in Indian Cinema",
//     color: "#10B981",
//     social: {
//       twitter: "@akshaykumar",
//       instagram: "@akshaykumar"
//     }
//   },
//   {
//     id: 2,
//     name: "Raima Sen",
//     role: "Actress",
//     bio: "Known for her work in independent cinema and mainstream Bollywood.",
//     image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//     topic: "Women in Indian Cinema",
//     color: "#10B981",
//     social: {
//       twitter: "@raimasen",
//       instagram: "@raimasen"
//     }
//   },
//   {
//     id: 3,
//     name: "Arjun Kapur",
//     role: "Tech Entrepreneur",
//     bio: "Founder of multiple successful startups in India.",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//     topic: "Technology and Innovation",
//     color: "#10B981",
//     social: {
//       twitter: "@arjunkapur",
//       linkedin: "arjun-kapur"
//     }
//   },
//   {
//     id: 4,
//     name: "Priya Sharma",
//     role: "Environmental Scientist",
//     bio: "Leading researcher in sustainable development.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//     topic: "Sustainable Futures",
//     color: "#10B981",
//     social: {
//       twitter: "@priyasharma",
//       linkedin: "priya-sharma"
//     }
//   },
// ];

// const SpeakersCarousel = () => {
//   // Component logic (unchanged)
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handleAutoPlay = useCallback(() => {
//     if (!isAutoPlaying || isTransitioning) return;
    
//     setIsTransitioning(true);
//     setDirection(1);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === speakersData.length - 1 ? 0 : prevIndex + 1
//     );
    
//     setTimeout(() => {
//       setIsTransitioning(false);
//     }, 800);
//   }, [isAutoPlaying, isTransitioning]);

//   useEffect(() => {
//     const interval = setInterval(handleAutoPlay, 6000);
//     return () => clearInterval(interval);
//   }, [handleAutoPlay]);

//   const handleNext = () => {
//     setIsTransitioning(true);
//     setDirection(1);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === speakersData.length - 1 ? 0 : prevIndex + 1
//     );
//     setIsAutoPlaying(false);
    
//     setTimeout(() => {
//       setIsTransitioning(false);
//       setIsAutoPlaying(true);
//     }, 800);
//   };

//   const handlePrev = () => {
//     setIsTransitioning(true);
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? speakersData.length - 1 : prevIndex - 1
//     );
//     setIsAutoPlaying(false);
    
//     setTimeout(() => {
//       setIsTransitioning(false);
//       setIsAutoPlaying(true);
//     }, 800);
//   };

//   const goToSlide = (index) => {
//     if (index === currentIndex) return;
//     setIsTransitioning(true);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
    
//     setTimeout(() => {
//       setIsTransitioning(false);
//       setIsAutoPlaying(true);
//     }, 800);
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.95,
//     })
//   };

//   const currentSpeaker = speakersData[currentIndex];

//   return (
//     <section id="speakers" className="relative py-12 md:py-16 overflow-hidden">
//       {/* Background (unchanged) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header (unchanged) */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h2 
//             className="text-4xl md:text-5xl font-black mb-4"
//             style={{
//               background: `linear-gradient(135deg, #ffffff 0%, ${currentSpeaker.color} 100%)`,
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             Celebrity Speakers
//           </motion.h2>
          
//           <motion.div
//             className="relative mb-6"
//             initial={{ width: 0 }}
//             animate={{ width: "150px" }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <div 
//               className="h-1 mx-auto rounded-full"
//               style={{
//                 background: `linear-gradient(90deg, transparent, ${currentSpeaker.color}, transparent)`
//               }}
//             />
//           </motion.div>
          
//           <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
//             Get inspired by our lineup of distinguished speakers
//           </p>
//         </motion.div>

//         {/* Main Carousel */}
//         <div className="max-w-4xl mx-auto">
//           {/* Increased the height of the container to accommodate taller photo frame */}
//           <div className="relative h-[550px] md:h-[500px]">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 30,
//                   duration: 0.6
//                 }}
//                 className="absolute inset-0"
//               >
//                 {/* Speaker Card */}
//                 <div className="relative h-full">
//                   <motion.div 
//                     className="backdrop-blur-xl bg-gray-900/20 border rounded-2xl p-5 md:p-6 shadow-2xl h-full overflow-hidden flex flex-col lg:flex-row relative"
//                     style={{ 
//                       borderColor: `${currentSpeaker.color}40`,
//                       boxShadow: `0 10px 30px -5px ${currentSpeaker.color}10`
//                     }}
//                     whileHover={{ y: -5 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
                    
//                     {/* Reduced Glow effect (unchanged) */}
//                     <div 
//                       className="absolute -inset-px rounded-2xl opacity-10"
//                       style={{ backgroundColor: currentSpeaker.color }}
//                     />

//                     {/* Speaker Image Section - Increased height */}
//                     <div 
//                       className="relative z-10 w-48 h-56 lg:w-56 lg:h-64 overflow-hidden border-2 shadow-lg mx-auto lg:mx-0"
//                       style={{ 
//                         borderColor: currentSpeaker.color,
//                         clipPath: "polygon(20% 0%, 80% 0%, 100% 0, 100% 89%, 80% 100%, 20% 100%, 0 100%, 0 11%)"
//                       }}
//                     >
//                       <motion.img
//                         src={currentSpeaker.image}
//                         alt={currentSpeaker.name}
//                         className="w-full h-full object-cover"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                       />
                      
//                       {/* Image overlay (unchanged) */}
//                       <div 
//                         className="absolute inset-0 opacity-10"
//                         style={{
//                           background: `linear-gradient(135deg, ${currentSpeaker.color}30, transparent)`
//                         }}
//                       />
//                     </div>

//                     {/* Speaker Details Section (unchanged) */}
//                     <div className="flex-grow text-center lg:text-left flex flex-col justify-center mt-4 lg:mt-0 lg:ml-6">
//                       <motion.div
//                         initial={{ opacity: 0, x: 30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3, duration: 0.6 }}
//                         className="space-y-4"
//                       >
//                         {/* Name and Role */}
//                         <div>
//                           <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">
//                             {currentSpeaker.name}
//                           </h3>
                          
//                         </div>
                        
//                         {/* Topic */}
//                         <div className="relative pl-5">
//                           <div 
//                             className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
//                             style={{ backgroundColor: currentSpeaker.color }}
//                           />
//                           <div>
//                             <span className="text-gray-400 font-semibold text-xs uppercase tracking-wider">Speaking Topic</span>
//                             <p className="text-lg font-semibold text-white mt-1">
//                               {currentSpeaker.topic}
//                             </p>
//                           </div>
//                         </div>
                        
//                         {/* Bio */}
//                         <div className="relative">
//                           <p className="text-gray-300 leading-relaxed text-sm">
//                             {currentSpeaker.bio}
//                           </p>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Arrows (unchanged) */}
//             <motion.button
//               onClick={handlePrev}
//               className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-xl bg-gray-900/40 border-2 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-20 group"
//               style={{ 
//                 borderColor: `${currentSpeaker.color}30`,
//                 boxShadow: `0 5px 15px -5px ${currentSpeaker.color}10`
//               }}
//               whileHover={{ 
//                 backgroundColor: `${currentSpeaker.color}20`,
//                 borderColor: currentSpeaker.color 
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Previous speaker"
//             >
//               <ChevronLeft />
//             </motion.button>
            
//             <motion.button
//               onClick={handleNext}
//               className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-xl bg-gray-900/40 border-2 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-20 group"
//               style={{ 
//                 borderColor: `${currentSpeaker.color}30`,
//                 boxShadow: `0 5px 15px -5px ${currentSpeaker.color}10`
//               }}
//               whileHover={{ 
//                 backgroundColor: `${currentSpeaker.color}20`,
//                 borderColor: currentSpeaker.color 
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Next speaker"
//             >
//               <ChevronRight />
//             </motion.button>
//           </div>

//           {/* Dots Indicator (unchanged) */}
//           <motion.div 
//             className="flex justify-center mt-8 space-x-3"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             {speakersData.map((speaker, index) => (
//               <motion.button
//                 key={speaker.id}
//                 onClick={() => goToSlide(index)}
//                 className={`relative transition-all duration-500 rounded-full ${
//                   index === currentIndex 
//                     ? 'w-10 h-3' 
//                     : 'w-3 h-3 opacity-50 hover:opacity-75'
//                 }`}
//                 style={{ backgroundColor: speaker.color }}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label={`Go to speaker ${index + 1}`}
//               >
//                 {/* Active indicator glow */}
//                 {index === currentIndex && (
//                   <motion.div
//                     className="absolute inset-0 rounded-full"
//                     style={{ backgroundColor: speaker.color }}
//                     animate={{
//                       opacity: [0.4, 0.6, 0.4],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Progress Bar (unchanged) */}
//       <motion.div
//         className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/50"
//       >
//         <motion.div
//           className="h-full"
//           style={{ backgroundColor: currentSpeaker.color }}
//           initial={{ width: "0%" }}
//           animate={{ width: isAutoPlaying ? "100%" : "0%" }}
//           transition={{ duration: 6, ease: "linear" }}
//           key={`${currentIndex}-${isAutoPlaying}`}
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default SpeakersCarousel;

"use client"

import { useEffect, useMemo, useState } from "react"

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
  const [dayFilter, setDayFilter] = useState(0) // 0 = All, 1 = Day 1, 2 = Day 2

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filtered = useMemo(
    () => coaches.filter((c) => (dayFilter === 0 ? true : c.day === dayFilter)),
    [dayFilter]
  )

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background image with a single readability overlay (no gradients/blobs) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 transition-opacity duration-700"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/b/bd/New_York_City_Skyline_at_Dusk.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <header className="container mx-auto px-6 md:px-8 py-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-4 tracking-tight">
            CELEBRITY <span className="text-[#20A97B]">SPEAKERS</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg animate-fade-in delay-100 text-pretty">
            World-class coaching from industry leaders
          </p>

          <div
            role="tablist"
            aria-label="Filter speakers by day"
            className="mt-6 inline-flex items-center gap-1 rounded-md bg-white/10 p-1"
          >
            {[
              { label: "All", value: 0 },
              { label: "Day 1", value: 1 },
              { label: "Day 2", value: 2 },
            ].map((opt) => {
              const active = dayFilter === opt.value
              return (
                <button
                  key={opt.label}
                  role="tab"
                  aria-selected={active}
                  aria-pressed={active}
                  onClick={() => setDayFilter(opt.value)}
                  className={[
                    "px-3 py-1.5 text-sm md:text-base rounded",
                    "transition-colors duration-150 focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#20A97B]",
                    active ? "bg-[#20A97B] text-black" : "bg-transparent text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            {`${filtered.length} speaker${filtered.length === 1 ? "" : "s"} shown`}
          </p>
        </header>

        {/* Speakers grid */}
        <section className="container mx-auto px-6 md:px-8 pb-12 flex-1 flex items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {filtered.map((coach, index) => (
              <article
                key={coach.id}
                aria-labelledby={`${coach.id}-name`}
                className={[
                  "relative transition-all duration-700 group",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                {/* Card */}
                <div
                  tabIndex={0}
                  className={[
                    "w-full h-80 md:h-96 relative rounded-lg overflow-hidden",
                    "ring-1 ring-white/10 hover:ring-[#20A97B]/60 focus-visible:ring-2 focus-visible:ring-[#20A97B]",
                    "shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
                  ].join(" ")}
                >
                  {/* Day badge */}
                  <div
                    className="absolute top-3 left-3 z-30 bg-[#20A97B] rounded-full w-14 h-14 flex items-center justify-center shadow"
                    aria-label={`Day ${coach.day}`}
                  >
                    <div className="text-center leading-tight">
                      <div className="text-xs font-normal text-black/80">Day</div>
                      <div className="text-xl font-extrabold text-black">{coach.day}</div>
                    </div>
                  </div>

                  {/* Speaker image */}
                  <img
                    src={coach.image || "/placeholder.svg?height=384&width=640&query=Speaker%20photo"}
                    alt={`${coach.name} — ${coach.designation}`}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/35 hover:bg-black/25 transition-colors duration-200">
                    <h2 id={`${coach.id}-name`} className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                      {coach.name}
                    </h2>
                    <p className="text-sm md:text-base text-gray-200 tracking-widest font-light mt-2">
                      {coach.designation}
                    </p>
                    <div className="w-16 h-0.5 bg-[#20A97B] mt-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 text-center space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide text-[#20A97B]">{coach.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{coach.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </main>
  )
}