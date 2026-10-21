"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal, { SectionTitle } from "./Reveal";
import { projects } from "@/app/lib/data";
import { useApp } from "./Providers";

export default function Projects() {
  const { t, lang } = useApp()

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle kicker={t.projects.kicker} title={t.projects.title} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1}>
            <motion.a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-fg/10 bg-panel p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sun to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-6 flex items-center justify-between">
                <Folder className="text-sky" size={32} />
                <ArrowUpRight className="text-fg/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sun" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold transition group-hover:text-sky">{p.title}</h3>
              <p className="mb-6 flex-1 text-sm text-fg/60">{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-sky/10 px-3 py-1 text-xs text-sky">{tag}</span>
                ))}
              </div>
            </motion.a>
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