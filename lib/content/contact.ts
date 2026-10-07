export const contactLinks = {
  email: {
    href: "mailto:hello@valers.dev",
    labelKey: "email" as const,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/placeholder",
    labelKey: "linkedin" as const,
  },
  github: {
    href: "https://github.com/placeholder",
    labelKey: "github" as const,
  },
  whatsapp: {
    href: "https://wa.me/34000000000",
    labelKey: "whatsapp" as const,
  },
} as const;

export type ContactKey = keyof typeof contactLinks;
