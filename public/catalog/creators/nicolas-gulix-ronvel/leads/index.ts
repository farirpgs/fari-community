import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "LEADS",
    description: "Journaling while following leads",
    license: "CC BY 4.0",
    links: {
      "SRD page": "https://gulix.itch.io/leads",
      "Leads Games collection": "https://itch.io/c/1611023/leads-games",
      "After the Accident": "https://gulix.itch.io/after-the-accident"
    },
    headingFont: "Abril Fatface",
    textFont: "Lato",
    css: `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Abril+Fatface&display=swap');
    `,
  };
}
