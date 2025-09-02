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
      if (window.location.hash) {
        history.replaceState(null, null, " ");
        window.scrollTo(0, 0);
      }
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
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 bg-black/70 backdrop-blur-md rounded-lg border border-white/10 px-2 py-2 shadow-2xl">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              // { name: "SIH", href: "#sih" },
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
                  <span className="absolute inset-0 bg-[#20A97B] rounded-lg transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
                </a>
              </li>
            ))}
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
              { name: "SIH", href: "#sih" },
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
          </ul>
        </div>
      </div>
    </header>
  )
}
