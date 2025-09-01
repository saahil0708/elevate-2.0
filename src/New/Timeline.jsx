"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Clock,
  Users,
  Calendar,
  Coffee,
  Mic,
  Users2,
  BookOpen,
  MessageSquare,
  Award,
  Activity,
  MapPin,
  Star,
  Zap,
  Target,
  ArrowDown,
  Sparkles,
  TrendingUp,
  Globe,
  Heart,
} from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const AnimatedEventTimeline = () => {
  const [activeDay, setActiveDay] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleEvents, setVisibleEvents] = useState(new Set())
  const [hoveredEvent, setHoveredEvent] = useState(null)
  const [isTimelineInView, setIsTimelineInView] = useState(false)
  const timelineRef = useRef(null)
  const { scrollY } = useScroll()

  // Transform scroll to background position
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "50%"])
  const backgroundRotate = useTransform(scrollY, [0, 1000], [0, 360])

  const eventData = {
    1: {
      title: "Explore Possibilities | Build Foundations",
      subtitle: "Keynotes & Strategic Insights",
      date: "Thursday, September 11, 2025",
      color: "#20A97B",
      keynoteSpeaker: {
        name: "Aman Gupta",
        title: "Co-Founder & CMO, boAt",
        bio: "Aman Gupta, Co-founder and CMO of boAt, is a leading entrepreneur who transformed India's audio and wearable market with affordable, stylish products.",
        image: "https://www.celebzliving.com/wp-content/uploads/2023/09/Aman-Gupta.jpg",
        topic: "Brand Building & Fearless Entrepreneurship",
        duration: "45 minutes",
        rating: 4.9,
      },
      events: [
        {
          id: 1,
          time: "09:30 - 10:15",
          title: "Opening & Inaugural Ceremony",
          description:
            "Welcome Address by Leadership, Lighting of the Lamp & Institutional Vision and Cultural Welcome Showcase",
          location: "Auditorium",
          attendees: "All participants",
          type: "registration",
          icon: <Users2 className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 487,
        },
        {
          id: 2,
          time: "10:30 - 11:15",
          title: "Celebrity Keynote – Mr. Aman Gupta (Co-Founder, boAt)",
          description: "Brand Building & Fearless Entrepreneurship",
          location: "Auditorium",
          attendees: "All participants",
          type: "keynote",
          icon: <Mic className="w-5 h-5" />,
          status: "featured",
          priority: "high",
          capacity: 500,
          registered: 500,
        },
        {
          id: 3,
          time: "11:15 - 12:50",
          title: "Panel Discussion – Shaping Future Careers: Where Academia Meets Industry",
          description:
            "Corporate & Academic Stalwarts and Insights on future-ready careers, interdisciplinary growth, and aligning passions with profession",
          location: "Auditorium",
          attendees: "All participants",
          type: "panel",
          icon: <MessageSquare className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 432,
        },
        {
          id: 4,
          time: "12:50 - 01:25",
          title: "Lunch Break & Networking",
          description: "Industry leaders roundtable on emerging opportunities and challenges",
          location: "Cusione",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 500,
        },
        {
          id: 5,
          time: "01:30 - 04:30",
          title: "Midday Workshops",
          description: [
            <span key="cluster-a" className="text-[#20A97B] font-semibold">
              For Cluster A (Engineering, Business, Hotel Management)
            </span>,
            <br key="br1" />,
            "Generative AI for Campus Productivity, ",
            "Canva + No-Code Tools for Innovation and, ",
            "Personal Branding on LinkedIn & Beyond ",
            <br key="br2" />,
            <span key="cluster-b" className="text-[#20A97B] font-semibold">
              For Cluster B (Pharmacy, Paramedical, Law)
            </span>,
            <br key="br3" />,
            "AI in Diagnostics & Smart Healthcare, ",
            "Clinical Innovation & Patient Experience and, ",
            "Pharma Branding & Digital Health Trends",
          ],
          location: "Auditorium",
          attendees: "All participants",
          type: "workshop",
          icon: <Users2 className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 456,
        },
        {
          id: 6,
          time: "04:30 - 05:00",
          title: "Tea Break & Networking",
          description: "High Tea with networking opportunities",
          location: "Auditorium",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 500,
        },
        {
          id: 7,
          time: "05:00 - onwards",
          title: "Comedy Night – Laugh & Connect",
          description:
            "Live Stand-Up by National Artists | Student Open Mic Slots A relaxed evening to unwind and connect through humour",
          location: "Auditorium",
          attendees: "All participants",
          type: "activity",
          icon: <Heart className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 478,
        },
      ],
    },
    2: {
      title: "Dream. Design. Disrupt.",
      subtitle: "Workshops & Team Building",
      date: "Friday, September 12, 2025",
      color: "#3B82F6",
      theme: "Dream and Live it.",
      keynoteSpeaker: {
        name: "Anand Kumar",
        title: "Founder, Super 30",
        bio: "Anand Kumar, founder of Super 30, is renowned for coaching underprivileged students for IIT exams and making quality education accessible to all.",
        image: "https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1559647607.jpg",
        topic: "Grit & Grace – The Real Superpower",
        duration: "60 minutes",
        rating: 4.8,
      },
      events: [
        {
          id: 11,
          time: "09:30 - 10:30",
          title: "Startup ALLY Expo",
          description:
            "Powered by SVGOI Students & Alumni, Startup Booths | Product Showcases | Internship Zones and, First-hand experience of innovation, entrepreneurship & possibility",
          location: "Auditorium",
          attendees: "All participants",
          type: "presentation",
          icon: <TrendingUp className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 423,
        },
        {
          id: 12,
          time: "10:30 - 11:15",
          title: "Startup Panel – From Garage to Growth",
          description:
            "Alumni Founders | Incubation Leaders and, Stories of resilience, pivoting & early-stage risk-taking",
          location: "Auditorium",
          attendees: "All participants",
          type: "panel",
          icon: <MessageSquare className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 445,
        },
        {
          id: 13,
          time: "11:15 - 11:45",
          title: "Tech Communities Panel – Connect with the Tech Universe",
          description: "A space to connect, collaborate, and explore the tech universe.",
          location: "Auditorium",
          attendees: "All participants",
          type: "panel",
          icon: <Globe className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 389,
        },
        {
          id: 14,
          time: "11:45 - 12:10",
          title: "DCA-NEXTEDGE – Soft Skills Session",
          description: "Next-gen communication, leadership & career skills",
          location: "Auditorium",
          attendees: "All participants",
          type: "workshop",
          icon: <Users2 className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 467,
        },
        {
          id: 15,
          time: "12:10 - 12:30",
          title: "Placement Orientation",
          description: "SVGOI Career Services Team and, Roadmap for internships, placements & beyond",
          location: "Auditorium",
          attendees: "All participants",
          type: "presentation",
          icon: <Target className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 489,
        },
        {
          id: 16,
          time: "12:30 - 01:00",
          title: "ERP Session",
          description: "SVGOI Career Services Team and, Roadmap for internships, placements & beyond",
          location: "Auditorium",
          attendees: "All participants",
          type: "workshop",
          icon: <Activity className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 401,
        },
        {
          id: 17,
          time: "01:30 - 02:00",
          title: "Lunch Break & Networking",
          description: "Lunch with networking opportunities",
          location: "Auditorium",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 500,
        },
        {
          id: 18,
          time: "02:00 - 03:00",
          title: "Keynote: Shri Anand Kumar (Founder, Super 30)",
          description: "Grit & Grace – The Real Superpower",
          location: "Auditorium",
          attendees: "All participants",
          type: "keynote",
          icon: <Mic className="w-5 h-5" />,
          status: "featured",
          priority: "critical",
          capacity: 500,
          registered: 500,
        },
        {
          id: 19,
          time: "03:00 - 04:00",
          title: "IDEAJAM 2.0 – Final Pitch Presentations",
          description: "Top student teams pitch to investors & faculty",
          location: "Auditorium",
          attendees: "All participants",
          type: "presentation",
          icon: <BookOpen className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 378,
        },
        {
          id: 20,
          time: "04:00 - 05:00",
          title: "Vision Panel – SVGOI Management & Leadership",
          description: "Reimagining Education: From Degree to Destiny",
          location: "Auditorium",
          attendees: "All participants",
          type: "panel",
          icon: <Users2 className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 423,
        },
        {
          id: 21,
          time: "05:00 - 05:30",
          title: "Spiritual Session",
          description: "Reflective hour for inner growth and calm focus",
          location: "Auditorium",
          attendees: "All participants",
          type: "activity",
          icon: <Sparkles className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 445,
        },
      ],
    },
    3: {
      title: "Unity in Diversity – The SVGOI Spirit",
      subtitle: "Presentations & Future Planning",
      date: "Saturday, September 13, 2025",
      color: "#F59E0B",
      theme: "Cultural Carnival",
      keynoteSpeaker: {
        name: "Dr. Sarah Mitchell",
        title: "Chief Innovation Officer, TechForward Institute",
        bio: "Dr. Mitchell leads groundbreaking research in emerging technologies and digital transformation strategies for Fortune 500 companies worldwide.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
        topic: "Cultural Carnival",
        duration: "50 minutes",
        rating: 4.7,
      },
      events: [
        {
          id: 21,
          time: "09:30 - 01:00",
          title: "Cultural Carnival",
          description: "Music, Dance, Drama & Fashion Competitions",
          location: "Auditorium",
          attendees: "All participants",
          type: "activity",
          icon: <Heart className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 489,
        },
        {
          id: 22,
          time: "02:00 - 03:30",
          title: "Dance Show",
          description: "College Dance Teams Perform",
          location: "Auditorium",
          attendees: "All participants",
          type: "activity",
          icon: <Activity className="w-5 h-5" />,
          status: "featured",
          priority: "critical",
          capacity: 500,
          registered: 500,
        },
        {
          id: 23,
          time: "03:30 - 04:30",
          title: "Recognition Ceremony",
          description:
            "Awards for Cultural & Sports Excellence, Faculty & Staff Honours and, Celebrating achievements and contributions",
          location: "Auditorium",
          attendees: "All participants",
          type: "ceremony",
          icon: <Award className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium",
          capacity: 500,
          registered: 467,
        },
        {
          id: 24,
          time: "05:30 - onwards",
          title: "Band Night",
          description: "Live music performances and celebration",
          location: "Auditorium",
          attendees: "All participants",
          type: "activity",
          icon: <Activity className="w-5 h-5" />,
          status: "confirmed",
          priority: "high",
          capacity: 500,
          registered: 489,
        },
      ],
    },
  }

  // Enhanced smooth scroll-based animation control
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!timelineRef.current) return

          const timelineElement = timelineRef.current
          const rect = timelineElement.getBoundingClientRect()
          const windowHeight = window.innerHeight

          const timelineTop = rect.top
          const timelineHeight = rect.height
          const viewportStart = windowHeight * 0.1
          const viewportEnd = windowHeight * 0.9

          let progress = 0
          if (timelineTop < viewportStart) {
            const scrolled = viewportStart - timelineTop
            const totalScrollDistance = timelineHeight + (viewportStart - viewportEnd)
            progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1)
          }

          // Smooth progress transition
          setScrollProgress(prevProgress => {
            const diff = progress - prevProgress
            return prevProgress + diff * 0.1 // Smooth interpolation
          })

          const events = eventData[activeDay].events
          const newVisibleEvents = new Set()

          events.forEach((event, index) => {
            const eventProgress = (index + 0.3) / events.length // Earlier trigger
            if (progress >= eventProgress) {
              newVisibleEvents.add(event.id)
            }
          })

          setVisibleEvents(newVisibleEvents)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeDay])

  useEffect(() => {
    setScrollProgress(0)
    setVisibleEvents(new Set())
    setIsTimelineInView(false)
  }, [activeDay])

  // Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTimelineInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [activeDay])

  const getEventTypeStyles = (type, status, priority) => {
    const baseStyles =
      "inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-sm transition-all duration-300"

    if (status === "featured") {
      return `${baseStyles} bg-gradient-to-r from-[#20A97B]/30 to-teal-400/30 text-[#20A97B] border-[#20A97B]/50 shadow-lg shadow-[#20A97B]/30 hover:shadow-xl hover:shadow-[#20A97B]/40`
    }

    const typeStyles = {
      registration: "bg-slate-900/50 text-slate-200 border-slate-600/50 hover:bg-slate-800/60",
      ceremony: "bg-amber-900/50 text-amber-200 border-amber-600/50 hover:bg-amber-800/60",
      keynote: "bg-purple-900/50 text-purple-200 border-purple-600/50 hover:bg-purple-800/60",
      break: "bg-emerald-900/50 text-emerald-200 border-emerald-600/50 hover:bg-emerald-800/60",
      panel: "bg-blue-900/50 text-blue-200 border-blue-600/50 hover:bg-blue-800/60",
      workshop: "bg-orange-900/50 text-orange-200 border-orange-600/50 hover:bg-orange-800/60",
      session: "bg-indigo-900/50 text-indigo-200 border-indigo-600/50 hover:bg-indigo-800/60",
      activity: "bg-pink-900/50 text-pink-200 border-pink-600/50 hover:bg-pink-800/60",
      social: "bg-teal-900/50 text-teal-200 border-teal-600/50 hover:bg-teal-800/60",
      presentation: "bg-violet-900/50 text-violet-200 border-violet-600/50 hover:bg-violet-800/60",
    }

    return `${baseStyles} ${typeStyles[type] || typeStyles.session}`
  }

  const getPriorityIndicator = (priority) => {
    const indicators = {
      critical: <Zap className="w-3 h-3 text-red-400" />,
      high: <Star className="w-3 h-3 text-[#20A97B]" />,
      medium: <Target className="w-3 h-3 text-blue-400" />,
    }
    return indicators[priority] || indicators.medium
  }

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const eventVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const timelineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: `${scrollProgress * 100}%`,
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 30,
          duration: 0.6,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  }

  // Subtle event animation variants
  const enhancedEventVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.05, // Minimal stagger
      },
    }),
    hover: {
      y: -4,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  const currentDayColor = eventData[activeDay].color || "#20A97B"

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#020617" }}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-[#20A97B]/15 to-teal-400/15 rounded-full blur-3xl"
          style={{ y: backgroundY, rotate: backgroundRotate }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#20A97B]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.12, 0.05],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#20A97B]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Header Section */}
      <div className="relative z-10 border-b border-gray-800/30 backdrop-blur-2xl bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
            >
              <motion.div className="relative inline-block mb-8">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-6xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6 tracking-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Time<span className="text-[#20A97B">Line</span>
                </motion.h1>
                <motion.div
                  className="w-40 h-0.5 bg-gradient-to-r from-transparent via-[#20A97B] to-transparent mx-auto"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                />

                {/* Animated underline */}
                {/* <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#20A97B] to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 1.5, delay: 1 }}
                /> */}

                {/* Floating sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 20}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5 + 2,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-full h-full text-[#20A97B]" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-xl sm:text-2xl text-gray-300 mb-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Three-Day Executive Program
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base text-[#20A97B] font-bold uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                {["AI", "Web3", "Cloud", "Design", "Security"].map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 bg-[#20A97B]/10 rounded-xl border border-[#20A97B]/30 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Enhanced Day Navigation */}
        <motion.div
          className="mb-12 sm:mb-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="relative">
            <div className="inline-flex backdrop-blur-2xl bg-gray-900/60 rounded-full border border-gray-700/50 p-2 shadow-2xl shadow-[#20A97B]/20">
              {[1, 2, 3].map((day) => {
                const isActive = activeDay === day
                const dayColor = eventData[day].color
                return (
                  <motion.button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`relative px-6 sm:px-8 py-1 sm:py-1 rounded-full text-sm font-bold transition-all duration-500 group ${isActive ? "text-white shadow-xl" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: isActive ? `linear-gradient(135deg, ${dayColor}88, ${dayColor}44)` : "transparent",
                    }}
                  >
                    <div className="flex flex-col items-center relative z-10">
                      <motion.span
                        className="text-lg sm:text-xl font-black mb-1"
                        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        Day {day}
                      </motion.span>
                      {/* <motion.span 
                        className="text-xs opacity-80 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.3 }}
                      >
                        {eventData[day].events.length} events
                      </motion.span> */}
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl border-2 opacity-50"
                        style={{ borderColor: dayColor }}
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${dayColor}40, transparent)`,
                        boxShadow: `0 0 20px ${dayColor}30`,
                      }}
                    />
                  </motion.button>
                )
              })}
            </div>

            {/* Progress indicator */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center text-gray-400 text-sm"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown className="w-4 h-4 mr-2" />
              <span>Scroll to explore timeline</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Timeline Section */}
          <div className="xl:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 50, rotateY: 15 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
                ref={timelineRef}
                style={{ perspective: "1000px" }}
              >
                {/* Day Header */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border shadow-2xl p-4 sm:p-6 mb-6 sm:mb-8"
                  style={{
                    borderColor: `${currentDayColor}40`,
                    boxShadow: `0 25px 50px -12px ${currentDayColor}20`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(45deg, ${currentDayColor}15, transparent, ${currentDayColor}10)`,
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <motion.h2
                          className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-4 leading-tight"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        >
                          {eventData[activeDay].title}
                        </motion.h2>
                        <motion.div
                          className="flex items-center text-gray-200 mb-3"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        >
                          <motion.div
                            className="w-8 h-8 bg-gradient-to-r from-[#20A97B]/20 to-teal-400/20 rounded-xl flex items-center justify-center mr-3 backdrop-blur-sm border border-[#20A97B]/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Calendar className="w-4 h-4 text-[#20A97B]" />
                          </motion.div>
                          <span className="text-lg sm:text-xl font-medium">{eventData[activeDay].date}</span>
                        </motion.div>
                        <motion.p
                          className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#20A97B] to-teal-400 bg-clip-text text-transparent"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          {eventData[activeDay].theme || eventData[activeDay].subtitle}
                        </motion.p>
                      </div>

                      <motion.div
                        className="text-center lg:text-right"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <div className="text-sm text-gray-400 mb-2 font-medium">Total Sessions</div>
                        <motion.div
                          className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-[#20A97B] to-teal-400 bg-clip-text text-transparent mb-2"
                          // animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {eventData[activeDay].events.length}
                        </motion.div>
                        <div className="text-xs text-gray-500 font-medium">Interactive Events</div>
                      </motion.div>
                    </div>

                    {/* Progress bar */}
                    {/* <motion.div 
                      className="mt-6 sm:mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Timeline Progress</span>
                        <span>{Math.round(scrollProgress * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#20A97B] to-teal-400 rounded-full shadow-lg"
                          style={{ width: `${scrollProgress * 100}%` }}
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                      </div>
                    </motion.div> */}
                  </div>
                </motion.div>

                {/* Enhanced Timeline with Path */}
                <div className="relative">
                  {/* Timeline Path Background */}
                  <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gray-800/60 rounded-full hidden sm:block">
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(to bottom, ${currentDayColor}20, transparent, ${currentDayColor}20)`,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Active Timeline Path */}
                  <div className="absolute left-8 top-0 bottom-0 w-[3px] rounded-full hidden sm:block overflow-hidden">
                    <motion.div
                      className="w-full rounded-full relative"
                      style={{
                        background: `linear-gradient(to bottom, ${currentDayColor}, ${currentDayColor}88, ${currentDayColor}44)`,
                        boxShadow: `0 0 20px ${currentDayColor}40, inset 0 0 10px ${currentDayColor}20`,
                      }}
                      variants={timelineVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Flowing animation effect */}
                      <motion.div
                        className="absolute inset-0 w-full rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, transparent, ${currentDayColor}60, transparent)`,
                        }}
                        animate={{
                          y: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    {/* Enhanced Progress indicator */}
                    {scrollProgress > 0 && (
                      <motion.div
                        className="absolute -right-[7px] w-4 h-4 rounded-full"
                        style={{
                          top: `${scrollProgress * 100}%`,
                          transform: "translateY(-50%)",
                          background: `radial-gradient(circle, ${currentDayColor}, ${currentDayColor}aa)`,
                          boxShadow: `0 0 30px ${currentDayColor}80, 0 0 60px ${currentDayColor}40`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      >
                        {/* Inner core */}
                        <motion.div
                          className="absolute inset-1 rounded-full"
                          style={{ background: currentDayColor }}
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.8, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                          }}
                        />
                        {/* Outer pulse rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full border-2"
                            style={{ borderColor: `${currentDayColor}60` }}
                            animate={{
                              scale: [1, 2.5 + i * 0.5],
                              opacity: [0.6, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.3,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}

                    {/* Enhanced Timeline dots for each event */}
                    {eventData[activeDay].events.map((event, index) => {
                      const dotProgress = (index + 1) / eventData[activeDay].events.length
                      const isActive = scrollProgress >= dotProgress - 0.05
                      const isPassed = scrollProgress > dotProgress + 0.05

                      return (
                        <motion.div
                          key={event.id}
                          className="absolute -right-[8px] w-4 h-4 rounded-full border-2"
                          style={{
                            top: `${dotProgress * 100}%`,
                            transform: "translateY(-50%)",
                            borderColor: isActive ? currentDayColor : "#374151",
                            background: isPassed ? currentDayColor : isActive ? `${currentDayColor}40` : "#1F2937",
                            boxShadow: isActive ? `0 0 15px ${currentDayColor}60` : "none",
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: isActive ? 1.1 : 0.8,
                            opacity: isActive ? 1 : 0.6,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            delay: index * 0.05,
                          }}
                          whileHover={{
                            scale: 1.3,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {/* Inner dot animation */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-1 rounded-full"
                              style={{ background: currentDayColor }}
                              animate={{
                                scale: [0.8, 1.2, 0.8],
                                opacity: [0.8, 1, 0.8]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut"
                              }}
                            />
                          )}
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Enhanced Events */}
                  <motion.div
                    className="space-y-6 sm:space-y-8 lg:space-y-10 pl-0 sm:pl-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {eventData[activeDay].events.map((event, index) => {
                      const isVisible = visibleEvents.has(event.id)
                      const eventProgress = (index + 1) / eventData[activeDay].events.length
                      const isCurrentEvent =
                        scrollProgress >= eventProgress - 0.12 && scrollProgress <= eventProgress + 0.12
                      const isHovered = hoveredEvent === event.id
                      const isPassed = scrollProgress > eventProgress + 0.12

                      return (
                        <motion.div
                          key={event.id}
                          custom={index}
                          variants={enhancedEventVariants}
                          initial="hidden"
                          animate={isVisible ? "visible" : "hidden"}
                          whileHover="hover"
                          className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 group cursor-pointer border ${isCurrentEvent ? "shadow-2xl" : "shadow-lg"
                            } ${isVisible ? "opacity-100" : "opacity-20"}`}
                          style={{
                            background: isCurrentEvent
                              ? `linear-gradient(135deg, ${currentDayColor}18, ${currentDayColor}08, transparent)`
                              : isPassed
                                ? `linear-gradient(135deg, ${currentDayColor}08, transparent)`
                                : "linear-gradient(135deg, #1F293790, #11182790)",
                            borderColor: isCurrentEvent
                              ? `${currentDayColor}70`
                              : isPassed
                                ? `${currentDayColor}30`
                                : "#374151",
                            boxShadow: isCurrentEvent
                              ? `0 20px 40px -12px ${currentDayColor}40, 0 0 0 1px ${currentDayColor}20`
                              : isPassed
                                ? `0 8px 16px -4px ${currentDayColor}20`
                                : "0 8px 16px -4px rgba(0, 0, 0, 0.3)",
                          }}
                          onClick={() => setHoveredEvent(isHovered ? null : event.id)}
                        >
                          <div className="p-4 sm:p-5">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1">
                                {/* Lower icon size */}
                                {React.cloneElement(event.icon, { className: "w-4 h-4" })}
                                <span className="text-base sm:text-lg font-medium">{event.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {/* Lower priority icon size */}
                                {React.cloneElement(getPriorityIndicator(event.priority), { className: "w-3 h-3" })}
                                <span className="text-xs sm:text-sm text-gray-400">{event.status}</span>
                              </div>
                            </div>
                            <motion.h3
                              className="text-lg sm:text-xl font-bold mb-1"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              {event.title}
                            </motion.h3>
                            <motion.p
                              className="text-sm sm:text-base text-gray-300 mb-2"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              {event.description}
                            </motion.p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-xs sm:text-sm text-gray-400">{event.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4 text-gray-400" />
                                <span className="text-xs sm:text-sm text-gray-400">{event.attendees}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar Section */}
          <div className="xl:col-span-1 space-y-6">
            {/* Keynote Speaker Card */}
            <motion.div
              className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border shadow-xl p-6"
              style={{
                borderColor: `${currentDayColor}40`,
                boxShadow: `0 12px 24px -6px ${currentDayColor}20`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(45deg, ${currentDayColor}15, transparent, ${currentDayColor}10)`,
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Featured Speaker
                </motion.h3>

                {/* Speaker Image and Basic Info */}
                <motion.div
                  className="text-center mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={eventData[activeDay].keynoteSpeaker.image}
                    alt={eventData[activeDay].keynoteSpeaker.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2"
                    style={{ borderColor: currentDayColor }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.h4
                    className="text-lg font-bold text-white mb-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {eventData[activeDay].keynoteSpeaker.name}
                  </motion.h4>
                  <motion.p
                    className="text-sm font-medium mb-2"
                    style={{ color: currentDayColor }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {eventData[activeDay].keynoteSpeaker.title}
                  </motion.p>
                </motion.div>

                {/* Bio */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {eventData[activeDay].keynoteSpeaker.bio}
                  </p>
                </motion.div>

                {/* Topic */}
                <motion.div
                  className="mb-4 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-4 h-4" style={{ color: currentDayColor }} />
                    <span className="text-sm font-medium text-white">Session Topic</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    {eventData[activeDay].keynoteSpeaker.topic}
                  </p>
                </motion.div>

                {/* Details */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">Duration</span>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {eventData[activeDay].keynoteSpeaker.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#20A97B]" />
                      <span className="text-sm text-gray-300">Rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-white">
                        {eventData[activeDay].keynoteSpeaker.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(eventData[activeDay].keynoteSpeaker.rating)
                              ? 'text-[#20A97B] fill-current'
                              : 'text-gray-600'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Day Stats Card */}
            {/* <motion.div
              className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border shadow-xl p-6"
              style={{
                borderColor: `${currentDayColor}40`,
                boxShadow: `0 12px 24px -6px ${currentDayColor}20`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3
                className="text-lg font-bold mb-4 text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Day {activeDay} Overview
              </motion.h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: currentDayColor }} />
                    <span className="text-sm text-gray-300">Total Events</span>
                  </div>
                  <span className="text-lg font-bold text-white">
                    {eventData[activeDay].events.length}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: currentDayColor }} />
                    <span className="text-sm text-gray-300">Expected Attendees</span>
                  </div>
                  <span className="text-lg font-bold text-white">2000+</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: currentDayColor }} />
                    <span className="text-sm text-gray-300">Duration</span>
                  </div>
                  <span className="text-lg font-bold text-white">Full Day</span>
                </div>
              </div>

              Progress indicator
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Timeline Progress</span>
                  <span>{Math.round(scrollProgress * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${currentDayColor}, ${currentDayColor}88)`,
                      width: `${scrollProgress * 100}%`
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedEventTimeline
