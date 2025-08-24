"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useAnimation } from "motion/react"

const IMGS = [
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=1200&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=1200&auto=format&fit=crop",
]

export default function RollingGallery({
  autoplay = true,
  pauseOnHover = true,
  images = [],
}) {
  const imgs = images.length > 0 ? images : IMGS

  const [isSm, setIsSm] = useState(false)
  useEffect(() => {
    const check = () => setIsSm(window.innerWidth <= 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Base values
  const cylinderWidth = isSm ? 1600 : 2600
  const faceCount = imgs.length
  // reduce width a bit to create gaps
  const faceWidth = (cylinderWidth / faceCount) * 0.9
  const radius = cylinderWidth / (2 * Math.PI)

  const dragFactor = 0.05
  const rotation = useMotionValue(0)
  const controls = useAnimation()

  const startSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 30, ease: "linear", repeat: Infinity },
    })
  }

  useEffect(() => {
    if (autoplay) startSpin(rotation.get())
    else controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay])

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY)
  }
  const handleDrag = (_, info) => {
    controls.stop()
    rotation.set(rotation.get() + info.offset.x * dragFactor)
  }
  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor
    rotation.set(finalAngle)
    if (autoplay) startSpin(finalAngle)
  }

  return (
    <div className="relative z-10 h-[750px] w-full overflow-hidden">
      {/* left/right fades */}
      <div
        className="absolute top-0 left-0 h-full w-[80px] z-10"
        style={{ background: "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)" }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[80px] z-10"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)" }}
      />

      <div className="flex h-full items-center justify-center [perspective:1500px]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {imgs.map((url, i) => (
            <div
              key={i}
              className="group absolute flex items-center justify-center [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                // convex layout
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(-${radius}px)`,
              }}
            >
              <img
                src={url}
                alt={`gallery-${i}`}
                className="pointer-events-none h-[280px] w-[420px] rounded-2xl border-[4px] border-white object-cover 
                           shadow-xl transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
