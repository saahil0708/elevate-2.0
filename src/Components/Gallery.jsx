"use client"

import RollingGallery from "./RollingGallery"

const IMGS = [
  {
    title: "Moonbeam",
    url: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cursor",
    url: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Rogue",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Editorially",
    url: "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Editrix AI",
    url: "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="text-white py-20 bg-transparent">
      {/* Heading */}
      <div className="text-center max-w-5xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wide">
          GLIMPSES <span className="text-[#1cb683]">2024</span>
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#1cb683] to-transparent mx-auto mb-6" />
        <p className="text-lg text-gray-300">
          A glimpse into the unforgettable experiences we've created
        </p>
      </div>

      {/* Rolling Gallery with text */}
      <div className="mt-16 px-6">
        <RollingGallery autoplay={true} pauseOnHover={true} images={IMGS} />
      </div>

      {/* Button */}
      <div className="mt-16 flex justify-center">
        <button className="flex items-center gap-2 text-white border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          <span>More From Our Collection</span>
          <span className="text-xl">↗</span>
        </button>
      </div>
    </section>
  )
}
