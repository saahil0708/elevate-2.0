"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const ThreeDMarquee = ({ images, className }) => {
  // Reduce images to first 12 for better layout
  const reducedImages = images.slice(0, 12);

  // Split images into 3 columns
  const chunkSize = Math.ceil(reducedImages.length / 3);
  const chunks = Array.from({ length: 3 }, (_, colIndex) =>
    reducedImages.slice(colIndex * chunkSize, colIndex * chunkSize + chunkSize)
  );

  return (
    <div
      className={cn(
        "mx-auto block h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl perspective-1000",
        className
      )}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div className="w-full lg:w-[1200px] h-full">
          <div
            style={{ transform: "rotateX(40deg) rotateY(0deg) rotateZ(-30deg)" }}
            className="grid w-full h-full grid-cols-3 gap-6 origin-center"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex + "marquee"}
                animate={{ y: colIndex % 2 === 0 ? 40 : -40 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 12 : 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="flex flex-col items-start gap-6"
              >
                {subarray.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex + image}
                    className="relative group w-full"
                    whileHover={{ y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c5352]/80 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-10"
                    />
                    <motion.img
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] rounded-lg object-cover ring-1 ring-white/20 hover:ring-2 hover:ring-white/40 shadow-lg hover:shadow-xl w-full transition-all duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};