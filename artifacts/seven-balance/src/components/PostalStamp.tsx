import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PostalStampProps {
  src: string;
  className?: string;
  rotation?: number;
  delay?: number;
}

export function PostalStamp({ src, className, rotation = 0, delay = 0 }: PostalStampProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 15 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      animate={{ 
        y: [0, -5, 0], 
        rotate: [rotation, rotation + 2, rotation] 
      }}
      className={cn(
        "absolute z-10 w-24 h-28 bg-[#fdfaf3] p-1 shadow-md stamp-serrated mix-blend-multiply flex items-center justify-center pointer-events-none",
        className
      )}
    >
      <div className="w-full h-full border border-orange-900/20 flex items-center justify-center p-1 relative overflow-hidden">
        <img 
          src={src} 
          alt="Postal Stamp" 
          className="w-full h-full object-cover mix-blend-multiply opacity-90"
        />
        {/* Postmark overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-multiply">
          <div className="w-16 h-16 rounded-full border border-black/40 relative">
            <div className="absolute inset-2 rounded-full border border-black/30"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/40 -rotate-45"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/40 rotate-45"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
