import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Tricube Tales",
    description:
      "A rules-light roleplaying system capable of handling a wide variety of genres and settings.",
    license: "CC BY 4.0",
    links: {
      itchIo:
        "https://itch.io/c/1589928/tricube-tales-one-page-rpgs-micro-settings",
      driveThru: "https://www.drivethrurpg.com/product/294202/Tricube-Tales",
    },
    headingFont: "Crimson Text",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap');
    `,
  };
}
