import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Push",
    description: "A story-first, push-your-luck system for your games",
    license: "CC BY 4.0",
    links: {
      itch: "https://capacle.itch.io/push",
    },
    headingFont: "Text Me One",
    textFont: "Barlow Semi Condensed",
    css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed&family=Text+Me+One&display=swap');
    `,
    headingUppercase: true,
  };
}
