import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Uhrwerk Verlag",
    links: {
      Website: "https://www.uhrwerk-verlag.de",
      twitter: "https://twitter.com/SilentPat",
    },
  };
}
