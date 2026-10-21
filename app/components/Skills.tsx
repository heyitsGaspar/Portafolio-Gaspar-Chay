"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { skillGroups, type Skill } from "@/app/lib/data";

function SkillCard({ s }: { s: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = s.icon;

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      data-hover
      onMouseMove={onMove}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{ "--c": s.color } as React.CSSProperties}
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-panel px-4 py-6 hover:border-[var(--c)]/60"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(160px circle at var(--x) var(--y), ${s.color}30, transparent 70%)` }}
      />
      <Icon className="relative text-4xl text-white/40 transition duration-300 group-hover:scale-125 group-hover:text-[var(--c)]" />
      <span className="relative text-sm text-white/70 transition group-hover:text-white">{s.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker="Tecnologías" title="Mi caja de herramientas" />
      <div className="space-y-12">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.05}>
            <h3 className="mb-5 font-display text-lg text-sky">{g.title}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {g.items.map((s) => <SkillCard key={s.name} s={s} />)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}