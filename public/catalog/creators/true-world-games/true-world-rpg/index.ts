import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "True World RPG",
    description:
      "A free and open universal tabletop role-playing game. Freeform, narrative and rules-light, and perfect for creating the characters you really want to play in any genre or setting.",
    links: {
      website: "https://rpg.trueworld.games",
      reddit: "https://www.reddit.com/r/TrueWorldRPG/",
    },
    license: "CC BY 4.0",
  };
}
