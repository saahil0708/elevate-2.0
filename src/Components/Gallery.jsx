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
    <div
      id="gallery"
      className="mx-auto my-40 max-w-5xl rounded-3xl bg-[#020617] p-4 ring-1 ring-neutral-700/10 dark:bg-neutral-800"
    >
      <ThreeDMarquee images={images} />
    </div>
  );
}

export default ThreeDMarqueeDemo;
