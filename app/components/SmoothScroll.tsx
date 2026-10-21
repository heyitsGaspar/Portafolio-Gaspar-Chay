"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, anchors: true });
        let id: number;
        const raf = (t: number) => {
            lenis.raf(t);
            id = requestAnimationFrame(raf);
        };
        id = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(id);
            lenis.destroy();
        };
    }, []);
    return null;
}