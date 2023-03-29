import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate System Toolkit",
    description:
      "This expansion for the Fate Core System contains tons of flexible, hackable and adaptable rules that fits any world you are trying to play in.",
    links: {
      "itch.io": "https://evilhat.itch.io/fate-system-toolkit",
      driveThru:
        "https://www.drivethrurpg.com/product/119385/Fate-System-Toolkit",
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
