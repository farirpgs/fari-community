import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "VEN6 Storytelling System SRD",
    description:
      "Create narrative storytelling roleplaying games with conflict mechanics and a GM option.",
    links: {
      "itch.io": "https://jwalberg.itch.io/ven6-srd",
    },
  };
}
