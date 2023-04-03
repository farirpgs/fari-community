import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Nicolas 'Gulix' Ronvel",
    links: {
      Twitter: "https://twitter.com/gulix",
      Website: "https://www.gulix.fr",
      Itch: "https://gulix.itch.io/",
      Mastodon: "https://dice.camp/@gulix"
    },
    description:
      "French author and translator, blog in french and like games with no-prep, and even gm-less.",
  };
}
