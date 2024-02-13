import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Malin Freeborn",
    links: {
      Website: "https://ttrpgs.com",
      Itch: "https://bindrpg.itch.io/",
      Mastodon: "https://dice.camp/@malin",
      Git: "https://gitlab.com/bindrpg/",
    },
    description: "Open source proponent. If you love something, set it free.",
  };
}
