import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "LIMINAL HORROR",
    description:
      "A modern horror ttrpg that focuses on how characters change through danger, exposure to the weird, stress & fallout. Some may survive, all will be changed.",
    license: "CC BY SA 4.0",
    links: {
      Website: "https://goblinarchives.github.io/LiminalHorror/",
    },
  };
}
