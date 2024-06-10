import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Guided by the Sun",
    description:
      "A GM-less, card-based system, where players tell the story of a protagonist undertaking a journey and making friends along the way.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://aryl-ether.itch.io/guided-by-the-sun",
    },
    headingFont: "Grenze Gotisch",
    textFont: "Libre Baskerville",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@300;400;500;700&family=Libre+Baskerville:wght@400;700&display=swap');
    
    `,
  };
}
