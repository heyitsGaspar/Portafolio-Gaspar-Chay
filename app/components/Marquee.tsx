import { skillGroups } from "@/app/lib/data";

const all = skillGroups.flatMap((g) => g.items);

export default function Marquee() {
    return (
        <div className="overflow-hidden border-y border-fg/10 py-5 mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max animate-[marq_35s_linear_infinite]">
                {[...all, ...all].map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <span key={i} className="flex items-center gap-2 pr-12 font-display text-fg/40">
                            <Icon /> {s.name}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}