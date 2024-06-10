import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Yochai Gal",
    links: {
      twitter: "https://twitter.com/yochaigal1",
      website: "https://farirpgs.com",
    },
    description: "Games designer and podcaster based in Western Massachusetts",
  };
}
