import { IProjectData } from "public/catalog/loader";

export default function getData(): IProjectData {
  return {
    name: "Second Guess System",
    description: "Power your solo role-playing games.",
    links: {
      itchIo: "https://gamenomicon.itch.io/second-guess-system-srd",
    },
  };
}
