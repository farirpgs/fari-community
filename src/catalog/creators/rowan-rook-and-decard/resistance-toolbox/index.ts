import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Resistance Toolbox",
    description:
      "Make your own games of desperate struggle using the Resistance System, the core rules that power the Spire RPG.",
    license: "CC BY 4.0",
    links: {},
    headingFont: "Special Elite",
    textFont: "Urbanist",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;700&display=swap');
    `,
  };
}
