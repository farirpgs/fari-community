import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "COSMIC Free TTRPG Mechanics",
    description:
      "a set of mechanics for playing or creating a role-playing game. COSMIC stands for cooperative, open, short, modular, independent, and  collaborative. It is free and open to everyone under the Anti-Capitalist Attribution Cooperative License. You may use this to create a new game or salvage mechanics and ideas from this. What you can't do is create racist, bigoted, transphobic content based on anything you find here.",
    links: {
      "Itch.io": "https://thegiftofdice.itch.io/cosmic-free-ttrpg-mechanics",
    },
    license: "Anti-Capitalist Attribution Cooperative License",
  };
}
