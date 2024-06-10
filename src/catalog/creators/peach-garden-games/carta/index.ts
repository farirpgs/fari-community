import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Carta",
    description: "A Toolkit For Making Exploration Games.",
    license: "CC BY 3.0",
    links: {
      "itch.io": "https://peachgardengames.itch.io/carta-srd",
    },
    headingFont: "Architects Daughter",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
    `,
  };
}
