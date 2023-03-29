import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Firelights",
    description: "An SRD for creating Firelights games",
    license: "CC BY 4.0",
    links: {
      "Game PDF": "https://firelights.farirpgs.com/game",
      "Firelights Games": "https://firelights.farirpgs.com/games",
    },
    headingFont: "Ramaraja",
    textFont: "Hind Madurai",
    css: `
        @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Ramaraja&display=swap');
    `,
  };
}
