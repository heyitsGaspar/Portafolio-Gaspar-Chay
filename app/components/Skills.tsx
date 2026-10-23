"use client";
import {
  memo,
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";
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

const Tile = memo(function Tile({
  tech,
  index,
  onGlow,
}: {
  tech: Item;
  index: number;
  onGlow: (color: string | null) => void;
}) {
  const Icon = tech.icon;

  /* Giro de toda la card */
  const rotateY = useMotionValue(0);
  const spinning = useRef(false);

  const spin = () => {
    if (spinning.current) return;
    spinning.current = true;
    animate(rotateY, 360, {
      duration: 0.7,
      ease: [0.45, 0, 0.2, 1],
      onComplete: () => {
        rotateY.set(0); // 360° y 0° se ven igual
        spinning.current = false;
      },
    });
  };

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
      whileHover={{ y: -4 }}
      onMouseMove={move}
      onMouseEnter={() => {
        spin();
        onGlow(tech.color);
      }}
      onMouseLeave={() => onGlow(null)}
      style={
        {
          "--c": tech.color,
          rotateY,
          transformPerspective: 900,
        } as CSSProperties
      }
      className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-fg/10 bg-panel px-2 py-4"
    >
      {/* Relleno de color que crece desde el cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl transition-[clip-path] duration-500 ease-out [clip-path:circle(0%_at_var(--mx,50%)_var(--my,50%))] group-hover:[clip-path:circle(150%_at_var(--mx,50%)_var(--my,50%))]"
        style={{ background: "color-mix(in srgb, var(--c) 90%, black)" }}
      />

      <Icon className="relative text-2xl text-fg/45 transition duration-300 group-hover:scale-110 group-hover:text-white" />

      <span className="relative text-xs font-medium text-fg/70 transition-colors duration-300 group-hover:text-white">
        {tech.name}
      </span>
    </motion.li>
  );
});

export default function Skills() {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState<Filter>("all");

  /* Resplandor animado sin re-renders de React */
  const glowColor = useMotionValue("#38bdf8");
  const glowOpacity = useMotionValue(0);

  const handleGlow = useCallback(
    (color: string | null) => {
      if (color) {
        animate(glowColor, color, { duration: 0.6, ease: "easeInOut" });
        animate(glowOpacity, 0.3, { duration: 0.4, ease: "easeOut" });
      } else {
        animate(glowOpacity, 0, { duration: 0.6, ease: "easeOut" });
      }
    },
    [glowColor, glowOpacity]
  );

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
          {/* Resplandor: sin blur, solo máscara radial */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 will-change-[opacity,background-color]"
            style={{
              backgroundColor: glowColor,
              opacity: glowOpacity,
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