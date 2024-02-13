import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "The Murk",
    description:
      "A free and open licensed version of The Murk that contains all the rules, information and design guidelines for you to make your own game in The Murk.",
    license: "CC BY 4.0",
    links: {},
  };
}
