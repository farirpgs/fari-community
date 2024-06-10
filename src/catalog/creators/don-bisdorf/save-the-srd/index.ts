import { type IProjectData } from "src/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "SAVE System",
    description:
      "The SAVE System is a framework for building quick-playing, low-prep, story-focused RPGs.",
    links: {
      "itch.io": "https://dbisdorf.itch.io/the-save-system",
    },
  };
}
