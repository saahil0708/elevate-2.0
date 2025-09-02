"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Image from "next/image";

// Simple grid line components
const GridLineVertical = ({ className = "", offset = "0px" }) => (
  <div
    className={`absolute h-full w-px bg-gray-300 ${className}`}
    style={{ left: offset }}
  />
);

const GridLineHorizontal = ({ className = "", offset = "0px" }) => (
  <div
    className={`absolute w-full h-px bg-gray-300 ${className}`}
    style={{ top: offset }}
  />
);

export const ThreeDMarquee = ({ images, className }) => {
  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8 relative z-10" // Added z-index
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative z-20" key={imageIndex + image}> {/* Added z-index */}
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="aspect-[970/700] rounded-lg overflow-hidden ring ring-gray-950/5 hover:shadow-2xl"
                    >
                      <Image
                        src={image}
                        alt={`Image ${imageIndex + 1}`}
                        width={970}
                        height={700}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};