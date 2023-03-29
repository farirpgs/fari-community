import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Personae SRD",
    description:
      "Build any kind of characters you can imagine, and allow for meaningful choices to impact the unfolding of thrilling adventures.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://craighatler.itch.io/personae-rpg",
    },
  };
}
