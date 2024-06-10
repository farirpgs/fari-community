import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Charge SRD",
    description: "An SRD to make action packed RPGs with forward momentum.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://fari-rpgs.itch.io/charge-srd",
    },
    headingFont: "Oswald",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    `,
  };
}
