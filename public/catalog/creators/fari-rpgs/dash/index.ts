import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Dash",
    description:
      "A print friendly & condensed version of the Charge RPG system.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://fari-rpgs.itch.io/dash",
    },
    headingFont: "Oswald",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    `,
  };
}
