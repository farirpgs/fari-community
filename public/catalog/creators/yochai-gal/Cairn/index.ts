import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Cairn",
    description: "Forest fantasy based on Into The Odd and Knave",
    license: "CC BY SY 4.0",
    links: {
      "itch.io": "https://yochaigal.itch.io/",
      driveThru:
        "https://www.drivethrurpg.com/product/330809/Cairn",
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
