import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Tragos Games",
    description:
      "Tragos Games is the personal stamp of Ricardo Peraça Cavassane, a Brazilian tabletop RPG designer.",
    links: {
      Twitter: "https://twitter.com/ricardo_peraca",
      "Itch.io": "https://tragos-games.itch.io/",
    },
  };
}
