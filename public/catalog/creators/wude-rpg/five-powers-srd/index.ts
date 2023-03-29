import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Five Powers SRD",
    description:
      "The Five Powers SRD harnesses the full potential of the 5 Elements of East-Asian Philosophy so you can create evocative games!",
    links: {
      "itch.io": "https://wuderpg.itch.io/wude-the-five-powers",
    },
  };
}
