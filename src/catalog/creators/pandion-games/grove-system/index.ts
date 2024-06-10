import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "The Grove System",
    description:
      "From cyberpunk dystopia to farming sims, and from space exploration, to coffee shop socials, the Grove System is a robust token system",

    license: "CC BY 4.0",
    links: {
      "itch.io": "https://pandiongames.itch.io/grovesystem",
    },
  };
}
