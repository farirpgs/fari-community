import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fight Card System",
    description:
      "A system/design guide for resolving fights via a two player trick taking game.",

    links: {
      "itch.io": "https://ratwavegamehouse.itch.io/the-fight-card-system",
    },
    headingFont: "Bebas Neue",
    headingUppercase: true,

    css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    `,
  };
}
