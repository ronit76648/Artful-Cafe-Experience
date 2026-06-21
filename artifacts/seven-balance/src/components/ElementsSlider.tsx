import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Actual brand element tile colors from the packaging & brand system
// Each element has its own earthy tile colour, white linocut icon SVG, name
const elements = [
  {
    name: "The Bean",
    devanagari: "बीन",
    color: "#4a5c2f",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="24" cy="24" rx="12" ry="18" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M24 6 C14 14 14 34 24 42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16 C18 18 22 22 20 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 18 C30 20 26 26 28 32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "The Grind",
    devanagari: "पीसना",
    color: "#b5432a",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="20" width="28" height="20" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M16 20 L16 14 C16 10 32 10 32 14 L32 20" stroke="white" strokeWidth="2.5" fill="none" />
        <line x1="24" y1="8" x2="24" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="28" x2="29" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="33" x2="29" y2="33" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "The Water",
    devanagari: "जल",
    color: "#1e4d5c",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M16 8 Q16 4 24 4 Q32 4 32 8 L32 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <rect x="8" y="20" width="32" height="22" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
        <path d="M24 28 L24 38" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="40" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "The Measurement",
    devanagari: "माप",
    color: "#b08a2a",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <ellipse cx="20" cy="32" rx="12" ry="6" stroke="white" strokeWidth="2.5" fill="none" />
        <line x1="32" y1="32" x2="44" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="22" x2="40" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="34" y1="24" x2="38" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="26" x2="36" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="28" x2="34" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "The Heat",
    devanagari: "ताप",
    color: "#1e4a3a",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 38 L10 26 L14 22 L20 28 L20 10 L28 10 L28 28 L34 22 L38 26 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <line x1="18" y1="42" x2="30" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="44" x2="32" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "The Time",
    devanagari: "समय",
    color: "#c9a0a0",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2.5" fill="none" />
        <line x1="24" y1="24" x2="24" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="32" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2" fill="white" />
        <line x1="24" y1="10" x2="24" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="38" y1="24" x2="40" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="24" x2="10" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="38" x2="24" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "The Technique",
    devanagari: "तकनीक",
    color: "#5c3a1e",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M14 8 L34 8 L30 18 L18 18 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <rect x="18" y="18" width="12" height="22" rx="1" stroke="white" strokeWidth="2" fill="none" />
        <line x1="22" y1="22" x2="26" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="26" x2="26" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="30" x2="26" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Duplicate for seamless infinite loop
const items = [...elements, ...elements, ...elements];

export function ElementsSlider() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]
  );

  return (
    <div className="w-full overflow-hidden border-y border-[#3a251a]/30 bg-[#1a0f08]" ref={emblaRef}>
      <div className="flex py-8 px-2 gap-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-none mx-3"
          >
            {/* Tile — matches the actual brand element tile system */}
            <div
              className="w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center gap-2 rounded-sm relative overflow-hidden"
              style={{ backgroundColor: item.color }}
            >
              {/* Subtle texture overlay for linocut feel */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)',
              }} />
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                {item.icon}
                <span className="font-sans font-light text-white text-[9px] tracking-[0.15em] uppercase text-center leading-tight px-1">
                  {item.name.replace("The ", "")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
