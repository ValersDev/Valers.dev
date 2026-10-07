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
      brand: "ValersDev",
      headline: "Ingeniero de software enfocado en backend",
      support:
        "Desde Les Franqueses del Vallès. Construyo sistemas sólidos y mantengo las cosas simples.",
      ctaContact: "Contactar",
      ctaWork: "Ver trabajo",
    },
    about: {
      title: "Sobre mí",
      body: "Soy ValersDev, ingeniero de software con foco en backend. Me interesa diseñar APIs claras, datos fiables y servicios que aguanten el día a día en producción. Este sitio es mi tarjeta de presentación: quién soy, dónde trabajo y en qué estoy.",
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
      brand: "ValersDev",
      headline: "Software engineer focused on backend",
      support:
        "Based in Les Franqueses del Vallès. I build solid systems and keep things simple.",
      ctaContact: "Contact",
      ctaWork: "See work",
    },
    about: {
      title: "About",
      body: "I'm ValersDev, a software engineer focused on backend. I care about clear APIs, reliable data, and services that hold up in production. This site is my calling card: who I am, where I work, and what I'm building.",
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
