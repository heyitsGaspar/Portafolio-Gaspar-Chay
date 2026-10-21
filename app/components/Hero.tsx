"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/app/lib/data";

const D = 2.1; // espera a que termine el Loader

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % profile.roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <div className="bg-grid absolute inset-0" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky/25 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sun/15 blur-[120px]"
      />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-iris/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D }}
            className="mb-4 font-display text-lg text-sky"
          >
            Hola, soy 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.15, duration: 0.8 }}
            className="font-display text-6xl leading-[1.05] font-bold md:text-8xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <div className="mt-5 h-10 overflow-hidden font-display text-2xl text-white/80 md:text-3xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={i}
                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {profile.roles[i]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.5 }}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="group flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-ink transition hover:shadow-[0_0_40px_-5px_#facc15]">
              Ver proyectos
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="/cv.pdf" download className="flex items-center gap-2 rounded-full border border-sky/50 px-7 py-3.5 font-semibold text-sky transition hover:bg-sky/10">
              <Download size={18} /> Descargar CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: D + 0.3, duration: 0.8 }}
          className="relative mx-auto h-72 w-72 md:h-96 md:w-96"
        >
          <motion.div
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#38bdf8,#818cf8,#facc15,#38bdf8)] blur-sm"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.avatar} alt={profile.name} className="relative h-full w-full rounded-full border-4 border-ink object-cover" />
        </motion.div>
      </div>
    </section>
  );
}