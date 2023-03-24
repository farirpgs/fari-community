import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Breathless",
    description: "An SRD for creating Breathless games",
    links: {
      itchIo: "https://fari-rpgs.itch.io/breathless-srd",
    },
  };
}
