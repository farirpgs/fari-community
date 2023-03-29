import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Four Points SRD",
    description:
      "Build an RPG focused on player agency, characters, narrative and customisation, where you decide when to succeed and when to test your luck.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://penflower-ink.itch.io/four-points-rpg-system-srd",
    },
  };
}
