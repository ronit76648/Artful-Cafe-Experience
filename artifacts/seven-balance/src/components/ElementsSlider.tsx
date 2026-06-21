import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import beanImg from "@/assets/images/element-bean.png";
import grindImg from "@/assets/images/element-grind.png";
import waterImg from "@/assets/images/element-water.png";
import measurementImg from "@/assets/images/element-measurement.png";
import heatImg from "@/assets/images/element-heat.png";
import timeImg from "@/assets/images/element-time.png";
import techniqueImg from "@/assets/images/element-technique.png";

const elements = [
  { name: "The Bean", img: beanImg },
  { name: "The Grind", img: grindImg },
  { name: "The Water", img: waterImg },
  { name: "The Measurement", img: measurementImg },
  { name: "The Heat", img: heatImg },
  { name: "The Time", img: timeImg },
  { name: "The Technique", img: techniqueImg },
];

export function ElementsSlider() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false })]
  );

  return (
    <div className="w-full overflow-hidden bg-secondary py-12 border-y border-[#3a251a]" ref={emblaRef}>
      <div className="flex">
        {[...elements, ...elements].map((item, i) => (
          <div 
            key={i} 
            className="flex-[0_0_200px] md:flex-[0_0_300px] mx-4 flex flex-col items-center justify-center gap-4"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#f4ebd8]/10 flex items-center justify-center p-4">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain mix-blend-multiply opacity-80" 
              />
            </div>
            <span className="font-serif italic text-primary-foreground/90 text-lg md:text-xl tracking-wider">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
