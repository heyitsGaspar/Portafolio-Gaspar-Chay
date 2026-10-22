const es = {
    nav: ["Sobre mí", "Tecnologías", "Proyectos", "Experiencia", "Contacto"],
    available: "Disponible para trabajar",
    hello: "Hola, soy",
    roles: ["Full Stack Developer", "React & Next.js", "Node.js & PostgreSQL", "Apps móviles con Flutter"],
    bio: "Desarrollador full-stack Jr. con experiencia en React, Next.js, TypeScript y Node.js/Express, además de backend en Java con Spring Boot. He construido y desplegado aplicaciones web completas con autenticación JWT, APIs RES y PostgreSQL. Trabajo con Git y metodologías ágiles (Scrum), y me gusta escribir código limpio, probado y fácil de mantener. Busco incorporarme a un equipo colaborativo donde aportar, aprender y seguir creciendo profesionalmente.",
    projectsBtn: "Ver proyectos",
    cv: "Descargar CV",
    about: {
        kicker: "Sobre mí", title: "Construyo de punta a punta",
        items: [
            { title: "Código limpio", text: "Mantenible, tipado y fácil de escalar." },
            { title: "Alto rendimiento", text: "Sitios veloces y optimizados." },
            { title: "Siempre aprendiendo", text: "Cloud, microservicios, DevOps y arquitectura." },
        ],
    },
    skills: { kicker: "Tecnologías", title: "Mi caja de herramientas" },
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
        kicker: "About", title: "I build end to end",
        items: [
            { title: "Clean code", text: "Maintainable, typed and easy to scale." },
            { title: "High performance", text: "Fast, optimized websites." },
            { title: "Always learning", text: "Cloud, microservices, DevOps and architecture." },
        ],
    },
    skills: { kicker: "Tech", title: "My toolbox" },
    projects: { kicker: "Projects", title: "What I've built", all: "See all repositories" },
    exp: { kicker: "Experience", title: "My journey", eduKicker: "Education", eduTitle: "My education" },
    contact: { kicker: "Contact", a: "Let's work", b: "together?", text: "I'm open to new opportunities and projects. Drop me a line and let's talk." },
    footer: "Built with Next.js", top: "Back to top",
};

export const dict = { es, en };
export type Lang = keyof typeof dict;