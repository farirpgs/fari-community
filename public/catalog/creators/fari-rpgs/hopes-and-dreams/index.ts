import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Hopes & Dreams",
    description: "Make your own game ignited by Hopes & Dreams.",
    links: {
      itchIo: "https://fari-rpgs.itch.io/hopes-and-dreams-srd",
    },

    headingFont: "Poppins",
    textFont: "Poppins",

    css: `
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      article h2{
          text-transform: uppercase !important;
          background: #000;
          color: #fff;
          padding: .5rem 1rem;
          margin-bottom: 0 !important;
      }
      article h2 .anchor{
          color: #fff !important;
      }
      article h3 {
          font-style: italic;
          font-weight: 900;
      }
      article blockquote p {
          font-style: italic !important;
          font-weight: bold !important;
      }
`,
  };
}
