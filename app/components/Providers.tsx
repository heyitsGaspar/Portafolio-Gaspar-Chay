"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "@/app/lib/i18n";

type Theme = "dark" | "light";
type Ctx = { theme: Theme; toggleTheme: () => void; lang: Lang; toggleLang: () => void; t: (typeof dict)["es"] };
const AppCtx = createContext<Ctx>(null!);
export const useApp = () => useContext(AppCtx);

export default function Providers({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const th = localStorage.getItem("theme") as Theme | null;
        const l = localStorage.getItem("lang") as Lang | null;
        /* eslint-disable react-hooks/set-state-in-effect */
        if (th) setTheme(th);
        if (l) setLang(l);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.lang = lang;
        localStorage.setItem("theme", theme);
        localStorage.setItem("lang", lang);
    }, [theme, lang]);

    return (
        <AppCtx.Provider
            value={{
                theme, lang, t: dict[lang],
                toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
                toggleLang: () => setLang((p) => (p === "es" ? "en" : "es")),
            }}
        >
            {children}
        </AppCtx.Provider>
    );
}