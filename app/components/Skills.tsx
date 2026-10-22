"use client";
import { useState, type CSSProperties, type MouseEvent } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Reveal, { SectionTitle } from "./Reveal";
import { skillGroups } from "@/app/lib/data";
import { useApp } from "./Providers";

type Tech = (typeof skillGroups)[number]["items"][number];
type Item = Tech & { group: number };
type Filter = "all" | number;

/* Todas las tecnologías en una sola lista, recordando su grupo */
const all: Item[] = skillGroups.flatMap((g, group) =>
  g.items.map((tech) => ({ ...tech, group }))
);

function Tile({
  tech,
  index,
  onGlow,
}: {
  tech: Item;
  index: number;
  onGlow: (color: string | null) => void;
}) {
  const Icon = tech.icon;

  /* El punto de origen del relleno sigue al cursor */
  const move = (e: MouseEvent<HTMLLIElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.li
      layout
      data-hover
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
      whileHover="hover"
      variants={{ hover: { y: -4 } }}
      onMouseMove={move}
      onMouseEnter={() => onGlow(tech.color)}
      onMouseLeave={() => onGlow(null)}
      style={{ "--c": tech.color } as CSSProperties}
      className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-fg/10 bg-panel px-2 py-4"
    >
      {/* Relleno de color que crece desde el cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl transition-[clip-path] duration-500 ease-out [clip-path:circle(0%_at_var(--mx,50%)_var(--my,50%))] group-hover:[clip-path:circle(150%_at_var(--mx,50%)_var(--my,50%))]"
        style={{ background: "color-mix(in srgb, var(--c) 90%, black)" }}
      />

      {/* El ícono gira al pasar */}
      <motion.span
        className="relative"
        variants={{ hover: { rotate: 360, scale: 1.15 } }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Icon className="text-2xl text-fg/45 transition-colors duration-300 group-hover:text-white" />
      </motion.span>

      <span className="relative text-xs font-medium text-fg/70 transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </motion.li>
  );
}

export default function Skills() {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState<Filter>("all");
  const [glow, setGlow] = useState<string | null>(null);
  /* Guardamos el último color para que al salir solo se desvanezca,
     sin cambiar de color de golpe */
  const [lastGlow, setLastGlow] = useState("#38bdf8");

  const handleGlow = (color: string | null) => {
    if (color) setLastGlow(color);
    setGlow(color);
  };

  const visible = filter === "all" ? all : all.filter((tech) => tech.group === filter);

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: t.skills.all, count: all.length },
    ...skillGroups.map((g, i) => ({
      key: i as Filter,
      label: g.title[lang],
      count: g.items.length,
    })),
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={t.skills.kicker} title={t.skills.title} />

      <LayoutGroup>
        {/* Filtros */}
        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const active = filter === tab.key;

              return (
                <button
                  key={String(tab.key)}
                  type="button"
                  data-hover
                  aria-pressed={active}
                  onClick={() => setFilter(tab.key)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                    active ? "text-sky" : "text-fg/60 hover:text-fg"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="skills-pill"
                      className="absolute inset-0 rounded-full bg-sky/15 ring-1 ring-sky/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">
                    {tab.label}
                    <span className="ml-1.5 text-xs opacity-60">{tab.count}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cuadrícula */}
        <div className="relative isolate">
          {/* Resplandor: el color se interpola entre tiles */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
            initial={false}
            animate={{
              opacity: glow ? 0.28 : 0,
              backgroundColor: lastGlow,
            }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              backgroundColor: { duration: 0.7, ease: "easeInOut" },
            }}
            style={{
              WebkitMaskImage: "radial-gradient(circle at center, black, transparent 70%)",
              maskImage: "radial-gradient(circle at center, black, transparent 70%)",
            }}
          />

          <motion.ul
            layout
            className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((tech, i) => (
                <Tile key={`${tech.group}-${tech.name}`} tech={tech} index={i} onGlow={handleGlow} />
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </LayoutGroup>
    </section>
  );
}