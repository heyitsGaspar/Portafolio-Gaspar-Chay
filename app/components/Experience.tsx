"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "./Reveal";
import { experience } from "@/app/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionTitle kicker="Experiencia" title="Mi trayectoria" />
      <div ref={ref} className="relative pl-10">
        <div className="absolute top-0 left-[11px] h-full w-px bg-white/10" />
        <motion.div style={{ scaleY }} className="absolute top-0 left-[11px] h-full w-px origin-top bg-linear-to-b from-sky via-iris to-sun" />

        {experience.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute top-2 -left-10 h-6 w-6 rounded-full border-4 border-ink bg-sun shadow-[0_0_20px_#facc15]" />
            <p className="mb-1 font-display text-sm text-sky">{e.period}</p>
            <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
            <p className="mb-4 text-white/50">{e.place}</p>
            <ul className="space-y-2 text-white/70">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3"><span className="text-sun">▹</span>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}