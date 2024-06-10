import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Pandion Games",
    description:
      "Pandion Games aims to provide players with unique roleplaying experiences that move beyond combat and focus on narrative friction, character development, interpersonal relationships, and creative storytelling.",
    links: {
      Twitter: "https://twitter.com/PandionGames",
      Website: "https://www.pandiongames.com/",
      Itchio: "https://pandiongames.itch.io/",
    },
  };
}
