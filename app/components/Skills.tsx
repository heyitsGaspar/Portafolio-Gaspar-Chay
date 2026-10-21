"use client";
import { motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { skillGroups } from "@/app/lib/data";
import { useApp } from "./Providers";

export default function Skills() {
  const { t } = useApp();
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={t.skills.kicker} title={t.skills.title} />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08}>
            <div className="h-full rounded-2xl border border-fg/10 bg-panel p-6">
              <h3 className="mb-5 font-display text-sm tracking-widest text-sky uppercase">{g.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((s) => {
                  const Icon = s.icon;
                  return (
                    <motion.span
                      key={s.name} data-hover whileHover={{ y: -3 }}
                      style={{ "--c": s.color } as React.CSSProperties}
                      className="group flex items-center gap-2 rounded-full border border-fg/10 px-3.5 py-2 text-sm text-fg/70 transition hover:border-[var(--c)] hover:bg-[color-mix(in_srgb,var(--c)_12%,transparent)] hover:text-fg"
                    >
                      <Icon className="text-base text-fg/40 transition group-hover:text-[var(--c)]" />
                      {s.name}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}