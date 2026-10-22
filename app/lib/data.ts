import type { IconType } from "react-icons";
export type L10n = { es: string; en: string };

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

export const skillGroups: { title: L10n; items: Skill[] }[] = [
    {
        title: { es: "Frontend", en: "Frontend" },
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "var(--fg)" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Astro", icon: SiAstro, color: "#FF5D01" },
        ],
    },
    {
        title: { es: "Backend", en: "Backend" },
        items: [
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Express", icon: SiExpress, color: "var(--fg)" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
            { name: "Python", icon: SiPython, color: "#FFD43B" },
            { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
        ],
    },
    {
        title: { es: "Datos", en: "Data" },
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Prisma", icon: SiPrisma, color: "#818CF8" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
    {
        title: { es: "Herramientas", en: "Tools" },
        items: [
            { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Vercel", icon: SiVercel, color: "var(--fg)" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        ],
    },
];

//
export const projects = [
        {
        title: "Teacher Tracker — Frontend",
        desc: {
            es: "Interfaz web para docentes: alumnos, materias y actividades, con una tabla de entregas que se actualiza al escanear el QR de cada alumno y reportes en Excel/PDF por materia.",
            en: "Web interface for teachers: students, subjects and activities, with a submissions grid that updates when each student's QR code is scanned, plus Excel/PDF reports per subject.",
        },
        tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI", "Axios"],
        repo: "https://github.com/heyitsGaspar/FrontEnd_Teacher_Activities",
    },
    {
        title: "Teacher Tracker — API",
        desc: {
            es: "API REST con Spring Boot, JWT en cookies HttpOnly y PostgreSQL. Aislamiento de datos por docente, refresh tokens con rotación, límite de intentos de login y pruebas con JUnit y Mockito.",
            en: "REST API with Spring Boot, JWT in HttpOnly cookies and PostgreSQL. Per-teacher data isolation, rotating refresh tokens, login rate limiting and tests with JUnit and Mockito.",
        },
        tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JUnit", "Docker", "Spring JPA"],
        repo: "https://github.com/heyitsGaspar/Backend_Teacher_Activities",
    },
    {
        title: "Landing Page Los Primos",
        desc: {
            es: "Landing page moderna y responsive con TypeScript, pensada para un negocio real.",
            en: "Modern, responsive landing page built with TypeScript, designed for a real business.",
        },
        tags: ["TypeScript", "Next.js", "Tailwind"],
        repo: "https://github.com/heyitsGaspar/LandingPage_Los_Primos",
    },
    {
        title: "API Prisma + TypeScript",
        desc: {
            es: "API REST tipada con Prisma ORM y PostgreSQL, con estructura limpia y escalable.",
            en: "Typed REST API with Prisma ORM and PostgreSQL, with a clean and scalable structure.",
        },
        tags: ["TypeScript", "Prisma", "PostgreSQL"],
        repo: "https://github.com/heyitsGaspar/api-prisma-typescript",
    },
    {
        title: "Pokémon App",
        desc: {
            es: "App que consume una API pública con búsqueda, detalle y diseño responsive.",
            en: "App that consumes a public API with search, detail view and responsive design.",
        },
        tags: ["TypeScript", "React", "API"],
        repo: "https://github.com/heyitsGaspar/pokemon_app",
    },
    {
        title: "Web PWA",
        desc: {
            es: "Aplicación web progresiva instalable, con soporte offline.",
            en: "Installable progressive web app with offline support.",
        },
        tags: ["TypeScript", "PWA"],
        repo: "https://github.com/heyitsGaspar/web_pwa",
    },
];

export const experience = [
    {
        period: "01/2025 — 04/2025",
        role: { es: "Web Developer", en: "Web Developer" },
        place: "InnovaForce",
        points: {
            es: [
                "Componentes reutilizables en Next.js y TypeScript para mejorar la escalabilidad del frontend.",
                "Interfaces responsivas con Tailwind CSS y Shadcn/UI, cuidando la experiencia de usuario.",
                "Integración de APIs RESTful y manejo de estado con Zustand.",
                "Flujos de navegación accesibles siguiendo principios WCAG.",
                "Pruebas de endpoints con Postman; trabajo en equipo con Scrum y Git.",
            ],
            en: [
                "Reusable components in Next.js and TypeScript to improve frontend scalability.",
                "Responsive interfaces with Tailwind CSS and Shadcn/UI, focused on user experience.",
                "RESTful API integration and state management with Zustand.",
                "Accessible navigation flows following WCAG principles.",
                "Endpoint testing with Postman; teamwork using Scrum and Git.",
            ],
        },
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Git"],
    },
    {
        period: "05/2023 — 08/2023",
        role: { es: "Flutter Developer", en: "Flutter Developer" },
        place: "Yabodev",
        points: {
            es: [
                "App móvil completa en Flutter para la gestión operativa de negocios.",
                "Arquitectura offline-first con SQLite y sincronización en la nube con Firebase.",
                "Código mantenible aplicando Clean Code y SOLID.",
                "Optimización de rendimiento: menores tiempos de carga y consumo de recursos.",
            ],
            en: [
                "Complete mobile app in Flutter for day-to-day business management.",
                "Offline-first architecture with SQLite and cloud sync through Firebase.",
                "Maintainable code applying Clean Code and SOLID principles.",
                "Performance optimization: shorter load times and lower resource usage.",
            ],
        },
        tech: ["Flutter", "Dart", "Firebase", "SQLite", "Android Studio", "Git"],
    },
];

export const education = [
    {
        period: "09/2023 — 08/2025",
        degree: {
            es: "Ingeniería en Desarrollo y Gestión de Software",
            en: "Bachelor's in Software Development and Management",
        },
        place: "Universidad Tecnológica Metropolitana",
    },
    {
        period: "09/2021 — 08/2023",
        degree: {
            es: "TSU en Desarrollo de Software Multiplataforma",
            en: "Associate Degree (TSU) in Multiplatform Software Development",
        },
        place: "Universidad Tecnológica Metropolitana",
    },
];

export const languages = [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "B2 (Intermedio-Alto)", en: "B2 (Upper-Intermediate)" } },
];