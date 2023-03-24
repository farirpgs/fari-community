import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Blades in the Dark",
    description:
      "Blades in the Dark is a tabletop role-playing game about a crew of daring scoundrels seeking their fortunes on the haunted streets of an industrial-fantasy city",
    links: {
      website: "https://www.bladesinthedark.com/",
      itch: "https://johnharper.itch.io/blades-in-the-dark",
    },
  };
}
