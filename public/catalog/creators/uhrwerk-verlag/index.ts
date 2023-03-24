import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Uhrwerk Verlag",
    links: {
      website: "https://www.uhrwerk-verlag.de",
      twitter: "https://twitter.com/SilentPat",
    },
  };
}
