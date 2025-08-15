"use client"

import { Tabs } from "@/Components/ui/Tabs";
import { motion } from "framer-motion";

export default function CulturalNightsDemo() {
  const tabs = [
    {
      title: "Cultural Night",
      value: "cultural",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#1cb683]/20">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Content Section */}
            <div className="flex-1 p-6 lg:p-10">
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] to-emerald-400 mb-6">
                Cultural Night
              </h2>

              <div className="text-sm md:text-base font-normal text-gray-300 space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#1cb683]">
                  <h3 className="text-[#1cb683] text-lg font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#1cb683] rounded-full mr-2"></span>
                    Event Overview
                  </h3>
                  <p className="leading-relaxed">
                    An immersive celebration of global heritage featuring authentic performances, traditional arts, and
                    cultural exchanges. This premier event showcases the rich diversity of our community through
                    carefully curated programming that honors ancestral traditions.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <h3 className="text-emerald-400 text-lg font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Featured Experiences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Traditional dance performances from 12+ communities</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Live music with indigenous instruments</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Interactive art workshops</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Authentic cuisine stations</span>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gradient-to-r from-[#1cb683]/10 to-emerald-400/10 rounded-lg p-4 border border-[#1cb683]/30">
                  <h3 className="text-white text-lg font-semibold mb-3">Event Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Duration</span>
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Capacity</span>
                      <span>500 Guests</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Dress Code</span>
                      <span>Traditional or Formal</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Age Group</span>
                      <span>All Ages Welcome</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 relative overflow-hidden rounded-r-2xl">
              <img
                src="https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoCJNf5jeAL9bA5fCoOuXd1wjKlz3tY8qhMUnr"
                alt="Cultural night celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Traditional Performances</p>
                <p className="text-gray-300 text-xs">Celebrating Global Heritage</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Comedy Show",
      value: "comedy",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#1cb683]/20">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Content Section */}
            <div className="flex-1 p-6 lg:p-10">
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] to-yellow-400 mb-6">
                Comedy Show
              </h2>

              <div className="text-sm md:text-base font-normal text-gray-300 space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-[#1cb683]">
                  <h3 className="text-[#1cb683] text-lg font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#1cb683] rounded-full mr-2"></span>
                    Event Overview
                  </h3>
                  <p className="leading-relaxed">
                    A premium comedy experience featuring award-winning comedians and rising stars. Our curated lineup
                    delivers sophisticated humor, observational comedy, and interactive performances for an
                    unforgettable evening of entertainment.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <h3 className="text-yellow-400 text-lg font-semibold mb-3 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    Performance Lineup
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Internationally acclaimed headliner</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>3 professional featured acts</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Local talent showcase</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-[#1cb683] mt-1">•</span>
                      <span>Interactive audience segments</span>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gradient-to-r from-[#1cb683]/10 to-yellow-400/10 rounded-lg p-4 border border-[#1cb683]/30">
                  <h3 className="text-white text-lg font-semibold mb-3">Event Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Duration</span>
                      <span>8:00 PM - 10:30 PM</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Capacity</span>
                      <span>300 Guests</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Dress Code</span>
                      <span>Smart Casual</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#1cb683] font-medium">Age Restriction</span>
                      <span>18+ Only</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/3 relative overflow-hidden rounded-r-2xl">
              <img src="/comedy-stage.png" alt="Comedy show stage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Live Comedy Performance</p>
                <p className="text-gray-300 text-xs">Premium Entertainment Experience</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 py-20 pb-80">
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cb683] via-emerald-400 to-[#1cb683] mb-6 animate-pulse">
          Cultural Nights
        </h1>
        <motion.div
          className="w-60 mt-5 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Experience exceptional entertainment through our signature event series. From celebrating global heritage to
          delivering world-class comedy, we create memorable experiences that bring communities together.
        </p>
      </div>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}
