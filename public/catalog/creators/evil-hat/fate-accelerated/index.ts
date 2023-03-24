import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Accelerated",
    description:
      "If you want to get started quickly, this dialed-down version of Fate Core will get you going in no time.",
    links: {
      itchIo: "https://evilhat.itch.io/fate-accelerated",
      driveThru:
        "https://www.drivethrurpg.com/product/114902/Fate-Accelerated-Edition-o-A-Fate-Core-Build",
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
