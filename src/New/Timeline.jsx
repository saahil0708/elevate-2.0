import React, { useState, useEffect, useRef } from 'react'
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
  Presentation,
  Activity,
  MapPin,
  UserCheck,
  Star,
  Zap,
  Target
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedEventTimeline = () => {
  const [activeDay, setActiveDay] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleEvents, setVisibleEvents] = useState(new Set())
  const timelineRef = useRef(null)
  const eventRefs = useRef({})

  const eventData = {
    1: {
      title: "Strategic Foundation Day",
      subtitle: "Keynotes & Strategic Insights",
      date: "Monday, September 11, 2025",
      theme: "Innovation & Leadership",
      keynoteSpeaker: {
        name: "Aman Gupta",
        title: "Co-Founder & CMO, boAt",
        bio: "Aman Gupta, Co-founder and CMO of boAt, is a leading entrepreneur who transformed India's audio and wearable market with affordable, stylish products.",
        image: "https://www.celebzliving.com/wp-content/uploads/2023/09/Aman-Gupta.jpg",
        topic: "Innovation in Modern Technology",
        duration: "45 minutes"
      },
      events: [
        {
          id: 1,
          time: "08:00 - 09:00",
          title: "Executive Registration & Welcome",
          description: "Professional check-in, networking breakfast, and welcome materials distribution",
          location: "Grand Foyer",
          attendees: "All participants",
          type: "registration",
          icon: <Users2 className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
        {
          id: 2,
          time: "09:00 - 09:30",
          title: "Opening Ceremony",
          description: "Welcome address by organizing committee and strategic event overview",
          location: "Main Auditorium",
          attendees: "All participants",
          type: "ceremony",
          icon: <Award className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
        {
          id: 3,
          time: "09:30 - 10:30",
          title: "Keynote: Innovation in Modern Technology",
          description: "Strategic insights for digital transformation and market leadership",
          location: "Main Auditorium",
          attendees: "All participants",
          type: "keynote",
          icon: <Mic className="w-5 h-5" />,
          status: "featured",
          priority: "critical"
        },
        {
          id: 4,
          time: "10:30 - 11:00",
          title: "Strategic Networking Break",
          description: "Premium coffee service and structured networking opportunities",
          location: "Exhibition Hall",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
        {
          id: 5,
          time: "11:00 - 12:30",
          title: "Executive Panel: Future Market Trends",
          description: "Industry leaders roundtable on emerging opportunities and challenges",
          location: "Conference Room A",
          attendees: "All participants",
          type: "panel",
          icon: <MessageSquare className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
        {
          id: 6,
          time: "12:30 - 13:30",
          title: "Executive Lunch & Networking",
          description: "Curated dining experience with continued strategic discussions",
          location: "Executive Dining Room",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
      ]
    },
    2: {
      title: "Collaborative Excellence Day",
      subtitle: "Workshops & Team Building",
      date: "Tuesday, September 12, 2025",
      theme: "Digital Transformation",
      keynoteSpeaker: {
        name: "Anand Kumar",
        title: "Founder, Super 30",
        bio: "Anand Kumar, founder of Super 30, is renowned for coaching underprivileged students for IIT exams and making quality education accessible to all.",
        image: "https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1559647607.jpg",
        topic: "Leadership in Digital Transformation",
        duration: "60 minutes"
      },
      events: [
        {
          id: 11,
          time: "08:30 - 09:00",
          title: "Executive Morning Briefing",
          description: "Premium breakfast service with strategic morning briefing materials",
          location: "Executive Lounge",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
        {
          id: 12,
          time: "09:00 - 10:00",
          title: "Keynote: Leadership in Digital Era",
          description: "Navigating organizational change and digital transformation strategies",
          location: "Main Auditorium",
          attendees: "All participants",
          type: "keynote",
          icon: <Mic className="w-5 h-5" />,
          status: "featured",
          priority: "critical"
        },
        {
          id: 13,
          time: "10:00 - 11:30",
          title: "Interactive Innovation Workshop",
          description: "Collaborative problem-solving with real-world case studies and solutions",
          location: "Innovation Lab",
          attendees: "40 participants",
          type: "workshop",
          icon: <BookOpen className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
        {
          id: 14,
          time: "11:30 - 12:00",
          title: "Strategic Networking Interval",
          description: "Structured networking with industry connection opportunities",
          location: "Networking Pavilion",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
        {
          id: 15,
          time: "12:00 - 13:30",
          title: "Executive Team Building Challenge",
          description: "Strategic collaborative challenges and leadership development exercises",
          location: "Leadership Center",
          attendees: "All participants",
          type: "activity",
          icon: <Activity className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
      ]
    },
    3: {
      title: "Strategic Outcomes Day",
      subtitle: "Presentations & Future Planning",
      date: "Wednesday, September 13, 2025",
      theme: "Future-Ready Organizations",
      keynoteSpeaker: {
        name: "Dr. Sarah Mitchell",
        title: "Chief Innovation Officer, TechForward Institute",
        bio: "Dr. Mitchell leads groundbreaking research in emerging technologies and digital transformation strategies for Fortune 500 companies worldwide.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
        topic: "Building Future-Ready Organizations",
        duration: "50 minutes"
      },
      events: [
        {
          id: 21,
          time: "08:30 - 09:00",
          title: "Final Day Executive Coffee",
          description: "Last networking opportunities with premium coffee experience",
          location: "Executive Lounge",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
        {
          id: 22,
          time: "09:00 - 11:00",
          title: "Strategic Project Presentations",
          description: "Team project presentations and strategic recommendations showcase",
          location: "Main Auditorium",
          attendees: "All participants",
          type: "presentation",
          icon: <Presentation className="w-5 h-5" />,
          status: "featured",
          priority: "critical"
        },
        {
          id: 23,
          time: "11:00 - 11:30",
          title: "Final Strategic Networking",
          description: "Last structured networking opportunity with premium refreshments",
          location: "Networking Pavilion",
          attendees: "All participants",
          type: "break",
          icon: <Coffee className="w-5 h-5" />,
          status: "confirmed",
          priority: "medium"
        },
        {
          id: 24,
          time: "11:30 - 12:30",
          title: "Results Analysis & Future Planning",
          description: "Comprehensive outcome review and strategic action planning session",
          location: "Main Auditorium",
          attendees: "All participants",
          type: "session",
          icon: <Target className="w-5 h-5" />,
          status: "confirmed",
          priority: "high"
        },
      ]
    }
  }

  // Scroll-based animation control
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineElement = timelineRef.current
      const rect = timelineElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the timeline is visible
      const timelineTop = rect.top
      const timelineHeight = rect.height
      const viewportStart = windowHeight * 0.2 // Start animation when timeline is 20% into viewport
      const viewportEnd = windowHeight * 0.8   // Complete animation when timeline is 80% through viewport
      
      // Calculate scroll progress (0 to 1)
      let progress = 0
      if (timelineTop < viewportStart) {
        const scrolled = viewportStart - timelineTop
        const totalScrollDistance = timelineHeight + (viewportStart - viewportEnd)
        progress = Math.min(scrolled / totalScrollDistance, 1)
      }
      
      setScrollProgress(progress)
      
      // Check which events should be visible based on scroll progress
      const events = eventData[activeDay].events
      const newVisibleEvents = new Set()
      
      events.forEach((event, index) => {
        const eventProgress = (index + 1) / events.length
        if (progress >= eventProgress) {
          newVisibleEvents.add(event.id)
        }
      })
      
      setVisibleEvents(newVisibleEvents)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeDay])

  // Reset when day changes
  useEffect(() => {
    setScrollProgress(0)
    setVisibleEvents(new Set())
  }, [activeDay])

  const getEventTypeStyles = (type, status, priority) => {
    const baseStyles = "inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm"
    
    if (status === 'featured') {
      return `${baseStyles} bg-gradient-to-r from-[#1cb683]/20 to-emerald-400/20 text-[#1cb683] border-[#1cb683]/40 shadow-lg shadow-[#1cb683]/20`
    }
    
    const typeStyles = {
      registration: "bg-slate-900/40 text-slate-300 border-slate-600/40",
      ceremony: "bg-amber-900/40 text-amber-300 border-amber-600/40",
      keynote: "bg-purple-900/40 text-purple-300 border-purple-600/40",
      break: "bg-green-900/40 text-green-300 border-green-600/40",
      panel: "bg-blue-900/40 text-blue-300 border-blue-600/40",
      workshop: "bg-orange-900/40 text-orange-300 border-orange-600/40",
      session: "bg-indigo-900/40 text-indigo-300 border-indigo-600/40",
      activity: "bg-pink-900/40 text-pink-300 border-pink-600/40",
      social: "bg-emerald-900/40 text-emerald-300 border-emerald-600/40",
      presentation: "bg-violet-900/40 text-violet-300 border-violet-600/40",
    }
    
    return `${baseStyles} ${typeStyles[type] || typeStyles.session}`
  }

  const getPriorityIndicator = (priority) => {
    const indicators = {
      critical: <Zap className="w-3 h-3 text-red-400" />,
      high: <Star className="w-3 h-3 text-[#1cb683]" />,
      medium: <Target className="w-3 h-3 text-blue-400" />
    }
    return indicators[priority] || indicators.medium
  }

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#1cb683]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#1cb683]/5 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 border-b border-gray-800/50 backdrop-blur-xl bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#1cb683] to-emerald-400 bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight">
                Strategic Leadership Conference 2025
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">Three-Day Executive Program</p>
              <p className="text-xs sm:text-sm text-[#1cb683] font-medium uppercase tracking-wider px-4">
                Digital Transformation • Innovation • Leadership
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Day Navigation & Controls - FIXED */}
        <div className="mb-8 sm:mb-12 flex justify-center">
          <div className="inline-flex backdrop-blur-xl bg-gray-900/40 rounded-xl sm:rounded-2xl border border-gray-700/50 p-1 sm:p-2 shadow-2xl shadow-[#1cb683]/10">
            {[1, 2, 3].map((day) => {
              const isActive = activeDay === day
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`relative px-4 sm:px-6 py-1 rounded-lg sm:rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1cb683] to-emerald-500 text-white shadow-lg shadow-[#1cb683]/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-base sm:text-lg font-bold">Day {day}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#1cb683]/20 to-emerald-500/20 border border-[#1cb683]/40"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Scroll Instruction */}
        <div className="mb-6 sm:mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center backdrop-blur-xl bg-gray-900/40 rounded-xl sm:rounded-2xl border border-gray-700/50 px-4 sm:px-6 py-2 sm:py-3 shadow-xl"
          >
            <div className="w-2 h-2 bg-[#1cb683] rounded-full mr-3 animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-300">
              <span className="text-[#1cb683] font-medium">Scroll down</span> to reveal the timeline
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Timeline Section */}
          <div className="xl:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                ref={timelineRef}
              >
                {/* Day Header */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-[#1cb683]/30 shadow-2xl shadow-[#1cb683]/10 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1cb683]/5 to-transparent" />
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{eventData[activeDay].title}</h2>
                        <div className="flex items-center text-gray-300 mb-2">
                          <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-[#1cb683] flex-shrink-0" />
                          <span className="text-sm sm:text-base lg:text-lg">{eventData[activeDay].date}</span>
                        </div>
                        <p className="text-sm sm:text-base text-[#1cb683] font-medium">{eventData[activeDay].theme}</p>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className="text-xs sm:text-sm text-gray-400 mb-1">Total Sessions</div>
                        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#1cb683] to-emerald-400 bg-clip-text text-transparent">
                          {eventData[activeDay].events.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline with Path */}
                <div className="relative">
                  {/* Animated Timeline Path - Hidden on mobile, shown on sm+ */}
                  <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[1.5px] bg-gray-700/30 rounded-full hidden sm:block">
                    <motion.div
                      className="w-full bg-gradient-to-b from-[#1cb683] to-emerald-500 rounded-full shadow-lg shadow-[#1cb683]/50"
                      initial={{ height: 0 }}
                      animate={{ 
                        height: `${scrollProgress * 100}%`
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    
                    {/* Glowing orb at the end of the path */}
                    {scrollProgress > 0 && (
                      <motion.div
                        className="absolute -right-[7px] w-4 h-4 bg-gradient-to-r from-[#1cb683] to-emerald-500 rounded-full shadow-lg shadow-[#1cb683]/50"
                        style={{ 
                          top: `${scrollProgress * 100}%`,
                          transform: 'translateY(-50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-[#1cb683] rounded-full animate-ping opacity-75" />
                      </motion.div>
                    )}
                  </div>

                  {/* Events */}
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8 pl-0 sm:pl-16">
                    {eventData[activeDay].events.map((event, index) => {
                      const isVisible = visibleEvents.has(event.id)
                      const eventProgress = (index + 1) / eventData[activeDay].events.length
                      const isCurrentEvent = scrollProgress >= eventProgress - 0.1 && scrollProgress <= eventProgress + 0.1
                      
                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: 50, scale: 0.8 }}
                          animate={{ 
                            opacity: isVisible ? 1 : 0.05,
                            x: isVisible ? 0 : 50,
                            scale: isVisible ? 1 : 0.8
                          }}
                          transition={{ 
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          className={`relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border shadow-xl transition-all duration-500 ${
                            isCurrentEvent 
                              ? 'border-[#1cb683]/60 shadow-2xl shadow-[#1cb683]/30 scale-[1.01] sm:scale-[1.02]' 
                              : 'border-gray-700/50'
                          }`}
                        >
                          {/* Timeline connector dot - Hidden on mobile */}
                          <div className="absolute -left-16 top-6 sm:top-8 w-4 h-4 bg-gray-700/50 rounded-full border-4 border-gray-900 hidden sm:block">
                            {isVisible && (
                              <motion.div
                                className="w-full h-full bg-gradient-to-r from-[#1cb683] to-emerald-500 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                              />
                            )}
                          </div>

                          {/* Glassmorphism overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                          
                          {/* Priority indicator */}
                          {event.status === 'featured' && isVisible && (
                            <motion.div
                              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683]"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.6 }}
                            />
                          )}
                          
                          <div className="relative z-10 p-4 sm:p-6">
                            {/* Event Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                              <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
                                <div className="flex-shrink-0">
                                  <motion.div
                                    className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#1cb683]/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-[#1cb683]/30 backdrop-blur-sm"
                                    initial={{ rotate: -180, scale: 0 }}
                                    animate={isVisible ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <span className="text-[#1cb683]">{event.icon}</span>
                                  </motion.div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <motion.div
                                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                  >
                                    <div className="flex items-center text-[#1cb683] font-bold text-base sm:text-lg">
                                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-2 flex-shrink-0" />
                                      <span className="truncate">{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className={getEventTypeStyles(event.type, event.status, event.priority)}>
                                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                      </span>
                                      <div className="flex items-center">
                                        {getPriorityIndicator(event.priority)}
                                      </div>
                                    </div>
                                  </motion.div>
                                  
                                  <motion.h3
                                    className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                  >
                                    {event.title}
                                  </motion.h3>
                                  
                                  <motion.p
                                    className="text-gray-300 text-sm leading-relaxed mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                  >
                                    {event.description}
                                  </motion.p>
                                  
                                  {/* Event Meta Information */}
                                  <motion.div
                                    className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 text-sm text-gray-400"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                  >
                                    <div className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-2 text-[#1cb683] flex-shrink-0" />
                                      <span className="truncate">{event.location}</span>
                                    </div>
                                    <div className="flex items-center">
                                      <UserCheck className="w-4 h-4 mr-2 text-[#1cb683] flex-shrink-0" />
                                      <span className="truncate">{event.attendees}</span>
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                              
                              {/* Status Indicator */}
                              {event.status === 'featured' && isVisible && (
                                <motion.div
                                  className="flex-shrink-0 self-start sm:self-auto"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                  <div className="flex items-center bg-gradient-to-r from-[#1cb683]/20 to-emerald-500/20 border border-[#1cb683]/40 rounded-lg px-3 py-1.5 backdrop-blur-sm">
                                    <Star className="w-4 h-4 text-[#1cb683] mr-2" />
                                    <span className="text-xs font-bold text-[#1cb683] uppercase tracking-wide">Featured</span>
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            {/* Current event glow effect */}
                            {isCurrentEvent && (
                              <motion.div
                                className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1cb683]/10 via-transparent to-[#1cb683]/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Keynote Speaker Sidebar */}
          <div className="xl:col-span-1 order-first xl:order-last">
            <div className="xl:sticky xl:top-8 space-y-6 lg:space-y-8">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-[#1cb683]/30 shadow-2xl shadow-[#1cb683]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1cb683]/5 to-transparent" />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1cb683]/20 via-transparent to-[#1cb683]/20 blur-sm" />
                
                <div className="relative z-10 p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#1cb683]/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4 backdrop-blur-sm border border-[#1cb683]/30">
                      <Mic className="w-5 sm:w-6 h-5 sm:h-6 text-[#1cb683]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">Keynote Speaker</h3>
                      <p className="text-xs sm:text-sm text-[#1cb683] font-medium">{eventData[activeDay].theme}</p>
                    </div>
                  </div>

                  {/* Speaker Image and Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="relative flex-shrink-0">
                      <img
                        src={eventData[activeDay].keynoteSpeaker.image}
                        alt={eventData[activeDay].keynoteSpeaker.name}
                        className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl object-cover border-2 border-[#1cb683]/40 shadow-lg"
                      />
                      <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-[#1cb683] rounded-full flex items-center justify-center shadow-lg shadow-[#1cb683]/50">
                        <Star className="w-2 sm:w-3 h-2 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{eventData[activeDay].keynoteSpeaker.name}</h4>
                      <p className="text-xs sm:text-sm text-[#1cb683] font-medium mb-2">{eventData[activeDay].keynoteSpeaker.title}</p>
                      <div className="flex items-center justify-center sm:justify-start text-xs text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{eventData[activeDay].keynoteSpeaker.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">{eventData[activeDay].keynoteSpeaker.bio}</p>

                  {/* Topic */}
                  <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-br from-[#1cb683]/10 to-emerald-500/10 border border-[#1cb683]/30 p-3 sm:p-4 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1cb683]/5 to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-[#1cb683]/20 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm">
                          <Presentation className="w-3 sm:w-4 h-3 sm:h-4 text-[#1cb683]" />
                        </div>
                        <span className="text-xs font-bold text-[#1cb683] uppercase tracking-wider">Speaking Topic</span>
                      </div>
                      <h5 className="text-sm font-bold text-white">{eventData[activeDay].keynoteSpeaker.topic}</h5>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 sm:pt-4 border-t border-gray-700/50">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span className="truncate">{eventData[activeDay].date.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{eventData[activeDay].events.length} sessions</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedEventTimeline