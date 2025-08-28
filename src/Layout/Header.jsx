// "use client"
// import { useEffect } from "react"

// export default function Header() {
//   // Smooth scroll (polyfill for older browsers)
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       require("smooth-scroll")('a[href*="#"]', {
//         speed: 700,
//         speedAsDuration: true,
//       })
//     }
//   }, [])

//   return (
//     <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo / Event Name */}
//         <h1 className="text-2xl font-extrabold text-[#1cb683] tracking-widest">
//           ELEVATE 2.0
//         </h1>

//         {/* Navigation Links */}
//         <nav>
//           <ul className="flex gap-8 text-white font-medium">
//             <li>
//               <a href="#home" className="hover:text-[#1cb683] transition">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-[#1cb683] transition">
//                 About
//               </a>
//             </li>
            
//             <li>
//               <a href="#ideajam" className="hover:text-[#1cb683] transition">
//                 IdeaJam
//               </a>
//             </li>
//             <li>
//               <a href="#gallery" className="hover:text-[#1cb683] transition">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#footer" className="hover:text-[#1cb683] transition">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }
"use client"
import { useEffect, useState, useCallback, useRef } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollDirection, setScrollDirection] = useState("up")
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  
  // Enhanced scroll handler with performance optimization
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        
        // Update scroll state
        setIsScrolled(currentScrollY > 20)
        
        // Determine scroll direction and hide/show header
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setScrollDirection("down")
          setIsHidden(true)
        } else {
          setScrollDirection("up")
          setIsHidden(false)
        }
        
        lastScrollY.current = currentScrollY
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  // Active section detection
  const updateActiveSection = useCallback(() => {
    const sections = ["home", "about", "ideajam", "gallery", "footer"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  // Combined scroll effect
  useEffect(() => {
    const combinedScrollHandler = () => {
      handleScroll()
      updateActiveSection()
    }

    window.addEventListener('scroll', combinedScrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', combinedScrollHandler)
  }, [handleScroll, updateActiveSection])

  // Enhanced smooth scroll with modern approach
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Clean URL hash on refresh
      if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname)
        window.scrollTo({ top: 0, behavior: 'instant' })
      }

      // Modern smooth scroll implementation
      const handleClick = (e) => {
        const target = e.target.closest('a[href*="#"]')
        if (!target) return

        const href = target.getAttribute('href')
        if (href.startsWith('#')) {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          
          if (targetElement) {
            const headerHeight = 80
            const targetPosition = targetElement.offsetTop - headerHeight
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
            
            // Close mobile menu if open
            setIsMenuOpen(false)
          }
        }
      }

      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navigationItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "IdeaJam", href: "#ideajam", id: "ideajam" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#footer", id: "footer" },
  ]

  return (
<<<<<<< HEAD
    <>
      {/* Desktop Floating Navbar */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out hidden md:block ${
          isHidden && !isMenuOpen ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Main Navigation Container */}
        <nav>
          <div className={`flex items-center justify-center transition-all duration-500 relative ${
            isScrolled
              ? "bg-black/20 backdrop-blur-xl shadow-2xl border border-white/10 rounded-xl px-8 py-4"
              : "bg-black/15 backdrop-blur-lg shadow-xl border border-white/5 rounded-xl px-8 py-4"
          }`}>
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-[#0c5352]/5 rounded-xl blur-lg opacity-60 animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-[#0c5352]/10 rounded-xl blur-md opacity-80"></div>
            
            <ul className="flex items-center space-x-10 relative z-10">
              {navigationItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 group px-4 py-2 rounded-lg ${
                      activeSection === item.id
                        ? "text-white bg-[#10B981] shadow-lg shadow-[#10B981]/30"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover effect for non-active items */}
                    {activeSection !== item.id && (
                      <span className="absolute inset-0 bg-white/10 rounded-lg transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
=======
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl py-2 shadow-2xl"
          : "bg-gradient-to-b from-black/90 to-transparent backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6">
      

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-full border border-white/10 px-2 py-2 shadow-2xl">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "IdeaJam", href: "#ideajam" },
              { name: "Gallery", href: "#gallery" },
              { name: "Contact", href: "#footer" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-white/90 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-[#0c5352] rounded-full transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="ml-2 bg-[#0c5352] text-white font-medium px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#1cb683]/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Register
              </button>
            </li>
          </ul>
>>>>>>> c76cb8f9b00877775e20a0ca6730ad2782b3cef7
        </nav>
      </header>

      {/* Mobile Toggle Button - Top Right */}
      <div className={`md:hidden fixed top-6 right-6 z-50 transition-all duration-700 ease-out ${
        isHidden && !isMenuOpen ? "opacity-0 translate-y-[-20px]" : "opacity-100 translate-y-0"
      }`}>
        <button
          className={`flex items-center justify-center w-14 h-14 transition-all duration-500 relative ${
            isScrolled
              ? "bg-black/20 backdrop-blur-xl shadow-2xl border border-white/10 rounded-xl"
              : "bg-black/15 backdrop-blur-lg shadow-xl border border-white/5 rounded-xl"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {/* Glow effect for mobile button */}
          <div className="absolute -inset-1 bg-[#0c5352]/15 rounded-xl blur-lg opacity-50"></div>
          <div className="absolute -inset-0.5 bg-[#0c5352]/10 rounded-xl blur-md opacity-70"></div>
          
          <div className="w-6 h-5 flex flex-col justify-between relative z-10">
            <span className={`h-0.5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}></span>
            <span className={`h-0.5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}></span>
            <span className={`h-0.5 bg-white/90 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen 
          ? "opacity-100 visible" 
          : "opacity-0 invisible"
      }`}>
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Content */}
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-80 max-w-[90vw] bg-black/30 backdrop-blur-xl shadow-2xl border border-white/10 rounded-2xl p-8 transition-all duration-500 relative ${
          isMenuOpen 
            ? "translate-y-0 scale-100" 
            : "-translate-y-8 scale-95"
        }`}>
          {/* Glow effect for mobile menu */}
          <div className="absolute -inset-1 bg-[#0c5352]/15 rounded-2xl blur-lg opacity-40"></div>
          <div className="absolute -inset-0.5 bg-[#0c5352]/10 rounded-2xl blur-md opacity-60"></div>
          
          <div className="space-y-3 relative z-10">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-6 py-4 rounded-xl font-medium transition-all duration-300 transform ${
                  isMenuOpen 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-4 opacity-0"
                } ${
                  activeSection === item.id
                    ? "text-white bg-[#0c5352] shadow-lg shadow-[#0c5352]/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="tracking-wide">{item.name}</span>
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}