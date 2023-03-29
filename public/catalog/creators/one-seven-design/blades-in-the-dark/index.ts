import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Blades in the Dark",
    description:
      "Use the great Blades in the Dark SRD by John Harper to make your own Forged in the Dark game",
    links: {
      Website: "https://www.bladesinthedark.com/",
      itch: "https://johnharper.itch.io/blades-in-the-dark",
    },
    headingFont: "Zilla Slab",
    textFont: "Zilla Slab",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    `,
  };
}
