import { type ICreatorData } from "src/catalog/loader";

export default function getData(): ICreatorData {
  return {
    name: "One Seven Design",
    links: {
      Website: "http://www.onesevendesign.com/",
      "Itch.io": "https://johnharper.itch.io/",
    },
  };
}
