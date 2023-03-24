import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Push",
    description: "A story-first, push-your-luck system for your games",
    links: {
      itch: "https://capacle.itch.io/push",
    },
  };
}
