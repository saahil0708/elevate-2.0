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

import Hero from "@/New/Hero"
import CombinedAbout from "@/New/About"
import MainSpeakers from '../Components/ThreeScene';
import Testimonials from '@/Components/Testimonials';
import Gallery from "@/Components/Gallery";
import Cultural from "@/New/Cultural";
import Footer from "@/Components/Footer"
import IdeaJamSection from "@/New/IdeaJam";

export default function Layout() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background elements (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-transparent" />
      
      {/* Floating blurs (unchanged) */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s", animationDuration: "6s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "3s", animationDuration: "5s" }} />
      
      {/* Subtle grid (unchanged) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

      {/* ===== FIXED HERO SECTION ===== */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Hero /> {/* Hero stays fixed in place */}
      </div>

      {/* ===== SCROLLING CONTENT (OVERLAYS HERO) ===== */}
      <div className="relative z-10">
        {/* Spacer to push content below Hero (prevents immediate overlap) */}
        <div className="h-screen" /> 

        {/* Rest of the components (scroll over Hero) */}
        <CombinedAbout />
        <Cultural />
        <IdeaJamSection />
        <Gallery />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}