
// "use client"
// import { useEffect, useRef, useState } from "react"

// "use client"
// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"


// export default function Hero() {
//   const titleRef = useRef(null)
//   const subRef = useRef(null)
//   const audienceRef = useRef(null)

//   useEffect(() => {
//     // Title stroke animation
//     gsap.fromTo(
//       titleRef.current.children,
//       { opacity: 0, scale: 0, rotation: 180, y: 100 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         y: 0,
//         duration: 1.8,
//         stagger: 0.08,
//         ease: "back.out(1.7)",
//       }
//     )

//     // Subheading fade-in
//     gsap.fromTo(
//       subRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: "power3.out" }
//     )
    
//     // Audience image fade-in
//     gsap.fromTo(
//       audienceRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1.5, delay: 2, ease: "power3.out" }
//     )
//   }, [])

//   return (
//     <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-transparent">
//       {/* Background Watermark */}
//       <div className="absolute inset-0 w-full flex items-center justify-center overflow-hidden">
//         <h1 className="text-[20vw] font-extrabold text-white/5 tracking-widest whitespace-nowrap animate-marquee">
//           ELEVATE 2.0
//         </h1>
//       </div>

//       {/* Main Title with Outline + Green Sweep */}
//       <h1
//         ref={titleRef}
//         className="relative flex flex-wrap justify-center font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider"
//       >
//         {"ELEVATE 2.0".split("").map((char, i) => (
//           <span
//             key={i}
//             className="inline-block px-1 relative text-transparent "
//           >
//             {char}
//             {/* Green Gradient Sweep */}
//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c5352] to-transparent bg-[length:200%_100%] animate-sweep text-transparent bg-clip-text">
//               {char}
//             </span>
//           </span>
//         ))}
//       </h1>

//       {/* Subheading + Reflection */}
//       <div className="relative mt-6">
//         <p
//           ref={subRef}
//           className="text-lg sm:text-xl md:text-2xl text-gray-200"
//         >
//           Igniting Innovation • Inspiring Leaders • Shaping Futures
//         </p>
//         <p
//           className="absolute left-0 right-0 top-full text-lg sm:text-xl md:text-2xl text-gray-400 opacity-30 transform scale-y-[-1] blur-sm"
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
//           }}
//         >
//           Igniting Innovation • Inspiring Leaders • Shaping Futures
//         </p>
//       </div>

//       {/* CTA Buttons */}
//       <div className="mt-10 flex gap-6">
//         <button className="px-8 py-3 text-lg font-semibold text-white bg-[#0c5352] rounded-full shadow-lg hover:scale-110 transition-transform">
//           🎟 Register Now
//         </button>
//         <button className="px-8 py-3 text-lg font-semibold text-white border border-[#0c5352] rounded-full hover:bg-[#0c5352]/20 transition">
//           📅 View Schedule
//         </button>
//       </div>

//       {/* Audience Image with Gradient Effect */}
//       <div ref={audienceRef} className="absolute bottom-0 w-full h-1/3 overflow-hidden">
//         {/* Gradient overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
        
//         {/* Audience image */}
//         <div 
//           className="w-full h-full bg-cover bg-center mt-8"
//           style={{
//             backgroundImage: "url('/Audience-removebg-preview.png')"
//           }}
//         ></div>
//       </div>

//       {/* Tailwind Animations */}
//       <style jsx>{`
//         .stroke-text {
//           -webkit-text-stroke: 2px white;
//         }
//         .animate-sweep {
//           animation: sweep 3s linear infinite;
//         }
//         @keyframes sweep {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }
//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }





// "use client";
// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { motion } from "framer-motion";

// export default function ElevateHeroLuminousFlow() {
//     const titleRef = useRef(null);
//     const subRef = useRef(null);
//     const ctaRef = useRef(null);
//     const canvasRef = useRef(null); // For Three.js background

//     const [gsapLoaded, setGsapLoaded] = useState(false);
//     const [threeJsLoaded, setThreeJsLoaded] = useState(false); // State for Three.js loading

//     // Dynamically load GSAP from CDN
//     useEffect(() => {
//         const scriptId = "gsap-cdn-script-v4";
//         if (window.gsap || document.getElementById(scriptId)) {
//             setGsapLoaded(true);
//             return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
//         script.id = scriptId;
//         script.async = true;
//         script.onload = () => setGsapLoaded(true);
//         script.onerror = (error) => console.error("Failed to load GSAP:", error);
//         document.head.appendChild(script);
//         return () => {
//             if (document.getElementById(scriptId)) document.head.removeChild(script);
//         };
//     }, []);

//     // Dynamically load Three.js from CDN
//     useEffect(() => {
//         const scriptId = "threejs-cdn-script-v4";
//         if (window.THREE || document.getElementById(scriptId)) {
//             setThreeJsLoaded(true);
//             return;
//         }
//         const script = document.createElement("script");
//         script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"; // Three.js library
//         script.id = scriptId;
//         script.async = true;
//         script.onload = () => setThreeJsLoaded(true);
//         script.onerror = (error) => console.error("Failed to load Three.js:", error);
//         document.head.appendChild(script);
//         return () => {
//             if (document.getElementById(scriptId)) document.head.removeChild(script);
//         };
//     }, []);

//     // Three.js Background Animation
//     const initThreeJsBackground = useCallback(() => {
//         if (!canvasRef.current || !window.THREE) return;

//         const scene = new window.THREE.Scene();
//         const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new window.THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setClearColor(0x000000, 0); // Transparent background for overlay

//         // Lines/Particles for the flowing effect
//         const numLines = 2000;
//         const positions = new Float32Array(numLines * 3);
//         const colors = new Float32Array(numLines * 3);
//         const velocities = new Float32Array(numLines);

//         const color1 = new window.THREE.Color(0x00d4ff); // Electric Blue
//         const color2 = new window.THREE.Color(0x1cb683); // Vibrant Green

//         for (let i = 0; i < numLines; i++) {
//             // Random positions, focused around center initially
//             positions[i * 3] = (Math.random() - 0.5) * 10; // X
//             positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
//             positions[i * 3 + 2] = -Math.random() * 200; // Z (start far back)

//             // Random color interpolation
//             const c = (Math.random() > 0.5) ? color1 : color2;
//             colors[i * 3] = c.r;
//             colors[i * 3 + 1] = c.g;
//             colors[i * 3 + 2] = c.b;

//             velocities[i] = 0.05 + Math.random() * 0.1; // Speed of movement
//         }

//         const geometry = new window.THREE.BufferGeometry();
//         geometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
//         geometry.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));

//         const material = new window.THREE.PointsMaterial({
//             size: 0.15, // Size of each point
//             vertexColors: true,
//             blending: window.THREE.AdditiveBlending, // For glowing effect
//             transparent: true,
//             opacity: 0.8
//         });

//         const points = new window.THREE.Points(geometry, material);
//         scene.add(points);

//         camera.position.z = 5;

//         let mouseX = 0;
//         let mouseY = 0;

//         const onMouseMove = (event) => {
//             mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//             mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//         };
//         window.addEventListener('mousemove', onMouseMove);

//         const animate = () => {
//             requestAnimationFrame(animate);

//             // Animate points moving forward
//             const positions = geometry.attributes.position.array;
//             for (let i = 0; i < numLines; i++) {
//                 positions[i * 3 + 2] += velocities[i]; // Move points along Z-axis
//                 if (positions[i * 3 + 2] > camera.position.z) {
//                     // Reset point to far back if it passes camera
//                     positions[i * 3] = (Math.random() - 0.5) * 10;
//                     positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//                     positions[i * 3 + 2] = -200 - Math.random() * 100;
//                     velocities[i] = 0.05 + Math.random() * 0.1;
//                 }
//             }
//             geometry.attributes.position.needsUpdate = true;

//             // Subtle camera movement based on mouse
//             camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.01;
//             camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.01;
//             camera.lookAt(scene.position);


//             renderer.render(scene, camera);
//         };
//         animate();

//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('mousemove', onMouseMove);
//             window.removeEventListener('resize', handleResize);
//             // Clean up Three.js resources
//             renderer.dispose();
//             geometry.dispose();
//             material.dispose();
//         };

//     }, [threeJsLoaded]); // Depend on threeJsLoaded state

//     // Initialize Three.js when the component mounts and Three.js is loaded
//     useEffect(() => {
//         if (threeJsLoaded) {
//             initThreeJsBackground();
//         }
//     }, [threeJsLoaded, initThreeJsBackground]);


//     // GSAP animations for text and content - run only when GSAP is loaded
//     useEffect(() => {
//         if (!gsapLoaded || !titleRef.current || !subRef.current || !ctaRef.current) return;
//         const gsap = window.gsap;

//         // "ELEVATE 2.0" text reveal animation
//         // Each character fades in, scales slightly, and expands its outline glow
//         gsap.fromTo(
//   titleRef.current.children,
//   { opacity: 0, scale: 0.8 }, // No textShadow here
//   {
//     opacity: 1,
//     scale: 1,
//     duration: 1.2,
//     stagger: 0.08,
//     ease: "power3.out",
//     delay: 1.5, // Delay for background to settle
//   }
// );


//         // Subheading fade-in with a subtle shift
//         gsap.fromTo(
//             subRef.current,
//             { opacity: 0, y: 20 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 delay: 2.8, // After title
//                 ease: "power2.out",
//             }
//         );

//         // CTA buttons fade-in and slide up
//         gsap.fromTo(
//             ctaRef.current.children,
//             { opacity: 0, y: 20 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 delay: 3.2, // After subheading
//                 ease: "power2.out",
//                 stagger: 0.15,
//             }
//         );
//     }, [gsapLoaded]);


//     return (
//         <section
//             id="hero"
//             className="relative h-screen w-full flex flex-col items-center justify-center text-center text-transparent overflow-hidden " // Deep dark background
//         >
//             {/* Three.js Canvas Background */}
//             <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full block" />

//             {/* Dark Gradient Overlay for content contrast and depth */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" /> {/* Reduced opacity */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-70" /> Reduced opacity

//             {/* Main Content Container */}
//             <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
//                 {/* Main Title with Dynamic Outline and Luminous Effect */}
//                 <h1
//                     ref={titleRef}
//                     className="relative flex flex-wrap justify-center font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wider mb-6 leading-tight text-transparent text-outline-effect"
//                 >
//                     {"ELEVATE 2.0".split("").map((char, i) => (
//                         <span
//                             key={i}
//                             className="inline-block px-1 relative" // The actual characters
//                         >
//                             {char}
//                         </span>
//                     ))}
//                 </h1>

//                 {/* Subheading with Subtle Blur-in Effect */}
//                 <div className="relative mt-6 max-w-3xl">
//                     <p
//                         ref={subRef}
//                         className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#e5e7eb] font-light leading-relaxed text-shadow-soft"
//                     >
//                         Igniting Innovation • Inspiring Leaders • Shaping Futures
//                     </p>
//                     {/* Simplified Reflection (less intense for cleaner look) */}
//                     <p
//                         className="absolute left-0 right-0 top-[calc(100%+8px)] text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 opacity-5 transform scale-y-[-1] blur-xs pointer-events-none"
//                         style={{
//                             WebkitMaskImage:
//                                 "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
//                         }}
//                     >
//                         Igniting Innovation • Inspiring Leaders • Shaping Futures
//                     </p>
//                 </div>

//                 {/* Call-to-Action Buttons */}
//                 <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
//                     <button className="px-10 py-4 text-xl font-bold text-white bg-[#0c5352] rounded-full shadow-2xl hover:shadow-glow-pulse hover:scale-105 transition-all duration-300 ease-out transform active:scale-95 button-hover-shimmer">
//                         Register Now
//                     </button>
//                     <button className="px-10 py-4 text-xl font-bold text-white border-2 border-[#0c5352] rounded-full hover:bg-[#0c5352]/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 ">
//                         View Schedule
//                     </button>
//                 </div>
//             </div>

//             {/* Global Styles and Animations */}
//             <style jsx global>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
//                 body {
//                     font-family: 'Inter', sans-serif;
//                     margin: 0;
                     
//                 }

//                 /* Custom CSS for the outline effect */
//                 .text-outline-effect {
//                     -webkit-text-stroke: 2px white; /* White outline */
//                     text-stroke: 2px white;
//                 }

//                 /* Text sweep animation for title - NO LONGER USED FOR FILL, BUT KEPT IF REPURPOSED */
//                 .animate-sweep {
//                     animation: none; /* Disabling for the outline text */
//                 }
//                 @keyframes sweep {
//                     0% { background-position: -200% 0; }
//                     100% { background-position: 200% 0; }
//                 }

//                 /* Luminous text shadows for the outlined main title */
//                 /* This is now animated via GSAP directly */
//                 .text-shadow-luminous-outline {
//                     /* Default state before GSAP animation takes over */
//                     text-shadow:
//                         0 0 10px rgba(255, 255, 255, 0.8), /* Soft white inner glow */
//                         0 0 20px rgba(0, 212, 255, 0.7),   /* Electric blue mid glow */
//                         0 0 30px rgba(28, 182, 131, 0.6);   /* Vibrant green outer glow */
//                 }
//                 .text-shadow-soft {
//                     text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
//                 }


//                 /* Button specific glows and effects */
//                 .shadow-glow-pulse {
//                     box-shadow: 0 0 25px rgba(0, 212, 255, 0.6), 0 0 40px rgba(28, 182, 131, 0.5);
//                 }

//                 .button-hover-shimmer {
//                     position: relative;
//                     overflow: hidden;
//                     z-index: 1;
//                 }
//                 .button-hover-shimmer:after {
//                     content: '';
//                     position: absolute;
//                     top: 0;
//                     left: -100%;
//                     width: 30%;
//                     height: 100%;
//                     background: rgba(255,255,255,0.3);
//                     transform: skewX(-20deg);
//                     transition: all 0.7s ease-in-out;
//                     z-index: 0;
//                 }
//                 .button-hover-shimmer:hover:after {
//                     left: 100%;
//                 }

//                 .button-border-gradient-hover {
//                     position: relative;
//                     z-index: 0;
//                     transition: all 0.3s ease;
//                 }
//                 .button-border-gradient-hover:before {
//                     content: '';
//                     position: absolute;
//                     inset: -3px; /* Slightly larger than the button to cover border */
//                     border-radius: 9999px; /* Full rounded for button */
//                     background: linear-gradient(45deg, #00d4ff, #0c5352);
//                     z-index: -1;
//                     opacity: 0;
//                     filter: blur(12px);
//                     transition: opacity 0.5s ease, filter 0.5s ease;
//                 }
//                 .button-border-gradient-hover:hover:before {
//                     opacity: 1;
//                     filter: blur(8px); /* More focused glow on hover */
//                 }
//             `}</style>
//         </section>
//     );
// }


"use client"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const badgeRef = useRef(null)
  const cardsRef = useRef([])
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Set up the Audiowide font
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Simple fade-in animations without GSAP
    if (badgeRef.current) {
      badgeRef.current.style.opacity = '0'
      badgeRef.current.style.transform = 'translateY(-20px)'
      setTimeout(() => {
        badgeRef.current.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
        badgeRef.current.style.opacity = '1'
        badgeRef.current.style.transform = 'translateY(0)'
      }, 300)
    }

    if (titleRef.current) {
      titleRef.current.style.opacity = '0'
      titleRef.current.style.transform = 'translateY(30px)'
      setTimeout(() => {
        titleRef.current.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
        titleRef.current.style.opacity = '1'
        titleRef.current.style.transform = 'translateY(0)'
      }, 600)
    }

    if (subRef.current) {
      subRef.current.style.opacity = '0'
      subRef.current.style.transform = 'translateY(20px)'
      setTimeout(() => {
        subRef.current.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
        subRef.current.style.opacity = '1'
        subRef.current.style.transform = 'translateY(0)'
      }, 900)
    }

    // Animate cards with staggered timing
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(40px)'
        setTimeout(() => {
          card.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, 1200 + index * 200)
      }
    })
  }, [])

  const handleTitleMouseMove = (e) => {
    if (!titleRef.current) return
    
    const rect = titleRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setCursorPosition({ x, y })
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 py-8 sm:py-12 lg:py-16 pt-16 sm:pt-8"
      style={{
        backgroundImage: "url('/Audience2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Updated overlay color to #020617 */}
      <div className="absolute inset-0 bg-[#020617]/50 z-10"></div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 z-20 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Moving Beams */}
      <div className="absolute inset-0 z-15 overflow-hidden">
        {/* Beam 1 */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent animate-beam1"></div>
        
        {/* Beam 2 */}
        <div className="absolute top-1/4 right-0 w-40 sm:w-64 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent animate-beam2"></div>
        
        {/* Beam 3 */}
        <div className="absolute top-2/3 left-0 w-36 sm:w-56 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent animate-beam3"></div>
        
        {/* Beam 4 */}
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent animate-beam4"></div>
        
        {/* Diagonal Beam */}
        <div className="absolute top-0 left-0 w-1 h-32 sm:h-64 bg-gradient-to-b from-transparent via-[#10B981] to-transparent animate-diagonal-beam1"></div>
        
        {/* Diagonal Beam 2 */}
        <div className="absolute bottom-0 right-0 w-1 h-32 sm:h-48 bg-gradient-to-b from-transparent via-[#10B981] to-transparent animate-diagonal-beam2"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-15 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              background: 'rgba(32, 169, 123, 0.6)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `floatParticle ${15 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mt-16 mx-auto w-full">
        
        {/* Top Badge */}
        <div ref={badgeRef} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#20A97B]/30 bg-black/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#20A97B] rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">Join Us</span>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Main Title with Audiowide font - Improved responsive sizing */}
        <div 
          ref={titleRef} 
          className="mb-6 sm:mb-8 relative px-2"
          onMouseMove={handleTitleMouseMove}
          onMouseLeave={() => setCursorPosition({ x: 50, y: 50 })}
        >
          <h1 className="group text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight cursor-pointer relative">
            <span 
              className="block bg-clip-text text-transparent drop-shadow-2xl relative z-10"
              style={{ 
                fontFamily: "'Audiowide', cursive",
                backgroundImage: `radial-gradient(circle at ${cursorPosition.x}% ${cursorPosition.y}%, #10B981, white, #10B981)`,
                backgroundSize: '200% 200%',
                transition: 'background-position 0.1s ease'
              }}
            >
              ELEVATE 2.0
            </span>
          </h1>
        </div>

        {/* Subheading with enhanced animation - Improved responsive text */}
        <div ref={subRef} className="mb-8 sm:mb-12 px-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <span className="inline-block opacity-0 animate-fadeInSequence">Igniting Innovation</span>
            <span className="text-[#20A97B] mx-2 sm:mx-3">•</span>
            <span className="inline-block opacity-0 animate-fadeInSequence" style={{animationDelay: '0.5s'}}>Inspiring Leaders</span>
            <span className="text-[#20A97B] mx-2 sm:mx-3">•</span>
            <span className="inline-block opacity-0 animate-fadeInSequence" style={{animationDelay: '1s'}}>Shaping Futures</span>
          </p>
        </div>

        {/* Bottom Stats Row - 2x2 Grid on Mobile, Row on Desktop */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row items-end justify-center max-w-7xl mx-auto gap-3 sm:gap-6 lg:gap-8 px-4">
          
          {/* First Card - Responsive sizing */}
          <div 
            ref={el => cardsRef.current[0] = el}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-3 sm:p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl w-full sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 lg:h-56"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <div className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-4">100 +</div>
              <div className="text-gray-300 text-xs sm:text-base lg:text-lg">Components available</div>
            </div>
          </div>

          {/* Second Card - Responsive sizing */}
          <div 
            ref={el => cardsRef.current[1] = el}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-3 sm:p-6 transition-all duration-500 hover:shadow-xl w-full sm:w-44 md:w-48 lg:w-56 h-32 sm:h-36 lg:h-40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/50 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">V0 Compatible</h3>
            </div>
          </div>

          {/* Third Card - Responsive sizing */}
          <div 
            ref={el => cardsRef.current[2] = el}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-4 sm:p-6 transition-all duration-500 hover:shadow-xl w-full sm:w-44 md:w-48 lg:w-56 h-32 sm:h-36 lg:h-40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600/50 backdrop-blur-sm flex items-center justify-center mb-2 sm:mb-4">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">Animated UI</h3>
            </div>
          </div>

          {/* Fourth Card - Responsive sizing */}
          <div 
            ref={el => cardsRef.current[3] = el}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:shadow-2xl w-full sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 lg:h-56"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4">15 +</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Categories available</div>
            </div>
          </div>
        </div>

        {/* Industry Standards Icons - Responsive */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-500 px-4">
          <span className="text-xs sm:text-sm mb-2 sm:mb-0">We use industry standards like</span>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">R</span>
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle animated background elements - Responsive */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-[#20A97B]/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-[#20A97B]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-35px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes fadeInSequence {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes beam1 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes beam2 {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes beam3 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes beam4 {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes diagonal-beam1 {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100vw, 100vh) rotate(45deg); }
        }
        
        @keyframes diagonal-beam2 {
          0% { transform: translate(100vw, 100vh) rotate(-45deg); }
          100% { transform: translate(-100%, -100%) rotate(-45deg); }
        }
        
        .animate-beam1 {
          animation: beam1 8s linear infinite;
          animation-delay: 0s;
        }
        
        .animate-beam2 {
          animation: beam2 12s linear infinite;
          animation-delay: 2s;
        }
        
        .animate-beam3 {
          animation: beam3 10s linear infinite;
          animation-delay: 4s;
        }
        
        .animate-beam4 {
          animation: beam4 15s linear infinite;
          animation-delay: 1s;
        }
        
        .animate-diagonal-beam1 {
          animation: diagonal-beam1 20s linear infinite;
        }
        
        .animate-diagonal-beam2 {
          animation: diagonal-beam2 18s linear infinite;
          animation-delay: 3s;
        }
        
        .animate-fadeInSequence {
          animation: fadeInSequence 1s forwards;
        }

        /* Custom breakpoint for very small screens */
        @media (min-width: 475px) {
          .xs\\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
        }
      `}</style>
      
    </section>
  )
}
