import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "BAGS",
    description:
      "A featherweight tag-based system built for kids and newcomers to run story games, easily modifiable to add depth.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://groovasaur.itch.io/bags",
    },
  };
}
