import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Stunts",
    description:
      "A very detailed list of stunts to help you get started with Fate character creation quickly.",
    css: `
article h6{
  margin:0;
}
`,
  };
}
