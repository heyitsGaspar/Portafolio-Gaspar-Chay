"use client";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "@/app/lib/data";
import { useApp } from "./Providers";
import { useEffect, useState } from "react";

const socials = [
    { icon: FaGithub, href: profile.github, label: "GitHub" },
    { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: profile.instagram, label: "Instagram" },
];

export default function Contact() {
    const { t } = useApp();
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setYear(new Date().getFullYear());
    }, []);
    return (
        <>
            <section id="contact" className="px-6 py-28">
                <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-fg/10 bg-panel px-8 py-20 text-center">
                    <div className="absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-sky/25 blur-[100px]" />
                    <div className="absolute -right-10 -bottom-24 h-64 w-64 rounded-full bg-sun/20 blur-[100px]" />
                    <div className="relative">
                        <p className="mb-3 font-display text-sm tracking-[0.3em] text-sun uppercase">{t.contact.kicker}</p>
                        <h2 className="font-display text-5xl font-bold md:text-6xl">
                            {t.contact.a} <span className="text-gradient">{t.contact.b}</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-lg text-fg/60">{t.contact.text}</p>
                        <a href={`mailto:${profile.email}`}
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sun px-8 py-4 font-semibold text-white transition hover:shadow-[0_0_50px_-5px_var(--sun)]">
                            <Mail size={20} /> {profile.email}
                        </a>
                        <div className="mt-10 flex justify-center gap-4">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="rounded-full border border-fg/15 p-3.5 text-xl text-fg/60 transition hover:border-sky hover:text-sky">
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            <footer className="border-t border-fg/10 bg-panel/50">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-fg/40 sm:flex-row">
                    <p>© {year ?? "2026"} Gaspar Chay · {t.footer}</p>
                    <a href="#" className="flex items-center gap-2 transition hover:text-sun">
                        {t.top} <ArrowUp size={14} />
                    </a>
                </div>
            </footer>
        </>
    );
}