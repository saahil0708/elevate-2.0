// import Hero from "@/New/Hero"
// import CombinedAbout from "@/New/About"
// import MainSpeakers from '../Components/ThreeScene';
// import Testimonials from '@/Components/Testimonials';
// import Gallery from "@/Components/Gallery";
// import Cultural from "@/New/Cultural";
// import Footer from "@/Components/Footer"
// import IdeaJamSection from "@/New/IdeaJam";

// export default function Layout() {
//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
//       {/* Main gradient background matching ideajam */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
//       <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-transparent" />

//       {/* Floating blur elements with pulse animations */}
//       <div
//         className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"
//         style={{ animationDuration: "4s" }}
//       />
//       <div
//         className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/8 rounded-full blur-3xl animate-pulse"
//         style={{ animationDelay: "2s", animationDuration: "6s" }}
//       />
//       <div
//         className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-400/6 rounded-full blur-2xl animate-pulse"
//         style={{ animationDelay: "3s", animationDuration: "5s" }}
//       />

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `
//                         linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//                     `,
//           backgroundSize: "50px 50px",
//         }}
//       />

//       {/* Professional corner accents */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-500/5 via-transparent to-transparent rounded-full blur-3xl" />

//       <div className="relative z-10">
//         <Hero />
//         <CombinedAbout />
//         {/* <MainSpeakers /> */}
//         <Cultural />
//         <IdeaJamSection />
//         <Gallery />
//         <Testimonials />
//       </div>
//       <Footer />
//     </div>
//   )
// }

import { useEffect, useRef } from 'react';
import Hero from "@/New/Hero";
import CombinedAbout from "@/New/About";
import Cultural from "@/New/Cultural";
import IdeaJamSection from "@/New/IdeaJam";
import Gallery from "@/Components/Gallery";
import Testimonials from '@/Components/Testimonials';
import Footer from "@/Components/Footer";

export default function Layout() {
  const scrollThumbRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const isDragging = useRef(false);

  // Hide default scrollbar and setup custom scroll
  useEffect(() => {
    // Hide native scrollbar
    document.documentElement.style.scrollbarWidth = 'none';
    document.documentElement.style.msOverflowStyle = 'none';
    const style = document.createElement('style');
    style.innerHTML = `::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(style);

    // Scroll calculations
    const handleScroll = () => {
      if (!scrollThumbRef.current || isDragging.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;
      const thumbPosition = (scrollTop / scrollableHeight) * (scrollTrackRef.current?.clientHeight - scrollThumbRef.current.clientHeight);
      
      if (scrollThumbRef.current) {
        scrollThumbRef.current.style.transform = `translateY(${thumbPosition}px)`;
      }
    };

    // Drag functionality
    const handleMouseDown = (e) => {
      if (!scrollThumbRef.current?.contains(e.target)) return;
      isDragging.current = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current || !scrollTrackRef.current || !scrollThumbRef.current) return;
      
      const trackRect = scrollTrackRef.current.getBoundingClientRect();
      const thumbHeight = scrollThumbRef.current.clientHeight;
      const clickPosition = e.clientY - trackRect.top;
      const thumbPosition = Math.min(
        Math.max(0, clickPosition - thumbHeight / 2),
        trackRect.height - thumbHeight
      );
      
      const scrollPosition = (thumbPosition / (trackRect.height - thumbHeight)) * 
                           (document.documentElement.scrollHeight - window.innerHeight);
      
      window.scrollTo(0, scrollPosition);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleMouseDown);
      document.head.removeChild(style);
      document.documentElement.style.scrollbarWidth = '';
      document.documentElement.style.msOverflowStyle = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fixed Hero with Overlay */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" /> {/* Overlay */}
        <Hero />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        <div className="h-screen" /> {/* Spacer */}
        <CombinedAbout />
        <Cultural />
        <IdeaJamSection />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>

      {/* Custom Scrollbar (Right-Center) */}
      <div 
        ref={scrollTrackRef}
        className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 h-64 w-1.5 bg-gray-800/50 rounded-full z-50 backdrop-blur-sm"
      >
        <div 
          ref={scrollThumbRef}
          className="w-full bg-emerald-400/80 hover:bg-emerald-300 rounded-full cursor-grab active:cursor-grabbing transition-all duration-200"
          style={{ height: '80px' }}
        />
      </div>
    </div>
  );
}