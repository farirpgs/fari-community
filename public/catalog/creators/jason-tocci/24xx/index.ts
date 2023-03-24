import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "24XX",
    description: "A lo-fi sci-fi RPG SRD.",
    links: {
      itchIo: "https://jasontocci.itch.io/24xx",
      driveThru:
        "https://www.drivethrurpg.com/product/335307/24XX-SRD?manufacturers_id=17901",
    },

    headingFont: "Barlow Condensed",
    textFont: "Roboto",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Barlow_Condensed&display=swap');
    article .rolling-table-2 {
      columns: 2;
      column-gap: .5rem;
    }
    article .rolling-table-5 {
      columns: 5;
      column-gap: .5rem;
    }
    `,
  };
}
