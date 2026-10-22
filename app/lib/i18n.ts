const es = {
    nav: ["Sobre mí", "Tecnologías", "Proyectos", "Experiencia", "Contacto"],
    available: "Disponible para trabajar",
    hello: "Hola, soy",
    roles: ["Full Stack Developer", "React & Next.js", "Node.js & PostgreSQL", "Apps móviles con Flutter"],
    bio: "Desarrollador full-stack Jr. con experiencia en React, Next.js, TypeScript y Node.js/Express, además de backend en Java con Spring Boot. He construido y desplegado aplicaciones web completas con autenticación JWT, APIs RES y PostgreSQL. Trabajo con Git y metodologías ágiles (Scrum), y me gusta escribir código limpio, probado y fácil de mantener.",
    projectsBtn: "Ver proyectos",
    cv: "Descargar CV",
    about: {
        kicker: "Sobre mí",
        title: "Construyo de punta a punta",
        bio: [
            "Soy desarrollador full-stack Jr. de Yucatán. Me gusta construir productos completos, desde la base de datos hasta la pantalla que usa la persona.",
            "Mi proyecto más reciente, Teacher Tracker, ayuda a docentes a registrar entregas escaneando el QR de cada alumno.",
        ],
        facts: {
            location: "Yucatán, México",
            education: "Ing. en Desarrollo y Gestión de Software",
            english: "Inglés B2",
        },
        stats: {
            projects: "Proyectos en GitHub",
            experience: "Experiencias profesionales",
            backends: "Backends: Node.js y Java",
        },
        items: [
            {
                title: "Frontend con criterio",
                text: "Interfaces responsivas y accesibles. Cuido los estados de carga, los errores y cómo se ve en el celular.",
                tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
            },
            {
                title: "Backend seguro",
                text: "APIs con sesiones en cookies HttpOnly, refresh tokens con rotación y datos aislados por usuario.",
                tags: ["Spring Boot", "JWT", "PostgreSQL", "Node.js"],
            },
            {
                title: "Calidad y despliegue",
                text: "Pruebas de servicios, control de versiones y ahora llevando mis proyectos a Docker y CI/CD.",
                tags: ["JUnit", "Mockito", "Git", "Docker"],
            },
        ],
    },
    skills: { kicker: "Tecnologías", title: "Lo que uso", all: "Ver todo" },
    projects: { kicker: "Proyectos", title: "Lo que he construido", all: "Ver todos los repositorios" },
    exp: { kicker: "Experiencia", title: "Mi trayectoria", eduKicker: "Formación", eduTitle: "Mi educación" },
    contact: { kicker: "Contacto", a: "¿Trabajamos", b: "juntos?", text: "Estoy abierto a nuevas oportunidades y proyectos. Escríbeme y platicamos." },
    footer: "Hecho con Next.js", top: "Volver arriba",
};

const en: typeof es = {
    nav: ["About", "Tech", "Projects", "Experience", "Contact"],
    available: "Available for work",
    hello: "Hi, I'm",
    roles: ["Full Stack Developer", "React & Next.js", "Node.js & PostgreSQL", "Mobile apps with Flutter"],
    bio: "Junior full-stack developer with experience in React, Next.js, TypeScript and Node.js/Express, plus backend work in Java with Spring Boot. I've built and deployed complete web applications with JWT authentication, REST APIs and PostgreSQL. I work with Git and agile methodologies (Scrum), and I enjoy writing clean, tested and maintainable code. I'm looking to join a collaborative team where I can contribute, learn and keep growing professionally.",
    projectsBtn: "View projects",
    cv: "Download CV",
    about: {
        kicker: "About me",
        title: "I build end to end",
        bio: [
            "I'm a junior full-stack developer from Yucatán. I like building complete products, from the database to the screen people actually use.",
            "My latest project, Teacher Tracker, helps teachers record submissions by scanning each student's QR code.",
        ],
        facts: {
            location: "Yucatán, Mexico",
            education: "B.Eng. in Software Development & Management",
            english: "English B2",
        },
        stats: {
            projects: "Projects on GitHub",
            experience: "Work experiences",
            backends: "Backends: Node.js & Java",
        },
        items: [
            {
                title: "Frontend with care",
                text: "Responsive, accessible interfaces. I pay attention to loading states, errors and how it looks on mobile.",
                tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
            },
            {
                title: "Secure backend",
                text: "APIs with HttpOnly cookie sessions, rotating refresh tokens and per-user data isolation.",
                tags: ["Spring Boot", "JWT", "PostgreSQL", "Node.js"],
            },
            {
                title: "Quality & delivery",
                text: "Service tests, version control, and now taking my projects to Docker and CI/CD.",
                tags: ["JUnit", "Mockito", "Git", "Docker"],
            },
        ],
    },
    skills: { kicker: "Tech", title: "What I build with", all: "All", },
    projects: { kicker: "Projects", title: "What I've built", all: "See all repositories" },
    exp: { kicker: "Experience", title: "My journey", eduKicker: "Education", eduTitle: "My education" },
    contact: { kicker: "Contact", a: "Let's work", b: "together?", text: "I'm open to new opportunities and projects. Drop me a line and let's talk." },
    footer: "Built with Next.js", top: "Back to top",
};

export const dict = { es, en };
export type Lang = keyof typeof dict;