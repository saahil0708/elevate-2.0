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





"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function ElevateHeroLuminousFlow() {
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const canvasRef = useRef(null); // For Three.js background

    const [gsapLoaded, setGsapLoaded] = useState(false);
    const [threeJsLoaded, setThreeJsLoaded] = useState(false); // State for Three.js loading

    // Dynamically load GSAP from CDN
    useEffect(() => {
        const scriptId = "gsap-cdn-script-v4";
        if (window.gsap || document.getElementById(scriptId)) {
            setGsapLoaded(true);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
        script.id = scriptId;
        script.async = true;
        script.onload = () => setGsapLoaded(true);
        script.onerror = (error) => console.error("Failed to load GSAP:", error);
        document.head.appendChild(script);
        return () => {
            if (document.getElementById(scriptId)) document.head.removeChild(script);
        };
    }, []);

    // Dynamically load Three.js from CDN
    useEffect(() => {
        const scriptId = "threejs-cdn-script-v4";
        if (window.THREE || document.getElementById(scriptId)) {
            setThreeJsLoaded(true);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"; // Three.js library
        script.id = scriptId;
        script.async = true;
        script.onload = () => setThreeJsLoaded(true);
        script.onerror = (error) => console.error("Failed to load Three.js:", error);
        document.head.appendChild(script);
        return () => {
            if (document.getElementById(scriptId)) document.head.removeChild(script);
        };
    }, []);

    // Three.js Background Animation
    const initThreeJsBackground = useCallback(() => {
        if (!canvasRef.current || !window.THREE) return;

        const scene = new window.THREE.Scene();
        const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new window.THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background for overlay

        // Lines/Particles for the flowing effect
        const numLines = 2000;
        const positions = new Float32Array(numLines * 3);
        const colors = new Float32Array(numLines * 3);
        const velocities = new Float32Array(numLines);

        const color1 = new window.THREE.Color(0x00d4ff); // Electric Blue
        const color2 = new window.THREE.Color(0x1cb683); // Vibrant Green

        for (let i = 0; i < numLines; i++) {
            // Random positions, focused around center initially
            positions[i * 3] = (Math.random() - 0.5) * 10; // X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
            positions[i * 3 + 2] = -Math.random() * 200; // Z (start far back)

            // Random color interpolation
            const c = (Math.random() > 0.5) ? color1 : color2;
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;

            velocities[i] = 0.05 + Math.random() * 0.1; // Speed of movement
        }

        const geometry = new window.THREE.BufferGeometry();
        geometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));

        const material = new window.THREE.PointsMaterial({
            size: 0.15, // Size of each point
            vertexColors: true,
            blending: window.THREE.AdditiveBlending, // For glowing effect
            transparent: true,
            opacity: 0.8
        });

        const points = new window.THREE.Points(geometry, material);
        scene.add(points);

        camera.position.z = 5;

        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);

            // Animate points moving forward
            const positions = geometry.attributes.position.array;
            for (let i = 0; i < numLines; i++) {
                positions[i * 3 + 2] += velocities[i]; // Move points along Z-axis
                if (positions[i * 3 + 2] > camera.position.z) {
                    // Reset point to far back if it passes camera
                    positions[i * 3] = (Math.random() - 0.5) * 10;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
                    positions[i * 3 + 2] = -200 - Math.random() * 100;
                    velocities[i] = 0.05 + Math.random() * 0.1;
                }
            }
            geometry.attributes.position.needsUpdate = true;

            // Subtle camera movement based on mouse
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.01;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.01;
            camera.lookAt(scene.position);


            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            // Clean up Three.js resources
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };

    }, [threeJsLoaded]); // Depend on threeJsLoaded state

    // Initialize Three.js when the component mounts and Three.js is loaded
    useEffect(() => {
        if (threeJsLoaded) {
            initThreeJsBackground();
        }
    }, [threeJsLoaded, initThreeJsBackground]);


    // GSAP animations for text and content - run only when GSAP is loaded
    useEffect(() => {
        if (!gsapLoaded || !titleRef.current || !subRef.current || !ctaRef.current) return;
        const gsap = window.gsap;

        // "ELEVATE 2.0" text reveal animation
        // Each character fades in, scales slightly, and expands its outline glow
        gsap.fromTo(
  titleRef.current.children,
  { opacity: 0, scale: 0.8 }, // No textShadow here
  {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    stagger: 0.08,
    ease: "power3.out",
    delay: 1.5, // Delay for background to settle
  }
);


        // Subheading fade-in with a subtle shift
        gsap.fromTo(
            subRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 2.8, // After title
                ease: "power2.out",
            }
        );

        // CTA buttons fade-in and slide up
        gsap.fromTo(
            ctaRef.current.children,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 3.2, // After subheading
                ease: "power2.out",
                stagger: 0.15,
            }
        );
    }, [gsapLoaded]);


    return (
        <section
            id="hero"
            className="relative h-screen w-full flex flex-col items-center justify-center text-center text-transparent overflow-hidden " // Deep dark background
        >
            {/* Three.js Canvas Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full block" />

            {/* Dark Gradient Overlay for content contrast and depth */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" /> {/* Reduced opacity */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-70" /> Reduced opacity

            {/* Main Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
                {/* Main Title with Dynamic Outline and Luminous Effect */}
                <h1
                    ref={titleRef}
                    className="relative flex flex-wrap justify-center font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wider mb-6 leading-tight text-transparent text-outline-effect"
                >
                    {"ELEVATE 2.0".split("").map((char, i) => (
                        <span
                            key={i}
                            className="inline-block px-1 relative" // The actual characters
                        >
                            {char}
                        </span>
                    ))}
                </h1>

                {/* Subheading with Subtle Blur-in Effect */}
                <div className="relative mt-6 max-w-3xl">
                    <p
                        ref={subRef}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#e5e7eb] font-light leading-relaxed text-shadow-soft"
                    >
                        Igniting Innovation • Inspiring Leaders • Shaping Futures
                    </p>
                    {/* Simplified Reflection (less intense for cleaner look) */}
                    <p
                        className="absolute left-0 right-0 top-[calc(100%+8px)] text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 opacity-5 transform scale-y-[-1] blur-xs pointer-events-none"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
                        }}
                    >
                        Igniting Innovation • Inspiring Leaders • Shaping Futures
                    </p>
                </div>

                {/* Call-to-Action Buttons */}
                <div ref={ctaRef} className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <button className="px-10 py-4 text-xl font-bold text-white bg-[#0c5352] rounded-full shadow-2xl hover:shadow-glow-pulse hover:scale-105 transition-all duration-300 ease-out transform active:scale-95 button-hover-shimmer">
                        Register Now
                    </button>
                    <button className="px-10 py-4 text-xl font-bold text-white border-2 border-[#0c5352] rounded-full hover:bg-[#0c5352]/50 transition-all duration-300 ease-out hover:scale-105 active:scale-95 ">
                        View Schedule
                    </button>
                </div>
            </div>

            {/* Global Styles and Animations */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    margin: 0;
                     
                }

                /* Custom CSS for the outline effect */
                .text-outline-effect {
                    -webkit-text-stroke: 2px white; /* White outline */
                    text-stroke: 2px white;
                }

                /* Text sweep animation for title - NO LONGER USED FOR FILL, BUT KEPT IF REPURPOSED */
                .animate-sweep {
                    animation: none; /* Disabling for the outline text */
                }
                @keyframes sweep {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }

                /* Luminous text shadows for the outlined main title */
                /* This is now animated via GSAP directly */
                .text-shadow-luminous-outline {
                    /* Default state before GSAP animation takes over */
                    text-shadow:
                        0 0 10px rgba(255, 255, 255, 0.8), /* Soft white inner glow */
                        0 0 20px rgba(0, 212, 255, 0.7),   /* Electric blue mid glow */
                        0 0 30px rgba(28, 182, 131, 0.6);   /* Vibrant green outer glow */
                }
                .text-shadow-soft {
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
                }


                /* Button specific glows and effects */
                .shadow-glow-pulse {
                    box-shadow: 0 0 25px rgba(0, 212, 255, 0.6), 0 0 40px rgba(28, 182, 131, 0.5);
                }

                .button-hover-shimmer {
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                .button-hover-shimmer:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 30%;
                    height: 100%;
                    background: rgba(255,255,255,0.3);
                    transform: skewX(-20deg);
                    transition: all 0.7s ease-in-out;
                    z-index: 0;
                }
                .button-hover-shimmer:hover:after {
                    left: 100%;
                }

                .button-border-gradient-hover {
                    position: relative;
                    z-index: 0;
                    transition: all 0.3s ease;
                }
                .button-border-gradient-hover:before {
                    content: '';
                    position: absolute;
                    inset: -3px; /* Slightly larger than the button to cover border */
                    border-radius: 9999px; /* Full rounded for button */
                    background: linear-gradient(45deg, #00d4ff, #0c5352);
                    z-index: -1;
                    opacity: 0;
                    filter: blur(12px);
                    transition: opacity 0.5s ease, filter 0.5s ease;
                }
                .button-border-gradient-hover:hover:before {
                    opacity: 1;
                    filter: blur(8px); /* More focused glow on hover */
                }
            `}</style>
        </section>
    );
}
