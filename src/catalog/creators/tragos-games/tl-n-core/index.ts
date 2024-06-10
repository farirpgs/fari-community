import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "TL-N Core",
    description:
      "TL-N Core is a gm-less roleplaying SRD, based on the rules of the Brazilian TTRPG Tractatus Ludico-Narrativus.",
    links: {
      "Itch.io": "https://tragos-games.itch.io/tln-core",
    },
    license: "CC BY 4.0",
  };
}
