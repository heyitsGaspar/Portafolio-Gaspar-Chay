"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  ["Sobre mí", "#about"], ["Tecnologías", "#skills"], ["Proyectos", "#projects"],
  ["Experiencia", "#experience"], ["Contacto", "#contact"],
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.1, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-bold text-sky">
          {"<GC />"}
        </a>
        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-sun">{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-linear-to-r from-sky via-iris to-sun"
      />
    </motion.header>
  );
}