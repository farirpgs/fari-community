import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Trophy SRD",
    description:
      "Build your own rules-light, risk-heavy games rooted in the Trophy SRD.",
    links: {},
    headingFont: "Raleway",
    textFont: "Source Sans Pro",
    headingUppercase: true,
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap');
    `,
  };
}
