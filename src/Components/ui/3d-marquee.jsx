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
        "mx-auto block h-[400px] sm:h-[500px] lg:h-[600px] overflow-visible rounded-2xl perspective-1000",
        className
      )}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div className="w-full lg:w-[1200px]">
          <div
            style={{ transform: "rotateX(40deg) rotateY(0deg) rotateZ(-30deg)" }}
            className="grid w-full h-full grid-cols-3 gap-6 origin-center"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex + "marquee"}
                animate={{ y: colIndex % 2 === 0 ? 50 : -50 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-start gap-4"
              >
                {subarray.map((image, imageIndex) => (
                  <motion.img
                    key={imageIndex + image}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={image}
                    alt={`Image ${imageIndex + 1}`}
                    className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl w-full"
                    loading="lazy"
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
