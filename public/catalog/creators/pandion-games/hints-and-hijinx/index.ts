import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Hints and Hijinx",
    description:
      "A purpose-built solo mystery system that's easy to design mystery games for, & puts the power of deduction in the hands of the player.",

    license: "CC BY 4.0",
    links: {
      "itch.io": "https://pandiongames.itch.io/hintsandhijinx",
      "website": "https://www.hintsandhijinx.com",
    },
  };
}
