"use client"

import { motion } from "framer-motion"
import { 
  IoBulbOutline,
  IoCodeSlashOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoLaptopOutline,
  IoSettingsOutline,
} from "react-icons/io5"
import HorizontalTimeline from "../Components/horizontal-timeline"

const steps = [
  {
    phase: "Phase 01",
    title: "Submission & Evaluation",
    description:
      "Teams submit ideas online, and the top 15 of 25 registered teams are selected for the Ideathon.",
  },
  {
    phase: "Phase 02",
    title: "Ideathon",
    description:
      "The top 15 teams pitch their ideas to mentors, and the top 5 teams advance to the final phase.",
  },
  {
    phase: "Phase 03",
    title: "Final",
    description:
      "The top 5 teams present to the management, and the top 3 winners are selected.",
  },
]

const icons = [
  IoBulbOutline,
  IoCodeSlashOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoLaptopOutline,
  IoSettingsOutline,
]

export default function SIH() {
  return (
    <section id="sih">
    <main className="relative min-h-dvh bg-transparent text-slate-100 overflow-hidden">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 grid grid-cols-6 gap-12 opacity-[0.05] pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={i}
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6 + (i % 5),
                delay: i * 0.15,
              }}
              className="flex items-center justify-center text-4xl text-emerald-400/60"
            >
              <Icon />
            </motion.div>
          )
        })}
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        
        {/* SIH Intro Box */}
        <div className="mb-12 justify-center">
             <div className="text-center mb-16">
                           <h1 className="text-6xl md:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(12,83,82,0.5)]">
                             SIH <span className="text-[#20A97B]">2025</span>
                           </h1> 
            </div>
         
                         

          <div className="relative mx-auto max-w-5xl rounded-2xl border border-emerald-400/40 
                          bg-slate-900/80 p-6 md:p-8 
                          hover:shadow-xl hover:shadow-emerald-500/40
                          cursor-pointer overflow-hidden">

            {/* Watermark Logo */}
            <img 
              src="/sih-logo.png"
              alt="SIH Logo"
              className="absolute left-1/2 top-1/4 -translate-x-1/2 w-48 md:w-56 opacity-25 pointer-events-none select-none"
            />

            {/* Badge */}
            <div className="relative z-10 mx-auto mb-4 w-fit px-4 py-1 rounded-full 
                            text-xs font-semibold tracking-wide uppercase 
                            border border-emerald-400/60 text-[#1cb683] bg-slate-950/40">
              Innovation • Technology • Nation
            </div>

            {/* Text */}
            <p className="relative z-10 text-base md:text-lg leading-relaxed text-gray-400">
              The <span className="font-semibold text-[#1cb683]">Smart India Hackathon (SIH) </span> 
              is a nationwide initiative by the Government of India to provide students with a platform 
              to solve pressing problems of society, ministries, departments, industries, and other 
              organizations. It fosters a culture of product innovation and problem-solving by encouraging 
              young minds to think out of the box and create cutting-edge solutions.
              <br /><br />
              In <span className="text-[#1cb683]">SIH 2025</span>, students from across the country 
              collaborate, innovate, and present their ideas to real-world challenges, competing to become 
              champions of innovation and digital transformation. 
            </p>
          </div>
        </div>
        
        {/* Header Section */}
        <header className="mb-10 md:mb-14 text-center">
          <p className="text-sm uppercase tracking-widest text-emerald-400/90">
            IdeaJam 2025
          </p>
          <h1 className="text-pretty text-3xl font-semibold tracking-tight text-[#1cb683] md:text-5xl">
            Journey to the Finale
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-sm text-slate-300 md:text-base">
            A horizontal timeline with SIH-inspired theme, glowing motion elements, and professional Ionicons.
          </p>
        </header>

        {/* Timeline */}
        <HorizontalTimeline steps={steps} />
      </section>
    </main>
    </section>
  )
}