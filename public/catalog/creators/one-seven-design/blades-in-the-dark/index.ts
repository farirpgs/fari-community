import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Blades in the Dark",
    description:
      "Use the great Blades in the Dark SRD by John Harper to make your own Forged in the Dark game",
    links: {
      website: "https://www.bladesinthedark.com/",
      itch: "https://johnharper.itch.io/blades-in-the-dark",
    },
  };
}
