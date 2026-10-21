"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const [enabled, setEnabled] = useState(false);
    const [hover, setHover] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const rx = useSpring(x, { stiffness: 160, damping: 20, mass: 0.5 });
    const ry = useSpring(y, { stiffness: 160, damping: 20, mass: 0.5 });

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEnabled(true);
        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        const over = (e: MouseEvent) =>
            setHover(!!(e.target as HTMLElement).closest("a, button, [data-hover]"));
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <>
            {/* anillo con inercia */}
            <motion.div
                style={{ x: rx, y: ry }}
                className="pointer-events-none fixed top-0 left-0 z-[90] -mt-5 -ml-5 h-10 w-10"
            >
                <motion.div
                    animate={{ scale: hover ? 1.9 : 1, backgroundColor: hover ? "rgba(56,189,248,.15)" : "rgba(56,189,248,0)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full w-full rounded-full border border-sky"
                />
            </motion.div>
            {/* punto exacto */}
            <motion.div
                style={{ x, y }}
                className="pointer-events-none fixed top-0 left-0 z-[90] -mt-1 -ml-1 h-2 w-2 rounded-full bg-sun"
            />
        </>
    );
}