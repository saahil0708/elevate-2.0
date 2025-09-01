"use client"

import React from "react"
import { CalendarDays, Lightbulb, Trophy } from "lucide-react"
import { IoChevronDownOutline } from "react-icons/io5"
import { cn } from "@/lib/utils"

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

export default function HorizontalTimelineWrapper() {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-10">
      {/* ambient glow behind timeline */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />
      <HorizontalTimeline steps={steps} />
    </div>
  )
}

function HorizontalTimeline({ steps }) {
  return (
    <div className="relative">
      <div className="relative mx-auto flex justify-center">
        {/* glowing center line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-emerald-500/40"
          style={{ filter: "drop-shadow(0 0 20px rgba(16,185,129,0.5))" }}
        />

        <ul className="relative flex items-stretch gap-14 px-6 py-28 md:py-32 justify-center">
          {steps.map((s, i) => {
            const Icon = iconFor(i)

            return (
              <li
                key={s.phase}
                className="relative snap-start basis-[320px] shrink-0 group"
              >
                {/* node on the line */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(16,185,129,0.15),0_0_18px_rgba(16,185,129,0.45)]"
                />

                {/* hex badge + content */}
                <div
                  className={cn(
                    "flex flex-col items-center text-center",
                    i === 1
                      ? "mt-40 md:-mb-40"
                      : "mb-36 -mt-24 md:-mt-40"
                  )}
                >
                  <HexBadge label={s.phase} tone={toneFor(i)}>
                    <Icon className="mt-1 h-6 w-6 text-[#1cb683]" aria-hidden="true" />
                  </HexBadge>

                  {/* glowing downward chevron as timeline marker */}
                  <div className="mt-2 flex justify-center z-10 relative">
                    <div className="w-10 h-10 rounded-full bg-[#1cb683]/20 flex items-center justify-center shadow-lg animate-pulse">
                      <IoChevronDownOutline className="h-5 w-5 text-[#1cb683] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    </div>
                  </div>

                  <div className="mt-2 max-w-[260px] text-center">
                    <h3 className="text-sm md:text-base font-semibold text-[#1cb683]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-300">
                      {s.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function toneFor(i) {
  return ["teal", "cyan", "emerald"][i % 3]
}

function iconFor(i) {
  const icons = [CalendarDays, Lightbulb, Trophy]
  return icons[i % icons.length]
}

function HexBadge({ label, tone = "teal", children }) {
  const colors = {
    teal: { bg: "rgba(13,148,136,0.22)", border: "rgba(45,212,191,0.9)", glow: "rgba(45,212,191,0.4)" },
    cyan: { bg: "rgba(14,116,144,0.22)", border: "rgba(103,232,249,0.9)", glow: "rgba(103,232,249,0.4)" },
    emerald: { bg: "rgba(6,95,70,0.22)", border: "rgba(52,211,153,0.9)", glow: "rgba(52,211,153,0.4)" },
  }

  const hexClip = "polygon(25% 3%, 75% 3%, 97% 50%, 75% 97%, 25% 97%, 3% 50%)"

  return (
    <div className="relative group">
      <div
        aria-hidden="true"
        className="absolute -inset-2 -z-10 blur-sm opacity-70 transition-all duration-300 group-hover:blur-lg group-hover:opacity-100"
        style={{ background: colors[tone].glow, clipPath: hexClip }}
      />
      <div
        className="relative mx-auto transition-transform duration-300 ease-out group-hover:scale-[1.05]"
        style={{
          width: 120,
          height: 120,
          clipPath: hexClip,
          background: colors[tone].bg,
          boxShadow: `0 0 18px ${colors[tone].glow}`,
          border: `2px solid ${colors[tone].border}`,
        }}
      >
        <div
          className="absolute inset-2 flex items-center justify-center"
          style={{
            clipPath: hexClip,
            border: `2px solid ${colors[tone].border}`,
            background: "rgba(2,6,23,0.88)",
          }}
        >
          <div className="text-center leading-none px-2">
            <div className="text-[11px] md:text-xs uppercase tracking-widest text-white/85">
              {label}
            </div>
            <div className="mt-1 flex items-center justify-center">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HorizontalTimeline }
