// "use client"
// import { TextHoverEffect } from "@/Components/ui/text-hover-effect"
// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"

// export default function HomePage() {
//   const containerRef = useRef(null)
//   const linesRef = useRef(null)
//   const yearRef = useRef(null)
//   const particlesRef = useRef(null)
//   const glowRef = useRef(null)

//   useEffect(() => {
//     const container = containerRef.current
//     const lines = linesRef.current
//     const year = yearRef.current
//     const particles = particlesRef.current
//     const glow = glowRef.current

//     if (!container || !lines || !year || !particles || !glow) return

//     const tl = gsap.timeline()

//     // Initial states
//     gsap.set(container, { opacity: 0 })
//     gsap.set(lines.children, { opacity: 0, scale: 0, rotation: 0 })
//     gsap.set(year, { opacity: 0, scale: 0.8, y: 30 })
//     gsap.set(particles.children, { opacity: 0, scale: 0 })
//     gsap.set(glow, { opacity: 0, scale: 0.8 })

//     tl.to(container, { opacity: 1, duration: 1, ease: "power2.out" })
//       .to(glow, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }, "-=0.8")
//       .to(
//         lines.children,
//         {
//           opacity: 1,
//           scale: 1,
//           rotation: (i, target) => gsap.getProperty(target, "rotation"),
//           duration: 1.2,
//           stagger: 0.15,
//           ease: "elastic.out(1, 0.6)",
//         },
//         "-=1.5",
//       )
//       .to(
//         particles.children,
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: "back.out(1.7)",
//         },
//         "-=1",
//       )
//       .to(
//         year,
//         {
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power3.out",
//         },
//         "+=0.2",
//       )

//     // Continuous floating animation for particles
//     gsap.to(particles.children, {
//       y: "random(-15, 15)",
//       x: "random(-8, 8)",
//       rotation: "random(-90, 90)",
//       duration: "random(4, 7)",
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: 0.3,
//     })

//     // Continuous glow pulse
//     gsap.to(glow, {
//       scale: 1.05,
//       opacity: 0.9,
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     })

//     return () => {
//       tl.kill()
//     }
//   }, [])

//   return (
//     <div ref={containerRef} className="min-h-screen relative overflow-hidden">
//       <div
//         ref={glowRef}
//         className="absolute inset-0 pointer-events-none opacity-30"
//         style={{
//           background: `radial-gradient(circle at 50% 50%, rgba(28, 182, 131, 0.08) 0%, transparent 70%)`,
//           filter: "blur(50px)",
//         }}
//       />

//       <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
//         {Array.from({ length: 3 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full"
//             style={{
//               background: "#1cb683",
//               boxShadow: `0 0 8px #1cb683, 0 0 16px #1cb683`,
//               left: `${20 + Math.random() * 60}%`,
//               top: `${20 + Math.random() * 60}%`,
//             }}
//           />
//         ))}
//       </div>

//       <div ref={linesRef} className="absolute inset-0">
//         {[
//           { top: "25%", left: "15%", width: "50px", rotation: "45deg" },
//           { top: "40%", right: "25%", width: "40px", rotation: "-15deg" },
//           { top: "60%", left: "30%", width: "60px", rotation: "60deg" },
//           { bottom: "30%", right: "20%", width: "45px", rotation: "30deg" },
//           { bottom: "45%", left: "25%", width: "35px", rotation: "-25deg" },
//         ].map((line, i) => (
//           <div
//             key={i}
//             className="absolute h-px hidden sm:block"
//             style={{
//               ...line,
//               width: line.width,
//               transform: `rotate(${line.rotation})`,
//               background: `linear-gradient(90deg, transparent, #1cb683, transparent)`,
//               boxShadow: `0 0 8px #1cb683, 0 0 16px rgba(28, 182, 131, 0.4)`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
//         <div className="w-full max-w-full h-24 sm:h-32 md:h-40 lg:h-80 relative top-10">
//           <TextHoverEffect text="ELEVATE 2.0" duration={0.3} />
//         </div>

//         <div className="relative mt-4 sm:mt-6 lg:mt-0">

//           <p
//             ref={yearRef}
//             className="relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl max-w-3xl mb-8 sm:mb-12 font-bold tracking-[0.2em] px-6 sm:px-8 lg:px-12 py-3 sm:py-6"
//             style={{
//               background: `linear-gradient(135deg, #1cb683 0%, #0d9488 50%, #1cb683 100%)`,
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               filter: "drop-shadow(0 2px 8px rgba(28, 182, 131, 0.3))",
//             }}
//           >
//             2025
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// import React from "react";
// import { TextHoverEffect } from "@/Components/ui/text-hover-effect";

// export default function TextHoverEffectDemo() {
//   return (
//     <div className="h-[20rem] flex items-center justify-center">
//       <TextHoverEffect text="ELEVATE 2.0" />
//     </div>
//   );
// }



// "use client";
// import React from "react";
// import { BackgroundBeams } from "../components/ui/background-beams"

// function BackgroundBeamsDemo() {
//   return (
//     <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//       <div className="max-w-2xl mx-auto p-4">
//         <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
//           Join the waitlist
//         </h1>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//           Welcome to MailJet, the best transactional email service on the web.
//           We provide reliable, scalable, and customizable email solutions for
//           your business. Whether you&apos;re sending order confirmations,
//           password reset emails, or promotional campaigns, MailJet has got you
//           covered.
//         </p>
//         <input
//           type="text"
//           placeholder="hi@manuarora.in"
//           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
//         />
//       </div>
//       <BackgroundBeams />
//     </div>
//   );
// }

// export default BackgroundBeamsDemo;

/*------Second try-------*/

// "use client";
// import { useScroll, useTransform } from "motion/react";
// import React from "react";
// import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect"

// export function GoogleGeminiEffectDemo() {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
//   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
//   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
//   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
//   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

//   return (
//     <div
//       className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
//       ref={ref}>
//       <GoogleGeminiEffect
//         pathLengths={[
//           pathLengthFirst,
//           pathLengthSecond,
//           pathLengthThird,
//           pathLengthFourth,
//           pathLengthFifth,
//         ]} />
//     </div>
//   );
// }
// export default GoogleGeminiEffectDemo;

/*-------3rd try----------*/
import React from "react";
import { BackgroundBeamsWithCollision } from "../Components/ui/background-beams-with-collision";
// import { Cover } from "../components/ui/cover";
import { TextHoverEffect } from "../Components/ui/text-hover-effect";
import {TypewriterEffectSmooth} from "../Components/ui/typewriter-effect"

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Relaunching Futures in 2025",
      className: "text-[#1cb683] dark:text-blue-500",
    },
  
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundBeamsWithCollision className="h-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          {/* ELEVATE with hover effect */}
          <div className="h-[40%] w-full flex items-center justify-center">
            <TextHoverEffect 
              text="ELEVATE 2.0" 
              className="text-6xl md:text-8xl lg:text-[14rem] font-bold"
            />
          </div>
          {/* <div className="w-full flex justify-end pr-4 md:pr-8 lg:pr-80 lg:-mt-[5%]">
            <TypewriterEffectSmooth words={words} />
          </div>
           */}
          {/* 2.0 version text */}
          {/* <div className="relative mx-auto w-max ">
            <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-transparent via-[#1cb683] to-transparent">
              <span className="text-5xl md:text-7xl lg:text-[5rem] font-bold">
                2.0
              </span>
            </div>
          </div> */}
          
          {/* Launching Futures text
          <div className="mt-8 md:mt-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-[#1cb683] via-[#149d6f] to-[#0d7a56]">
              Launching Futures again <br /> in <Cover>2025</Cover>
            </h1>
          </div> */
           <TypewriterEffectSmooth words={words}  />
           }
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default TypewriterEffectSmoothDemo;