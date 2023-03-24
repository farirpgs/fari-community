import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Bad Time SRD",
    description:
      "Give characters a laughably bad time with the Bad Time Game SRD!",
    links: {
      itchIo: "https://urania-games.itch.io/bad-time-game-srd",
    },
  };
}
