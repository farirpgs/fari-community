import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Don Bisdorf",
    links: {
      twitter: "https://twitter.com/dbisdorf",
      website: "https://www.donbisdorf.com/",
    },
  };
}
