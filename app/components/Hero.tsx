"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/app/lib/data";
import { useApp } from "./Providers";
import CodeCard from "./CodeCard";

const D = 2.1;

export default function Hero() {
  const { t } = useApp();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % t.roles.length), 2500);
    return () => clearInterval(id);
  }, [t.roles.length]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-10 pt-20">
      <div className="bg-grid absolute inset-0" />
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky/20 blur-[120px]" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 12 }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sun/15 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-iris/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-fg/15 bg-panel/60 px-4 py-1.5 text-sm text-fg/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            {t.available}
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.1 }}
            className="mb-1 font-display text-base text-fg/60 md:text-lg">{t.hello}</motion.p>

          {/* El tamaño depende del ancho Y del alto de la ventana */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.2, duration: 0.8 }}
            className="font-display text-[length:clamp(3rem,min(8vw,13vh),6rem)] leading-[1.05] font-bold tracking-tight">
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <div className="mt-4 h-10 overflow-hidden font-display text-2xl text-fg/80 md:text-3xl">
            <AnimatePresence mode="wait">
              <motion.p key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                {t.roles[i]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.5 }}
            className="mt-4 max-w-xl text-base text-fg/60 md:text-lg">{t.bio}</motion.p>

          {/* El margen superior también se ajusta al alto de la ventana */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.7 }}
            className="mt-[clamp(1.25rem,4vh,2.5rem)] flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 rounded-full bg-sun px-7 py-3 font-semibold text-white transition hover:shadow-[0_0_40px_-5px_var(--sun)]">
              {t.projectsBtn} <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="/cv.pdf" download className="flex items-center gap-2 rounded-full border border-sky/50 px-7 py-3 font-semibold text-sky transition hover:bg-sky/10">
              <Download size={18} /> {t.cv}
            </a>
          </motion.div>
        </div>

        <CodeCard delay={D + 0.3} />
      </div>
    </section>
  );
}