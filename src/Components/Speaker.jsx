"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"

const SpeakerCard = ({ speaker }) => {
  const handleSocialClick = (url, e) => {
    e.preventDefault()
    e.stopPropagation()

    if (!url) {
      console.warn("No URL provided for social media link")
      return
    }

    console.log("Opening social media URL:", url)

    try {
      window.open(url, "_blank", "noopener,noreferrer")
    } catch (error) {
      console.error("Error opening social media link:", error)
    }
  }

  return (
    <div 
      className="relative group w-full max-w-[350px] mx-auto"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 3,
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeOut",
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        className="relative shadow-xl group-hover:shadow-2xl transition-shadow duration-300 rounded-lg"
        style={{
          backgroundColor: "#0f172a",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 50% 88%, 41% 100%, 0 100%)",
          minHeight: "420px",
          minWidth: "280px",
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="p-6 text-center h-full flex flex-col">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
            className="w-full h-64 mx-auto mb-4 overflow-hidden rounded-lg"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-end space-y-2 pb-4">
            <h3 className="text-xl font-bold leading-tight" style={{ color: "#1cb683" }}>
              {speaker.name}
            </h3>
            <p className="text-base font-medium leading-relaxed px-2" style={{ color: "#1cb683" }}>
              {speaker.position}
            </p>
          </div>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1cb683]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 88%, 50% 88%, 41% 100%, 0 100%)",
            willChange: 'opacity',
            transform: 'translateZ(0)'
          }}
        />
      </motion.div>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2" style={{ left: "73%" }}>
        <div className="flex space-x-3 justify-center">
          {speaker.social?.linkedin && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.2
              }}
              className="w-11 h-11 bg-[#1cb683] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#16a574] cursor-pointer"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
              onClick={(e) => handleSocialClick(speaker.social.linkedin, e)}
              aria-label={`Visit ${speaker.name}'s LinkedIn profile`}
            >
              <FaLinkedin size={18} />
            </motion.button>
          )}
          {speaker.social?.instagram && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.2
              }}
              className="w-11 h-11 bg-[#1cb683] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#16a574] cursor-pointer"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
              onClick={(e) => handleSocialClick(speaker.social.instagram, e)}
              aria-label={`Visit ${speaker.name}'s Instagram profile`}
            >
              <FaInstagram size={18} />
            </motion.button>
          )}
          {speaker.social?.twitter && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                duration: 0.2
              }}
              className="w-11 h-11 bg-[#1cb683] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#16a574] cursor-pointer"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
              onClick={(e) => handleSocialClick(speaker.social.twitter, e)}
              aria-label={`Visit ${speaker.name}'s Twitter profile`}
            >
              <FaTwitter size={18} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard