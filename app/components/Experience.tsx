"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "./Reveal";
import { experience, education } from "@/app/lib/data";
import { useApp } from "./Providers";

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  points?: string[];
  tech?: string[];
};

function Timeline({
  items,
  dotClass,
  bulletClass,
}: {
  items: TimelineItem[];
  dotClass: string;
  bulletClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative pl-10">
      <div className="absolute top-0 left-[11px] h-full w-px bg-fg/10" />
      <motion.div
        style={{ scaleY }}
        className="absolute top-0 left-[11px] h-full w-px origin-top bg-linear-to-b from-sky via-iris to-sun"
      />

      {items.map((e, i) => (
        <motion.div
          key={`${e.title}-${e.period}`}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="relative mb-14 last:mb-0"
        >
          <span className={`absolute top-2 -left-10 h-6 w-6 rounded-full border-4 border-ink ${dotClass}`} />
          <p className="mb-1 font-display text-sm text-sky">{e.period}</p>
          <h3 className="font-display text-2xl font-semibold">{e.title}</h3>
          <p className="mb-4 text-fg/50">{e.place}</p>

          {e.points && (
            <ul className="space-y-2 text-fg/70">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className={bulletClass}>▹</span>
                  {p}
                </li>
              ))}
            </ul>
          )}

          {e.tech && (
            <div className="mt-4 flex flex-wrap gap-2">
              {e.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs text-fg/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Experience() {
  const { t } = useApp(); // ✅ dentro del componente

  // Normalizamos los datos para que ambos usen la misma forma (title)
  const work: TimelineItem[] = experience.map((e) => ({
    period: e.period,
    title: e.role,
    place: e.place,
    points: e.points,
    tech: e.tech,
  }));

  const studies: TimelineItem[] = education.map((e) => ({
    period: e.period,
    title: e.degree,
    place: e.place,
  }));

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionTitle kicker={t.exp.kicker} title={t.exp.title} />
      <Timeline
        items={work}
        dotClass="bg-sun shadow-[0_0_20px_var(--sun)]"
        bulletClass="text-sun"
      />

      <div className="mt-28">
        <SectionTitle kicker={t.exp.eduKicker} title={t.exp.eduTitle} />
        <Timeline
          items={studies}
          dotClass="bg-sky shadow-[0_0_20px_var(--sky)]"
          bulletClass="text-sky"
        />
      </div>
    </section>
  );
}