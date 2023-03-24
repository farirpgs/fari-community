import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Lumen",
    description: "RPG system for action packed, power fantasy games.",
    links: {
      itchIo: "https://gilarpgs.itch.io/lumen",
    },
  };
}
