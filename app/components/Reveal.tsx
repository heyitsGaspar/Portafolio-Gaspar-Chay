"use client";
import { motion } from "framer-motion";

export default function Reveal({
    children, delay = 0, className,
}: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
    return (
        <Reveal className="mb-14">
            <p className="mb-3 font-display text-sm tracking-[0.3em] text-sun uppercase">{kicker}</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">{title}</h2>
        </Reveal>
    );
}