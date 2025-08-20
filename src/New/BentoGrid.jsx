import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-full mx-auto px-4 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl hover:shadow-[#1cb683]/20 transition duration-300 p-6 bg-gradient-to-br from-black via-gray-900 to-black border border-[#1cb683]/20 hover:border-[#1cb683]/40 justify-between flex flex-col space-y-4 backdrop-blur-sm",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-300">
        {icon}
        <div className="font-bold text-white mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-normal text-gray-300 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};