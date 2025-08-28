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

import { useState, useEffect } from "react"

const coaches = [
  {
<<<<<<< HEAD
    id: "bubba",
    name: "AMAN GUPTA",
    designation: "CEO, BOAT",
    image: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5oczgnl4PeMihumzLlUbvjISDBp9sdwO5XFrc",
    title: "WHY HIRE AN EXECUTIVE COACH?",
    description: "As an executive coach, I work to empower business leaders through a personal partnership. I jump into the trenches with you, have the hard conversations, ask the right questions, uncover insights and discover the solutions that will help you and your business reach full potential.",
  },
  {
    id: "sarah",
    name: "SARAH JOHNSON",
    designation: "LEADERSHIP COACH",
    image: "/professional-woman-executive-coach.png",
    title: "WHY CHOOSE LEADERSHIP COACHING?",
    description: "Leadership coaching transforms how you lead and inspire others. I help executives develop authentic leadership styles, build high-performing teams, and create cultures of excellence that drive sustainable business growth and innovation.",
  },
  {
    id: "michael",
    name: "MICHAEL CHEN",
    designation: "PERFORMANCE COACH",
    image: "/professional-man-performance-coach.png",
    title: "WHY INVEST IN PERFORMANCE COACHING?",
    description: "Performance coaching unlocks your highest potential through strategic goal-setting and accountability. I work with leaders to optimize their effectiveness, overcome limiting beliefs, and achieve breakthrough results in both personal and professional domains.",
  },
]
=======
    id: 1,
    name: "Akshay Kumar",
    role: "Bollywood Superstar",
    bio: "With over 30 years in the Indian film industry, Akshay Kumar is one of the most prolific actors and influential personalities in Indian cinema.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    topic: "Journey from Action Hero to Social Advocate",
    color: "#0c5352",
    gradient: "from-emerald-500 to-emerald-600",
    social: {
      twitter: "@akshaykumar",
      instagram: "@akshaykumar",
      linkedin: "akshay-kumar"
    }
  },
  {
    id: 2,
    name: "Raima Sen",
    role: "Award-Winning Actress",
    bio: "Known for her work in independent cinema and mainstream Bollywood, Raima has been a vocal advocate for women's rights in the entertainment industry.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    topic: "Breaking Stereotypes in Indian Cinema",
    color: "#0c5352",
    gradient: "from-emerald-500 to-emerald-600",
    social: {
      twitter: "@raimasen",
      instagram: "@raimasen",
      linkedin: "raima-sen"
    }
  },
  {
    id: 3,
    name: "Arjun Kapur",
    role: "Tech Entrepreneur",
    bio: "Founder of multiple successful startups, Arjun is known for his inspiring talks on innovation, leadership, and the future of technology in India.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    topic: "Innovation at the Intersection of Technology and Creativity",
    color: "#0c5352",
    gradient: "from-emerald-500 to-emerald-600",
    social: {
      twitter: "@arjunkapur",
      instagram: "@arjunkapur",
      linkedin: "arjun-kapur"
    }
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Environmental Scientist",
    bio: "Leading researcher in sustainable development with numerous publications and a powerful voice in the climate change conversation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    topic: "Sustainable Futures: Our Collective Responsibility",
    color: "#0c5352",
    gradient: "from-emerald-500 to-emerald-600",
    social: {
      twitter: "@priyasharma",
      instagram: "@priyasharma",
      linkedin: "priya-sharma"
    }
  },
];
>>>>>>> c76cb8f9b00877775e20a0ca6730ad2782b3cef7

export default function Home() {
  const [activeTab, setActiveTab] = useState("bubba")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentCoach = coaches.find((coach) => coach.id === activeTab) || coaches[0]

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Animated Background */}
=======
    <section id="speakers" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

>>>>>>> c76cb8f9b00877775e20a0ca6730ad2782b3cef7
      <div className="absolute inset-0">
        <div
          className="absolute grayscale inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-all duration-1000"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/bd/New_York_City_Skyline_at_Dusk.jpg')",
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-black/90 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/90 to-transparent" />
        
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#10B981]/5 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full filter blur-3xl animate-pulse-medium" />
      </div>
<<<<<<< HEAD
=======
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-6"
            // style={{
            //   background: `linear-gradient(135deg, #ffffff 0%, ${currentSpeaker.color} 100%)`,
            //   WebkitBackgroundClip: 'text',
            //   WebkitTextFillColor: 'transparent',
            //   backgroundClip: 'text',
            // }}
          >
            Celebrity Speakers
          </motion.h2>
          
          <motion.div
            className="relative mb-8"
            initial={{ width: 0 }}
            animate={{ width: "300px" }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <div 
              className="h-2 mx-auto rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentSpeaker.color}, transparent)`
              }}
            />
          </motion.div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Get inspired by our lineup of distinguished speakers
          </p>
        </motion.div>
>>>>>>> c76cb8f9b00877775e20a0ca6730ad2782b3cef7

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header Section */}
        <div className="container mx-auto px-6 md:px-8 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest mb-2 text-[#10B981] animate-fade-in">
            CELEBRITY SPEAKERS
          </h1>
          <p className="text-gray-300 text-lg animate-fade-in delay-100">World-class coaching from industry leaders</p>
        </div>
       
        {/* Tab Navigation */}
        <div className="container mx-auto px-6 md:px-8 py-4">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/10 shadow-lg">
              {coaches.map((coach) => (
                <button
                  key={coach.id}
                  onClick={() => setActiveTab(coach.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    activeTab === coach.id 
                      ? "bg-[#10B981] text-white shadow-md" 
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {coach.name.split(" ")[0]} {coach.name.split(" ")[1]}
                  {activeTab === coach.id && (
                    <span className="absolute inset-0 bg-white/10 animate-ping rounded-md opacity-75"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-8 flex-1 flex items-center">
          <div className="flex flex-col items-center space-y-8 w-full">
            {/* Centered Professional Image with Text Overlay */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 md:w-96 md:h-[420px] relative transition-all duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981] to-emerald-400 rounded-lg opacity-30 animate-pulse-slow"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-emerald-400 rounded-lg opacity-0 transition-opacity duration-700 hover:opacity-20"></div>
                  
                  <img
                    src={currentCoach.image || "/placeholder.svg"}
                    alt={`${currentCoach.name} - ${currentCoach.designation}`}
                    className={`w-full h-full object-cover object-center rounded-lg relative z-10 transition-all duration-500 ${
                      isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
                  />
                  
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 rounded-lg z-20 transition-all duration-500">
                    <h2 className={`text-2xl md:text-4xl font-bold tracking-[0.2em] text-white drop-shadow-2xl whitespace-nowrap transition-all duration-700 ${
                      isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                    }`}>
                      {currentCoach.name}
                    </h2>
                    <p className={`text-sm md:text-lg text-white/90 tracking-widest font-light mt-2 drop-shadow-lg transition-all duration-700 delay-100 ${
                      isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                    }`}>
                      {currentCoach.designation}
                    </p>
                    {/* Animated Decorative Line */}
                    <div className={`w-16 h-0.5 bg-[#10B981] mt-4 transition-all duration-700 delay-200 ${
                      isTransitioning ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    }`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Hire Section */}
        <div className="container mx-auto px-6 bg-gradient-to-b from-[#020617] to-black md:px-8 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className={`text-2xl md:text-3xl font-bold tracking-wider transition-all duration-700 text-[#10B981] ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              {currentCoach.title}
            </h2>

            <p className={`text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              {currentCoach.description}
            </p>

            <div className={`pt-6 transition-all duration-700 delay-200 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
             
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes pulseMedium {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s infinite;
        }
        .animate-pulse-medium {
          animation: pulseMedium 4s infinite;
        }
      `}</style>
    </div>
  )
}