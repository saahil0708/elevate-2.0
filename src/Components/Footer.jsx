"use client"

import { ArrowRight, ArrowUp, Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Reduced background glow effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-[#1cb683] rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-[#1cb683] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36">
        {/* Newsletter Section - Top Priority */}
        {/* <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 text-[#1cb683] leading-tight"
            style={{ textShadow: "0 0 25px rgba(28, 182, 131, 0.4), 0 0 50px rgba(28, 182, 131, 0.2)" }}
          >
            STAY CONNECTED
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates and insights
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pr-14 py-4 px-6 rounded-full bg-white/10 backdrop-blur-md text-white placeholder:text-gray-400 border border-[#1cb683]/30 focus:border-[#1cb683] focus:outline-none focus:shadow-[0_0_15px_rgba(28,182,131,0.2)] transition-all duration-300"
              />
              <button className="absolute right-2 p-3 bg-[#1cb683] rounded-full transition-all duration-500 ease-out group overflow-hidden hover:shadow-[0_0_20px_rgba(28,182,131,0.6)]">
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-[#1cb683]/30 rounded-full scale-0 group-hover:scale-200 transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
                <ArrowRight className="h-5 w-5 text-white relative z-10 transform group-hover:translate-x-0.5 group-hover:scale-110 transition-all duration-300 ease-out" />
              </button>
            </div>
          </div>
        </div> */}

        {/* Main Content Grid */}
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-semibold text-[#1cb683] mb-4"
                style={{ textShadow: "0 0 15px rgba(28, 182, 131, 0.3)" }}
              >
                LUSION
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Suite 2</p>
                <p>9 Marsh Street</p>
                <p>Bristol, BS1 4AA</p>
                <p>United Kingdom</p>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-semibold text-[#1cb683] mb-4"
                style={{ textShadow: "0 0 25px rgba(28, 182, 131, 0.3)" }}
              >
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">General enquiries</p>
                  <Link href="mailto:hello@lusion.co" className="text-white hover:text-[#1cb683] transition-colors">
                    hello@lusion.co
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">New business</p>
                  <Link href="mailto:business@lusion.co" className="text-white hover:text-[#1cb683] transition-colors">
                    business@lusion.co
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-semibold text-[#1cb683] mb-4"
                style={{ textShadow: "0 0 25px rgba(28, 182, 131, 0.3)" }}
              >
                Follow Us
              </h3>
              <div className="space-y-3 text-sm">
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  Twitter / X
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Additional Links */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-semibold text-[#1cb683] mb-4"
                style={{ textShadow: "0 0 25px rgba(28, 182, 131, 0.3)" }}
              >
                Resources
              </h3>
              <div className="space-y-3 text-sm">
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  R&D Labs
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#1cb683] transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <p className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} The Uniques Community. All rights reserved.
              </p>
              <p className="flex items-center">
                Built with <Heart className="h-4 w-4 mx-1 text-[#1cb683] fill-[#1cb683]" /> by Tech Team (Uniques 3.0)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      {/* <div className="relative z-10 bg-gradient-to-b from-gray-900 to-black py-16 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-12">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Keep scrolling to learn more</p>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1cb683] mb-8"
              style={{ textShadow: "0 0 20px rgba(28, 182, 131, 0.4), 0 0 40px rgba(28, 182, 131, 0.2)" }}
            >
              OUR PROJECTS
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our latest work and creative solutions that push the boundaries of digital innovation.
            </p>
          </div>
        </div>
      </div> */}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#1cb683] hover:bg-[#1cb683]/80 text-white rounded-full p-3 shadow-lg hover:shadow-[0_0_15px_rgba(28,182,131,0.3)] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  )
}
