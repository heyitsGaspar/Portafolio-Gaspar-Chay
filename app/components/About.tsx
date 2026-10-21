"use client";
import { Code2, Gauge, Rocket } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal";

const items = [
  { icon: Code2, title: "Código limpio", text: "Mantenible, tipado y fácil de escalar.", color: "text-sky" },
  { icon: Gauge, title: "Alto rendimiento", text: "Sitios veloces y optimizados.", color: "text-sun" },
  { icon: Rocket, title: "Siempre aprendiendo", text: "Cloud, microservicios, DevOps y arquitectura.", color: "text-iris" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker="Sobre mí" title="Construyo de punta a punta" />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text, color }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <div data-hover className="h-full rounded-2xl border border-white/10 bg-panel p-8 transition hover:-translate-y-2 hover:border-sky/40">
              <Icon className={`mb-5 ${color}`} size={34} />
              <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
              <p className="text-white/60">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}