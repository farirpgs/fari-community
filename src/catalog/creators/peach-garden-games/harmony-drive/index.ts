import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Harmony Drive",
    description:
      "Build a campaign-style adventure TTRPG, one that lets players express themselves, work together, and make difficult choices, this is the system for you!",
    license: "CC BY 3.0",
    links: {
      "itch.io": "https://peachgardengames.itch.io/harmony-drive",
    },
    headingFont: "Architects Daughter",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
    `,
  };
}
