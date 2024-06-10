import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Core",
    description:
      "A Complete guide to Fate with rules, examples and tips. A most if your thirst for knowledge was not satisfied with Fate Condensed.",
    links: {
      "itch.io": "https://evilhat.itch.io/fate-core",
      driveThru: "https://www.drivethrurpg.com/product/114903/Fate-Core-System",
    },
    css: `
@font-face {
  font-family: "fate";
  src: url("/fonts/FateCore.ttf");
}
article fate {
  font-family: fate;
} 
`,
  };
}
