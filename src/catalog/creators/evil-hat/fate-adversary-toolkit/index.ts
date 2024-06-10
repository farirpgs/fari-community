import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Adversary Toolkit",
    description:
      "What ever the genre, this book gives you the tools you need to create great obstacles for you stories.",
    links: {
      "itch.io": "https://evilhat.itch.io/fate-adversary-toolkit",
      driveThru:
        "https://www.drivethrurpg.com/product/219203/Fate-Adversary-Toolkit",
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
