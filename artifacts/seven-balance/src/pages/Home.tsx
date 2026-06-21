import { motion } from "framer-motion";
import { ElementsSlider } from "@/components/ElementsSlider";
import { PostalStamp } from "@/components/PostalStamp";
import { SectionDivider } from "@/components/SectionDivider";

// Assets
import heroImg from "@/assets/images/hero.png";
import postcardBg from "@/assets/images/postcard-bg.png";
import stamp1 from "@/assets/images/stamp-1.png";
import stamp2 from "@/assets/images/stamp-2.png";
import stamp3 from "@/assets/images/stamp-3.png";

const Monogram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M 20 20 L 80 20 L 40 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 20 40 C 40 40 60 50 60 70 C 60 90 40 100 20 100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
  </svg>
);

export default function Home() {
  return (
    <div className="w-full min-h-screen text-foreground overflow-x-hidden selection:bg-primary/20">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 mix-blend-difference text-[#f4ebd8] flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <div className="font-serif italic text-xl tracking-widest">7 Balance</div>
        <div className="hidden md:flex gap-8 font-sans font-light tracking-[0.2em] text-xs uppercase">
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#visit" className="hover:text-primary transition-colors">Visit Us</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="7 Balance Cafe Exterior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-secondary/90 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <PostalStamp src={stamp2} className="top-32 right-16 md:right-32 opacity-70" rotation={12} delay={0.5} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-[#f4ebd8] mt-20"
        >
          <Monogram className="w-24 h-24 md:w-32 md:h-32 mb-6 text-primary" />
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-4 flex items-center">
            <span className="text-primary italic mr-2 font-display text-7xl md:text-9xl">7</span> Balance
          </h1>
          <p className="font-sans font-light tracking-[0.3em] uppercase text-sm md:text-base opacity-80 mt-4">
            Seven elements. One perfect Balance.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        >
          <div className="w-[1px] h-16 bg-[#f4ebd8]/40 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#f4ebd8]"
            />
          </div>
        </motion.div>
      </section>

      {/* ELEMENTS SLIDER */}
      <ElementsSlider />

      {/* ABOUT US - POSTCARD */}
      <section id="story" className="w-full py-24 md:py-32 px-4 flex items-center justify-center relative">
        <PostalStamp src={stamp1} className="top-12 left-8 md:left-24" rotation={-15} />
        <PostalStamp src={stamp3} className="bottom-12 right-8 md:right-24" rotation={25} />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl aspect-auto md:aspect-[3/2] bg-[#ebdcc0] shadow-2xl relative flex flex-col md:flex-row p-6 md:p-12 postcard-border overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
            <img src={postcardBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          {/* Left Side: Message */}
          <div className="relative z-10 w-full md:w-[55%] pr-0 md:pr-10 pb-10 md:pb-0 flex flex-col">
            <h2 className="font-display italic text-4xl md:text-5xl text-secondary mb-8">Our Story</h2>
            <div className="font-serif text-secondary/80 leading-relaxed text-lg space-y-6">
              <p>
                <span className="float-left text-5xl font-display text-primary mr-3 mt-[-8px]">S</span>
                even beans crossed the ocean. Each carried a world within it — a soil, a season, a hand that planted it.
              </p>
              <p>
                When they met on Indian shores, something ancient stirred. 7 Balance was born from that meeting. 
              </p>
              <p>
                We believe great coffee is not made, it is balanced — across seven elements, seven rituals, seven moments of intention. 
                This is our philosophy. This is our promise.
              </p>
            </div>
            
            <div className="mt-auto pt-8 flex items-center justify-center gap-4 text-primary/40">
              <span>❦</span>
              <span className="w-12 h-[1px] bg-primary/30"></span>
              <span>❦</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-secondary/20 h-full relative z-10"></div>
          <div className="block md:hidden h-[1px] bg-secondary/20 w-full my-6 relative z-10"></div>
          
          {/* Right Side: Address */}
          <div className="relative z-10 w-full md:w-[45%] pl-0 md:pl-10 flex flex-col items-center justify-center">
            <Monogram className="w-20 h-20 text-secondary mb-6 opacity-60" />
            
            <div className="w-full space-y-6 mt-8">
              <div className="border-b border-secondary/30 pb-2">
                <span className="font-display italic text-2xl text-secondary">TO:</span>
                <span className="font-serif ml-4 text-secondary/80 text-lg">Coffee Lovers Everywhere</span>
              </div>
              <div className="border-b border-secondary/30 pb-2">
                <span className="font-serif text-secondary/80 text-lg">7 Balance Estate</span>
              </div>
              <div className="border-b border-secondary/30 pb-2">
                <span className="font-serif text-secondary/80 text-lg">The Heritage Quarter</span>
              </div>
            </div>
            
            <PostalStamp src={stamp2} className="static mt-12 w-20 h-24 transform rotate-12" rotation={12} />
          </div>
        </motion.div>
      </section>

      <SectionDivider stamp={3} />

      {/* MENU */}
      <section id="menu" className="w-full py-24 px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-display italic text-5xl md:text-6xl text-secondary mb-4 text-center">Offerings</h2>
          <p className="font-sans font-light tracking-[0.2em] uppercase text-sm text-secondary/60 mb-20 text-center">Crafted with intention</p>
          
          <div className="w-full space-y-20">
            {/* Category: Signatures */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">Signatures</h3>
              <div className="space-y-8">
                {[
                  { name: "The Balance Espresso", desc: "A perfectly pulled double shot, showcasing the harmony of all seven elements.", price: "₹280" },
                  { name: "The Seven Ritual", desc: "Our signature pour-over experience. Served with intention.", price: "₹320" },
                  { name: "Origin Single Estate", desc: "A rotating selection from India's finest microlots.", price: "₹380" },
                  { name: "The Hindi Seven", desc: "Cold brewed for 14 hours, steeped in heritage and depth.", price: "₹260" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category: The Pour */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">The Pour</h3>
              <div className="space-y-8">
                {[
                  { name: "Monsoon Malabar", desc: "Earthy, low acidity, notes of dark chocolate and spice.", price: "₹220" },
                  { name: "Araku Valley Reserve", desc: "Bright, fruit-forward with a clean lingering finish.", price: "₹260" },
                  { name: "Coorg Estate", desc: "Classic, robust, hints of caramel and roasted nuts.", price: "₹200" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category: Provisions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">Provisions</h3>
              <div className="space-y-8">
                {[
                  { name: "Cardamom Toast", desc: "Artisan brioche, house-made cardamom butter.", price: "₹180" },
                  { name: "Almond Croissant", desc: "Twice-baked, deeply almond.", price: "₹220" },
                  { name: "Seasonal Fruit", desc: "Fresh, local, simple.", price: "₹160" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider stamp={1} />

      {/* CONTACT & LOCATION */}
      <section id="visit" className="w-full py-24 px-4 overflow-hidden relative">
        <PostalStamp src={stamp3} className="top-24 left-10 opacity-60" rotation={-20} />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10 relative z-10"
          >
            <div>
              <h2 className="font-display italic text-5xl text-secondary mb-6">Visit Us</h2>
              <p className="font-serif text-secondary/80 text-xl leading-relaxed">
                Step away from the rush. Experience the craft of seven elements in perfect balance.
              </p>
            </div>
            
            <div className="space-y-6 font-sans font-light text-secondary/80">
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-primary font-medium mb-2">Location</p>
                <p className="text-lg font-serif">14 Heritage Lane, The Old Quarter<br/>Mumbai, India</p>
              </div>
              
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-primary font-medium mb-2">Hours</p>
                <p className="text-lg font-serif">Tuesday — Sunday<br/>8:00 AM — 8:00 PM</p>
              </div>
              
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-primary font-medium mb-2">Contact</p>
                <p className="text-lg font-serif italic">+91 98765 43210<br/>hello@7balance.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-[4/3] bg-[#e6d8c0] border border-secondary/20 p-2 postcard-border shadow-xl flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
            {/* Styled Map Placeholder */}
            <div className="w-full h-full bg-[#f4ebd8] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at center, transparent 0, transparent 2px, hsl(var(--secondary)) 3px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <svg className="w-12 h-12 text-primary mb-4 relative z-20 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-display italic text-2xl text-secondary relative z-20">Find Us Here</span>
              <a href="#" className="mt-4 font-sans uppercase tracking-[0.2em] text-xs text-primary hover:text-secondary transition-colors relative z-20 border-b border-primary/30 pb-1">Open in Maps</a>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#110b07] text-[#f4ebd8] py-16 relative overflow-hidden flex flex-col items-center border-t border-[#3a251a]">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={postcardBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center px-4">
          <Monogram className="w-16 h-16 text-[#c19c5c] mb-8" />
          <h2 className="font-serif text-3xl mb-4">7 Balance</h2>
          <p className="font-sans font-light tracking-[0.2em] uppercase text-xs text-[#f4ebd8]/50 mb-12">
            Seven elements. One perfect Balance.
          </p>
          
          <div className="flex gap-8 font-sans uppercase tracking-widest text-xs mb-16">
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Instagram</a>
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Journal</a>
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Contact</a>
          </div>
          
          <div className="w-full flex items-center justify-center opacity-30">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#f4ebd8]"></div>
            <PostalStamp src={stamp1} className="w-8 h-10 mx-4 static scale-75 rotate-6" rotation={6} />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#f4ebd8]"></div>
          </div>
          
          <p className="mt-8 font-sans text-xs text-[#f4ebd8]/30">
            © {new Date().getFullYear()} 7 Balance Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
