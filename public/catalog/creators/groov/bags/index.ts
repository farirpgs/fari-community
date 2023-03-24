import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "BAGS",
    description:
      "A featherweight tag-based system built for kids and newcomers to run story games, easily modifiable to add depth.",
    links: {
      itchIo: "https://groovasaur.itch.io/bags",
    },
  };
}
