import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Breathless",
    description: "An SRD for creating Breathless games",
    links: {
      "Breathless PDF": "https://breathless.farirpgs.com/game",
      "Breathless SRD PDF": "https://breathless.farirpgs.com/srd",
      "Breathless Games": "https://breathless.farirpgs.com/games",
    },
    headingFont: "Cheddar Gothic Stencil",
    textFont: "Lato",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Latodisplay=swap');
    @import url("https://fonts.cdnfonts.com/css/cheddar-gothic-stencil");
    article h1 {
        font-family: "Cheddar Gothic Stencil", sans-serif !important;
        font-size: 4rem;
    }
    article h2 {
        font-family: "Cheddar Gothic Stencil", sans-serif !important;
        background: #000; 
        color: #fff !important;
        padding: 1rem;
    }
    article h3 {
        font-family: "Cheddar Gothic Stencil", sans-serif !important;
    }
    article blockquote {
        border-color: #000;
    }
    article h2 .anchor {
        color: #fff !important;
    }
    `,
  };
}
