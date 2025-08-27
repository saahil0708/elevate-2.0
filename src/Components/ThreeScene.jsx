"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG Icons
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
  </svg>
);

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14" fill="currentColor">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
  </svg>
);

const StarHalf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" height="14" fill="currentColor">
    <path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0z"/>
  </svg>
);

// Social Media Icons with Clip Paths
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
);

// Custom SVG patterns for backgrounds
const HexagonPattern = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id={`hexagon-${color.replace('#', '')}`} x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
        <polygon points="50,1 90,25 90,75 50,99 10,75 10,25" fill="none" stroke={color} strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#hexagon-${color.replace('#', '')})`} />
  </svg>
);

const WavePattern = ({ color }) => (
  <svg className="absolute top-0 left-0 w-full h-32 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}/>
  </svg>
);

const speakersData = [
  {
    id: 1,
    name: "Akshay Kumar",
    role: "Bollywood Superstar",
    bio: "With over 30 years in the Indian film industry, Akshay Kumar is one of the most prolific actors and influential personalities in Indian cinema.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    topic: "Journey from Action Hero to Social Advocate",
    color: "#1cb683",
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
    color: "#1cb683",
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
    color: "#1cb683",
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
    color: "#1cb683",
    gradient: "from-emerald-500 to-emerald-600",
    social: {
      twitter: "@priyasharma",
      instagram: "@priyasharma",
      linkedin: "priya-sharma"
    }
  },
];

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        let content = "";
        
        if (starValue <= Math.floor(rating)) {
          content = <Star />;
        } else if (rating > i && rating < starValue + 1) {
          content = <StarHalf />;
        } else {
          content = <Star className="text-gray-600" />;
        }
        
        return (
          <span key={i} className="text-yellow-400 mr-1">
            {content}
          </span>
        );
      })}
      <span className="ml-2 text-white font-semibold text-sm">{rating.toFixed(1)}</span>
    </div>
  );
};

const SpeakersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === speakersData.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 1200);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? speakersData.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 1200);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsTransitioning(false);
      setIsAutoPlaying(true);
    }, 1200);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45,
      rotateX: 15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
      rotateX: -15,
    })
  };

  const currentSpeaker = speakersData[currentIndex];

  return (
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

      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(28, 182, 131, 0.03), transparent 50%), 
                        radial-gradient(circle at 80% 80%, rgba(28, 182, 131, 0.02), transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(28, 182, 131, 0.01), transparent 40%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Hexagon pattern */}
        <HexagonPattern color={currentSpeaker.color} />
        
        {/* Wave pattern */}
        <WavePattern color={`${currentSpeaker.color}30`} />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 opacity-20"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 opacity-15"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-25"
          style={{
            clipPath: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6"
            style={{
              background: `linear-gradient(135deg, #ffffff 0%, ${currentSpeaker.color} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
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

        {/* Main Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[600px] perspective-1000">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  duration: 0.8
                }}
                className="absolute inset-0"
              >
                {/* Transition Flash Effect */}
                <motion.div 
                  className="absolute inset-0 z-50 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle, ${currentSpeaker.color}40, transparent 70%)`
                  }}
                  initial={{ opacity: 1, scale: 0 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Speaker Card */}
                <div className="relative h-full">
                  {/* Main Card Container */}
                  <motion.div 
                    className="backdrop-blur-xl bg-gray-900/40 border-2 rounded-3xl p-8 shadow-2xl h-full overflow-hidden flex flex-col lg:flex-row"
                    style={{ 
                      borderColor: `${currentSpeaker.color}60`,
                      boxShadow: `0 25px 50px -12px ${currentSpeaker.color}25`
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10"
                      style={{
                        clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                        backgroundColor: currentSpeaker.color
                      }}
                    />
                    
                    <div className="absolute bottom-0 left-0 w-32 h-32 opacity-15"
                      style={{
                        clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
                        backgroundColor: currentSpeaker.color
                      }}
                    />
                    
                    <div className="absolute top-1/2 right-8 w-16 h-16 opacity-20"
                      style={{
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        backgroundColor: currentSpeaker.color
                      }}
                    />

                    {/* Speaker Image Section */}
                    <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8 flex justify-center lg:justify-start ">
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                      >
                        {/* Glow Effect */}
                        <div 
                          className="absolute -inset-4 rounded-3xl blur-xl opacity-40"
                          style={{ backgroundColor: currentSpeaker.color }}
                        />
                        
                        {/* Image Container with Complex Clip Path */}
                        <div 
                          className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 overflow-hidden border-3 shadow-2xl"
                          style={{
                            clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
                            borderColor: currentSpeaker.color,
                          }}
                        >
                          <motion.img
                            src={currentSpeaker.image}
                            alt={currentSpeaker.name}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          />
                          
                          {/* Image Overlay */}
                          <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                              background: `linear-gradient(135deg, ${currentSpeaker.color}40, transparent)`
                            }}
                          />
                        </div>

                        {/* Social Media Icons with Clip Paths */}
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        >
                          {Object.entries(currentSpeaker.social).map(([platform, handle], index) => {
                            const Icon = platform === 'twitter' ? TwitterIcon : platform === 'linkedin' ? LinkedInIcon : InstagramIcon;
                            return (
                              <motion.div
                                key={platform}
                                className="relative group cursor-pointer"
                                whileHover={{ scale: 1.1, y: -5 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                              >
                                <div 
                                  className="w-10 h-10 flex items-center justify-center text-white border-2 shadow-lg backdrop-blur-sm group-hover:text-black transition-all duration-300"
                                  style={{
                                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                                    backgroundColor: `${currentSpeaker.color}30`,
                                    borderColor: currentSpeaker.color
                                  }}
                                >
                                  <Icon />
                                </div>
                                
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                  {handle}
                                </div>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Speaker Details Section */}
                    <div className="flex-grow text-center lg:text-left flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-6"
                      >
                        {/* Name and Role */}
                        <div>
                          <h3 className="text-3xl lg:text-5xl font-black text-white mb-2 leading-tight">
                            {currentSpeaker.name}
                          </h3>
                          
                          <motion.div
                            className="inline-block px-4 py-2 rounded-full border-2 backdrop-blur-sm"
                            style={{
                              backgroundColor: `${currentSpeaker.color}20`,
                              borderColor: currentSpeaker.color,
                              color: currentSpeaker.color
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-lg font-bold">
                              {currentSpeaker.role}
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start">
                          <Rating rating={currentSpeaker.rating} />
                        </div>
                        
                        {/* Topic */}
                        <div className="relative">
                          <div 
                            className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
                            style={{ backgroundColor: currentSpeaker.color }}
                          />
                          <div className="pl-6">
                            <span className="text-white font-bold text-sm uppercase tracking-wider">Speaking Topic</span>
                            <p className="text-lg font-semibold text-gray-200 mt-1">
                              {currentSpeaker.topic}
                            </p>
                          </div>
                        </div>
                        
                        {/* Bio */}
                        <div className="relative">
                          <p className="text-gray-300 leading-relaxed text-base lg:text-lg font-light">
                            {currentSpeaker.bio}
                          </p>
                          
                          {/* Decorative Quote Marks */}
                          <div 
                            className="absolute -top-2 -left-2 text-4xl font-bold opacity-30"
                            style={{ color: currentSpeaker.color }}
                          >
                            "
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <motion.button
                          className="inline-flex items-center px-8 py-4 rounded-full font-bold text-white shadow-xl backdrop-blur-sm border-2 group overflow-hidden relative"
                          style={{
                            backgroundColor: `${currentSpeaker.color}30`,
                            borderColor: currentSpeaker.color
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10 mr-2">Learn More</span>
                          <ChevronRight />
                          
                          {/* Button hover effect */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: currentSpeaker.color }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 0.2 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={handlePrev}
              className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-gray-900/60 border-2 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-20 group"
              style={{ 
                borderColor: `${currentSpeaker.color}50`,
                boxShadow: `0 8px 25px -8px ${currentSpeaker.color}40`
              }}
              whileHover={{ 
                backgroundColor: `${currentSpeaker.color}20`,
                borderColor: currentSpeaker.color 
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous speaker"
            >
              <ChevronLeft />
              
              {/* Arrow glow effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: currentSpeaker.color }}
              />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-gray-900/60 border-2 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-20 group"
              style={{ 
                borderColor: `${currentSpeaker.color}50`,
                boxShadow: `0 8px 25px -8px ${currentSpeaker.color}40`
              }}
              whileHover={{ 
                backgroundColor: `${currentSpeaker.color}20`,
                borderColor: currentSpeaker.color 
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next speaker"
            >
              <ChevronRight />
              
              {/* Arrow glow effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundColor: currentSpeaker.color }}
              />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center mt-12 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {speakersData.map((speaker, index) => (
              <motion.button
                key={speaker.id}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 h-4 rounded-full' 
                    : 'w-4 h-4 rounded-full opacity-50 hover:opacity-75'
                }`}
                style={{ backgroundColor: speaker.color }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to speaker ${index + 1}`}
              >
                {/* Active indicator glow */}
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full blur-sm"
                    style={{ backgroundColor: speaker.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ backgroundColor: `${currentSpeaker.color}20` }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: currentSpeaker.color }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentIndex}
        />
      </motion.div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating shapes that react to current speaker */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-8 h-8 opacity-30"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-6 h-6 opacity-25"
          style={{
            clipPath: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute top-2/3 left-1/3 w-10 h-10 opacity-20"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/6 right-1/4 w-12 h-12 opacity-15"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/6 left-1/5 w-14 h-14 opacity-10"
          style={{
            clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
            backgroundColor: currentSpeaker.color
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.6, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Enhanced Particle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`enhanced-particle-${currentIndex}-${i}`}
            className="absolute rounded-full"
            style={{ 
              backgroundColor: currentSpeaker.color,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            initial={{
              opacity: 0,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbital Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-opacity-10 rounded-full"
          style={{ borderColor: currentSpeaker.color }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute top-2 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2"
            style={{ backgroundColor: currentSpeaker.color }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-opacity-5 rounded-full"
          style={{ borderColor: currentSpeaker.color }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute bottom-2 right-1/2 w-2 h-2 rounded-full transform translate-x-1/2"
            style={{ backgroundColor: currentSpeaker.color }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersCarousel;