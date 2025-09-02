"use client";
import { ThreeDMarquee } from "../Components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/images/Image (1).JPG",
    "/images/Image (2).JPG",
    "/images/Image (3).JPG",
    "/images/Image (4).JPG",
    "/images/Image (5).JPG",
    "/images/Image (6).JPG",
    "/images/Image (7).JPG",
    "/images/Image (8).JPG",
    "/images/Image (9).JPG",
    "/images/Image (10).JPG",
    "/images/Image (11).JPG",
    "/images/Image (12).JPG",
    "/images/Image (13).JPG",
    "/images/Image (14).JPG",
    "/images/Image (15).JPG",
    "/images/Image (16).JPG",
    "/images/Image (17).JPG",
    "/images/Image (11).JPG",
    "/images/Image (19).JPG",
    "/images/Image (20).JPG",
    "/images/Image (21).JPG",
    "/images/Image (22).JPG",
    "/images/Image (23).JPG",
    "/images/Image (24).JPG",
    "/images/Image (25).JPG",
    "/images/Image (26).JPG",
    "/images/Image (27).JPG",
    "/images/Image (28).JPG",
    "/images/Image (29).JPG",
    "/images/Image (30).JPG",
    "/images/Image (31).JPG",
    "/images/Image (32).JPG",
    "/images/Image (33).JPG",
    "/images/Image (34).JPG",
    "/images/Image (35).JPG",
    "/images/Image (36).JPG",
    "/images/Image (37).JPG",
    "/images/Image (38).JPG",
    "/images/Image (39).JPG",
    "/images/Image (40).JPG",
    "/images/Image (41).JPG",
    "/images/Image (42).JPG",
  ];

  return (
    <div className="mx-auto my-10 max-w- rounded-3xl bg-[#020617] p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}

export default ThreeDMarqueeDemo;
