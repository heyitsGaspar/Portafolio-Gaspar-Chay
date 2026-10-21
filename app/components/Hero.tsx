"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/app/lib/data";
import { useApp } from "./Providers";

const D = 2.1;
const chips = [
  { label: "Next.js", cls: "-top-2 -left-6", d: 0 },
  { label: "Node.js", cls: "top-1/3 -right-10", d: 0.6 },
  { label: "PostgreSQL", cls: "-bottom-2 left-4", d: 1.2 },
];

export default function Hero() {
  const { t } = useApp();
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % t.roles.length), 2500);
    return () => clearInterval(id);
  }, [t.roles.length]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <div className="bg-grid absolute inset-0" />
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky/20 blur-[120px]" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 12 }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sun/15 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-iris/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-fg/15 bg-panel/60 px-4 py-1.5 text-sm text-fg/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            {t.available}
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.1 }}
            className="mb-2 font-display text-lg text-fg/60">{t.hello}</motion.p>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.2, duration: 0.8 }}
            className="font-display text-6xl leading-[1.05] font-bold tracking-tight md:text-8xl">
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <div className="mt-5 h-10 overflow-hidden font-display text-2xl text-fg/80 md:text-3xl">
            <AnimatePresence mode="wait">
              <motion.p key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                {t.roles[i]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.5 }}
            className="mt-6 max-w-xl text-lg text-fg/60">{t.bio}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.7 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-white transition hover:shadow-[0_0_40px_-5px_var(--sun)]">
              {t.projectsBtn} <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="/cv.pdf" download className="flex items-center gap-2 rounded-full border border-sky/50 px-7 py-3.5 font-semibold text-sky transition hover:bg-sky/10">
              <Download size={18} /> {t.cv}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: D + 0.3, duration: 0.8 }}
          className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
          <div className="absolute -inset-1 animate-[spin-slow_8s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--sky),var(--iris),var(--sun),var(--sky))] blur-sm" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.avatar} alt={profile.name} className="relative h-full w-full rounded-full border-4 border-ink object-cover" />
          {chips.map((c) => (
            <motion.span key={c.label} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: c.d }}
              className={`absolute ${c.cls} rounded-full border border-fg/15 bg-panel/80 px-3 py-1.5 text-xs font-semibold text-fg shadow-lg backdrop-blur`}>
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}