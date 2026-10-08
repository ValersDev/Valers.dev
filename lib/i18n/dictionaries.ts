export type Lang = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      about: "Sobre mí",
      background: "Trayectoria",
      work: "Trabajo",
      projects: "Proyectos",
      university: "Universidad",
      contact: "Contacto",
    },
    hero: {
      name: "Víctor Valero",
      handle: "ValersDev",
      headline: "Ingeniero de Software",
      ctaContact: "Contactar",
      ctaWork: "Ver trabajo",
      stackCore: "Lenguajes y datos",
      stackInfra: "Infra",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Con 12 años ya tenía bastante claro que quería dedicarme a la informática. Empecé haciendo pequeñas cosas con Scratch y App Inventor, después llegaron algunos mods de Terraria y Minecraft, y con el tiempo acabé estudiando Ingeniería Informática en la UAB, especializado en ingeniería del software.",
        "Durante la carrera hice prácticas de backend y, poco después, empecé a trabajar donde sigo actualmente. Desde entonces me he ido centrando cada vez más en backend y en hacer sistemas que sean fáciles de entender, que manejen bien los datos y que simplemente funcionen cuando toca.",
        "Si buscas un perfil de backend o quieres hablar de un proyecto, escríbeme.",
      ],
    },
    background: {
      title: "Trayectoria",
      universityLink: "Ver detalle en Universidad",
      workLink: "Ver detalle en Trabajo",
      projectsLink: "Ver en Proyectos",
      entries: [
        {
          period: "2014 — 2017",
          title: "Primeros pasos",
          body: "En 2014 ya tenía claro que quería ser ingeniero informático. En 2016 y 2017 empecé con Scratch y App Inventor, algunas apps pequeñas.",
        },
        {
          period: "2019 — 2024",
          title: "UAB · Ingeniería Informática",
          body: "Especialización en ingeniería del software. Entre medias, un mod de Terraria (2020) y otro de Minecraft (2022).",
          highlights: [
            "WeOut (2023): red social de planes; frontend en Kotlin, equipo de 8",
            "RepliCube (2023): robot que copia patrones de un cubo de Rubik",
            "TrainTracker (2023): Android con Google Fit, AccuWeather, Firebase y Maps",
            "TFG (2024): IA con reinforcement learning que aprende a jugar a Snake",
          ],
          href: "#universidad",
          linkKey: "universityLink" as const,
        },
        {
          period: "feb. 2024 — jul. 2024",
          title: "Babel",
          body: "Prácticas como backend software engineer.",
          href: "#trabajo",
          linkKey: "workLink" as const,
        },
        {
          period: "oct. 2024 — presente",
          title: "ecoDeliver / dropick",
          body: "Software engineer con foco en backend. Misma empresa, dos marcas.",
          href: "#trabajo",
          linkKey: "workLink" as const,
        },
        {
          period: "2026",
          title: "LobbyCall",
          body: "Bot de Discord, proyecto personal en curso.",
          href: "#proyectos",
          linkKey: "projectsLink" as const,
        },
      ],
    },
    work: {
      title: "Trabajo",
      roles: [
        {
          period: "feb. 2024 — jul. 2024",
          company: "Babel",
          role: "Backend software engineer (prácticas)",
          summary:
            "Bootcamp de Java y Spring Boot — clean code, arquitectura y Scrum — y trabajo real en equipo.",
          highlights: [
            "Proyecto final: API en un equipo backend junto a un equipo frontend",
            "Proyectos internos de la empresa y proceso de entrevistas para proyectos externos",
          ],
        },
        {
          period: "oct. 2024 — presente",
          company: "ecoDeliver / dropick",
          role: "Software engineer",
          summary:
            "Misma empresa, dos marcas. Empecé con formación y análisis de datos, pasé por Flutter y finalmente estoy en backend, donde me centro ahora.",
          highlights: [
            "Arquitectura de Payments y generación de facturas: investigación legal, definición con owners y diseño",
            "Integración completa con Stripe",
            "Sistema con 4 APIs en Go; OpenBao y Gotenberg como microservicios complementarios",
            "Integración con Google Cloud (Geocoding y Places Autocomplete)",
            "Suelo ser quien ejecuta los deployments de backend",
            "Operación de datos y entornos: revisión, comportamiento, limpiezas y setups de sandbox / dev",
            "Herramienta interna de contratos entre front y back",
            "Datos de PUDOs potenciales y apoyo en un sistema de llamadas con IA",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      statusOngoing: "En curso",
      statusDone: "Finalizado",
      viewRepo: "Ver en GitHub",
      items: {
        lobbycall: {
          name: "LobbyCall",
          summary:
            "Bot de Discord para organizar partidas sin el caos del chat de grupo: abres un lobby, la gente vota el modo y se cierra el plan.",
          highlights: [
            "Slash commands (/planificar, /cerrar) y botones de voto en vivo",
            "Un lobby abierto por canal, tallies concurrentes con mutex",
            "Arquitectura handler → service → storage en Go",
            "Listo para Docker / Compose",
          ],
        },
        valersdev: {
          name: "valers.dev",
          summary:
            "Mi portfolio personal en español e inglés: quién soy, mi trayectoria y en qué trabajo.",
          highlights: [
            "Next.js + TypeScript + Tailwind",
            "Contenido bilingüe ES / EN",
            "Diseño e implementación propios",
          ],
        },
      },
    },
    university: {
      title: "Universidad",
      intro: "Mención breve a proyectos universitarios.",
      placeholder: "Listado próximamente.",
    },
    contact: {
      title: "Contacto",
      intro:
        "Si eres reclutador o quieres colaborar, escríbeme por el canal que te venga mejor.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  en: {
    nav: {
      about: "About",
      background: "Background",
      work: "Work",
      projects: "Projects",
      university: "University",
      contact: "Contact",
    },
    hero: {
      name: "Víctor Valero",
      handle: "ValersDev",
      headline: "Software Engineer",
      ctaContact: "Contact",
      ctaWork: "See work",
      stackCore: "Languages & data",
      stackInfra: "Infra",
    },
    about: {
      title: "About",
      paragraphs: [
        "By 12 I already knew I wanted to work in computing. I started with small Scratch and App Inventor projects, then some Terraria and Minecraft mods, and eventually studied Computer Engineering at UAB, specializing in software engineering.",
        "During university I did a backend internship and, soon after, started at the company where I still work. Since then I've focused more and more on backend — building systems that are easy to understand, handle data well, and simply work when they need to.",
        "If you're looking for a backend engineer or want to talk about a project, get in touch.",
      ],
    },
    background: {
      title: "Background",
      universityLink: "See detail in University",
      workLink: "See detail in Work",
      projectsLink: "See in Projects",
      entries: [
        {
          period: "2014 — 2017",
          title: "First steps",
          body: "By 2014 I already knew I wanted to be a computer engineer. In 2016 and 2017 I started with Scratch and App Inventor, some small apps.",
        },
        {
          period: "2019 — 2024",
          title: "UAB · Computer Engineering",
          body: "Specialized in software engineering. Along the way, a Terraria mod (2020) and a Minecraft mod (2022).",
          highlights: [
            "WeOut (2023): social app for plans; Kotlin frontend, team of 8",
            "RepliCube (2023): robot that copies Rubik's Cube patterns",
            "TrainTracker (2023): Android with Google Fit, AccuWeather, Firebase and Maps",
            "Final thesis (2024): RL agent that learns to play Snake",
          ],
          href: "#universidad",
          linkKey: "universityLink" as const,
        },
        {
          period: "Feb 2024 — Jul 2024",
          title: "Babel",
          body: "Backend software engineer internship.",
          href: "#trabajo",
          linkKey: "workLink" as const,
        },
        {
          period: "Oct 2024 — present",
          title: "ecoDeliver / dropick",
          body: "Software engineer focused on backend. Same company, two brands.",
          href: "#trabajo",
          linkKey: "workLink" as const,
        },
        {
          period: "2026",
          title: "LobbyCall",
          body: "Discord bot, personal project in progress.",
          href: "#proyectos",
          linkKey: "projectsLink" as const,
        },
      ],
    },
    work: {
      title: "Work",
      roles: [
        {
          period: "Feb 2024 — Jul 2024",
          company: "Babel",
          role: "Backend software engineer (internship)",
          summary:
            "Java and Spring Boot bootcamp — clean code, architecture, and Scrum — plus real team delivery.",
          highlights: [
            "Final project: API on a backend team paired with a frontend team",
            "Internal company projects and interview process for external placements",
          ],
        },
        {
          period: "Oct 2024 — present",
          company: "ecoDeliver / dropick",
          role: "Software engineer",
          summary:
            "Same company, two brands. I started with training and data analysis, moved through Flutter, and finally I've been on backend where I focus now.",
          highlights: [
            "Payments architecture and invoice generation: legal research, alignment with owners, and design",
            "Full Stripe integration",
            "System of 4 Go APIs; OpenBao and Gotenberg as complementary microservices",
            "Google Cloud integration (Geocoding and Places Autocomplete)",
            "Usually the one who runs backend deployments",
            "Data and environments: review, behavior checks, cleanups, and sandbox / dev setups",
            "Internal contracts tool between front and back",
            "Potential PUDO data and support for an AI calling system",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      statusOngoing: "In progress",
      statusDone: "Finished",
      viewRepo: "View on GitHub",
      items: {
        lobbycall: {
          name: "LobbyCall",
          summary:
            "A Discord lobby bot for scheduling game nights without group-chat chaos: open a lobby, vote the mode, lock the plan.",
          highlights: [
            "Slash commands (/planificar, /cerrar) and live vote buttons",
            "One open lobby per channel, mutex-safe concurrent tallies",
            "Handler → service → storage layout in Go",
            "Docker / Compose ready",
          ],
        },
        valersdev: {
          name: "valers.dev",
          summary:
            "My personal portfolio in Spanish and English: who I am, my path, and what I work on.",
          highlights: [
            "Next.js + TypeScript + Tailwind",
            "Bilingual ES / EN content",
            "Design and build by me",
          ],
        },
      },
    },
    university: {
      title: "University",
      intro: "A light mention of university projects.",
      placeholder: "List coming soon.",
    },
    contact: {
      title: "Contact",
      intro:
        "If you're hiring or want to collaborate, reach out on whichever channel works for you.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Lang];
