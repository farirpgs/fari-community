import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Storyteller Creator's Guide",
    description:
      "Create supplements, content, hacks and games from Storyteller: The Campfire Narrative Game",

    license: "CC BY 4.0",
    links: {
      "itch.io": "https://pandiongames.itch.io/storyteller-creators-guide",
    },
  };
}
