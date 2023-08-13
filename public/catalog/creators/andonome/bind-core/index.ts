import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "BIND: Core Rules",
    description: "Grundge Fantasy",
    license: "GPL",
    links: {
      "Source Code": "https://gitlab.com/bindrpg/core",
      "Itch": "https://bindrpg.itch.io/bind",
      "DriveThruRPG": "https://www.drivethrurpg.com/product/165299/BIND"
    },
  };
}
