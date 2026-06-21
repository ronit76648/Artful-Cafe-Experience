import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import stamp1 from "@/assets/images/stamp-1.png";
import stamp2 from "@/assets/images/stamp-2.png";
import stamp3 from "@/assets/images/stamp-3.png";
import { PostalStamp } from "./PostalStamp";

export function SectionDivider({ className, stamp = 1 }: { className?: string, stamp?: 1 | 2 | 3 }) {
  const stampImg = stamp === 1 ? stamp1 : stamp === 2 ? stamp2 : stamp3;
  
  return (
    <div className={cn("w-full py-16 flex items-center justify-center relative", className)}>
      <div className="w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
      <PostalStamp 
        src={stampImg} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20" 
        rotation={stamp === 1 ? -10 : stamp === 2 ? 5 : -5}
      />
    </div>
  );
}
