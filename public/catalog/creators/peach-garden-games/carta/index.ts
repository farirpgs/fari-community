import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Carta",
    description: "A Toolkit For Making Exploration Games.",
    links: {
      itchIo: "https://peachgardengames.itch.io/carta-srd",
    },
    headingFont: "Architects Daughter",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
    `,
  };
}
