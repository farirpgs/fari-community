import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Shillings SRD",
    description: "Shillings SRD is an SRD where you pay to make other pay",
    links: {
      "itch.io": "https://lynxen-rpgs.itch.io/shillings-srd",
    },
  };
}
