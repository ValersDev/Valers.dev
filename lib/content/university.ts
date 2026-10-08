export const universityMeta = [
  {
    id: "tfg" as const,
    featured: true,
    year: "2024",
    grade: "8.7",
    href: "https://github.com/ValersDev/TFG_Snake_Victor",
    stack: ["Python", "Pygame", "PyTorch"],
  },
  {
    id: "weout" as const,
    featured: false,
    year: "2023",
    grade: "10",
    href: null,
    stack: ["Kotlin", "Jetpack Compose", "PHP", "MariaDB"],
  },
  {
    id: "traintracker" as const,
    featured: false,
    year: "2023",
    grade: "9.5",
    href: "https://github.com/ValersDev/TrainTracker",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Google APIs"],
  },
  {
    id: "replicube" as const,
    featured: false,
    year: "2023",
    grade: "7.2",
    href: "https://github.com/ValersDev/RepliCube",
    stack: ["Python", "Raspberry Pi", "Computer Vision"],
  },
  {
    id: "islegendary" as const,
    featured: false,
    year: "2023",
    grade: "7",
    href: "https://github.com/ValersDev/KagglePokemon",
    stack: ["Python", "Jupyter", "scikit-learn"],
  },
] as const;

export type UniversityProjectId = (typeof universityMeta)[number]["id"];
