"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useApp } from "./Providers";

const hrefs = ["#about", "#skills", "#projects", "#experience", "#contact"];

export default function Navbar() {
  const { t, theme, toggleTheme, lang, toggleLang } = useApp();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const btn = "grid h-9 min-w-9 place-items-center rounded-full border border-fg/15 px-2 text-xs font-semibold text-fg/70 transition hover:border-sky hover:text-sky";

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 2.1, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-ink/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-bold text-sky">{"<GC />"}</a>
        <ul className="hidden gap-8 text-sm text-fg/70 md:flex">
          {t.nav.map((label, i) => (
            <li key={label}><a href={hrefs[i]} className="transition hover:text-sun">{label}</a></li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button onClick={toggleLang} className={btn} aria-label="Language">{lang === "es" ? "EN" : "ES"}</button>
          <button onClick={toggleTheme} className={btn} aria-label="Theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
      <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-linear-to-r from-sky via-iris to-sun" />
    </motion.header>
  );
}