"use client";
import { Code2, Gauge, Rocket } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal";
import { useApp } from "./Providers";

const meta = [
  { icon: Code2, color: "text-sky" },
  { icon: Gauge, color: "text-sun" },
  { icon: Rocket, color: "text-iris" },
];

export default function About() {
  const { t } = useApp();
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={t.about.kicker} title={t.about.title} />
      <div className="grid gap-6 md:grid-cols-3">
        {t.about.items.map((it, i) => {
          const Icon = meta[i].icon;
          return (
            <Reveal key={it.title} delay={i * 0.12}>
              <div data-hover className="h-full rounded-2xl border border-fg/10 bg-panel p-8 transition hover:-translate-y-2 hover:border-sky/50">
                <Icon className={`mb-5 ${meta[i].color}`} size={34} />
                <h3 className="mb-2 font-display text-xl font-semibold">{it.title}</h3>
                <p className="text-fg/60">{it.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}