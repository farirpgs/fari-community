import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fight Card System",
    description:
      "A system/design guide for resolving fights via a two player trick taking game.",

    links: {
      itchIo: "https://ratwavegamehouse.itch.io/the-fight-card-system",
    },
  };
}
