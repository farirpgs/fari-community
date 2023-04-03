import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Goblin Archives",
    description: "Writer/designer of LIMINAL HORROR",
    links: {
      Newsletter: "https://goblinarchives.substack.com/",
    },
  };
}
