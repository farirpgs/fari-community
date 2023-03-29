import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Quixotic SRD",
    description: "Extravagantly chivalrous",
    links: {
      "itch.io": "https://wuderpg.itch.io/quixotic",
    },
  };
}
