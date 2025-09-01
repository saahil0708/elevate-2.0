"use client"

import { ArrowUp, Heart, Instagram, Linkedin, Globe, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react";
import Image from 'next/image';
import Logo from './Images/ELEVATE-2025-LOGO.png';

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
      {/* Glow accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#0c5352] rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#0c5352] rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-10">
        <div className="backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 p-6 md:p-8">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Logo */}
            <div className="flex flex-col items-start space-y-3">
              <Image
                src={Logo}
                alt="Elevate 2025 Logo"
                width={130}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-lg font-bold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4"
                style={{ textShadow: "0 0 25px rgba(12, 83, 82, 0.3)" }}
              >
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">General enquiries</p>
                  <Link href="mailto:hello@lusion.co" className="text-white hover:text-[#107372] transition-colors">
                    hello@lusion.co
                  </Link>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">New business</p>
                  <Link href="mailto:business@lusion.co" className="text-white hover:text-[#107372] transition-colors">
                    business@lusion.co
                  </Link>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3
                className="text-lg font-bold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4"
                style={{ textShadow: "0 0 25px rgba(12, 83, 82, 0.3)" }}
              >
                Follow Us
              </h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  Twitter / X
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Divider & Bottom Bar */}
          <div className="mt-8 pt-5 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-400 gap-2">
              <p className="text-center md:text-left">
                &copy; {new Date().getFullYear()} The Uniques Community. All rights reserved.
              </p>
              <p className="flex items-center">
                Built with <Heart className="h-3 w-3 mx-1 text-[#0c5352] fill-[#0c5352]" /> by Tech Team (Uniques 3.0)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#0c5352] hover:bg-[#107372] text-white rounded-full p-3 shadow-lg hover:shadow-[0_0_15px_rgba(12,83,82,0.3)] transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  )
}