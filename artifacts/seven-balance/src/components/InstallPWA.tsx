import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Platform = "android" | "ios" | "desktop" | "unknown";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const isAndroid = /android/i.test(ua);
  if (isIOS) return "ios";
  if (isAndroid) return "android";
  const isDesktop = !/mobile/i.test(ua);
  if (isDesktop) return "desktop";
  return "unknown";
}

function isInStandaloneMode(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true
  );
}

export function InstallPWA() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInStandaloneMode()) { setInstalled(true); return; }

    const p = detectPlatform();
    setPlatform(p);

    if (p === "ios") {
      setTimeout(() => setVisible(true), 3000);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setInstalled(true);
      setVisible(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (installed || !visible) return null;

  const handleInstall = async () => {
    if (platform === "ios") { setShowIOSModal(true); return; }
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setInstalled(true);
      setDeferredPrompt(null);
      setVisible(false);
    }
  };

  const label = platform === "ios"
    ? "Add to Home Screen"
    : platform === "android"
    ? "Install App"
    : "Install App";

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={handleInstall}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c8a87a]/60 text-[#c8a87a] hover:bg-[#c8a87a]/10 transition-colors font-sans text-[10px] tracking-[0.18em] uppercase select-none"
        title={`Install 7 Balance as an app on your ${platform}`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v13M7 11l5 5 5-5"/>
          <path d="M3 18h18v3H3z"/>
        </svg>
        {label}
      </motion.button>

      <AnimatePresence>
        {showIOSModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={() => setShowIOSModal(false)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl p-6 shadow-2xl"
              style={{ background: "#f0e6d0", border: "1px solid #c8a87a44" }}
            >
              <div className="flex justify-between items-start mb-4">
                <p className="font-display italic text-xl text-secondary">Install 7 Balance</p>
                <button onClick={() => setShowIOSModal(false)} className="text-secondary/50 hover:text-secondary text-xl leading-none">×</button>
              </div>
              <p className="font-serif text-secondary/70 text-sm mb-5 leading-relaxed">
                Add this site to your home screen for the full experience:
              </p>
              <ol className="space-y-3 font-serif text-secondary/80 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">1</span>
                  Tap the <strong>Share</strong> button
                  <svg className="inline ml-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
                  in Safari
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">2</span>
                  Scroll down and tap <strong>"Add to Home Screen"</strong>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">3</span>
                  Tap <strong>"Add"</strong> in the top-right corner
                </li>
              </ol>
              <button
                onClick={() => setShowIOSModal(false)}
                className="mt-6 w-full py-2.5 rounded-xl font-sans text-xs tracking-widest uppercase text-white transition-colors"
                style={{ background: "#B93F1B" }}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
