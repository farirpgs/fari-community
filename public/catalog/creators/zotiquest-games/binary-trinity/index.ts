import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Binary Trinity",
    description:
      "A pub RPG micro-system",
    license: "CC BY SA 4.0",
    links: {
      "itch.io": "https://zeruhur.itch.io/binary-trinity",
    }
};
}