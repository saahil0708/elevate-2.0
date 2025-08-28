"use client"

import { ArrowRight, ArrowUp, Heart } from "lucide-react"
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
      {/* Reduced background glow effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-[#0c5352] rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-[#0c5352] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36">

        {/* Main Content Grid */}
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-bold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4"
                style={{ textShadow: "0 0 15px rgba(12, 83, 82, 0.3)" }}
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

            {/* Social Links */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-bold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4"
                style={{ textShadow: "0 0 25px rgba(12, 83, 82, 0.3)" }}
              >
                Follow Us
              </h3>
              <div className="space-y-3 text-sm">
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
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Additional Links */}
            <div className="lg:col-span-1">
              <h3
                className="text-lg font-bold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4"
                style={{ textShadow: "0 0 25px rgba(12, 83, 82, 0.3)" }}
              >
                Resources
              </h3>
              <div className="space-y-3 text-sm">
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  R&D Labs
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="block text-white hover:text-[#107372] transition-all duration-300 hover:translate-x-1"
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
                Built with <Heart className="h-4 w-4 mx-1 text-[#0c5352] fill-[#0c5352]" /> by Tech Team (Uniques 3.0)
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
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  )
}
