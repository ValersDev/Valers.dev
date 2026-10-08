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
      body: "Formación y recorrido profesional en construcción. Aquí irá el contexto: estudios, cómo llegué al desarrollo y qué me ha ido formando como ingeniero de backend.",
    },
    work: {
      title: "Trabajo",
      body: "Actualmente soy software engineer en ecoDeliver / dropick: misma empresa, dos marcas. En LinkedIn mantenemos ambas. Mi día a día está en el backend — servicios, integraciones y la lógica que hace funcionar el producto.",
    },
    projects: {
      title: "Proyectos",
      intro: "Proyectos personales en los que estoy trabajando o que quiero mostrar.",
      placeholder: "Contenido próximamente.",
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
      body: "Education and path — placeholder for now. Studies, how I got into development, and what shaped me as a backend engineer will go here.",
    },
    work: {
      title: "Work",
      body: "I'm currently a software engineer at ecoDeliver / dropick — same company, two brands. On LinkedIn we keep both. Day to day I'm on the backend: services, integrations, and the logic that runs the product.",
    },
    projects: {
      title: "Projects",
      intro: "Personal projects I'm working on or want to show.",
      placeholder: "Coming soon.",
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
