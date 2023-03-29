import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fari Community",
    description: "Get started in using the Fari Community website.",
    links: {
      GitHub: "https://github.com/fariapp/fari-community",
      Discord: "https://farirpgs.com/discord",
    },
  };
}
