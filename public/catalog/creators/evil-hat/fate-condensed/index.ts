import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Condensed",
    description:
      "The latest version of the Fate System. Compact, stand-alone and streamlined for clarity and ease of reference.",
    links: {
      itchIo: "https://evilhat.itch.io/fate-condensed",
      driveThru: "https://www.drivethrurpg.com/product/302571/Fate-Condensed",
    },
  };
}
