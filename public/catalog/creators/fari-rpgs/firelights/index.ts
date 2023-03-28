import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Firelights",
    description: "An SRD for creating Firelights games",
    headingFont: "Ramaraja",
    textFont: "Hind Madurai",
    css: `
        @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Ramaraja&display=swap');
    `,
  };
}
