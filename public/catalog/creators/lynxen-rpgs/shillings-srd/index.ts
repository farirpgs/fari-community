import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Shillings SRD",
    description: "Shillings SRD is an SRD where you pay to make other pay",
    links: {
      itchIo: "https://lynxen-rpgs.itch.io/shillings-srd",
    },
  };
}
