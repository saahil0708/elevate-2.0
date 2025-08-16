"use client";

import { Tabs } from "@/Components/ui/Tabs";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Star, MapPin, Ticket } from "lucide-react";

export default function CulturalNightsDemo() {
  const tabs = [
    {
      title: "Cultural Night",
      value: "cultural",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden relative min-h-[28rem] md:min-h-[40rem] lg:min-h-[45rem] rounded-3xl bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 border border-[#1cb683]/30 backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1cb683]/5 via-transparent to-emerald-400/5"></div>
          
          <div className="flex flex-col lg:flex-row min-h-full relative z-10">
            {/* Content Section */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 md:mb-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#1cb683] to-emerald-400 flex items-center justify-center">
                    <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1cb683]/50 to-transparent"></div>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] mb-3 md:mb-4 leading-tight">
                  Cultural Night
                </h2>
                <p className="text-base md:text-lg text-emerald-300/80 font-medium">Premium Heritage Celebration</p>
              </motion.div>

              <div className="text-sm md:text-base lg:text-lg font-normal text-gray-300 space-y-4 md:space-y-6 lg:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#1cb683]/20 hover:border-[#1cb683]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1cb683] to-emerald-400 rounded-full mt-2 group-hover:scale-110 transition-transform duration-300"></div>
                    <div>
                      <h3 className="text-[#1cb683] text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                        Experience Overview
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        An immersive celebration of global heritage featuring authentic performances, traditional arts, and
                        cultural exchanges. This premier event showcases the rich diversity of our community through
                        carefully curated programming that honors ancestral traditions while fostering cross-cultural understanding.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-emerald-900/20 to-[#1cb683]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4 mb-4 md:mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-[#1cb683] rounded-full mt-2 group-hover:scale-110 transition-transform duration-300"></div>
                    <h3 className="text-emerald-400 text-lg md:text-xl font-bold">Featured Experiences</h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                    {[
                      "Traditional dance performances from 12+ communities",
                      "Live music with authentic indigenous instruments",
                      "Interactive cultural art workshops & demonstrations",
                      "Gourmet international cuisine stations"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#1cb683] to-emerald-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm md:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                >
                  {[
                    { icon: Clock, label: "Duration", value: "6:00 PM - 11:00 PM" },
                    { icon: Users, label: "Capacity", value: "500 Guests" },
                    { icon: MapPin, label: "Venue", value: "Grand Cultural Hall" },
                    { icon: Ticket, label: "Dress Code", value: "Traditional/Formal" }
                  ].map(({ icon: Icon, label, value }, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-700/30 hover:border-[#1cb683]/30 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#1cb683] mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-[#1cb683] text-xs md:text-sm font-semibold">{label}</p>
                      <p className="text-gray-300 text-xs md:text-sm">{value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-2/5 relative overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl min-h-[250px] md:min-h-[300px] lg:min-h-full"
            >
              <img
                src="https://images.pexels.com/photos/3618568/pexels-photo-3618568.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cultural night celebration with traditional dancers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1cb683]/10 via-transparent to-emerald-400/10"></div>
              
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20"
                >
                  <p className="text-white text-base md:text-lg font-bold mb-1">Traditional Performances</p>
                  <p className="text-gray-300 text-xs md:text-sm">Celebrating Global Heritage & Unity</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-yellow-400 text-xs md:text-sm font-medium">Premium Event</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Comedy Show",
      value: "comedy",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden relative min-h-[28rem] md:min-h-[40rem] lg:min-h-[45rem] rounded-3xl bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 border border-yellow-500/30 backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-400/5"></div>
          
          <div className="flex flex-col lg:flex-row min-h-full relative z-10">
            {/* Content Section */}
            <div className="flex-1 p-6 md:p-8 lg:p-10 xl:p-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 md:mb-8"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 flex items-center justify-center">
                    <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 mb-3 md:mb-4 leading-tight">
                  Comedy Show
                </h2>
                <p className="text-base md:text-lg text-yellow-300/80 font-medium">World-Class Stand-Up Entertainment</p>
              </motion.div>

              <div className="text-sm md:text-base lg:text-lg font-normal text-gray-300 space-y-4 md:space-y-6 lg:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2 group-hover:scale-110 transition-transform duration-300"></div>
                    <div>
                      <h3 className="text-yellow-500 text-lg md:text-xl font-bold mb-3 md:mb-4">Premium Comedy Experience</h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        A sophisticated comedy showcase featuring internationally acclaimed headliners and emerging talent. 
                        Our curated lineup delivers intelligent humor, observational comedy, and interactive performances 
                        for an unforgettable evening of premium entertainment in an intimate venue setting.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-orange-900/20 to-yellow-500/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4 mb-4 md:mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mt-2 group-hover:scale-110 transition-transform duration-300"></div>
                    <h3 className="text-orange-400 text-lg md:text-xl font-bold">Performance Lineup</h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
                    {[
                      "Internationally acclaimed headliner comedian",
                      "3 professional featured acts with TV credits",
                      "Rising local talent showcase segment",
                      "Interactive audience participation moments"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="flex items-start space-x-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm md:text-base">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                >
                  {[
                    { icon: Clock, label: "Duration", value: "8:00 PM - 10:30 PM" },
                    { icon: Users, label: "Capacity", value: "300 Guests" },
                    { icon: MapPin, label: "Venue", value: "Intimate Comedy Club" },
                    { icon: Ticket, label: "Age Limit", value: "18+ Only" }
                  ].map(({ icon: Icon, label, value }, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-yellow-500 text-xs md:text-sm font-semibold">{label}</p>
                      <p className="text-gray-300 text-xs md:text-sm">{value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-2/5 relative overflow-hidden rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl min-h-[250px] md:min-h-[300px] lg:min-h-full"
            >
              <img
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional comedy show stage with spotlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-400/10"></div>
              
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-black/40 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20"
                >
                  <p className="text-white text-base md:text-lg font-bold mb-1">Stand-Up Comedy</p>
                  <p className="text-gray-300 text-xs md:text-sm">Premium Entertainment & Laughs</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-yellow-400 text-xs md:text-sm font-medium">Top Rated Show</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1cb683]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1cb683]/5 to-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 pb-80">
        <div className="text-center mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] mb-6 leading-tight"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Cultural Nights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-emerald-300/60 text-xl font-medium tracking-wide"
            >
              Premium Event Series
            </motion.p>
          </motion.div>
          
          <motion.div
            className="w-80 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-12 relative"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light"
          >
            Experience exceptional entertainment through our signature event series. From celebrating global heritage to
            delivering world-class comedy, we create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] to-emerald-400 font-medium">
              memorable experiences
            </span>{" "}
            that bring communities together.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="min-h-[32rem] md:min-h-[50rem] lg:min-h-[55rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start px-4"
        >
          <Tabs tabs={tabs} />
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}