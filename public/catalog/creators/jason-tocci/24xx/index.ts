import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "24XX",
    description: "A lo-fi sci-fi RPG SRD.",
    links: {
      itchIo: "https://jasontocci.itch.io/24xx",
      driveThru:
        "https://www.drivethrurpg.com/product/335307/24XX-SRD?manufacturers_id=17901",
    },
  };
}
