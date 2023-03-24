import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Guided by the Sun",
    description:
      "A GM-less, card-based system, where players tell the story of a protagonist undertaking a journey and making friends along the way.",
    links: {
      itchIo: "https://aryl-ether.itch.io/guided-by-the-sun",
    },
  };
}
