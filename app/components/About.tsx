"use client";
import { Code2, Server, ShieldCheck } from "lucide-react";
import Reveal, { SectionTitle } from "./Reveal";
import { useApp } from "./Providers";

const meta = [
  { icon: Code2, chip: "bg-sky/10 text-sky" },
  { icon: Server, chip: "bg-sun/10 text-sun" },
  { icon: ShieldCheck, chip: "bg-iris/10 text-iris" },
];

export default function About() {
  const { t } = useApp();
  const a = t.about;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={a.kicker} title={a.title} />

      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-fg/70">
            {a.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <ul className="divide-y divide-fg/10 border-y border-fg/10">
          {a.items.map((item, i) => {
            const { icon: Icon, chip } = meta[i];

            return (
              <li key={item.title}>
                <Reveal delay={i * 0.12}>
                  <div className="flex gap-5 py-6">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${chip}`}>
                      <Icon size={22} />
                    </span>

                    <div>
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-fg/60">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}