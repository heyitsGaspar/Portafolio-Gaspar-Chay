"use client";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/app/lib/data";
import { useApp } from "./Providers";
import CodeCard from "./CodeCard";

const D = 2.1;


const cvFiles = {
  es: "/CV-Gaspar-Chay-ES.pdf",
  en: "/CV-Gaspar-Chay-EN.pdf",
} as const;

/* Color de cada letra a lo largo del degradado sky → iris → sun */
const colorAt = (p: number) =>
  p < 0.5
    ? `color-mix(in srgb, var(--sky,var(--color-sky)) ${100 - p * 200}%, var(--iris,var(--color-iris)))`
    : `color-mix(in srgb, var(--iris,var(--color-iris)) ${100 - (p - 0.5) * 200}%, var(--sun,var(--color-sun)))`;

/* Nombre: letra por letra desde la izquierda */
function AnimatedName({ text, delay }: { text: string; delay: number }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const total = text.replace(/ /g, "").length;

  if (reduce) {
    return <span className="text-gradient">{text}</span>;
  }

  let n = 0;

  return (
    <motion.span
      aria-label={text}
      className="inline-block"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { delayChildren: delay, staggerChildren: 0.05 } } }}
    >
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
          {word.split("").map((ch, c) => {
            const p = total > 1 ? n++ / (total - 1) : 0;
            return (
              <motion.span
                key={c}
                className="inline-block cursor-default"
                style={{ color: colorAt(p) }}
                variants={{
                  hidden: { opacity: 0, x: -40, y: 20, filter: "blur(10px)" },
                  show: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.12,
                  transition: { type: "spring", stiffness: 300, damping: 12 },
                }}
              >
                {ch}
              </motion.span>
            );
          })}
          {w < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}

/* Wrapper de la tarjeta: entrada 3D, flotación, tilt con el mouse y brillo */
function TiltFloat({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 150, damping: 18 });
  const sy = useSpring(my, { stiffness: 150, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-10, 10]);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const gx = useTransform(sx, [0, 1], ["0%", "100%"]);
  const gy = useTransform(sy, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.10), transparent 55%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotateY: -25, filter: "blur(12px)" }}
      animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative"
        >
          {/* Halo de color que pulsa detrás */}
          <motion.div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-sky/30 via-iris/30 to-sun/30 blur-2xl"
            animate={reduce ? undefined : { opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          {children}
          {/* Brillo que sigue al cursor */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{ background: glare }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { t, lang } = useApp();
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);

  /* El rol aparece después del nombre, y solo entonces empieza a rotar */
  useEffect(() => {
    const id = setTimeout(() => setReady(true), (D + 1.1) * 1000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const id = setInterval(() => setI((p) => (p + 1) % t.roles.length), 2800);
    return () => clearInterval(id);
  }, [ready, t.roles.length]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-10 pt-20">
      <div className="bg-grid absolute inset-0" />
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-sky/20 blur-[120px]" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 12 }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sun/15 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-iris/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-fg/15 bg-panel/60 px-4 py-1.5 text-sm text-fg/70 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            {t.available}
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.1 }}
            className="mb-1 font-display text-base text-fg/60 md:text-lg">{t.hello}</motion.p>

          {/* El tamaño depende del ancho Y del alto de la ventana */}
          <h1 className="font-display text-[clamp(3rem,min(8vw,13vh),6rem)] leading-[1.05] font-bold tracking-tight">
            <AnimatedName text={profile.name} delay={D + 0.2} />
          </h1>

          {/* La altura se reserva desde el inicio: no hay saltos de layout */}
          <div className="mt-4 h-10 overflow-hidden font-display text-2xl text-fg/80 md:text-3xl">
            {ready && (
              <AnimatePresence mode="wait">
                <motion.p key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                  {t.roles[i]}
                </motion.p>
              </AnimatePresence>
            )}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 1.2 }}
            className="mt-4 max-w-xl text-base text-fg/60 md:text-lg">{t.bio}</motion.p>

          {/* El margen superior también se ajusta al alto de la ventana */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 1.4 }}
            className="mt-[clamp(1.25rem,4vh,2.5rem)] flex flex-wrap gap-4">
            <a href="#projects" className="group flex items-center gap-2 rounded-full bg-sun px-7 py-3 font-semibold text-white transition hover:shadow-[0_0_40px_-5px_var(--sun)]">
              {t.projectsBtn} <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href={cvFiles[lang === "en" ? "en" : "es"]}
              download
              className="flex items-center gap-2 rounded-full border border-sky/50 px-7 py-3 font-semibold text-sky transition hover:bg-sky/10"
            >
              <Download size={18} /> {t.cv}
            </a>
          </motion.div>
        </div>

        <TiltFloat delay={D + 0.3}>
          <CodeCard delay={D + 0.3} />
        </TiltFloat>
      </div>
    </section>
  );
}