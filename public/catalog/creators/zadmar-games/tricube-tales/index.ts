import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Tricube Tales",
    description:
      "A rules-light roleplaying system capable of handling a wide variety of genres and settings.",
    links: {
      itchIo:
        "https://itch.io/c/1589928/tricube-tales-one-page-rpgs-micro-settings",
      driveThru: "https://www.drivethrurpg.com/product/294202/Tricube-Tales",
    },
  };
}
