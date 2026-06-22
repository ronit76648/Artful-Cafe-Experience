import { motion } from "framer-motion";
import { ElementsSlider } from "@/components/ElementsSlider";
import { PostalStamp } from "@/components/PostalStamp";
import { SectionDivider } from "@/components/SectionDivider";
import { InstallPWA } from "@/components/InstallPWA";

import heroImg from "@/assets/images/hero.png";
import postcardBg from "@/assets/images/postcard-bg.png";
import stamp1 from "@/assets/images/stamp-1.png";
import stamp2 from "@/assets/images/stamp-2.png";
import stamp3 from "@/assets/images/stamp-3.png";

// Actual brand assets
import logoTransparent from "@/assets/images/logo-transparent.png";
import monogramImg from "@/assets/images/monogram.jpg";
import productBag from "@/assets/images/product-bag.jpg";
import productWrap from "@/assets/images/product-wrap.jpg";
import productCup from "@/assets/images/product-cup.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-foreground overflow-x-hidden selection:bg-primary/20">

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black/75 to-transparent">
        <a href="#" className="flex items-center select-none">
          <img src={logoTransparent} alt="7 Balance" className="h-9 w-auto object-contain" />
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 font-sans font-light tracking-[0.22em] text-[10px] uppercase">
            <a href="#story" className="text-[#f4ebd8]/80 hover:text-[#c8a87a] transition-colors">Our Story</a>
            <a href="#menu" className="text-[#f4ebd8]/80 hover:text-[#c8a87a] transition-colors">Menu</a>
            <a href="#visit" className="text-[#f4ebd8]/80 hover:text-[#c8a87a] transition-colors">Visit Us</a>
          </div>
          <InstallPWA />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="7 Balance Café" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        </div>

        <PostalStamp src={stamp2} className="top-28 right-16 md:right-28 opacity-60" rotation={12} delay={0.5} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-[#f4ebd8] mt-16"
        >
          {/* Actual logo — transparent PNG */}
          <img
            src={logoTransparent}
            alt="7 Balance"
            className="w-48 md:w-60 lg:w-72 object-contain mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          />

          {/* Brand taglines */}
          <p className="font-sans font-light tracking-[0.28em] uppercase text-[10px] md:text-xs text-[#f4ebd8]/55 mb-4">
            A new coffee experience
          </p>
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#c8a87a]/50" />
            <p className="font-sans font-light tracking-[0.22em] uppercase text-xs text-[#c8a87a]">
              7 elements. 1 Philosophy.
            </p>
            <span className="w-8 h-[1px] bg-[#c8a87a]/50" />
          </div>
          <p className="font-serif italic text-[#f4ebd8]/35 text-sm mt-3 tracking-wide">
            Artisanal. Intentional.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
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

      {/* ── ELEMENTS SLIDER ── */}
      <ElementsSlider />

      {/* ── ABOUT US — INDIAN POSTCARD ── */}
      <section id="story" className="w-full py-24 md:py-32 px-4 flex items-center justify-center relative">
        <PostalStamp src={stamp1} className="top-12 left-8 md:left-24" rotation={-15} />
        <PostalStamp src={stamp3} className="bottom-12 right-8 md:right-24" rotation={25} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl bg-[#ebdcc0] shadow-2xl relative flex flex-col md:flex-row p-6 md:p-12 postcard-border overflow-hidden"
        >
          {/* Postcard image — light cream centre blends cleanly, floral border frames the card */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={postcardBg}
              alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.45, mixBlendMode: "multiply" }}
            />
          </div>

          {/* Left: Story */}
          <div className="relative z-10 w-full md:w-[55%] pr-0 md:pr-10 pb-10 md:pb-0 flex flex-col">
            <h2 className="font-display italic text-4xl md:text-5xl text-secondary mb-8">Our Story</h2>
            <div className="font-serif text-secondary/80 leading-relaxed text-base md:text-lg space-y-5">
              <p>
                <span className="float-left text-5xl font-display text-primary mr-3 mt-[-8px] leading-none">G</span>
                reat coffee is a balance of many elements working in harmony. 7 Balance is our way of honouring that balance.
              </p>
              <p>
                Seven beans crossed the ocean. Each carried a world within it — a soil, a season, a hand that planted it. When they met on Indian shores, something ancient stirred.
              </p>
              <p>
                Seven essential elements go into every great cup. Our goal is to showcase each one as an art, a science, and a ritual — every icon hand-drawn to reflect the human touch behind every step.
              </p>
              <p className="font-serif italic text-secondary/55 text-sm tracking-wide">
                Handmade with Purpose. Artisanal. Intentional.
              </p>
            </div>
            <div className="mt-auto pt-6 flex items-center gap-3">
              <span className="w-full h-[1px] bg-primary/20" />
              <span className="font-display italic text-xs whitespace-nowrap text-primary/50">7 elements. 1 Philosophy.</span>
              <span className="w-full h-[1px] bg-primary/20" />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-secondary/20 self-stretch relative z-10 mx-2" />
          <div className="block md:hidden h-[1px] bg-secondary/20 w-full my-6 relative z-10" />

          {/* Right: Address / Logo */}
          <div className="relative z-10 w-full md:w-[45%] pl-0 md:pl-10 flex flex-col items-center justify-center gap-6">
            {/* Actual monogram image */}
            <img
              src={monogramImg}
              alt="7 Balance Monogram"
              className="w-28 h-28 object-contain opacity-75 mix-blend-multiply"
            />
            <div className="w-full space-y-5 mt-2">
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
            <PostalStamp src={stamp2} className="static w-20 h-24 mt-4" rotation={12} />
          </div>
        </motion.div>
      </section>

      {/* ── LIFESTYLE GALLERY — brand in the world ── */}
      <section className="w-full py-0 overflow-hidden">
        <div className="grid grid-cols-3 gap-0">
          {[
            { src: productCup, alt: "7 Balance cup with element icons" },
            { src: productBag, alt: "7 Balance branded bag" },
            { src: productWrap, alt: "7 Balance wrapping paper and croissant" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider stamp={3} />

      {/* ── MENU ── */}
      <section id="menu" className="w-full py-24 px-4 relative" style={{ backgroundColor: '#fdf4e3', backgroundImage: 'none' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-display italic text-5xl md:text-6xl text-secondary mb-3 text-center">Offerings</h2>
          <p className="font-sans font-light tracking-[0.2em] uppercase text-sm text-secondary/60 mb-20 text-center">Crafted with intention</p>

          <div className="w-full space-y-20">
            {/* Signatures */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">Signatures</h3>
              <div className="space-y-8">
                {[
                  { name: "The Balance Espresso", desc: "A perfectly pulled double shot, showcasing the harmony of all seven elements.", price: "₹280" },
                  { name: "The Seven Ritual", desc: "Our signature pour-over experience. Served with intention.", price: "₹320" },
                  { name: "Origin Single Estate", desc: "A rotating selection from India's finest microlots.", price: "₹380" },
                  { name: "The Hindi Seven", desc: "Cold brewed for 14 hours, steeped in heritage and depth.", price: "₹260" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Pour */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">The Pour</h3>
              <div className="space-y-8">
                {[
                  { name: "Monsoon Malabar", desc: "Earthy, low acidity, notes of dark chocolate and spice.", price: "₹220" },
                  { name: "Araku Valley Reserve", desc: "Bright, fruit-forward with a clean lingering finish.", price: "₹260" },
                  { name: "Coorg Estate", desc: "Classic, robust, hints of caramel and roasted nuts.", price: "₹200" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Provisions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full">
              <h3 className="font-serif text-2xl text-primary border-b border-primary/20 pb-4 mb-8 text-center uppercase tracking-widest">Provisions</h3>
              <div className="space-y-8">
                {[
                  { name: "Cardamom Toast", desc: "Artisan brioche, house-made cardamom butter.", price: "₹180" },
                  { name: "Almond Croissant", desc: "Twice-baked, deeply almond.", price: "₹220" },
                  { name: "Seasonal Fruit", desc: "Fresh, local, simple.", price: "₹160" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-secondary inline-block relative ink-underline">{item.name}</h4>
                      <p className="font-sans font-light text-secondary/70 text-sm mt-2 italic">{item.desc}</p>
                    </div>
                    <div className="font-serif text-lg text-primary shrink-0">{item.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider stamp={1} />

      {/* ── CONTACT & LOCATION ── */}
      <section id="visit" className="w-full py-24 px-4 overflow-hidden relative" style={{ backgroundColor: '#f5ead6', backgroundImage: 'none' }}>
        <PostalStamp src={stamp3} className="bottom-16 right-10 md:right-24 opacity-50" rotation={15} />

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
                <p className="text-lg font-serif">14 Heritage Lane, The Old Quarter<br />Mumbai, India</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-primary font-medium mb-2">Hours</p>
                <p className="text-lg font-serif">Tuesday — Sunday<br />8:00 AM — 8:00 PM</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.2em] text-xs text-primary font-medium mb-2">Contact</p>
                <p className="text-lg font-serif italic">+91 98765 43210<br />hello@7balance.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-[#e6d8c0] postcard-border shadow-xl flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0" />
            <div className="w-full h-full bg-[#f4ebd8] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at center, transparent 0, transparent 2px, hsl(var(--secondary)) 3px)',
                backgroundSize: '20px 20px',
              }} />
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

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#110b07] text-[#f4ebd8] py-16 relative overflow-hidden flex flex-col items-center border-t border-[#3a251a]">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={postcardBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center px-4">
          {/* Actual logo in footer */}
          <img
            src={logoTransparent}
            alt="7 Balance"
            className="w-48 object-contain mb-6 opacity-90"
          />
          <p className="font-sans font-light tracking-[0.2em] uppercase text-xs text-[#f4ebd8]/50 mb-12">
            Seven elements. One perfect Balance.
          </p>
          <div className="flex gap-8 font-sans uppercase tracking-widest text-xs mb-16">
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Instagram</a>
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Journal</a>
            <a href="#" className="text-[#c19c5c] hover:text-[#f4ebd8] transition-colors">Contact</a>
          </div>
          <div className="w-full flex items-center justify-center opacity-30">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#f4ebd8]" />
            <PostalStamp src={stamp1} className="w-8 h-10 mx-4 static scale-75 rotate-6" rotation={6} />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#f4ebd8]" />
          </div>
          <p className="mt-8 font-sans text-xs text-[#f4ebd8]/30">
            © {new Date().getFullYear()} 7 Balance Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
