// "use client"

// import RollingGallery from "./RollingGallery"

// const IMGS = [
//   {
//     title: "Moonbeam",
//     url: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     title: "Cursor",
//     url: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     title: "Rogue",
//     url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     title: "Editorially",
//     url: "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     title: "Editrix AI",
//     url: "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=1200&auto=format&fit=crop",
//   },
// ]

// export default function Gallery() {
//   return (
//     <section id="gallery" className="text-white py-20 bg-transparent">
//       {/* Heading */}
//       <div className="text-center max-w-5xl mx-auto px-4">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wide">
//           GLIMPSES <span className="text-[#1cb683]">2024</span>
//         </h1>
//         <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6" />
//         <p className="text-lg text-gray-300">
//           A glimpse into the unforgettable experiences we've created
//         </p>
//       </div>

//       {/* Rolling Gallery with text */}
//       <div className="mt-16 px-6">
//         <RollingGallery autoplay={true} pauseOnHover={true} images={IMGS} />
//       </div>

//       {/* Button */}
//       <div className="mt-16 flex justify-center">
//         <button className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
//           <span>More From Our Collection</span>
//           <span className="text-xl">↗</span>
//         </button>
//       </div>
//     </section>
//   )
// }


// import React from "react";
// import {
//   DraggableCardBody,
//   DraggableCardContainer,
// } from "../Components/ui/draggable-card";

// export function DraggableCardDemo() {
//   const items = [
//     {
//       title: "Tyler Durden",
//       image:
//         "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-10 left-[20%] rotate-[-5deg]",
//     },
//     {
//       title: "The Narrator",
//       image:
//         "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-40 left-[25%] rotate-[-7deg]",
//     },
//     {
//       title: "Iceland",
//       image:
//         "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-5 left-[40%] rotate-[8deg]",
//     },
//     {
//       title: "Japan",
//       image:
//         "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-32 left-[55%] rotate-[10deg]",
//     },
//     {
//       title: "Norway",
//       image:
//         "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-20 right-[35%] rotate-[2deg]",
//     },
//     {
//       title: "New Zealand",
//       image:
//         "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-24 left-[45%] rotate-[-7deg]",
//     },
//     {
//       title: "Canada",
//       image:
//         "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       className: "absolute top-8 left-[30%] rotate-[4deg]",
//     },
//   ];
//   return (
//     <DraggableCardContainer
//       className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
//       <p
//         className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
//         If its your first day at Fight Club, you have to fight.
//       </p>
//       {items.map((item) => (
//         <DraggableCardBody className={item.className}>
//           <img
//             src={item.image}
//             alt={item.title}
//             className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
//           <h3
//             className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
//             {item.title}
//           </h3>
//         </DraggableCardBody>
//       ))}
//     </DraggableCardContainer>
//   );
// }
// export default DraggableCardDemo;

"use client";
import { ThreeDMarquee } from "../Components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div
      className="mx-auto my-10 max-w- rounded-3xl bg-[#020617] p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
export default ThreeDMarqueeDemo;
