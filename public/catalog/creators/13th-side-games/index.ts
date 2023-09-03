import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "The Murk",
    description:
      "Dieselpunk WW1 Cosmic Horror",
    license: "CC BY 4.0",
    links: {
     
    },
    headingFont: "Viner Hand",
    textFont: "Lato",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    @import url("https://fonts.cdnfonts.com/css/cheddar-gothic-stencil");
    article h1 {
        font-family: "Viner Hand", sans-serif !important;
        font-size: 4rem;
    }
    article h2 {
        font-family: "Viner Hand", sans-serif !important;
        background: #000; 
        color: #fff !important;
        padding: 1rem;
    }
    article h3 {
        font-family: "Viner Hand", sans-serif !important;
    }
	article h4 {
		font-family: "Viner Hand", sans-serif !important;
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
