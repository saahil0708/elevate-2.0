"use client"
import { IconArrowLeft, IconArrowRight, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export const CommunityPanelist = ({ communities, autoplay = false }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeSpeaker, setActiveSpeaker] = useState(0)

  const currentCommunity = communities[activeTab]
  const speakers = currentCommunity?.speakers || []

  const handleNext = () => {
    setActiveSpeaker((prev) => (prev + 1) % speakers.length)
  }

  const handlePrev = () => {
    setActiveSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length)
  }

  const isActive = (index) => {
    return index === activeSpeaker
  }

  // Reset active speaker when tab changes
  useEffect(() => {
    setActiveSpeaker(0)
  }, [activeTab])

  useEffect(() => {
    if (autoplay && speakers.length > 0) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, speakers.length])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <div className="w-full bg-gradient-to-r from-black to-gray-900 py-10 pb-40">
      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">
        <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(12,83,82,0.5)]">
                Community <span className="text-[#20A97B]">Panelist</span>
              </h1>
          <motion.div
            className="w-60 mt-5 h-1 bg-gradient-to-r from-transparent via-[#20A97B] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 mt-20">
            {communities.map((community, index) => (
              <button
                key={community.name}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === index
                  ? "bg-[#20A97B] text-black shadow-lg neon-glow font-semibold"
                  : "glass-dark text-gray-300 hover:bg-[#20A97B]/20 hover:text-[#20A97B] hover:border-[#20A97B]/40"
                  }`}
              >
                {community.name}
              </button>
            ))}
          </div>
        </div>

        {speakers.length > 0 && (
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 mt-32">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {speakers.map((speaker, index) => (
                    <motion.div
                      key={speaker.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 40 : speakers.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={speaker.src || "/placeholder.svg"}
                        alt={speaker.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className={`h-full w-full rounded-3xl object-cover object-center ${isActive(index) ? "ring-2 ring-[#20A97B] neon-glow" : ""
                          }`}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={`${activeTab}-${activeSpeaker}`}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold text-white">{speakers[activeSpeaker]?.name}</h3>
                <p className="text-sm text-[#20A97B]">{speakers[activeSpeaker]?.designation}</p>

                <div className="flex gap-3 mt-4">
                  {speakers[activeSpeaker]?.instagram && (
                    <a
                      href={speakers[activeSpeaker].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full glass-dark text-[#20A97B] hover:scale-110 hover:neon-glow transition-all duration-200 border border-[#20A97B]/30"
                    >
                      <IconBrandInstagram className="w-4 h-4" />
                    </a>
                  )}
                  {speakers[activeSpeaker]?.linkedin && (
                    <a
                      href={speakers[activeSpeaker].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full glass-dark text-[#20A97B] hover:scale-110 hover:neon-glow transition-all duration-200 border border-[#20A97B]/30"
                    >
                      <IconBrandLinkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <motion.p className="mt-8 text-lg text-gray-300">
                  {speakers[activeSpeaker]?.bio?.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              {speakers.length > 1 && (
                <div className="flex gap-4 pt-12 md:pt-0">
                  <button
                    onClick={handlePrev}
                    className="group/button flex h-7 w-7 items-center justify-center rounded-full glass-dark hover:bg-[#20A97B]/20 hover:neon-glow transition-all duration-300"
                  >
                    <IconArrowLeft className="h-5 w-5 text-[#20A97B] transition-transform duration-300 group-hover/button:rotate-12" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="group/button flex h-7 w-7 items-center justify-center rounded-full glass-dark hover:bg-[#20A97B]/20 hover:neon-glow transition-all duration-300"
                  >
                    <IconArrowRight className="h-5 w-5 text-[#20A97B] transition-transform duration-300 group-hover/button:-rotate-12" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
