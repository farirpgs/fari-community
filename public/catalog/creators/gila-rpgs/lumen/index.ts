import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Lumen",
    description: "RPG system for action packed, power fantasy games.",
    links: {
      "itch.io": "https://gilarpgs.itch.io/lumen",
    },
    headingFont: "Lato",
    textFont: "Lato",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
    `,
  };
}
