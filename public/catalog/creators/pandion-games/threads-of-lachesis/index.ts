import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Threads of Lachesis",
    description:
      "A guide to create solo games or generators with branched random prompts that the player organizes into a cohesive sequence via a single roll.",

    license: "CC BY 4.0",
    links: {
      "itch.io": "https://pandiongames.itch.io/threadsoflachesis",
    },
  };
}
