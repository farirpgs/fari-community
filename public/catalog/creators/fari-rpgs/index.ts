import { ICreatorData } from "public/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Fari RPGs",
    links: {
      Website: "https://www.farirpgs.com/",
      Itch: "https://fari-rpgs.itch.io/",
      Twitter: "https://twitter.com/rpdeshaies",
    },
    description:
      "Independent game design studio based in Québec, Canada that focuses on action packed, fiction-driven, and accessible gaming experiences.",
  };
}
