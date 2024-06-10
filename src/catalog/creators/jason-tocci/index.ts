import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "Jason Tocci",
    links: {
      twitter: "https://twitter.com/pretendogames",
    },
    description:
      "Independent game design studio based in Québec, Canada that focuses on action packed, fiction-driven, and accessible gaming experiences.",
  };
}
