export const contactLinks = [
  {
    id: "email" as const,
    href: "mailto:victorvalerocarrasco@gmail.com",
    handle: "victorvalerocarrasco@gmail.com",
    external: false,
  },
  {
    id: "linkedin" as const,
    href: "https://www.linkedin.com/in/victorvalerocarrasco",
    handle: "victorvalerocarrasco",
    external: true,
  },
  {
    id: "github" as const,
    href: "https://github.com/ValersDev",
    handle: "ValersDev",
    external: true,
  },
  {
    id: "whatsapp" as const,
    href: "https://wa.me/34639387089",
    handle: "+34 639 387 089",
    external: true,
  },
  {
    id: "tiktok" as const,
    href: "https://www.tiktok.com/@valersdev",
    handle: "@valersdev",
    external: true,
  },
  {
    id: "instagram" as const,
    href: "https://www.instagram.com/valers.dev",
    handle: "valers.dev",
    external: true,
  },
] as const;

export type ContactId = (typeof contactLinks)[number]["id"];
