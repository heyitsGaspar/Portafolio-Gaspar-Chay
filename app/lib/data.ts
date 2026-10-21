import type { IconType } from "react-icons";

import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiAstro,
    SiNodedotjs, SiExpress, SiFastapi, SiSpringboot, SiPostgresql, SiPrisma,
    SiSupabase, SiMongodb, SiFirebase, SiFlutter, SiDocker, SiPython, SiOpenjdk,
    SiGit, SiVercel, SiPostman, SiFigma,
} from "react-icons/si";

export const profile = {
    name: "Gaspar Chay",
    role: "Full Stack Developer",
    bio: "Creo aplicaciones web escalables y de alto rendimiento. Me gusta colaborar en equipo, escribir código limpio y mantenible, y seguir mejorando cada día.",
    email: "israel.chay.32@gmail.com",
    github: "https://github.com/heyitsGaspar",
    linkedin: "https://www.linkedin.com/in/gaspar-israel-chay-colli-b84841270/",
    instagram: "https://www.instagram.com/gaspar_chayc",
    avatar: "https://avatars.githubusercontent.com/u/106715716?v=4",
    roles: ["Full Stack Developer", "React & Next.js", "Node.js & PostgreSQL", "Apps móviles con Flutter"],
};

export type Skill = { name: string; icon: IconType; color: string };

export const skillGroups: { title: string; items: Skill[] }[] = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Astro", icon: SiAstro, color: "#FF5D01" },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express", icon: SiExpress, color: "#FFFFFF" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Python", icon: SiPython, color: "#FFD43B" },
            { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
        ],
    },
    {
        title: "Datos",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Prisma", icon: SiPrisma, color: "#818CF8" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
    {
        title: "Móvil, DevOps y Tools",
        items: [
            { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
];

// ✏️ Ajusta las descripciones y agrega "demo" si tienes link en vivo
export const projects = [
    {
        title: "Landing Page Los Primos",
        desc: "Landing page moderna y responsive con TypeScript, pensada para un negocio real.",
        tags: ["TypeScript", "Next.js", "Tailwind"],
        repo: "https://github.com/heyitsGaspar/LandingPage_Los_Primos",
    },
    {
        title: "API Prisma + TypeScript",
        desc: "API REST tipada con Prisma ORM y PostgreSQL, con estructura limpia y escalable.",
        tags: ["TypeScript", "Prisma", "PostgreSQL"],
        repo: "https://github.com/heyitsGaspar/api-prisma-typescript",
    },
    {
        title: "Astro Landing The Cousins",
        desc: "Sitio ultrarrápido construido con Astro, casi sin JavaScript en el cliente.",
        tags: ["Astro", "Tailwind"],
        repo: "https://github.com/heyitsGaspar/astro-landing-theCousins",
    },
    {
        title: "Web PWA",
        desc: "Aplicación web progresiva instalable, con soporte offline.",
        tags: ["TypeScript", "PWA"],
        repo: "https://github.com/heyitsGaspar/web_pwa",
    },
    {
        title: "API Express The Cousins",
        desc: "Backend con Express y TypeScript: rutas, validaciones y autenticación.",
        tags: ["Express", "TypeScript", "JWT"],
        repo: "https://github.com/heyitsGaspar/api-express-typescript-the-cousins",
    },
    {
        title: "Pokémon App",
        desc: "App que consume una API pública con búsqueda, detalle y diseño responsive.",
        tags: ["TypeScript", "React", "API"],
        repo: "https://github.com/heyitsGaspar/pokemon_app",
    },
];

// ✏️ Experiencia profecional
export const experience = [
    {
        period: "01/2025 — 04/2025",
        role: "Web Developer",
        place: "InnovaForce",
        points: [
            "Componentes reutilizables en Next.js y TypeScript para mejorar la escalabilidad del frontend.",
            "Interfaces responsivas con Tailwind CSS y Shadcn/UI, cuidando la experiencia de usuario.",
            "Integración de APIs RESTful y manejo de estado con Zustand.",
            "Flujos de navegación accesibles siguiendo principios WCAG.",
            "Pruebas de endpoints con Postman; trabajo en equipo con Scrum y Git.",
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Git"],
    },
    {
        period: "05/2023 — 08/2023",
        role: "Flutter Developer",
        place: "Yabodev",
        points: [
            "App móvil completa en Flutter para la gestión operativa de negocios.",
            "Arquitectura offline-first con SQLite y sincronización en la nube con Firebase.",
            "Código mantenible aplicando Clean Code y SOLID.",
            "Optimización de rendimiento: menores tiempos de carga y consumo de recursos.",
        ],
        tech: ["Flutter", "Dart", "Firebase", "SQLite", "Android Studio", "Git"],
    },
];

export const education = [
    {
        period: "09/2023 — 08/2025",
        degree: "Ingeniería en Desarrollo y Gestión de Software",
        place: "Universidad Tecnológica Metropolitana",
    },
    {
        period: "09/2021 — 08/2023",
        degree: "TSU en Desarrollo de Software Multiplataforma",
        place: "Universidad Tecnológica Metropolitana",
    },
];

export const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B2 (Intermedio-Alto)" },
];