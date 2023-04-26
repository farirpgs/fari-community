import { ICreatorData } from "public/catalog/loader";

export function getData(): ICreatorData {
  return {
    name: "Bastionland Press",
    links: {
      Website: "https://www.bastionland.com",
      "Itch.": "https://chrismcdee.itch.io/",
    },
  };
}
