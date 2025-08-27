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
  ];

  return (
    <section
      id="gallery"
      className="mx-auto my-40 max-w-7xl rounded-3xl bg-transparent p-8 ring-1 ring-[#0c5352]/30 shadow-lg"
    >
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#ffffff] via-[#0c7372] to-[#0c5352] bg-clip-text text-transparent mb-4">
          Our Gallery
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our collection of stunning designs and creative projects
        </p>
      </div>
      
      <ThreeDMarquee images={images} />
      
      <div className="text-center mt-16">
        <button className="px-6 py-3 bg-gradient-to-r from-[#0c5352] to-[#138b89] text-white rounded-full font-medium hover:from-[#0a4544] hover:to-[#0c5352] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
          View All Projects
        </button>
      </div>
    </section>
  );
}

export default ThreeDMarqueeDemo;