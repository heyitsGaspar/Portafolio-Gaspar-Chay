"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal, { SectionTitle } from "./Reveal";
import { projects, projectLabels, type Project } from "@/app/lib/data";
import { useApp } from "./Providers";

const STATUS = {
  live: { dot: "bg-emerald-400", pulse: true },
  wip: { dot: "bg-amber-400", pulse: false },
  code: { dot: "bg-fg/40", pulse: false },
} as const;

const linkBase =
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky";

function Card({ p, lang }: { p: Project; lang: "es" | "en" }) {
  const L = projectLabels[lang];
  const key = p.status ?? "code";
  const status = STATUS[key];
  /* Si la imagen no existe o falla, se oculta y vuelve el ícono de carpeta */
  const [imgOk, setImgOk] = useState(true);
  const showImage = !!p.image && imgOk;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-fg/10 bg-panel"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-sun to-transparent opacity-0 transition group-hover:opacity-100" />

      {showImage && (
        <div className="relative aspect-[2/1] overflow-hidden border-b border-fg/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          {showImage ? <span /> : <Folder className="text-sky" size={26} />}

          <span className="inline-flex items-center gap-1.5 rounded-full border border-fg/10 px-2.5 py-0.5 text-[11px] text-fg/70">
            <span className="relative flex size-1.5">
              {status.pulse && (
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${status.dot}`} />
              )}
              <span className={`relative inline-flex size-1.5 rounded-full ${status.dot}`} />
            </span>
            {L.status[key]}
          </span>
        </div>

        <h3 className="mb-1.5 font-display text-lg font-semibold transition group-hover:text-sky">
          {p.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-fg/60">{p.desc[lang]}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky/10 px-2.5 py-0.5 text-[11px] text-sky">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className={`${linkBase} bg-sky text-black hover:brightness-110`}
            >
              {L.demo}
              <ArrowUpRight size={14} />
            </a>
          )}
          {p.docs && (
            <a
              href={p.docs}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              title={L.docsHint}
              className={`${linkBase} border border-fg/20 hover:border-sky hover:text-sky`}
            >
              {L.docs}
              <ArrowUpRight size={14} />
            </a>
          )}
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className={`${linkBase} border border-fg/20 hover:border-sun hover:text-sun`}
          >
            <FaGithub size={14} />
            {L.code}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t, lang } = useApp();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={t.projects.kicker} title={t.projects.title} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1} className="h-full">
            <Card p={p} lang={lang} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href="https://github.com/heyitsGaspar?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-fg/70 transition hover:text-sun"
        >
          <FaGithub /> {t.projects.all}
        </a>
      </Reveal>
    </section>
  );
}