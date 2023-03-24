import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Charge",
    description:
      "A generic and fiction first RPG system to power your action packed adventures.",
    links: {
      itchIo: "https://fari-rpgs.itch.io/charge-rpg",
    },
  };
}
