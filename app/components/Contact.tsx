"use client";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "@/app/lib/data";

const socials = [
    { icon: FaGithub, href: profile.github, label: "GitHub" },
    { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: profile.instagram, label: "Instagram" },
];

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden px-6 py-32 text-center">
            <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/20 blur-[120px]" />
            <Reveal className="relative mx-auto max-w-2xl">
                <p className="mb-3 font-display text-sm tracking-[0.3em] text-sun uppercase">Contacto</p>
                <h2 className="font-display text-5xl font-bold md:text-6xl">
                    ¿Trabajamos <span className="text-gradient">juntos?</span>
                </h2>
                <p className="mt-6 text-lg text-white/60">
                    Estoy abierto a nuevas oportunidades y proyectos. Escríbeme y platicamos.
                </p>
                <a
                    href={`mailto:${profile.email}`}
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-sun px-8 py-4 font-semibold text-ink transition hover:shadow-[0_0_50px_-5px_#facc15]"
                >
                    <Mail size={20} /> {profile.email}
                </a>
                <div className="mt-12 flex justify-center gap-5">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                            whileHover={{ y: -6, scale: 1.15 }}
                            className="rounded-full border border-white/10 bg-panel p-4 text-xl text-white/60 transition hover:border-sky hover:text-sky"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>
            </Reveal>
            <p className="relative mt-24 text-sm text-white/30">
                © 2026 Gaspar Chay · Hecho con Next.js
            </p>
        </section>
    );
}