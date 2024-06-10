import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Quixotic SRD",
    description: "Extravagantly chivalrous",
    links: {
      "itch.io": "https://wuderpg.itch.io/quixotic",
    },
  };
}
