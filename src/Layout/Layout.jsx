import { useEffect, useRef } from 'react';
import Hero from "@/New/Hero";
import CombinedAbout from "@/New/About";
import Cultural from "@/New/Cultural";
import IdeaJamSection from "@/New/IdeaJam";
import Gallery from "@/Components/Gallery";
import Testimonials from '@/Components/Testimonials';
import Footer from "@/Components/Footer";
import CursorWaterEffect from '@/Components/ui/Cursor';
import Loader from "@/New/Loader";
import CursorEffect from '@/Components/cursor';
import Timeline from '@/New/Timeline';
import Panel from "@/New/panel";

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
      <CursorEffect />
      {/* <Loader /> */}
        {/* <CursorWaterEffect /> */}
      {/* Fixed Hero with Overlay */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900" /> {/* Overlay */}
        <Hero />
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10">
        <div className="h-screen" /> {/* Spacer */}
        <CombinedAbout />
        <Timeline />
        <Cultural />
        <Panel />
        <IdeaJamSection />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>

      {/* Custom Scrollbar (Right-Center) */}
      {/* <div
        ref={scrollTrackRef}
        className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 h-64 w-1.5 bg-gray-800/50 rounded-full z-50 backdrop-blur-sm"
      >
        <div
          ref={scrollThumbRef}
          className="w-full bg-emerald-400/80 hover:bg-emerald-300 rounded-full cursor-grab active:cursor-grabbing transition-all duration-200"
          style={{ height: '80px' }}
        />
      </div> */}
    </div>
  );
}