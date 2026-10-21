"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
    const [n, setN] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const id = setInterval(
            () => setN((p) => Math.min(100, p + Math.ceil(Math.random() * 6))),
            50,
        );
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        if (n < 100) return;
        const t = setTimeout(() => {
            setDone(true);
            document.body.style.overflow = "";
        }, 500);
        return () => clearTimeout(t);
    }, [n]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-2xl text-sky"
                    >
                        {"<Gaspar />"}
                    </motion.p>

                    <div className="mt-8 font-display text-8xl font-bold text-gradient tabular-nums">
                        {n}%
                    </div>

                    <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="h-full bg-linear-to-r from-sky to-sun"
                            style={{ width: `${n}%` }}
                        />
                    </div>

                    <p className="mt-4 text-sm tracking-[0.3em] text-white/50 uppercase">
                        Cargando
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                            ...
                        </motion.span>
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
