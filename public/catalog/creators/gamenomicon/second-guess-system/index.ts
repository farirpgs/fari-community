import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Second Guess System",
    description: "Power your solo role-playing games.",
    links: {
      itchIo: "https://gamenomicon.itch.io/second-guess-system-srd",
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
