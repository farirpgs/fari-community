import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Fate Condensed",
    description:
      "The latest version of the Fate System. Compact, stand-alone and streamlined for clarity and ease of reference.",
    links: {
      "itch.io": "https://evilhat.itch.io/fate-condensed",
      driveThru: "https://www.drivethrurpg.com/product/302571/Fate-Condensed",
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
