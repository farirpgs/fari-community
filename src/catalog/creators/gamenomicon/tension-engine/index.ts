import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Tension Engine",
    description:
      "Toolkit to wind your own games with tension, creating cinematic pacing of the environment and exciting breaks.",
    license: "CC BY 4.0",
    links: {
      "itch.io": "https://gamenomicon.itch.io/tension-engine-srd",
    },
    headingFont: "Oswald",
    headingUppercase: true,
    textFont: "Quattrocento",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap');
    `,
  };
}
