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
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Smooth scroll with refresh fix
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Refresh hone par hash (#about) hata do aur top pe le aao
      if (window.location.hash) {
        history.replaceState(null, null, " ");
        window.scrollTo(0, 0);
      }

      const SmoothScroll = require("smooth-scroll")
      new SmoothScroll('a[href*="#"]', {
        speed: 700,
        speedAsDuration: true,
        updateURL: false, // ✅ URL me hash add nahi hoga
        offset: 0,
      })
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl py-2 shadow-2xl"
          : "bg-gradient-to-b from-black/90 to-transparent backdrop-blur-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1cb683] to-[#0ea5e9] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <h1 className="text-2xl font-bold text-white relative px-4 py-2 rounded-lg bg-black">
              ELEVATE <span className="text-[#1cb683]">2.0</span>
            </h1>
          </div>
        </div>

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
                  <span className="absolute inset-0 bg-gradient-to-r from-[#1cb683] to-[#1cb683]/70 rounded-full transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="ml-2 bg-gradient-to-r from-[#1cb683] to-[#0ea5e9] text-white font-medium px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#1cb683]/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Register
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 py-3 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-2">
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
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button className="w-full bg-gradient-to-r from-[#1cb683] to-[#0ea5e9] text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#1cb683]/30 transition-all duration-300">
                Register Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
