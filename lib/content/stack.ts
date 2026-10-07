export const stackGroups = [
  {
    id: "core" as const,
    items: ["Go", "Python", "PostgreSQL", "TypeScript", "Java"],
  },
  {
    id: "infra" as const,
    items: ["Docker", "Google Cloud", "Cloudflare"],
  },
] as const;

export type StackGroupId = (typeof stackGroups)[number]["id"];
