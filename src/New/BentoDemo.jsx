import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconTarget,
  IconUsers,
  IconStar,
  IconTrophy,
} from "@tabler/icons-react";

export function ElevateBentoDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#1cb683]/10 via-black to-gray-900 border border-[#1cb683]/20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1cb683]/5 to-transparent animate-pulse"></div>
    <div className="absolute top-2 right-2 w-3 h-3 bg-[#1cb683] rounded-full animate-ping"></div>
  </div>
);

const items = [
  {
    title: "Born from a Vision",
    description: "Launched in 2024, Elevate was born from a vision to go beyond conventional introductions and create a platform where learning, networking, and creativity converge.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTarget className="h-5 w-5 text-[#1cb683] mb-2" />,
  },
  {
    title: "Flagship Program",
    description: "Setting new standards in student orientation with innovative approaches to learning and development.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTrophy className="h-5 w-5 text-[#00ff94] mb-2" />,
  },
  {
    title: "Massive Impact",
    description: "In its inaugural edition, Elevate attracted 3,000+ attendees and featured 25+ distinguished speakers.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-5 w-5 text-[#1cb683] mb-2" />,
  },
  {
    title: "Immersive Experience",
    description: "Masterfully blends insightful talks, hands-on workshops, and unforgettable cultural experiences that transcend traditional orientation programs.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconStar className="h-5 w-5 text-[#00ff94] mb-2" />,
  },
];