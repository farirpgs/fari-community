import type { IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "GIST!",
    description: "Rules-light generic 2d6 RPG.",
    license: "CC BY SA 4.0",
    links: {
      "itch.io": "https://zeruhur.itch.io/gist",
    },
    headingFont: "Noto",
    textFont: "Noto",
    css: `
    @import url('https://fonts.googleapis.com/css?family=Noto Sans:400,400i,700,700i');
    article p {
        font-family: 'Noto Sans', serif !important;
    }
    article h1, h2, h3, h4, h5, h6 {
    }
    `,
  };
}
