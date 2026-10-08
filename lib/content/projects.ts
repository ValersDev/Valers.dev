export type ProjectStatus = "ongoing" | "done";

export const statusColors = {
  ongoing: "#e0c36a",
  done: "#6fbf8a",
} as const;

export const projectsMeta = [
  {
    id: "lobbycall" as const,
    status: "ongoing" as const,
    href: "https://github.com/ValersDev/LobbyCall",
    stack: ["Go", "discordgo", "Docker"],
  },
  {
    id: "valersdev" as const,
    status: "done" as const,
    href: "https://github.com/ValersDev/Valers.dev",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
] as const;

export type ProjectId = (typeof projectsMeta)[number]["id"];
