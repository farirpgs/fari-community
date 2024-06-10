import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Uhrwerk Verlag",
    links: {
      Website: "https://www.uhrwerk-verlag.de",
      twitter: "https://twitter.com/SilentPat",
    },
  };
}
