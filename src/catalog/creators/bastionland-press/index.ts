import { type ICreatorData } from "src/catalog/loader";

export function getData(): ICreatorData {
  return {
    name: "Bastionland Press",
    description: "Tabletop roleplaying games light on rules, heavy on flavour.",
    links: {
      Website: "https://www.bastionland.com",
      "Itch.": "https://chrismcdee.itch.io/",
    },
  };
}
