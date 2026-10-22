"use client";
import { motion } from "framer-motion";

const K = ({ children }: { children: React.ReactNode }) => <span className="text-iris">{children}</span>;
const P = ({ children }: { children: React.ReactNode }) => <span className="text-sky">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-sun">{children}</span>;
const D = ({ children }: { children: React.ReactNode }) => <span className="text-fg/40">{children}</span>;

const lines: { indent?: boolean; node: React.ReactNode }[] = [
  { node: <><K>const</K> <P>gaspar</P> <D>= {"{"}</D></> },
  { indent: true, node: <><P>role</P><D>:</D> <S>&quot;Full Stack Jr&quot;</S><D>,</D></> },
  { indent: true, node: <><P>stack</P><D>: [</D><S>&quot;React&quot;</S><D>,</D> <S>&quot;Next.js&quot;</S><D>,</D> <S>&quot;Node.js&quot;</S><D>,</D> <S>&quot;Spring Boot&quot;</S><D>],</D></> },
  { indent: true, node: <><P>database</P><D>:</D> <S>&quot;PostgreSQL&quot;</S><D>,</D></> },
  { indent: true, node: <><P>english</P><D>:</D> <S>&quot;B2&quot;</S><D>,</D></> },
  { indent: true, node: <><P>location</P><D>:</D> <S>&quot;Yucatán, MX&quot;</S><D>,</D></> },
  { indent: true, node: <><P>openToWork</P><D>:</D> <K>true</K><D>,</D></> },
  { node: <D>{"};"}</D> },
];

const chips = [
  { label: "Next.js", cls: "-top-4 right-6", d: 0 },
  { label: "Node.js", cls: "top-1/2 -right-5 hidden sm:block", d: 0.6 },
  { label: "PostgreSQL", cls: "-bottom-4 left-6", d: 1.2 },
];

export default function CodeCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* brillo detrás */}
      <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-sky/30 via-iris/30 to-sun/30 blur-2xl" />

      {/* borde con degradado */}
      <div className="relative rounded-2xl bg-linear-to-br from-sky via-iris to-sun p-px">
        <div className="rounded-2xl bg-panel">
          {/* barra superior */}
          <div className="flex items-center gap-2 border-b border-fg/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-sun/80" />
            <span className="h-3 w-3 rounded-full bg-iris/80" />
            <span className="h-3 w-3 rounded-full bg-sky/80" />
            <span className="ml-3 font-mono text-xs text-fg/40">gaspar.ts</span>
          </div>

          {/* código */}
          <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 + i * 0.12 }}
                className={l.indent ? "pl-6" : ""}
              >
                {l.node}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block h-4 w-2 translate-y-0.5 bg-sky"
            />
          </div>
        </div>
      </div>

      {/* chips flotantes */}
      {chips.map((c) => (
        <motion.span
          key={c.label}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: c.d }}
          className={`absolute ${c.cls} rounded-full border border-fg/15 bg-panel/90 px-3 py-1.5 text-xs font-semibold text-fg shadow-lg backdrop-blur`}
        >
          {c.label}
        </motion.span>
      ))}
    </motion.div>
  );
}